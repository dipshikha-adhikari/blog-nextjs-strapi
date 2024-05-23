import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Establish API mocking before all tests.
//eslint-disable-next-line
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
//eslint-disable-next-line
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
//eslint-disable-next-line
afterAll(() => server.close());
