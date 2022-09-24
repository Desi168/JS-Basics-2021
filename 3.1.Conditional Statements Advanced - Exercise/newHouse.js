function newHouse(input){
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let rose = 5;
    let dahlia = 3.80;
    let tulip = 2.80;
    let narcissu = 3;
    let gladiolu = 2.50;

    let total;

switch(flowerType){
case "Roses":
     total = flowerCount*rose;
     if(flowerCount>80) {
         total =total - total*10/100;
     }
     break;
case "Dahlias": 
     total = flowerCount * dahlia;
     if(flowerCount > 90){
         total = total - total*15/100;
     }
break;
case "Tulips":
     total = flowerCount * tulip;
     if(flowerCount>70){
        total = total -total*15/100;
     }
break;
case "Narcissus": 
     total = flowerCount * narcissu;
     if(flowerCount<120){
        total = total + total*15/100;
     }
break;
case "Gladiolus": 
     total = flowerCount * gladiolu;
     if(flowerCount < 80){
         total =total +  total*20/100;
     }
break;
}

let letftMoney = Math.abs(budget - total);

if(total<=budget){
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${letftMoney.toFixed(2)} leva left.`)
}
else{
    console.log(`Not enough money, you need ${letftMoney.toFixed(2)} leva more.`)
}
}

newHouse(["Narcissus", "119", "360"]);