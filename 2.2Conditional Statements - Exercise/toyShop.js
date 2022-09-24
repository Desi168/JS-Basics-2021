function toyShop(input){
   let puzzel = 2.60;
   let doll =  3;
    let bear = 4.10;
   let minion =  8.20;
    let truck = 2;
   
    let tourMoney = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + truckCount;
    let totalPrice = puzzel*puzzleCount + doll * dollsCount + bear * bearsCount + minion*minionsCount + truck*truckCount;
    
    if(toysCount >= 50){
        totalPrice = totalPrice - totalPrice*0.25;
    }
    let rentMoney = totalPrice*0.1;
    let leftMoney = totalPrice - rentMoney;
    let diff = Math.abs(leftMoney-tourMoney);
    if(leftMoney >= tourMoney){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }
    else{
       console.log( `Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"]);