function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let oneOutfit = Number(input[2]);
    let decor =budget*0.1;

        let priceOutfit = oneOutfit * extras;
        if(extras > 150){
            priceOutfit = priceOutfit - priceOutfit*0.1;
        }
      
        let totalPrice = decor + priceOutfit;
        let leftMoney = Math.abs(budget - totalPrice);

        if(totalPrice > budget){
            console.log(`Not enough money!`) ;
            console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
        }
        else if(totalPrice <= budget){
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
        }
}
godzillaVsKong(["9587.88",

"222",

"55.68"]);