import { setTaskColor } from "../../../services/tasks";

export const handleSetColorTask = async (id: string, color: string) => {
  await setTaskColor(id, color);
  window.location.reload();
};
