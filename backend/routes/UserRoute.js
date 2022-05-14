import express from 'express';
import { getAllUser, getUserById, createNewUser, updateUser, destroyUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getAllUser);
router.get('/users/:id', getUserById);
router.post('/users', createNewUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', destroyUser);

export default router;
