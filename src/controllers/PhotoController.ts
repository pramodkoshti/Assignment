import Pool from '../dbconfig/dbconnector';
import {Albums} from '../classes/Albums';
import {Photos} from '../classes/Photos'
import {albumRequest} from '../request'
const querystring = require('querystring');

class PhotosController {    
    //#region Api to get photos in selected album
    public async getPhotosByAlbumName(req, res) {
        let title = req.query.albumId;                   
        const requestPhotos = albumRequest('get','https://jsonplaceholder.typicode.com/photos?albumId=' + title);                               
        res.send((await requestPhotos).data);
    }        
    //#endregion 
}
export default PhotosController;