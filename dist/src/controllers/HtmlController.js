"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
let http = require('http');
var path = require('path');
class HtmlController {
    constructor() {
        //#region Api to get photos in selected album
        this.handleRequest = (request, response) => {
            fs.readFile(path.join(__dirname + '../../index.html'), null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write('Page is not available');
                }
                else {
                    response.write(data);
                }
                response.end();
            });
        };
        //#endregion 
    }
}
exports.default = HtmlController;
//# sourceMappingURL=HtmlController.js.map