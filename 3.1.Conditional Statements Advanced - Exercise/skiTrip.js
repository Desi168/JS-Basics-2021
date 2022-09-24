function skiTrip(input){
    let dayStay = Number(input[0]) - 1;
    let typePlace = input[1];
    let grade = input[2];

    let roomForOne = 18;
    let apartment = 25;
    let presidentApartment = 35;

    let discount = 0;
    let total = 0;
 
    if (dayStay < 10) {
        switch (typePlace) {
            case "apartment": discount = 30/100;  total = dayStay * apartment;  break;
            case "president apartment": discount = 10/100; total = dayStay * presidentApartment; break;
            case "room for one person": discount = 0;  total = dayStay * roomForOne; break;
            default:
                break;
        }
    }
    else if(dayStay>=10 && dayStay<=15){
        switch (typePlace) {
            case "apartment": discount = 35/100; total = dayStay * apartment; 
             break;
            case "president apartment": discount = 15/100; total = dayStay * presidentApartment; break;
            case "room for one person": discount = 0; total = dayStay * roomForOne; break;
            default:
                break;
        }
    }
    else if(dayStay > 15){
        switch (typePlace) {
            case "apartment": discount = 50/100; total = dayStay * apartment;
             break;
            case "president apartment": discount = 20/100; total = dayStay * presidentApartment; break;
            case "room for one person": discount = 0; total = dayStay * roomForOne; break;
            default:
                break;
        }
    }
    if (discount !== 0) {
        total = Math.abs(total - total* discount);   
    }
    if (grade === "positive") {
        total = total + total * 25/100;
    }
    else if(grade == "negative"){
        total = total - total * 10/100;
    } 


    console.log(total.toFixed(2));
}
skiTrip(["2", "apartment", "positive"])