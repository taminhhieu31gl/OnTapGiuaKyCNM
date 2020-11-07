import express from 'express';
import { them,getDS, xoa } from '../controllers/controller.js';

const router = express.Router();
router.post('/create', them);
router.get('/get', getDS);
router.post('/delete', xoa);

export default router;