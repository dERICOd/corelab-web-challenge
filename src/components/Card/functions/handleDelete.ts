import { deleteTask } from "../../../services/tasks";

export const handleDelete = async (id: string) => {
  await deleteTask(id);
  window.location.reload();
};
