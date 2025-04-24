const Express = require("express");
const cors = require("cors");
import AuthorController from "./controllers/AuthorController";

const App = Express();
App.use(cors());
App.use("/haha", AuthorController);

App.listen(3000, () => console.log("hello on port: ", 3000));