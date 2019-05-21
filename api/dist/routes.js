"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./controllers/main");
class Routes {
    constructor() {
        this.mainController = new main_1.MainController();
    }
    routes(app) {
        app.route('/')
            .get(this.mainController.index);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map