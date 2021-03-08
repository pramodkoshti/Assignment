"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetrecordsController_1 = __importDefault(require("../controllers/GetrecordsController"));
const router = express_1.Router();
const getRecordsController = new GetrecordsController_1.default();
router.use('/', getRecordsController.GetSavedPhotoList);
exports.default = router;
//# sourceMappingURL=GetRecordsRouter.js.map