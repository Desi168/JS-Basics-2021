function foodDelivery(input)
{
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;
    let delivery = 2.50;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]); 
    let veganMenuCount = Number(input[2]);

    let priceChickenMenu = chickenMenuCount * chickenMenu;
    let priceFishMenu = fishMenuCount * fishMenu;
    let priceVeganMenu = veganMenuCount * veganMenu;
    let totalMenuPrice = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let desert = 20/100 * totalMenuPrice;
    let total = desert + delivery + totalMenuPrice;

    console.log(total);
}
foodDelivery(["9 ",
"2 ",
"6 "]
);