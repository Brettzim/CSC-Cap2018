const express = require('express');
const app = express();
const port = 3000;
const dc_data = require('./dcdata.json');
const dc_data1 = require('./dcdata1.json');
const dc_data2 = require('./dcdata2.json');

var ds = require('./diversity.js');
var cs = require('./crime.js');
var es = require('./economics.js');

var totalscore = [];
var dc_data_list = [];

// sum up total scores; post to local server
var finaldiversityscore = ds(dc_data);
var finalcrimescore = cs(dc_data1);
var finaleconomicscore = es(dc_data2);

for (i = 0; i < dc_data.length; i++) {
    totalscore.push(finaldiversityscore[i]["score"] + finalcrimescore[i]["score"] + finaleconomicscore[i]["score"]);
}

for (i = 0; i < totalscore.length; i++) {
    var dc = {
        neighborhood_cluster : dc_data[i]["neighborhood_cluster"],
        Neighborhood_name : dc_data[i]["Neighborhood_name"],
        score : totalscore[i]
    };
    dc_data_list.push(dc);
};

app.get('/', (req, res) => res.send(dc_data_list));
app.get('/diversity', (req, res) => res.send(finaldiversityscore));
app.get('/crime', (req, res) => res.send(finalcrimescore));
app.get('/economics', (req, res) => res.send(finaleconomicscore));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));