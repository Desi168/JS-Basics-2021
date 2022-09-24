function suppliesForSchool(input)
{
    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let money = penCount * 5.80 + markerCount * 7.20 + detergent * 1.20;
    let totalMoney = money - money * (discount / 100);

    console.log(totalMoney);
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
);