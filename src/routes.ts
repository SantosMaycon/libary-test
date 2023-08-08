import { Router } from "express";

const routes = Router();

// Book routes

// GET /books
// POST /books
// GET /books/:id
// PUT /books/:id
// DELETE /books/:id

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { routes };
