"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _endregion;
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnector_1 = __importDefault(require("../dbconfig/dbconnector"));
const querystring = require('querystring');
class GetRecordsController {
    constructor() {
        _endregion.set(this, void 0);
    }
    //#region  Api to get list of saved photos from Database
    GetSavedPhotoList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM Photos";
                const { rows } = yield client.query(sql);
                const albums = rows;
                client.release();
                res.send(albums);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
_endregion = new WeakMap();
exports.default = GetRecordsController;
//# sourceMappingURL=GetrecordsController.js.map