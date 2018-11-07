const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes=require("./routes");
const passportSetup=require("./config/passportsetup");
var session = require('express-session');
var mongoose = require('mongoose');
const keys=require("./config/keys/keys");
const bodyParser=require("body-parser");
const passport=require("passport");
const apiRoutes = require("./routes/apiRoutes")

// body-parser middleware 

app.use(bodyParser());

// Connect to Mongoose database

 mongoose.connect('mongodb://'+keys.db.userName+':'+keys.db.password+'@ds141902.mlab.com:41902/cookexpress',()=>{
   console.log("conneted to mongoDB");
 });

// More middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Needed this Session for the Twitter OAuth, checks if its in production or development 
var sess = {
  secret: 'keyboard cat',
  cookie: {
    

  }
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
//  Passport session for deserialize and serialize

app.use(session(sess))
app.use(passport.initialize());
app.use(passport.session());




// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bring in all of the routes from the routes folder r
app.use("/api",apiRoutes);
app.use(routes)

// This 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
