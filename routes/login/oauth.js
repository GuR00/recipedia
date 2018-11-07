const router=require('express').Router();
const passport=require("passport");
const User=require("../../models/user");


// Routes for Google OAuth 
router.get('/login/google',function(req, res, next) { console.log('hi'); next(); },
  passport.authenticate('google', { scope: ['profile'] }));
// Callback route for Google after Authentication 
router.get('/login/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      // res.send(req.user.id)
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/profile');
      } else {
          res.redirect('http://localhost:3000/profile');  
      }
  });
  // Route for Twitter OAuth
  router.get("/login/twitter", passport.authenticate("twitter"));

  // Callback Route for Twitter after Authentication
  router.get('/login/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('hello');
    res.redirect("/profile");
  });

  router.get("/profile", ()=>{
      if(req.isAuthenticated()){
        return res.render("/profile")
      }
      else {
        res.render("You are not logged in")
      }
  })

  router.get('/loggedin', function(req, res) {

    if (req.isAuthenticated()) {
      var userData={
        name:req.user.username,
        id:req.user.id
      }
      return res.json(userData);
    }
  })
  // Favorites Route to post favorites
  router.post("/login/favs",function(req,res){
    var id=req.user.id;
    console.log(id);
    console.log(req.body.recipe);
    console.log("^^^ That should be the mongo ID of the user")
    if(req.isAuthenticated()){
      User.findOneAndUpdate({_id:id},{$push:{favorite:req.body.recipe}})
      .then( user=>{
        console.log("this is the callback below")
        console.log(user)
        
      }).catch(err => {
        console.log("Error updating the user");
        console.log(err);
        req.sendStatus(500);
      })
    } else {
      console.log("Not logged in");
      res.sendStatus(403);
    }
   
  })
  
  // Favorites Api pull
  router.get("/login/favs/api",(req,res)=>{
    if(req.isAuthenticated()){
      User.findById(req.user.id).then((db)=>{
        // var obj={
        //   favorties:db.favorite
        // }
        // console.log(obj)
        res.json(db.favorite);

      })
    }
    else{
      console.log("Youre not logged in")
    }
  })

  // Log Out 
  router.get('/logout', function(req, res) {
    console.log('logged out');
    req.logout();
    res.redirect("/")
  });

 
module.exports=router;