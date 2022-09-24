function vacationBookList(input)
{
    let pageCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);
        
    let totalTime= pageCount / pagesPerHour ;
    let neededTime = totalTime / daysCount ; 

    console.log(daysCount);
    console.log(neededTime);

}
vacationBookList(["432 ",
"15 ",
"4 "]
);