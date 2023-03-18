"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerpApiService = void 0;
const config_1 = __importDefault(require("../../config/config"));
// import serpApi from "../../mocks/serpApi";
// import vidSerp from "../../mocks/vidSerp";
// import newsSerp from "../../mocks/newsSerp";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(config_1.default.serpKey);
class SerpApiService {
    async search(params) {
        // Review the docs for the reject method
        return new Promise((resolve, reject) => {
            function callback(data) {
                resolve(data);
            }
            search.json(params, callback);
        });
    }
}
exports.SerpApiService = SerpApiService;
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
