import { ISearchRepository } from "../../repositories/searchRepository";

export default async function search(
  params: { [key: string]: string },
  searchRepository: ISearchRepository
) {
  return await searchRepository.search(params);
}
