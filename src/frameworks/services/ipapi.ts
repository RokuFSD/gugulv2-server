import("node-fetch");

export class IpApiService {
  async getLocation() {
    const location = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: {
        User: "nodejs-ipapi-v1.02",
      },
    });
    const { country_name, region, city, country } = await location.json();
    return {
      country_name,
      region,
      city,
      country: country.toLowerCase(),
    };
  }
}
//
// export class IpApiMock {
//   async getLocation() {
//     return {
//       country_name: "United States",
//       region: "California",
//       city: "San Francisco",
//       country: "us",
//     };
//   }
// }
