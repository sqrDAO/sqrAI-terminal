import { NextResponse } from "next/server";

export async function DELETE(request) {
    if (request.method !== "DELETE") {
        // Respond with a 405 status code for unsupported methods
        return NextResponse.json(
            { message: "Method not allowed" },
            { status: 405 }
        );
    }
    const url = request.url;
    const id = url.split("/").pop(); // Extract the dynamic `id`
    if (!id) {
        // Respond with a 400 status code for missing ID
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    if (!session) {
        return new Response(
            JSON.stringify({ error: "Unauthorized: Session is not valid" }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
    try {
        const res = await fetch(
            `${process.env.API_URL}/${process.env.NEXT_PUBLIC_AGENTID}/knowledge?memoryId=${id}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                cache: "no-cache",
            }
        );
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();

        return NextResponse.json({ data: data });
    } catch (error) {
        return NextResponse.error();
    }
}