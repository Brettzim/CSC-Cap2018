const express = require('express');
const app = express();
const port = 3000;
const dc_data = require('./dcdata.json');

var ds = require('./diversity.js');
var cs = require('./crime.js');

// var finalcrimescore = cs(dc_data);
// var finaldiversityscore = ds(dc_data);
//onsole.log(ds(dc_data));
//console.log(cs(dc_data))

app.get('/diversity', (req, res) => res.send(finaldiversityscore));

app.get('/crime', (req, res) => res.send(finalcrimescore));

// app.get('/diversity', (req, res) => res.send(diversityscore));
// app.get('/crime', (req, res) => res.send(crimescore));
//app.get('/economics', (req, res) => res.send(ds.finaldiversity(dc_data))); // TODO

app.listen(port, () => console.log(`Example app listening on port ${port}!`));