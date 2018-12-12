var ds = require('./diversity.js');
var cs = require('./crime.js');
var es = require('./economics.js');

const dc_data = require('./dcdata.json');
const dc_data1 = require('./dcdata1.json');
const dc_data2 = require('./dcdata2.json');
const dc_data3 = require('./dcdata3.json');

function finaleconomics(dc_data) {
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
    return(dc_data_list);
};

module.exports = dc_data_list;