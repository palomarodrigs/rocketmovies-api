const { Router } = require("express");

const usersRouter = require("./users.routes");
const movieNotesRoutes = require("./notes.routes");
const movieTagsRoutes = require("./tags.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/movie_notes", movieNotesRoutes);
routes.use("/movie_tags", movieTagsRoutes);

module.exports = routes;
