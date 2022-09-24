function hotelRoom(input){
    let month = input[0];
    let countDays = Number(input[1]);

    let studio;
    let apartment;

    if(month == "May" || month == "October"){
        studio = 50;
        apartment = 65;
        studio = studio * countDays;
        apartment = apartment * countDays;
        if(countDays > 14){
            studio = studio - studio*30/100;
        }    
        else if(countDays > 7){
            studio = studio - studio*5/100;
        }
    }
    else if(month == "June" || month == "September"){
        studio = 75.20;
        apartment = 68.70;
        studio = studio * countDays;
        apartment = apartment * countDays;
        
        if(countDays>14){
            studio = studio - studio*20/100;
        }
    }
    else if(month == "July" || month == "August"){
        studio = 76;
        apartment = 77;
        studio = studio * countDays;
        apartment = apartment * countDays;
    }
    if(countDays > 14){
        apartment = apartment - apartment*10/100;
    }

     console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);