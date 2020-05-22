const router = require("express").Router();
const UserController = require("../controllers/userController");
const authentication = require('../middlewares/authentication')

router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);
router.get("/", authentication, UserController.getDetailUser)

module.exports = router;
