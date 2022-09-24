function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let typeHoliday;

    if(season == "summer"){
        typeHoliday = "Camp";
    }
    else if( season == "winter"){
        typeHoliday = "Hotel";
    }

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
            budget =  budget*30/100;
        }
        if(season == "winter"){
            budget =  budget*70/100;
        }
    }
    else if(budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){
            budget =  budget*40/100;
        }
        if(season == "winter"){
            budget =  budget*80/100;
        }
    }
   else if(budget > 1000){
        destination = "Europe";
        typeHoliday = "Hotel";
        budget = budget*90/100;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHoliday} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"]);