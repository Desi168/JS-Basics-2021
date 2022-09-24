function petShop(input){
    let dogFood = 2.50;
    let catFood = 4;
    
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);

    let totalDog = dogFood * dogFoodCount;
    let totalCat = catFood * catFoodCount;

    let total = totalDog + totalCat;

    console.log(`${total} lv`);
}
petShop(["13","9"]);