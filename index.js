const express = require('express');
const app = express();
const port = 3000;
const dc_data = require('./dcdata.json');
const dc_data1 = require('./dcdata1.json');
const dc_data2 = require('./dcdata2.json');

var ds = require('./diversity.js');
var cs = require('./crime.js');
var es = require('./economics.js');
//var fs = require('./finalscores.js');

var finaldiversityscore = cs(dc_data2);
var finalcrimescore = ds(dc_data);
var finaleconomicscore = es(dc_data1);

app.get('/diversity', (req, res) => res.send(finaldiversityscore));
app.get('/crime', (req, res) => res.send(finalcrimescore));
app.get('/economics', (req, res) => res.send(finaleconomicscore));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));