import Pool from '../dbconfig/dbconnector';
import {Albums} from '../classes/Albums';
import {Photos} from '../classes/Photos'
import {albumRequest} from '../request'
const querystring = require('querystring');

class GetRecordsController {

    //#region  Api to get list of saved photos from Database
    public async GetSavedPhotoList(req, res) {
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
    #endregion    
}
export default GetRecordsController;