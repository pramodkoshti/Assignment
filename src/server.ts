import express, { Application, Router } from 'express';
var bodyParser = require('body-parser')
import albumsRouter from './routers/AlbumsRouter';
import photosRouter from './routers/PhotosRouter';
import getRecordsRouter from './routers/GetRecordsRouter';
import savePhotoRouter from './routers/SavePhotoRouter';
import pool from './dbconfig/dbconnector';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:false }));
        this.app.use(bodyParser.json({ limit: '1mb' })); 
    }

    private dbConnect() {
        pool.connect(function (err :any, client: any, done:any) {
            if (err) throw new Error("Not Connected");
            console.log('Database Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/albums', albumsRouter);
        this.app.use('/photos', photosRouter);
        this.app.use('/GetRecords',getRecordsRouter);        
        this.app.use('/Save',savePhotoRouter);
    }
    

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;