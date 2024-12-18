import express from "express";
import bodyParser from 'body-parser';
import { engine } from "express-handlebars";
import path from "path";
import router from "./routes";

const app = express();
app.engine("handlebars", engine());

app.use(bodyParser.json());


app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));


app.use((req, res, next) => {
  next();
  if (res.statusCode === 404) {
    res.render("erreur", { code: 404, message: "Page non trouvée" });
  }
  if (res.statusCode === 500) {
    res.render("erreur", { code: 500, message: "Erreur serveur" });
  }
});
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Serveur en cours d’exécution sur http://localhost:${PORT}`),
);

app.use(router);

app.use('/', express.static(path.join(__dirname, '../assets')))
