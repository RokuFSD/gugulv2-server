"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpApiMock = exports.IpApiService = void 0;
import("node-fetch");
class IpApiService {
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
exports.IpApiService = IpApiService;
class IpApiMock {
    async getLocation() {
        return {
            country_name: "United States",
            region: "California",
            city: "San Francisco",
            country: "us",
        };
    }
}
exports.IpApiMock = IpApiMock;
