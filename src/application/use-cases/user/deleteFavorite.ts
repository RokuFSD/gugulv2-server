import UserRepository from "../../repositories/userRepository";

export default function deleteFavorite(
  userId: string,
  favoriteId: string,
  userRepository: UserRepository
) {
  return userRepository.deleteFavorite(userId, favoriteId);
}
