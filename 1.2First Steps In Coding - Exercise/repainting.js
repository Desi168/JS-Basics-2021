function repaiting(input)
{
    let priceNylon = 1.50;
    let pricePaint = 14.50;
    let pricePaintThinner = 5;
    let bag = 0.40;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);

    paint = paint * 1.10;
    nylon = nylon + 2;

    let stockPrice = nylon * priceNylon + 
    paint * pricePaint + paintThinner * 
    pricePaintThinner + bag;

    let workerPriceForOneHour = stockPrice * 0.30;

    let total = stockPrice + hours * workerPriceForOneHour;

    console.log(total);
}
repaiting(["5 ",
"10 ",
"10 ",
"1 "]
);