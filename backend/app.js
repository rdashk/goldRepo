var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200', // указываем, откуда будут приходить запросы
    credentials: true,
    optionSuccessStatus:200
};
app.use(cors(corsOptions));

app.listen(3000);

/*var literature = require('./app/route/literature.route.js');
literature(app);*/