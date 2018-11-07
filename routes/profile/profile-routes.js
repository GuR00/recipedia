const router=require('express').Router();
const passport=require("passport");

// Profile Routes

router.get("/profile/logged",ensureAuthenticated 
)





// Helper functions
 function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()){
      return next();
    }
      
    else{
      res.redirect("/login")
    }
      
  }