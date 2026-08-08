"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_console_1 = require("node:console");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.get("/", (_, resp) => {
    return resp.status(200).json({ message: "ok" });
});
app.listen(PORT, () => {
    (0, node_console_1.log)(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map