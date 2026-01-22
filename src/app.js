import express from "express";
import textRoutes from "./routes/text.routes.js";
import codeRoutes from "./routes/code.routes.js";
import imageRoutes from "./routes/image.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();
app.use(express.json());

app.use("/api/text", textRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/chat", chatRoutes);

export default app;
