function Shopping(input){
let peterBudget = Number(input[0]);
let videocardCount = Number(input[1]);
let procesorCount = Number(input[2]);
let ramCount = Number(input[3]);

let videocard = 250;
let videocardSum = videocard*videocardCount;

let procesor = 35/100 * videocardSum;
let ram = 10/100 * videocardSum;

let procesorSum = procesor*procesorCount;

let ramSum = ram * ramCount;

let totalSum  = procesorSum + videocardSum + ramSum;

    if(videocardCount > procesorCount){
        totalSum = totalSum  - totalSum*15/100;
    }
    let leftSum = Math.abs(totalSum - peterBudget);
    
    if(totalSum<=peterBudget){
    console.log(`You have ${leftSum.toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${leftSum.toFixed(2)} leva more!`);
    }
}
Shopping(["920.45",

"3",

"1",

"1"]);
