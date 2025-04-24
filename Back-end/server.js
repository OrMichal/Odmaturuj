const Express = require("express");
const cors = require("cors");

const App = Express();
App.use(cors());

App.listen(3000, () => console.log("hello on port: ", 3000));