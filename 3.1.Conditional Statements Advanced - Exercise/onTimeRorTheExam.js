function onTimeRorTheExam(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let comeHour = Number(input[2]);
    let comeMinute = Number(input[3]);

    let hourInMunuteExam = examHour * 60;
    let hourInMunuteCome = comeHour * 60;

    let totalMinutesExam = hourInMunuteExam + examMinute;
    let totalMinutesCome = hourInMunuteCome + comeMinute;

    let diff = Math.abs(totalMinutesExam - totalMinutesCome);
    let diffInHours = diff / 60;
    let diffInMinutes = diff % 60;

    if (totalMinutesCome > totalMinutesExam) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        }
        else {
            if (diff % 60 < 10) {
                console.log(`${parseInt(diff / 60)}:0${diff % 60} hours after the start`);//без parsInt вместо 1 час дава 1.5 
                // 0-ла защото минутите са по-малкко от 10 
            } else {
                console.log(`${parseInt(diff / 60)}:${diff % 60} hours after the start`);
            }
        }
    }
    else if(totalMinutesExam - totalMinutesCome <= 30){
        console.log("On time");
        console.log(`${diff} minutes before the start`);
    }
    else if (totalMinutesExam-30 > totalMinutesCome) {
        console.log("Early");
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        }
        else {
            if (diff % 60 < 10) {
                console.log(`${parseInt(diff / 60)}:0${diff % 60} hours before the start`);
            } else {
                console.log(`${parseInt(diff / 60)}:${diff % 60} hours before the start`);
            }
        }
    }  
}
onTimeRorTheExam(["9",
"00",
"8",
"30"])