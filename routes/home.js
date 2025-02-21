import { Router } from "express";
import HomeController from "../controllers/Home.js";

const router = Router();

const homeController = new HomeController();

router.get("/", homeController.renderHome);

router.get("/media/:nota1/:nota2", homeController.calcularMedia);

export default router;
