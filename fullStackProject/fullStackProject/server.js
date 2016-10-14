var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/table1data',function (req, res) {
    var data = [{
        "firstName": "Nivas",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    }, {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    }, {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }];
    res.json({"data":data,"message":"success"});
});
app.get('/table2data',function (req, res) {
    var data = [{
        "firstName": "Srini",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    }, {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    }, {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }];
    res.json({"data":data,"message":"success"});
});
app.get('/table3data',function (req, res) {
    var data = [{
        "firstName": "Jhon",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    }, {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    }, {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }];
    res.json({"data":data,"message":"success"});
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
