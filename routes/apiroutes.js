const unirest = require("unirest");
const router = require("express").Router();
const keys = require("../config/keys/keys");

router.get("/recipes", (req, res) => {
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${req.query.q}&limitLicense=false&ranking=2&offset=0&number=10&instructionsRequired=true`)
    .header("X-Mashape-Key", keys.food.foodkey)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      res.send(result.body);
});
})


router.get("/recipes/:id", (req, res) => {
  console.log(req.params)
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information`)
    .header("X-Mashape-Key", keys.food.foodkey)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      res.send(result.body);
});
})
router.get("/recipesfavssearch", (req, res) => {
 
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.body.recipeId}/information`)
    .header("X-Mashape-Key", keys.food.foodkey)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      res.send(result.body);
});
})

module.exports = router;