var express = require('express');
var app = express();

app.listen(37834, () => {
	console.log('Server running on port 31234');
});

app.get('/', (req,res) => {
	res.send('Hello World');
});

