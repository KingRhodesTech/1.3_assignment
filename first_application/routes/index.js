var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	var places = [
		{ name: 'Home', rating: 10 },
		{ name: 'Park', rating: 7 },
		{ name: 'Bowling', rating: 8 },
		{ name: 'Skating', rating: 6 },
	];
	var myname = 'Jaquan Rhodes';
	res.render('index', {
		title: 'Favorite Places',
		places: places,
		myname: myname,
	});
});

module.exports = router;
