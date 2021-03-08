import express, { query, Router } from 'express';
import PhotosController from '../controllers/PhotoController';

const router = Router();
const photosController = new PhotosController();

router.use('/', photosController.getPhotosByAlbumName)


export default router;