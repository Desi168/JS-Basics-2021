function summerOutfit(input){
    let temperature = Number(input[0]);
    let periodOfDAY = input[1];
    let outfit;
    let shoes;

        
    if(periodOfDAY == "Evening"){
        outfit='Shirt';
        shoes='Moccasins';
    }

    if(temperature>=10 && temperature<=18){
            if(periodOfDAY == "Morning") {
                outfit='Sweatshirt';
                shoes='Sneakers';
            }
            else if(periodOfDAY == "Afternoon"){
                outfit='Shirt';
                shoes='Moccasins';
            }
        }
      else  if(temperature>18 && temperature<=24){
            if(periodOfDAY == "Morning") {
                outfit='Shirt';
                shoes='Moccasins';
            }
           else if(periodOfDAY == "Afternoon"){
                outfit='T-Shirt';
                 shoes='Sandals';
            }
        }
      else  if(temperature>=25){
            if(periodOfDAY == "Morning") {
                outfit='T-Shirt';
                shoes='Sandals';
            }  
            else if(periodOfDAY == "Afternoon"){
                 outfit='SwimSuins';
                 shoes='Moccasins';
            }
        }
     
        console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
    
       
    }
    summerOutfit(["22",

    "Afternoon"]);
