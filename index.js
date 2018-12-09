const express = require('express');
const app = express();
const port = 3000;
const dc_data = require('./dcdata.json');

var dc_data_list = [];

let i = 0;

for (dc_data["neighborhood_cluster"] in dc_data) {
 //   let diversity_score = 100;
    var dc = dc_data[i];


        // get all 4 numbers and subtract them from each other (absolute value), then subtract that value from 100
    let total = 0;
    let score = [];
    // let score = new Object();
    //let score = {};
    let diversity_score = 100;

    for (i = 0; i < dc_data_list.length; i++) {
        total = Math.abs(dc_data[i].Pct_black - dc_data[i].Pct_white);
        total = Math.abs(total - dc_data[i].Pct_Asian_PacificIslander);
        total = Math.abs(total - dc_data[i].Pct_Hispanic);
        diversity_score -= total;
        score.push(diversity_score);
        //score.diversity_score = diversity_score;
        // let score = {
        //     diversity_score : diversity_score
        // };
        diversity_score = 100;
    };
    console.log(score);

    var dc = {
        neighborhood_cluster : dc_data[i]["neighborhood_cluster"],
        pct_black : dc_data[i]["Pct_black"],
        pct_white : dc_data[i]["Pct_white"],
        pct_hispanic : dc_data[i]["Pct_Hispanic"],
        pct_asian_pi : dc_data[i]["Pct_Asian_PacificIslander"],
        score : score[i]//.diversity_score]
    };
    dc_data_list.push(dc);
    i++;
}


 console.log("this is our demographic array: ", dc_data_list);

app.get('/demographics', (req, res) => res.send(dc_data_list));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));















// for (var i=0; i < dc_data.length; i++){
//     var dcinfo = dc_data[i];//["JURISDICTION NAME"];

//     dc_data_list.push(dcinfo);
// };