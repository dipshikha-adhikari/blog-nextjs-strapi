// const Environment = require("jest-environment-jsdom").default;
import { Environment } from "jest-environment-jsdom";
module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoder = TextDecoder;
    this.global.Response = Response;
    this.global.Request = Request;
  }
};
