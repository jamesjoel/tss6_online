var routes = require("express").Router();
var categoryCtrl = require("../controllers/CategoryController");
// :3000/api/category/

routes.get("/", categoryCtrl.getAll);

routes.get("/:id", categoryCtrl.getCategory);

routes.post("/",  categoryCtrl.add);

// :3000/api/category/5
routes.put("/:id", categoryCtrl.update);
// :3000/api/category/5
routes.delete("/:id", categoryCtrl.delete);



module.exports = routes;