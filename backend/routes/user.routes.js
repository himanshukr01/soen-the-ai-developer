import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validator'

// import userController from '../controllers/user.controller.js';




const router = Router();
router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid mail address'),
    body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long'),
    userController.createUserController)

    router.post('/login',
        body('email').isEmail().withMessage('Email must be a valid mail address'),
        body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long'),
        userController.loginController)

export default router;


