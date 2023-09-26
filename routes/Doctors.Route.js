const router = require("express").Router();
const Controller = require("../controllers/Doctors.Controller");

router.get("/read", Controller.readDoctors);

module.exports = router;
