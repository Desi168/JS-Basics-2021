function projectCreation(input){
    let name = input[0];
    let projectCount = Number(input[1]);
    let projectHours = 3 * projectCount;

    console.log(`The architect ${name} will need ${projectHours} hours to complete ${projectCount} project/s.`)
}
projectCreation(["George","4"]);