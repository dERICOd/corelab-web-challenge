import { CardNoteProps } from "../types/card";

export const getAllTasks = async () => {
  const response = await fetch("http://localhost:3333/task");
  const data = await response.json();

  return data.tasks;
};

export const createTask = async (
  newTask: Pick<CardNoteProps, "title" | "content" | "is_favorite">
) => {
  fetch("http://localhost:3333/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
};

export const deleteTask = async (taskId: string) => {
  fetch(`http://localhost:3333/task/${taskId}`, { method: "DELETE" });
};

export const favoriteTask = async (taskId: string, isFavorite: boolean) => {
  fetch(`http://localhost:3333/task/${taskId}/favorite`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ is_favorite: isFavorite }),
  });
};

export const setTaskColor = async (taskId: string, color: string) => {
  fetch(`http://localhost:3333/task/${taskId}/update-color`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color: color }),
  });
};

export const updateTask = async (
  taskId: string,
  update: Pick<CardNoteProps, "title" | "content">
) => {
  fetch(`http://localhost:3333/task/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  });
};
