"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("aws-serverless-express/middleware");
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
class App {
    constructor() {
        this.apiRoutes = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.apiRoutes.routes(this.app);
    }
    config() {
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.json());
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(middleware_1.eventContext());
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map