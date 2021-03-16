var routes = require("express").Router();
var productCtrl = require("../controllers/ProductController");
// :3000/api/product
routes.get("/", productCtrl.getAll);

routes.get("/:id", productCtrl.getProduct);

routes.post("/",  productCtrl.add);

// :3000/api/category/5
routes.put("/:id", productCtrl.update);
// :3000/api/category/5
routes.delete("/:id", productCtrl.delete);


module.exports = routes;