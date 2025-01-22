import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validation'


const router = Router();

router.post('/regoster', userController.createUserController)

export default router