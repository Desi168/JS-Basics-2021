function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let percent = 0;
    let isError = false;//без него има грешка при въвеждане на плод, който го няма в кода

    if (0 <= sales && sales<= 500) {
        switch (city) {
            case "Sofia":
                percent = 5;
                break;
            case "Varna":
                percent = 4.5;
                break;
            case "Plovdiv":
                percent = 5.5;
                break;
                       
            default:console.log("error");
            isError = true;
                break;
        }
    }
   else if (500 <= sales && sales<= 1000) {
        switch (city) {
            case "Sofia":
                percent = 7;
                break;
            case "Varna":
                percent = 7.5;
                break;
            case "Plovdiv":
                percent = 8;
                break;
                       
            default:console.log("error");
            isError = true;
                break;
        }
    }
    else if (1000 <= sales && sales<= 10000) {
        switch (city) {
            case "Sofia":
                percent = 8;
                break;
            case "Varna":
                percent = 10;
                break;
            case "Plovdiv":
                percent = 12;
                break;
                       
            default:console.log("error");
            isError = true;
                break;
        }
    }
    else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                percent = 12;
                break;
            case "Varna":
                percent = 13;
                break;
            case "Plovdiv":
                percent = 14.5;
                break;
                       
            default:console.log("error");
            isError = true;
                break;
        }
    }
    else{
        console.log("error");
            isError = true;
    }
    if (!isError) {
        console.log(((percent*sales)/100).toFixed(2));
    }
}
tradeCommissions(["Kaspichan", "-50"])