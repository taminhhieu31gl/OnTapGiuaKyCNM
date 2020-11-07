import express from 'express';
import { them,getDS } from '../controllers/controller.js';

const router = express.Router();
router.post('/create', them);
router.get('/get', getDS);

export default router;