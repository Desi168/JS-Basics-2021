function specialNumbers(input) {
    let n = Number(input[0]);
    let buff = '';

    for (let a = 1; a <= 9; a++) { // a***
        for (let b = 1; b <= 9; b++) { // ab**
            for (let c = 1; c <= 9; c++) { //abc*
               for (let d = 1; d <= 9; d++) { // abcd -> (1111- 9999)
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        //console.log("" + a + b + c + d + ""); печата го всяко на нов ред, защото е в цикъл
                        buff += `${a}${b}${c}${d} `;// запазва стойностите и ги печата на един ред
                    }
               }
                
            }
        }
 
    }
    console.log(buff);
}
specialNumbers([3])