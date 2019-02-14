const express = require('express');
const app = express();
const requestIp = require('request-ip');
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/text', function(req, res){
	console.log(requestIp.getClientIp(req));
	res.send(requestIp.getClientIp(req));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
