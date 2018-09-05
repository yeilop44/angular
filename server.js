const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', (req, res)=> {
	res.res.sendFile(path.join(__dirname +'/dist/index.html'));
})