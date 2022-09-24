function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if(type == 'Premiere'){
        income = 12.00 * (rows * columns);
    }
    if(type == 'Normal'){
        income = 7.50 * (rows * columns);
    }
    if(type == 'Discount'){
        income = 5.00 * (rows * columns);
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Normal", "21", "13"]);