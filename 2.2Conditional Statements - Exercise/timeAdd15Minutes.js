function timeAdd15Minutes(input){
    let  hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours*60  + minutes + 15;

    let calcH = Math.floor(time / 60);
    let calcM = time % 60;

    if(calcH > 23){
        calcH = 0;
    }

    if(calcM < 10){
        console.log(`${calcH}:0${calcM}`)
    }
    else{
        console.log(`${calcH}:${calcM}`)
    }
}
timeAdd15Minutes(["23", "59"]);