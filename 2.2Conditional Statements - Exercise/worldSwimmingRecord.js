function worldSwimmingRecord(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let time = Number(input[2]);

let ivanResult = distance * time;
let slow = Math.floor(distance / 15) * 12.5;

let totalTime = ivanResult + slow;
let diff = Math.abs(totalTime - record);

    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else{
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",

"3017","5.03"])