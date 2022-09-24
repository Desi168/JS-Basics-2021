function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;

        let tempCommand = input[index];
        index++;

        let soldTicket = 0;
        while (tempCommand !== "End") {
            let ticketType = tempCommand;
            soldTicket++;

            switch (ticketType) {
                case "student": studentTicketCount++; break;
                case "standard" : standardTicketCount++; break;
                case "kid" : kidTicketCount++;break;
            }
            if (freeSpace<=soldTicket) {
                break;
            }
            tempCommand = input[index];
            index++;
        }
        let totalFreeSpace = soldTicket / freeSpace * 100;
        console.log(`${movieName} - ${totalFreeSpace.toFixed(2)}% full.`);
    
        command = input[index];
        index++;
    }
    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;
    let studentP = studentTicketCount / totalTicketCount *100;
    let standardP = standardTicketCount / totalTicketCount *100;
    let kidP = kidTicketCount / totalTicketCount *100;

    console.log(`Total tickets: ${totalTicketCount}`);

console.log(`${studentP.toFixed(2)}% student tickets.`);

console.log(`${standardP.toFixed(2)}% standard tickets.`);

console.log(`${kidP.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"]);