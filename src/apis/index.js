import express from 'express';
import userRoute from './users/user.router';

const router = express.Router();

router.use('/users', userRoute);

export default router;