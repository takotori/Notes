import express from 'express';
import {indexController} from '../controller/index-controller';

const router = express.Router();

router.get("/", indexController.index);
router.post("/toggleTheme", indexController.toggleTheme)

export const indexRoutes = router;
