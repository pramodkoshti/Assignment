"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlbumsController_1 = __importDefault(require("../controllers/AlbumsController"));
const router = express_1.Router();
const albumsController = new AlbumsController_1.default();
router.use('/', albumsController.getAlbums);
exports.default = router;
//# sourceMappingURL=AlbumsRouter.js.map