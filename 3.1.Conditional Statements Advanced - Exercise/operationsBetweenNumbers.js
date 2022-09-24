function operationsBetweenNumbers(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operation = input[2];

    let num3;

   if(operation == '/'){
        if(num1 == 0 || num2 == 0)
        {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else{
            num3 =num1 / num2;
            console.log(`${num1} / ${num2} = ${num3.toFixed(2)}`);
        }
    }
    else if(operation == '%'){
        if(num1 == 0 || num2 == 0)
        {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else{
        num3 =num1 % num2;
        console.log(`${num1} % ${num2} = ${num3}`);
        }
    }

    if(operation == "+" || operation == "-" || operation == "*"){
        if(operation == '+'){
            num3 = num1 + num2;
        }
       else if(operation == '-'){
            num3 =num1 - num2;
        }
        else if(operation == '*'){
            num3 =num1 * num2;
        }
        if(num3 % 2 == 0){
            console.log(`${num1} ${operation} ${num2} = ${num3} - even `);
        }
        else if(num3 % 2 != 0){
            console.log(`${num1} ${operation} ${num2} = ${num3} - odd `);
        }
    }
}
operationsBetweenNumbers(["7",

"3",

"*"]);