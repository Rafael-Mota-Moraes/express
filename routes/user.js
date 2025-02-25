import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { User } from "../models/User.js";
const router = Router();

const userController = new UserController();

router.post("/create-user", async (req, res) => {
  try {
    const { name, email } = req.body;
    await userController.createUser(name, email);
    res.redirect("/");
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).send("Erro no cadastro");
  }
});

router.post("/delete-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    userController.destroyUser(userId, res);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).send("Erro ao deletar usuário");
  }
});

export default router;
