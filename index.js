const express = require('express');
const app = express();
const port = 3000;
const dc_data = require('./dcdata.json');
const dc_data1 = require('./dcdata1.json');
const dc_data2 = require('./dcdata2.json');
const dc_data3 = require('./dcdata3.json');

var ds = require('./diversity.js');
var cs = require('./crime.js');
var es = require('./economics.js');
var fs = require('./finalscores.js');

var finaldiversityscore = cs(dc_data);
var finalcrimescore = ds(dc_data1);
var finaleconomicscore = es(dc_data2);
//var finalscore = fs(dc_data3);

//console.log(fs);

//app.get('/', (req, res) => res.send(finalscore));
app.get('/diversity', (req, res) => res.send(finaldiversityscore));
app.get('/crime', (req, res) => res.send(finalcrimescore));
app.get('/economics', (req, res) => res.send(finaleconomicscore));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));