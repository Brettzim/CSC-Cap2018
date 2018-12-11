//var finaldiversity = function (dc_data) {
function finaldiversity(dc_data) {
    var dc_data_list = [];
    var score = [];

    let i = 0;
    let total = 0;
    let diversity_score = 100;

    // generating a diversity score out of 100
    for (dc_data["neighborhood_cluster"] in dc_data) {
        total = Math.abs(dc_data[i].Pct_black - dc_data[i].Pct_white);
        total = Math.abs(total - dc_data[i].Pct_Asian_PacificIslander);
        total = Math.abs(total - dc_data[i].Pct_Hispanic);
        diversity_score -= total;

        // translating our scores to a 1-20 scale for final calculations
        if (diversity_score <= 100 && diversity_score > 95) {
            diversity_score = 20;
        } else if (diversity_score <= 95 && diversity_score > 90) {
            diversity_score = 19;
        } else if (diversity_score <= 90 && diversity_score > 85) {
            diversity_score = 18;
        } else if (diversity_score <= 85 && diversity_score > 80) {
            diversity_score = 17;
        } else if (diversity_score <= 80 && diversity_score > 75) {
            diversity_score = 16;
        } else if (diversity_score <= 75 && diversity_score > 70) {
            diversity_score = 15;
        } else if (diversity_score <= 70 && diversity_score > 65) {
            diversity_score = 14;
        } else if (diversity_score <= 65 && diversity_score > 60) {
            diversity_score = 13;
        } else if (diversity_score <= 60 && diversity_score > 55) {
            diversity_score = 12;
        } else if (diversity_score <= 55 && diversity_score > 50) {
            diversity_score = 11;
        } else if (diversity_score <= 50 && diversity_score > 45) {
            diversity_score = 10;
        } else if (diversity_score <= 45 && diversity_score > 40) {
            diversity_score = 9;
        } else if (diversity_score <= 40 && diversity_score > 35) {
            diversity_score = 8;
        } else if (diversity_score <= 35 && diversity_score > 30) {
            diversity_score = 7;
        } else if (diversity_score <= 30 && diversity_score > 25) {
            diversity_score = 6;
        } else if (diversity_score <= 25 && diversity_score > 20) {
            diversity_score = 5;
        } else if (diversity_score <= 20 && diversity_score > 15) {
            diversity_score = 4;
        } else if (diversity_score <= 15 && diversity_score > 10) {
            diversity_score = 3;
        } else if (diversity_score <= 10 && diversity_score > 5) {
            diversity_score = 2;
        } else {
            diversity_score = 1;
        }
        score.push(diversity_score);
        diversity_score = 100;
        i++;
    };

    // adding scores to our return object
    for (i = 0; i < score.length; i++) {
        var dc = {
            neighborhood_cluster : dc_data[i]["neighborhood_cluster"],
            score : score[i]
        };
        dc_data_list.push(dc);
    };
    return dc_data_list;
};

module.exports = finaldiversity;