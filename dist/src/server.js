"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
const AlbumsRouter_1 = __importDefault(require("./routers/AlbumsRouter"));
const PhotosRouter_1 = __importDefault(require("./routers/PhotosRouter"));
const GetRecordsRouter_1 = __importDefault(require("./routers/GetRecordsRouter"));
const SavePhotoRouter_1 = __importDefault(require("./routers/SavePhotoRouter"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
        this.app = express_1.default();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json({ limit: '1mb' }));
    }
    dbConnect() {
        dbconnector_1.default.connect(function (err, client, done) {
            if (err)
                throw new Error("Not Connected");
            console.log('Database Connected');
        });
    }
    routerConfig() {
        this.app.use('/albums', AlbumsRouter_1.default);
        this.app.use('/photos', PhotosRouter_1.default);
        this.app.use('/GetRecords', GetRecordsRouter_1.default);
        this.app.use('/Save', SavePhotoRouter_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map