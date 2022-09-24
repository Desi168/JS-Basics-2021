function multiplicationTable() {
    for (let h = 1; h <= 10; h++) {
        for (let m = 1; m <= 10; m++) {
            let product = h * m;
            console.log(`${h} * ${m} = ${product}`);
        }        
     }
}
multiplicationTable();