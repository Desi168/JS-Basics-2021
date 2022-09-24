function fishTank(input)
{
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * width * height;
    let volumeLiters = volume / 1000;
    percent = percent/100;
    let neededLiters = volumeLiters * (1 - percent); 

    console.log(volume);
    console.log(volumeLiters);
    console.log(neededLiters);
}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
);