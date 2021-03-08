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
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../request");
const querystring = require('querystring');
class PhotosController {
    //#region Api to get photos in selected album
    getPhotosByAlbumName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let title = req.query.albumId;
            const requestPhotos = request_1.albumRequest('get', 'https://jsonplaceholder.typicode.com/photos?albumId=' + title);
            res.send((yield requestPhotos).data);
        });
    }
}
exports.default = PhotosController;
//# sourceMappingURL=PhotoController.js.map