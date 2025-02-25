import { User } from "../models/User.js";

export default class Home {
  async renderHome(req, res) {
    try {
      const users = await User.findAll();
      res.render("pages/index", { users });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).send("Erro interno no servidor");
    }
  }

  calcularMedia(req, res) {
    const n1 = req.params["nota1"];
    const n2 = req.params["nota2"];

    const media = (parseFloat(n1) + parseFloat(n2)) / 2;

    res.render("pages/media", { media: media });
  }
}
