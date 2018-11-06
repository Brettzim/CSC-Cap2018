const express = require('express');
const app = express();
const port = 3000;
const data1 = require('./data.json');

var zipcode1 = [];
var reason1 = [];

for (var i=0; i<data1.d.length; i++){
    var zipcode = data1.d[i].POSTCODE;
    var reason = data1.d[i]["PRIMARY VACATE REASON"];

    zipcode1.push(zipcode);
    reason1.push(reason);
};

// console.log(zipcode1);
// console.log(reason1);

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var unique_zipcode1 = zipcode1.filter(onlyUnique);
var unique_reason1 = reason1.filter(onlyUnique);

console.log(unique_zipcode1);
console.log(unique_reason1);

app.get('/', (req, res) => res.send(unique_reason1));
//app.get('/crimes', (req,res) => res.send());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));