function oldBooks(input){

    let searchedBook = input[0];
    let index = 1;
    let libraryBook = input[index];
    let bookIsFound = false;
    

    while (libraryBook !== "No More Books") {
        if (searchedBook == libraryBook) {
            bookIsFound = true;
            break;
        }
        index++;
        libraryBook = input[index];
    }

    if (bookIsFound == false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
     console.log(`You checked ${index - 1} books and found it.`);   
    }
}
oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"]);