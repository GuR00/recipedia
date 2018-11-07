const path = require("path");
const router = require("express").Router();
const OauthRoutes = require("./login");

router.use(OauthRoutes);

module.exports=router;