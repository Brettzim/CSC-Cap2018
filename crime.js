var finalcrime = function (dc_data) {
    // Violent crimes make up 24/40 points, Property crimes make up 16/40 points

    var dc_data_list = [];
    var violentc = [];
    var propertyc = [];
    var combinescore = [];

    let i = 0;
    let counter = 0;
    let violentscore = 0;
    let propertyscore = 0;

    // translating violent scores from 0-25 to final scores of 0-24
    for (dc_data["neighborhood_cluster"] in dc_data) {
        violentscore = Math.round(dc_data[i].Violent_crimes);
        propertyscore = Math.round(dc_data[i].Property_crimes);

        if (violentscore > 24) {
            violentscore = 24;
        }
        violentc.push(violentscore);

        // translating property scores from 0-105 to final scores of 1-16
        if (propertyscore <= 105 && propertyscore > 98) {
            propertyscore = 16;
        } else if (propertyscore <= 98 && propertyscore > 91) {
            propertyscore = 15;
        } else if (propertyscore <= 91 && propertyscore > 84) {
            propertyscore = 14;
        } else if (propertyscore <= 84 && propertyscore > 77) {
            propertyscore = 13;
        } else if (propertyscore <= 77 && propertyscore > 70) {
            propertyscore = 12;
        } else if (propertyscore <= 70 && propertyscore > 63) {
            propertyscore = 11;
        } else if (propertyscore <= 63 && propertyscore > 56) {
            propertyscore = 10;
        } else if (propertyscore <= 56 && propertyscore > 49) {
            propertyscore = 9;
        } else if (propertyscore <= 49 && propertyscore > 42) {
            propertyscore = 8;
        } else if (propertyscore <= 42 && propertyscore > 35) {
            propertyscore = 7;
        } else if (propertyscore <= 35 && propertyscore > 28) {
            propertyscore = 6;
        } else if (propertyscore <= 28 && propertyscore > 21) {
            propertyscore = 5;
        } else if (propertyscore <= 21 && propertyscore > 14) {
            propertyscore = 4;
        } else if (propertyscore <= 14 && propertyscore > 7) {
            propertyscore = 3;
        } else if (propertyscore <= 7 && propertyscore > 0) {
            propertyscore = 2;
        } else {
            propertyscore = 1;
        }
        propertyc.push(propertyscore);
        i++;
    };

    // compute a total crime score out of 40, safer neighborhoods have higher scores
    while (counter < violentc.length && counter < propertyc.length) {
        combinescore.push(40-(violentc[counter] + propertyc[counter]));
        counter++;
    }

    // add crime scores to our return object
    for (i = 0; i < combinescore.length; i++) {
        var dc = {
            neighborhood_cluster : dc_data[i]["neighborhood_cluster"],
            Violent_crimes : dc_data[i]["Violent_crimes"],
            Property_crimes : dc_data[i]["Property_crimes"],
            score : combinescore[i]
        };
        dc_data_list.push(dc);
    };
    return dc_data_list;
};

module.exports = finalcrime;

//var crimescore = finalcrime(dc_data);

//exports.finalcrime = crimescore;