const router = require("express").Router();
const Oauth=require("./oauth");

router.use(Oauth);

module.exports=router;