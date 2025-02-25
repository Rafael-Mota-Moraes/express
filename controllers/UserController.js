import { sequelize } from "../database/config.js";
import { User } from "../models/User.js";
export class UserController {
  async initializeDatabase() {
    try {
      await sequelize.sync();
      console.log("Banco de dados sincronizado.");
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
    }
  }

  async createUser(name, email) {
    try {
      const user = await User.create({ name, email });
      console.log("Usuário criado:", user.toJSON());
      return user;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  async destroyUser(id, res) {
    await User.destroy({ where: { id: id } });
    res.redirect("/");
  }
}
