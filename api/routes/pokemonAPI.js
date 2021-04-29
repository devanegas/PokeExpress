var express = require("express");
var request = require("request");
var router = express.Router();

router.get("/type/:type", function (req, res, next) {
	let pokeType = req.params.type
	request(
		`https://pokeapi.co/api/v2/type/${pokeType}`,
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
			else{
				console.log(error)
				res.send({pokemon: [], errors:error})
			}
		}
	);
});

router.get("/type", function (req, res, next) {
	request(
		`https://pokeapi.co/api/v2/type`,
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
			else{
				console.log(error)
				res.send({results: []})
			}
		}
	);
});

router.get("/info/:id", function (req, res, next) {
	let pokeId = req.params.id
	console.log(pokeId)
	request(
		`https://pokeapi.co/api/v2/pokemon/${pokeId}`,
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
			else{
				console.log(error)
				res.send({results: []})
			}
		}
	);
});



module.exports = router;
