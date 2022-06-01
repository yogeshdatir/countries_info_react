// src/mocks/server.js
import { setupServer } from "msw/node";
import { allCountriesHandler, successHandlers } from "./successHandlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...successHandlers, ...allCountriesHandler);
