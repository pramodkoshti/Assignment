"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HtmlController_1 = __importDefault(require("../controllers/HtmlController"));
const router = express_1.Router();
const htmlController = new HtmlController_1.default();
router.use('/', htmlController.handleRequest);
exports.default = router;
//# sourceMappingURL=GetHtmlRouter.js.map