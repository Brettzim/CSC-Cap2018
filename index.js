const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;
const dc_data = require('./dcdata.json');
const dc_data1 = require('./dcdata1.json');
const dc_data2 = require('./dcdata2.json');

var ds = require('./diversity.js');
var cs = require('./crime.js');
var es = require('./economics.js');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));

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


function compare(a,b) {
    if (a.score < b.score)
      return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }
dc_data_list.sort(compare);
finaldiversityscore.sort(compare);
finalcrimescore.sort(compare);
finaleconomicscore.sort(compare);

// hardcode final scores list into individual elements to display on web server
let f0 = dc_data_list[0];
let f1 = dc_data_list[1];
let f2 = dc_data_list[2];
let f3 = dc_data_list[3];
let f4 = dc_data_list[4];
let f5 = dc_data_list[5];
let f6 = dc_data_list[6];
let f7 = dc_data_list[7];
let f8 = dc_data_list[8];
let f9 = dc_data_list[9];
let f10 = dc_data_list[10];
let f11 = dc_data_list[11];
let f12 = dc_data_list[12];
let f13 = dc_data_list[13];
let f14 = dc_data_list[14];
let f15 = dc_data_list[15];
let f16 = dc_data_list[16];
let f17 = dc_data_list[17];
let f18 = dc_data_list[18];
let f19 = dc_data_list[19];
let f20 = dc_data_list[20];
let f21 = dc_data_list[21];
let f22 = dc_data_list[22];
let f23 = dc_data_list[23];
let f24 = dc_data_list[24];
let f25 = dc_data_list[25];
let f26 = dc_data_list[26];
let f27 = dc_data_list[27];
let f28 = dc_data_list[28];
let f29 = dc_data_list[29];
let f30 = dc_data_list[30];
let f31 = dc_data_list[31];
let f32 = dc_data_list[32];
let f33 = dc_data_list[33];
let f34 = dc_data_list[34];
let f35 = dc_data_list[35];
let f36 = dc_data_list[36];
let f37 = dc_data_list[37];
let f38 = dc_data_list[38];

// hardcoude final diversity scores list into individual elements to display on web server
let d0 = finaldiversityscore[0];
let d1 = finaldiversityscore[1];
let d2 = finaldiversityscore[2];
let d3 = finaldiversityscore[3];
let d4 = finaldiversityscore[4];
let d5 = finaldiversityscore[5];
let d6 = finaldiversityscore[6];
let d7 = finaldiversityscore[7];
let d8 = finaldiversityscore[8];
let d9 = finaldiversityscore[9];
let d10 = finaldiversityscore[10];
let d11 = finaldiversityscore[11];
let d12 = finaldiversityscore[12];
let d13 = finaldiversityscore[13];
let d14 = finaldiversityscore[14];
let d15 = finaldiversityscore[15];
let d16 = finaldiversityscore[16];
let d17 = finaldiversityscore[17];
let d18 = finaldiversityscore[18];
let d19 = finaldiversityscore[19];
let d20 = finaldiversityscore[20];
let d21 = finaldiversityscore[21];
let d22 = finaldiversityscore[22];
let d23 = finaldiversityscore[23];
let d24 = finaldiversityscore[24];
let d25 = finaldiversityscore[25];
let d26 = finaldiversityscore[26];
let d27 = finaldiversityscore[27];
let d28 = finaldiversityscore[28];
let d29 = finaldiversityscore[29];
let d30 = finaldiversityscore[30];
let d31 = finaldiversityscore[31];
let d32 = finaldiversityscore[32];
let d33 = finaldiversityscore[33];
let d34 = finaldiversityscore[34];
let d35 = finaldiversityscore[35];
let d36 = finaldiversityscore[36];
let d37 = finaldiversityscore[37];
let d38 = finaldiversityscore[38];

// hardcode final crime scores list into individual elements to display on web server
let c0 = finalcrimescore[0];
let c1 = finalcrimescore[1];
let c2 = finalcrimescore[2];
let c3 = finalcrimescore[3];
let c4 = finalcrimescore[4];
let c5 = finalcrimescore[5];
let c6 = finalcrimescore[6];
let c7 = finalcrimescore[7];
let c8 = finalcrimescore[8];
let c9 = finalcrimescore[9];
let c10 = finalcrimescore[10];
let c11 = finalcrimescore[11];
let c12 = finalcrimescore[12];
let c13 = finalcrimescore[13];
let c14 = finalcrimescore[14];
let c15 = finalcrimescore[15];
let c16 = finalcrimescore[16];
let c17 = finalcrimescore[17];
let c18 = finalcrimescore[18];
let c19 = finalcrimescore[19];
let c20 = finalcrimescore[20];
let c21 = finalcrimescore[21];
let c22 = finalcrimescore[22];
let c23 = finalcrimescore[23];
let c24 = finalcrimescore[24];
let c25 = finalcrimescore[25];
let c26 = finalcrimescore[26];
let c27 = finalcrimescore[27];
let c28 = finalcrimescore[28];
let c29 = finalcrimescore[29];
let c30 = finalcrimescore[30];
let c31 = finalcrimescore[31];
let c32 = finalcrimescore[32];
let c33 = finalcrimescore[33];
let c34 = finalcrimescore[34];
let c35 = finalcrimescore[35];
let c36 = finalcrimescore[36];
let c37 = finalcrimescore[37];
let c38 = finalcrimescore[38];

// hardcode economics scores list into individual elements to display on web server
let e0 = finaleconomicscore[0];
let e1 = finaleconomicscore[1];
let e2 = finaleconomicscore[2];
let e3 = finaleconomicscore[3];
let e4 = finaleconomicscore[4];
let e5 = finaleconomicscore[5];
let e6 = finaleconomicscore[6];
let e7 = finaleconomicscore[7];
let e8 = finaleconomicscore[8];
let e9 = finaleconomicscore[9];
let e10 = finaleconomicscore[10];
let e11 = finaleconomicscore[11];
let e12 = finaleconomicscore[12];
let e13 = finaleconomicscore[13];
let e14 = finaleconomicscore[14];
let e15 = finaleconomicscore[15];
let e16 = finaleconomicscore[16];
let e17 = finaleconomicscore[17];
let e18 = finaleconomicscore[18];
let e19 = finaleconomicscore[19];
let e20 = finaleconomicscore[20];
let e21 = finaleconomicscore[21];
let e22 = finaleconomicscore[22];
let e23 = finaleconomicscore[23];
let e24 = finaleconomicscore[24];
let e25 = finaleconomicscore[25];
let e26 = finaleconomicscore[26];
let e27 = finaleconomicscore[27];
let e28 = finaleconomicscore[28];
let e29 = finaleconomicscore[29];
let e30 = finaleconomicscore[30];
let e31 = finaleconomicscore[31];
let e32 = finaleconomicscore[32];
let e33 = finaleconomicscore[33];
let e34 = finaleconomicscore[34];
let e35 = finaleconomicscore[35];
let e36 = finaleconomicscore[36];
let e37 = finaleconomicscore[37];
let e38 = finaleconomicscore[38];

// home page
app.get('/', function(req, res) {
    res.render('homepg.hbs', {
        show_data0: JSON.stringify(f0),
        show_data1: JSON.stringify(f1),
        show_data2: JSON.stringify(f2),
        show_data3: JSON.stringify(f3),
        show_data4: JSON.stringify(f4),
        show_data5: JSON.stringify(f5),
        show_data6: JSON.stringify(f6),
        show_data7: JSON.stringify(f7),
        show_data8: JSON.stringify(f8),
        show_data9: JSON.stringify(f9),
        show_data10: JSON.stringify(f10),
        show_data11: JSON.stringify(f11),
        show_data12: JSON.stringify(f12),
        show_data13: JSON.stringify(f13),
        show_data14: JSON.stringify(f14),
        show_data15: JSON.stringify(f15),
        show_data16: JSON.stringify(f16),
        show_data17: JSON.stringify(f17),
        show_data18: JSON.stringify(f18),
        show_data19: JSON.stringify(f19),
        show_data20: JSON.stringify(f20),
        show_data21: JSON.stringify(f21),
        show_data22: JSON.stringify(f22),
        show_data23: JSON.stringify(f23),
        show_data24: JSON.stringify(f24),
        show_data25: JSON.stringify(f25),
        show_data26: JSON.stringify(f26),
        show_data27: JSON.stringify(f27),
        show_data28: JSON.stringify(f28),
        show_data29: JSON.stringify(f29),
        show_data30: JSON.stringify(f30),
        show_data31: JSON.stringify(f31),
        show_data32: JSON.stringify(f32),
        show_data33: JSON.stringify(f33),
        show_data34: JSON.stringify(f34),
        show_data35: JSON.stringify(f35),
        show_data36: JSON.stringify(f36),
        show_data37: JSON.stringify(f37),
        show_data38: JSON.stringify(f38)
    });
});

// diversity page
app.get('/diversity', function(req, res) {
    res.render('diversity.hbs', {
        show_data0: JSON.stringify(d0),
        show_data1: JSON.stringify(d1),
        show_data2: JSON.stringify(d2),
        show_data3: JSON.stringify(d3),
        show_data4: JSON.stringify(d4),
        show_data5: JSON.stringify(d5),
        show_data6: JSON.stringify(d6),
        show_data7: JSON.stringify(d7),
        show_data8: JSON.stringify(d8),
        show_data9: JSON.stringify(d9),
        show_data10: JSON.stringify(d10),
        show_data11: JSON.stringify(d11),
        show_data12: JSON.stringify(d12),
        show_data13: JSON.stringify(d13),
        show_data14: JSON.stringify(d14),
        show_data15: JSON.stringify(d15),
        show_data16: JSON.stringify(d16),
        show_data17: JSON.stringify(d17),
        show_data18: JSON.stringify(d18),
        show_data19: JSON.stringify(d19),
        show_data20: JSON.stringify(d20),
        show_data21: JSON.stringify(d21),
        show_data22: JSON.stringify(d22),
        show_data23: JSON.stringify(d23),
        show_data24: JSON.stringify(d24),
        show_data25: JSON.stringify(d25),
        show_data26: JSON.stringify(d26),
        show_data27: JSON.stringify(d27),
        show_data28: JSON.stringify(d28),
        show_data29: JSON.stringify(d29),
        show_data30: JSON.stringify(d30),
        show_data31: JSON.stringify(d31),
        show_data32: JSON.stringify(d32),
        show_data33: JSON.stringify(d33),
        show_data34: JSON.stringify(d34),
        show_data35: JSON.stringify(d35),
        show_data36: JSON.stringify(d36),
        show_data37: JSON.stringify(d37),
        show_data38: JSON.stringify(d38)
    });
});

// crime page
app.get('/crime', function(req, res) {
    res.render('crime.hbs', {
        show_data0: JSON.stringify(c0),
        show_data1: JSON.stringify(c1),
        show_data2: JSON.stringify(c2),
        show_data3: JSON.stringify(c3),
        show_data4: JSON.stringify(c4),
        show_data5: JSON.stringify(c5),
        show_data6: JSON.stringify(c6),
        show_data7: JSON.stringify(c7),
        show_data8: JSON.stringify(c8),
        show_data9: JSON.stringify(c9),
        show_data10: JSON.stringify(c10),
        show_data11: JSON.stringify(c11),
        show_data12: JSON.stringify(c12),
        show_data13: JSON.stringify(c13),
        show_data14: JSON.stringify(c14),
        show_data15: JSON.stringify(c15),
        show_data16: JSON.stringify(c16),
        show_data17: JSON.stringify(c17),
        show_data18: JSON.stringify(c18),
        show_data19: JSON.stringify(c19),
        show_data20: JSON.stringify(c20),
        show_data21: JSON.stringify(c21),
        show_data22: JSON.stringify(c22),
        show_data23: JSON.stringify(c23),
        show_data24: JSON.stringify(c24),
        show_data25: JSON.stringify(c25),
        show_data26: JSON.stringify(c26),
        show_data27: JSON.stringify(c27),
        show_data28: JSON.stringify(c28),
        show_data29: JSON.stringify(c29),
        show_data30: JSON.stringify(c30),
        show_data31: JSON.stringify(c31),
        show_data32: JSON.stringify(c32),
        show_data33: JSON.stringify(c33),
        show_data34: JSON.stringify(c34),
        show_data35: JSON.stringify(c35),
        show_data36: JSON.stringify(c36),
        show_data37: JSON.stringify(c37),
        show_data38: JSON.stringify(c38)
    });
});

// economics page
app.get('/economics', function(req, res) {
    res.render('economics.hbs', {
        show_data0: JSON.stringify(e0),
        show_data1: JSON.stringify(e1),
        show_data2: JSON.stringify(e2),
        show_data3: JSON.stringify(e3),
        show_data4: JSON.stringify(e4),
        show_data5: JSON.stringify(e5),
        show_data6: JSON.stringify(e6),
        show_data7: JSON.stringify(e7),
        show_data8: JSON.stringify(e8),
        show_data9: JSON.stringify(e9),
        show_data10: JSON.stringify(e10),
        show_data11: JSON.stringify(e11),
        show_data12: JSON.stringify(e12),
        show_data13: JSON.stringify(e13),
        show_data14: JSON.stringify(e14),
        show_data15: JSON.stringify(e15),
        show_data16: JSON.stringify(e16),
        show_data17: JSON.stringify(e17),
        show_data18: JSON.stringify(e18),
        show_data19: JSON.stringify(e19),
        show_data20: JSON.stringify(e20),
        show_data21: JSON.stringify(e21),
        show_data22: JSON.stringify(e22),
        show_data23: JSON.stringify(e23),
        show_data24: JSON.stringify(e24),
        show_data25: JSON.stringify(e25),
        show_data26: JSON.stringify(e26),
        show_data27: JSON.stringify(e27),
        show_data28: JSON.stringify(e28),
        show_data29: JSON.stringify(e29),
        show_data30: JSON.stringify(e30),
        show_data31: JSON.stringify(e31),
        show_data32: JSON.stringify(e32),
        show_data33: JSON.stringify(e33),
        show_data34: JSON.stringify(e34),
        show_data35: JSON.stringify(e35),
        show_data36: JSON.stringify(e36),
        show_data37: JSON.stringify(e37),
        show_data38: JSON.stringify(e38)
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));