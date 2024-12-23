"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import "./App.css";
import { Input } from "@/components/ui/input";
import { useState } from "react";
type TextResponse = {
  text: string;
  user: string;
};
const Chatbox1: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<TextResponse[]>([]);

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const res = await fetch(
        `http://35.197.139.133:3000/d1b9e94b-4448-02cc-bb43-4c2ba12fa15c/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            userId: "user",
            roomId: `default-room-d1b9e94b-4448-02cc-bb43-4c2ba12fa15c`,
          }),
        }
      );
      return res.json() as Promise<TextResponse[]>;
    },
    onSuccess: (data) => {
      console.log(data);
      setMessages((prev) => [...prev, ...data]);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message immediately to state
    const userMessage: TextResponse = {
      text: input,
      user: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    mutation.mutate(input);
    setInput("");
  };
  return (
    <div className="flex flex-col h-[calc(100vh_-_74px)] max-h-screen w-full">
      <div className="flex-1 min-h-0 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.user === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 text-white ${
                    message.user === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted-foreground text-white">
              No messages yet. Start a conversation!
            </div>
          )}
        </div>
      </div>

      <div className="border-t p-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
              disabled={mutation.isPending}
            />
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbox1;
