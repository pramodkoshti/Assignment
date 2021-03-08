import express, { Router } from 'express';
import AlbumsController from '../controllers/AlbumsController';

const router = Router();
const albumsController = new AlbumsController();

router.use('/', albumsController.getAlbums);

export default router;