function equalSumsEvenOddPosition(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
   
    if (num1<num2) {
        let printLine = '';
        for (let i = num1; i <= num2; i++) { //обхождаме всяко едно число в интервала
        let currentNum = " "+ i ;//взима по отделно всяко число в интервала , обръща го в string
        let evenNum = 0;
        let oddNum = 0;
            for (let j = 1; j < currentNum.length; j++) { 
                let currentPosition = Number(currentNum.charAt(j));//взима по отделно сяка цифра в даденото число
                //console.log(currentPosition);
                if (j % 2 === 0) {
                    evenNum += currentPosition;
                }
                else{
                    oddNum += currentPosition;
                }
            }
           if (evenNum === oddNum) {
               printLine += `${i} `;//тук се добавя нужният space между цифрите
           }
        }
        console.log(printLine);
    }
}
equalSumsEvenOddPosition(["100000",

"100050"]);