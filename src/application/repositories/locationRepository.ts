type LocationReturn = {
  city: string;
  region: string;
  country_name: string;
  country: string;
};

export interface ILocationRepository {
  getLocation(): Promise<LocationReturn>;
}

export default class LocationRepository implements ILocationRepository {
  constructor(private readonly repository: ILocationRepository) {
    this.repository = repository;
  }

  async getLocation() {
    return await this.repository.getLocation();
  }
}
