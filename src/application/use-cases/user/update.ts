import UserRepository from "../../repositories/userRepository";

export default async function update(
  id: string,
  fields: { [p: string]: string },
  userRepository: UserRepository
) {
  return userRepository.update(id, fields);
}
