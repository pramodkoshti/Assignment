import express, { query, Router } from 'express';
import SavePhotoController from '../controllers/SavePhotoController';

const router = Router();
const savePhotoController = new SavePhotoController();

router.use('/', savePhotoController.getPhotoDertails)


export default router;