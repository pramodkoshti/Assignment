import Pool from '../dbconfig/dbconnector';
import {Photos} from '../classes/Photos'
import {albumRequest} from '../request'
import { raw } from 'express';
const querystring = require('querystring');

class GetRecordsController {

    //#region  Api to get list of saved photos from Database
    public async SavePhotoToDatabase(req, res) {
        try {  
                       
            const client = await Pool.connect();
            const sql = "SELECT * FROM Photos";
            const { rows } = await client.query(sql);
            const albums = rows;
            client.release();            
            res.send(albums);
        } catch (error) {
            res.status(400).send(error);
        }
    }    

    public async getPhotoDertails(req, res) {
        let albumId = req.query.albumId;   
        let id = req.query.id;                   
        const requestPhotos = albumRequest('get','https://jsonplaceholder.typicode.com/photos?albumId=' + albumId + '&id=' + id);
        let jsonResult = JSON.parse((await requestPhotos).data);                

        try {  
                       
            const client = await Pool.connect();
            const sql = "INSERT INTO Photos (id, albumId, title, url, thumbnails) VALUES(" + `${jsonResult[0]['id']},` + `${jsonResult[0]['albumId']},`
             + `'${jsonResult[0]['title']}',` + `'${jsonResult[0]['url']}',`
            + `'${jsonResult[0]['thumbnailUrl']}'` + ");";
            console.log(sql);
            const { rows } = await client.query(sql);                    
        } catch (error) {
            res.status(400).send(error);
        }       
        res.send('Photo Saved in database');
    }
    #endregion    
}
export default GetRecordsController;