function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);//приема 2ма човека
    index++;// приема масив като започва от нулева позиция

    let command = input[index];//приема име object and classes
    index++;
    let sumAvgGrades = 0;
    let counter = 0;

    while (command !== "Finish") {
       // let namePresentation = command;
        //index++;
        let name = command;//приема 2рата стойност от масива - object and classes
        let sumGrades = 0;//стойността от предишната презентация се занулява
        
        counter++;//колко общо оценки от всяка една презентация има - влиза в while и приема първа стойност 1, после става 2 при втората презентация
        for (let i = 0; i < people; i++) {
            let grades = Number(input[index]);//приема пърават оценка, която е 5.77
            index++;
            sumGrades += grades;
        }
        let avgGrade = sumGrades / people;
        sumAvgGrades += avgGrade;
        console.log(`${name} - ${avgGrade.toFixed(2)}.`);
        command = input[index];//приема второто име на следващата презентация
        index++;
    }
    let AVG = sumAvgGrades / counter;
    console.log(`Student's final assessment is ${AVG.toFixed(2)}.`);
}
trainTheTrainers(["2", "Objects and Classes", "5.77",
 "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);