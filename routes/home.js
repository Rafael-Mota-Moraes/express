import { Router } from "express";
import HomeController from "../controllers/Home.js";

const router = Router();

const homeController = new HomeController();

router.get("/", homeController.renderHome);

export default router;
