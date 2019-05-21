"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainController {
    index(req, res) {
        res.status(200).send({
            message: 'Hello World',
        });
    }
}
exports.MainController = MainController;
//# sourceMappingURL=main.js.map