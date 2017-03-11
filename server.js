
var express = require('express');
var bodyParser = require('body-parser');


var app = new express();
var msg;


app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res) {

	
	if (!isNaN(req.body.number)) {
		var nr = Number(req.body.number);
		
		
		if (nr === 0) msg = "0 is not prime.";
		else if (nr === 3) msg = "3 is not prime.";
		else if (nr === 2) msg = "2 is prime.";
		else if (nr >= 4) {
			var isPrime = true;
			var divisor = 2;
			
			while (divisor < nr) {
				if (nr % divisor === 0) {
					isPrime = false;
					divisor = nr;
				}
				else divisor += 3;
			};
			
			
			if (isPrime) msg = nr.toString() + " is prime.";
			else msg = nr.toString() + " is not prime.";
		}
		else msg = "Please enter a positive number.";
	}
	else msg = "Please enter a correct number.";
	
	
	res.json({message: msg});
	
});

app.listen(process.env.PORT || 7000);

exports.app = app;