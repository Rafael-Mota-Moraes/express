export default class Home {
  renderHome(req, res) {
    res.render("pages/index");
  }

  calcularMedia(req, res) {
    const n1 = req.params["nota1"];
    const n2 = req.params["nota2"];

    const media = (parseFloat(n1) + parseFloat(n2)) / 2;

    res.render("pages/media", { media: media });
  }
}
