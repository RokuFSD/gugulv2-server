/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISearchRepository {
  search(params: { [key: string]: string }): Promise<{ [key: string]: any }>;
}

export default class searchRepository implements ISearchRepository {
  constructor(private readonly repository: ISearchRepository) {
    this.repository = repository;
  }

  async search(params: { [key: string]: string }) {
    return await this.repository.search(params);
  }
}
