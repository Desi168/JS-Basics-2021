function baskeyballEquipment(input)
{
    let perYear = Number(input[0]);
    
    let basketballTrainers = perYear - perYear*40/100 ;
    let basketballOutfit = basketballTrainers - basketballTrainers*20/100;
    let basketballBall = 1/4 * basketballOutfit;
    let basketballAccessories = 1/5 * basketballBall;

    let totalPrice = perYear + basketballTrainers +
    basketballOutfit + basketballBall + basketballAccessories;

    console.log(basketballTrainers);
    console.log(basketballOutfit);
    console.log(basketballBall);
    console.log(basketballAccessories);
    console.log(totalPrice);
}
baskeyballEquipment(["550 "]);