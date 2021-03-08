import express, { query, Router } from 'express';
import GetRecordsController from '../controllers/GetrecordsController';

const router = Router();
const getRecordsController = new GetRecordsController();

router.use('/', getRecordsController.GetSavedPhotoList);


export default router;