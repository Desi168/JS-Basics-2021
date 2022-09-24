function examPreparation(input){

    let enoughBadGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    let taskName = "";
    let sumGrade;
    let avgGrade;
    let numProblems;
    let countbadGrade;
    let isNeedBreak = false;


    while (command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            countbadGrade++;
        }

        if (enoughBadGrades === countbadGrade) {
            isNeedBreak = true;
            console.log(`You need a break, ${countBadGrade} poor grades.`);
            break;
        }

        sumGrade += grade;
        numProblems++;

        if (!isNeedBreak) {
            avgGrade = sumGrade / numProblems;
            console.log();
        }

       
    }
}