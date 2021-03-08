import Pool from '../dbconfig/dbconnector';
import {Albums} from '../../src/classes/Albums';
import {albumRequest} from '../request'
import { title } from 'node:process';
import { json } from 'express';
const console = require('console');
const querystring = require('querystring');

class AlbumsController {   
    
    //#region Api call for getting Album List
    public async getAlbums(req, res) {   
        const requestAlbum = albumRequest('get','https://jsonplaceholder.typicode.com/albums');        
        // const rawResult = JSON.parse((await requestAlbum).data);
        // let objArray : Albums[] = [];
        // let titleOfAlbum : string[] = [];
        // let copy = Object.assign(objArray,rawResult);

        // objArray.forEach(item => {
        //     titleOfAlbum.push(`${item.title}`);
        // })
        res.send((await requestAlbum).data);
    }
    //#endregion    
}

export default AlbumsController;