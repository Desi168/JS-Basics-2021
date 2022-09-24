function depositCalculator(input) 
{
    let depositAmount = Number (input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let yearInterestRate = depositAmount * (annualInterestRate / 100);
    let montInterestRate = yearInterestRate / 12;
    let total = montInterestRate * termDeposit + depositAmount;

    console.log(total);

}

depositCalculator(["200 ","3 ","5.7 "]);