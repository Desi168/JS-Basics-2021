function  sumSeconds(input){
    let timeFirst =  Number(input[0]);
    let timeSecond =  Number(input[1]);
    let timeThird =  Number(input[2]);

    let totaltime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totaltime / 60);
    let seconds = totaltime % 60;

    if(seconds < 10)
    {
        console.log(`${minutes}:0${seconds}`);
    }
    else
    {
        console.log(minutes + ":" + seconds);
    }
}
sumSeconds(["14", "12", "10"]);