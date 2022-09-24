function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let price;

    if(season == "Spring"){
        price = 3000;
    }
    if(season == "Summer" || season == "Autumn"){
        price = 4200;
    }
    if(season == "Winter"){
        price = 2600;
    }

    if(fisherCount <= 6){
        price =price -  price*10/100;
    }
    if(fisherCount >= 7 && fisherCount <= 11){
        price = price - price*15/100;
    }
    if(fisherCount >= 12){
        price= price - price*25/100;
    }
        if(fisherCount % 2 == 0 && season!= "Autumn"){
        price = price - price*5/100;
    }
    let diff = Math.abs(price - budget);
    if(price <= budget){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000", "Winter", "13"]);