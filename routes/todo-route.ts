import express from 'express';
import {todoController} from '../controller/todo-controller';

const router = express.Router();

router.get("/", todoController.index);
router.post("/", todoController.save);
router.get("/:id", todoController.edit);
router.post("/return", todoController.save);
router.post("/:id", todoController.update);
router.post("/:id/return", todoController.update);

export const todoRoutes = router;
