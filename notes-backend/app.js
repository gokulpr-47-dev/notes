import express, { json } from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Notes API");
});

app.use(errorHandler);

export default app;
