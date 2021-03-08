"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SavePhotoController_1 = __importDefault(require("../controllers/SavePhotoController"));
const router = express_1.Router();
const savePhotoController = new SavePhotoController_1.default();
router.use('/', savePhotoController.getPhotoDertails);
exports.default = router;
//# sourceMappingURL=SavePhotoRouter.js.map