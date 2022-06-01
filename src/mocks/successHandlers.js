import { rest } from "msw";
import { searchByName } from "./mockResponses";

export const successHandlers = [
  // Handles a GET /user request
  rest.get("https://restcountries.com/v3.1/name/america", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchByName));
  }),
];

export const allCountriesHandler = [
  rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchByName));
  }),
];
