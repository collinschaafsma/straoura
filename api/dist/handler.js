"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_serverless_express_1 = require("aws-serverless-express");
const app_1 = __importDefault(require("./app"));
// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
    // 'application/javascript',
    'application/json',
    // 'application/octet-stream',
    // 'application/xml',
    // 'font/eot',
    // 'font/opentype',
    // 'font/otf',
    // 'image/jpeg',
    // 'image/png',
    // 'image/svg+xml',
    // 'text/comma-separated-values',
    // 'text/css',
    // 'text/html',
    // 'text/javascript',
    'text/plain',
    'text/text',
];
const server = aws_serverless_express_1.createServer(app_1.default, undefined, binaryMimeTypes);
exports.http = (event, context) => aws_serverless_express_1.proxy(server, event, context);
//# sourceMappingURL=handler.js.map