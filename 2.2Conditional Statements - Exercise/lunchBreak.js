function oddEvenNumber(num) {
    let even_count = 0;
    let odd_count = 0;
    while (num > 0)
    {
        let rem = num % 10;
        if (rem % 2 === 0)
            even_count++;
        else
            odd_count++;
        num = Math.floor(num/ 10);
    }
    if (even_count % 2 === 0 &&
        odd_count % 2 !== 0)
        return 1;  
     //console.log("{ odd: "
        //+ odd_count + ", " + "even: "
        //+ even_count + " }");
        return{odd: odd_count, even: even_count }
 
}
oddEvenNumber(1234)