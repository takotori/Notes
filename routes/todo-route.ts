import express from 'express';
import {todoController} from '../controller/todo-controller';

const router = express.Router();

router.get("/", todoController.index);
router.post("/", todoController.save);

export const todoRoutes = router;
