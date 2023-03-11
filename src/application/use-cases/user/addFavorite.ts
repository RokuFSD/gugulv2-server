import UserRepository from "../../repositories/userRepository";
import { Card } from "../../../entities/card";

export default function addFavorite(
  userId: string,
  favorite: Card,
  userRepository: UserRepository
) {
  return userRepository.addFavorite(userId, favorite);
}
