const router = require("express").Router();
const usuario = require("../controllers/usuario-controller")

router.get("/find/:id", usuario.find);
router.get("/findAll", usuario.findAllUsers);
router.post("/create", usuario.createUser);
router.put("/update/:id", usuario.updateUser);
router.delete("/delete/:id", usuario.deleteUser);

module.exports = router;