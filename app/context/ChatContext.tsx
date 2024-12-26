import { createContext, useState, useContext } from "react";

const EventContext = createContext({ event: null as any, setEvent: null as any });

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return <EventContext.Provider value={{ event, setEvent }}>{children}</EventContext.Provider>;
};

export const useEvent = () => useContext(EventContext);
