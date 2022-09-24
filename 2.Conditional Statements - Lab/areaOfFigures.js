function areaOfFigures(input){
    let figure = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    if(figure == `square`){
        console.log((num1*num1).toFixed(3));
    }
    else if(figure == `rectangle`){
        console.log((num1 * num2).toFixed(3));
    }
    else if(figure == `circle`){
        console.log((Math.PI * Math.pow(num1 , 2)).toFixed(3));
    }
    else if(figure == `triangle`){
        console.log(((num1 * num2)/2).toFixed(3));
    }
}
areaOfFigures(["triangle", "4.5", "20"])