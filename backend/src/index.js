import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectBD } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import serviceRoutes from "./routes/service.route.js";
import formRoutes from "./routes/form.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const cors = require('cors');

app.use(cors({
    origin: "https://comm-2.onrender.com",
    credentials: true,
}
))

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/forms", formRoutes);
connectBD();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
});
