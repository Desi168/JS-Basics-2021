function sumPrimeNonPrime(input) {/*В математиката просто число се нарича
     всяко естествено число, по-голямо от 1, 
     което има точно два естествени делителя – 1 и самото себе си. */
   
    //let arrayOfNumbers = Number(input[index++]);  
    //let command = '';
    let index = 0;
    let command = input[index]; //[index++] дава грешка
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;
   

    while (command !== "stop") {
        let num = Number(command);
         if (num < 0) {
             console.log("Number is negative.");
             command = input[index];
             index++;
             continue;//прекъсва само текущия скоуп
         }
        
         if (num === 1) {//1 е просто число
             sumPrime += num;
             command = input[index];
             index++;
             continue;
         }
         let isPrime = true;/*флаг проверяваме дали текущото число е просто, за да може после 
           да фо използваме при изписването на прости и непрости числа */
         for (let i = 2; i < num/*ИЛИ Math.sqrt(num)*/; i++) {
            if (num % i === 0) {//условие едно число да е просто
                isPrime = false;
                break;
            }
        }
             if (isPrime) {
                 sumPrime += num;;
             }
             else{
                 sumNonPrime += num;
             }
         command = input[index];
         index++;//command = input(index++);
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])