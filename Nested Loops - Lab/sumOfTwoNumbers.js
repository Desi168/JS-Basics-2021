function sumOfTwoNumbers(input) {
    let begin = Number(input[0]);
    let end = Number(input[1]);
    let numX = Number(input[2]);
    let counter = 0;
    let isMagicNumberTrue = false;
   
    for (let x1 = begin; x1 <= end; x1++) {
        for (let x2 = begin; x2 <= end; x2++) {
            counter++;
            if (x1 + x2 == numX) {
                
                isMagicNumberTrue = true;
                console.log(`Combination N:${counter} (${x1} + ${x2} = ${numX})`);
                return;//с break не става
            }

        }
    }
    if (isMagicNumberTrue == false) {
        console.log(`${counter} combinations - neither equals ${numX}`);
    }

}
sumOfTwoNumbers(["23",

"24",

"20"]);