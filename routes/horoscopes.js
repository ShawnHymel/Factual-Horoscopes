var express = require('express');
var router = express.Router();
var title = 'Factual Horoscope';
/* GET home page. */

router.get("/horoscope/:zodiac.:format?", function(req, res, next){
  var data = {zodiac: req.params.zodiac};
  console.log(req.params.zodiac)
  if (req.params.format === 'json') {
    res.json(data);
  }  else {
    res.render('zodiac', data);
  }
});

module.exports = router;
