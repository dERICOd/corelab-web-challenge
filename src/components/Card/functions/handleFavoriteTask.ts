import { favoriteTask } from "../../../services/tasks";

export const handleFavoriteTask = async (id: string, isFavorite: boolean) => {
  await favoriteTask(id, !isFavorite);
  window.location.reload();
};
