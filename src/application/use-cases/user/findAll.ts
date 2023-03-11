import UserRepository from "../../repositories/userRepository";

export default async function findAll(userRepository: UserRepository) {
  return await userRepository.getAll();
}
