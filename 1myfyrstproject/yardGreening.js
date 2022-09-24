function yardGreening(input){
    let meters = Number(input[0]);
    let pricePerMeter = 7.61 ; 
    let discount = 18/100;
    discount = discount * (meters * pricePerMeter);

    let total = meters * pricePerMeter - discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"]);