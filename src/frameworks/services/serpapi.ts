import config from "../../config/config";
// import serpApi from "../../mocks/serpApi";
// import vidSerp from "../../mocks/vidSerp";
// import newsSerp from "../../mocks/newsSerp";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(config.serpKey);

export class SerpApiService {
  async search(params: {
    [key: string]: string;
  }): Promise<{ [key: string]: any }> {
    // Review the docs for the reject method
    return new Promise((resolve, reject) => {
      function callback(data: { [key: string]: string }) {
        resolve(data);
      }

      search.json(params, callback);
    });
  }
}

// export class SerpApiMock {
//   async search(params: {
//     [key: string]: string;
//   }): Promise<{ [key: string]: any }> {
//     return new Promise((resolve) => {
//       switch (params.tbm) {
//         case "nws":
//           resolve(newsSerp);
//           break;
//         case "vid":
//           resolve(vidSerp);
//           break;
//         default:
//           resolve(serpApi);
//       }
//       resolve(serpApi);
//     });
//   }
// }
