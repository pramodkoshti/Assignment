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
const console = require('console');
const querystring = require('querystring');
class AlbumsController {
    //#region Api call for getting Album List
    getAlbums(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestAlbum = request_1.albumRequest('get', 'https://jsonplaceholder.typicode.com/albums');
            // const rawResult = JSON.parse((await requestAlbum).data);
            // let objArray : Albums[] = [];
            // let titleOfAlbum : string[] = [];
            // let copy = Object.assign(objArray,rawResult);
            // objArray.forEach(item => {
            //     titleOfAlbum.push(`${item.title}`);
            // })
            res.send((yield requestAlbum).data);
        });
    }
}
exports.default = AlbumsController;
//# sourceMappingURL=AlbumsController.js.map