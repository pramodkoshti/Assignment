"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PhotoController_1 = __importDefault(require("../controllers/PhotoController"));
const router = express_1.Router();
const photosController = new PhotoController_1.default();
router.use('/', photosController.getPhotosByAlbumName);
exports.default = router;
//# sourceMappingURL=PhotosRouter.js.map