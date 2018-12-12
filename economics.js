function finaleconomics(dc_data) {
    var dc_data_list = [];
    var povertyscores = [];
    var unemploymentscores = [];
    var avgincomescores = [];
    var homeownershipscores = [];
    var medianspscores = [];
    var foreclosuresscores = [];
    var combinescore = [];

    let i = 0;
    let counter = 0;

    // total out of 40 points 
    let poverty = 0; //score out of 7
    let unemployment = 0; //score out of 7
    let avgincome = 0; // score out of 6
    let homeownership = 0; // score out of 7
    let mediansp = 0; // score out of 7
    let foreclosures = 0; // score out of 6


    for (dc_data["neighborhood_cluster"] in dc_data) {
        poverty = dc_data[i].Poverty_rate_Pct;
        unemployment = dc_data[i].Unemployment_rate;
        avgincome = dc_data[i].Avg_family_income;
        homeownership = dc_data[i].Homeownership_rate_Pct;
        mediansp = dc_data[i].Median_sales_price;
        foreclosures = dc_data[i].Foreclosures;

        // translating poverty scores from 0-45 to final scores of 1-7
        // the lower the poverty %, the higher the score
        if (poverty <= 45 && poverty > 39) {
            poverty = 1;
        } else if (poverty <= 39 && poverty > 33) {
            poverty = 2;
        } else if (poverty <= 33 && poverty > 27) {
            poverty = 3;
        } else if (poverty <= 27 && poverty > 21) {
            poverty = 4;
        } else if (poverty <= 21 && poverty > 15) {
            poverty = 5;
        } else if (poverty <= 9 && poverty > 3) {
            poverty = 6;
        } else {
            poverty = 7;
        }
        povertyscores.push(poverty);

        // translating unemployement rate scores from 0-25 to final scores of 1-7
        // lower unemployment rate, higher the score
        if (unemployment <= 25 && unemployment > 21.5) {
            unemployment = 1;
        } else if (unemployment <= 21.5 && unemployment > 18) {
            unemployment = 2;
        } else if (unemployment <= 18 && unemployment > 14.5) {
            unemployment = 3;
        } else if (unemployment <= 14.5 && unemployment > 11) {
            unemployment = 4;
        } else if (unemployment <= 11 && unemployment > 7.5) {
            unemployment = 5;
        } else if (unemployment <= 7.5 && unemployment > 4) {
            unemployment = 6;
        } else {
            unemployment = 7;
        }
        unemploymentscores.push(unemployment);

        // translating income values from $35,000 to $305,000 to a 1-7 scale
        // higher $ average incomes correlate to higher scores
        if (avgincome <= 310000 && avgincome > 270000) {
            avgincome = 7;
        } else if (avgincome <= 270000 && avgincome > 230000) {
            avgincome = 6;
        } else if (avgincome <= 230000 && avgincome > 190000) {
            avgincome = 5;
        } else if (avgincome <= 190000 && avgincome > 150000) {
            avgincome = 4;
        } else if (avgincome <= 150000 && avgincome > 110000) {
            avgincome = 3;
        } else if (avgincome <= 11000 && avgincome > 70000) {
            avgincome = 2;
        } else {
            avgincome = 1;
        }
        avgincomescores.push(avgincome);

        if (avgincome <= 310000 && avgincome > 270000) {
            avgincome = 7;
        } else if (avgincome <= 270000 && avgincome > 230000) {
            avgincome = 6;
        } else if (avgincome <= 230000 && avgincome > 190000) {
            avgincome = 5;
        } else if (avgincome <= 190000 && avgincome > 150000) {
            avgincome = 4;
        } else if (avgincome <= 150000 && avgincome > 110000) {
            avgincome = 3;
        } else if (avgincome <= 11000 && avgincome > 70000) {
            avgincome = 2;
        } else {
            avgincome = 1;
        }
        avgincomescores.push(avgincome);

        // translating homeownership % from 0-90 to a 1-6 scale
        // higher homeownership % correlates with a higher score
        if (homeownership <= 90 && homeownership > 75) {
            homeownership = 6;
        } else if (homeownership <= 75 && homeownership > 60) {
            homeownership = 5;
        } else if (homeownership <= 60 && homeownership > 45) {
            homeownership = 4;
        } else if (homeownership <= 45 && homeownership > 30) {
            homeownership = 3;
        } else if (homeownership <= 30 && homeownership > 15) {
            homeownership = 2;
        } else {
            homeownership = 1;
        }
        homeownershipscores.push(homeownership);


        // translating price values from $100,000 to $1.2mil on a 1-7 scale
        // higher sales prices correlate with higher overall scores
        if (mediansp <= 1200000 && mediansp > 1040000) {
            mediansp = 7;
        } else if (mediansp <= 1040000 && mediansp > 880000) {
            mediansp = 6;
        } else if (mediansp <= 880000 && mediansp > 720000) {
            mediansp = 5;
        } else if (mediansp <= 720000 && mediansp > 560000) {
            mediansp = 4;
        } else if (mediansp <= 560000 && mediansp > 400000) {
            mediansp = 3;
        } else if ((mediansp <= 400000 && mediansp > 240000) || mediansp == null) {
            mediansp = 2;
        } else {
            mediansp = 1;
        }
        medianspscores.push(mediansp);

        // translating foreclosure scores from 70 to 3500 on a 1-6 scale
        // more foreclosures correlate to a lower score
        if (foreclosures <= 3500 && foreclosures > 2925) {
            foreclosures = 1;
        } else if (foreclosures <= 2925 && foreclosures > 2350) {
            foreclosures = 2;
        } else if (foreclosures <= 2350 && foreclosures > 1775) {
            foreclosures = 3;
        } else if (foreclosures <= 1775 && foreclosures > 1200) {
            foreclosures = 4;
        } else if (foreclosures <= 1200 && foreclosures > 625) {
            foreclosures = 5;
        } else {
            foreclosures = 6;
        }
        foreclosuresscores.push(foreclosures);

        i++;
    };

    // calculate a final economics score out of 40 (sum all arrays)
        while (counter < dc_data.length) {
            combinescore.push(povertyscores[counter] + unemploymentscores[counter] + avgincomescores[counter] + homeownershipscores[counter] + medianspscores[counter] + foreclosuresscores[counter]);
            counter++;
        }

    // add final economic scores to our return object
    for (i = 0; i < combinescore.length; i++) {
        var dc = {
            neighborhood_cluster : dc_data[i]["neighborhood_cluster"],
            Neighborhood_name : dc_data[i]["Neighborhood_name"],
            score : combinescore[i]
        };
        dc_data_list.push(dc);
    };
    return dc_data_list;
};

module.exports = finaleconomics;