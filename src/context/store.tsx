import React, { createContext, useEffect, useState } from "react";
import { getAllTasks } from "../services/tasks";
import { CardNoteProps } from "../types/card";

interface storeContextType {
  cardNotes: CardNoteProps[];
  setCardNotes: React.Dispatch<React.SetStateAction<CardNoteProps[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const StoreContext = createContext<storeContextType>(
  {} as storeContextType
);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardNotes, setCardNotes] = useState<CardNoteProps[]>([]);
  const [search, setSearch] = useState<string>("");

  const loadContent = async () => {
    const response = await getAllTasks();

    setCardNotes(response);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <StoreContext.Provider
      value={{ cardNotes, setCardNotes, search, setSearch }}
    >
      {children}
    </StoreContext.Provider>
  );
};
