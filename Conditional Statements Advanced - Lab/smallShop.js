function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (city == "Sofia") {
        switch (product) {
            case "coffee":console.log(0.50 * quantity); break;
            case "water":console.log(0.80 * quantity);break;
            case "beer":console.log(1.20 * quantity);break;
            case "sweets":console.log(1.45 * quantity);break;
            case "peanuts":console.log(1.60 * quantity);break;
            default:
                break;
        }
    }
    if (city == "Plovdiv") {
        switch (product) {
            case "coffee":console.log(0.40 * quantity); break;
            case "water":console.log(0.70 * quantity);break;
            case "beer":console.log(1.15 * quantity);break;
            case "sweets":console.log(1.30 * quantity);break;
            case "peanuts":console.log(1.50 * quantity);break;
            default:
                break;
        }
    }
    if (city == "Varna") {
        switch (product) {
            case "coffee":console.log(0.45 * quantity); break;
            case "water":console.log(0.70 * quantity);break;
            case "beer":console.log(1.10 * quantity);break;
            case "sweets":console.log(1.35 * quantity);break;
            case "peanuts":console.log(1.55 * quantity);break;
            default:
                break;
        }
    }
}
smallShop(["peanuts", "Plovdiv", "1"])