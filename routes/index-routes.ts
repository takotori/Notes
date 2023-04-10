import express from 'express';
import {indexController} from '../controller/index-controller';

const router = express.Router();

router.get("/", indexController.index);
router.post("/toggleTheme", indexController.toggleTheme)
router.post("/orderBy", indexController.orderBy)
router.post("/filterCompleted", indexController.filterCompleted)

export const indexRoutes = router;
