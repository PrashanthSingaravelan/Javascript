function getMilk(money,costPerBottle) {

    console.log("leavehouse");

    console.log("move right");  console.log("move right");

    console.log("move up");     console.log("move up"); console.log("move up"); console.log("move up");

    console.log("move right");  console.log("move right");

    console.log("Buy " + calcBottles(money,costPerBottle) + " bottles of milk");

    console.log("move left");  console.log("move left");

    console.log("move down");  console.log("move down");   console.log("move down");   console.log("move down");

    console.log("move left");  console.log("move left");

    console.log("enter house");

    return calcChange(money,costPerBottle);

}


function calcBottles(startingMoney , costPerBottle) {

    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}


function calcChange(startingAmount , costPerBottle) {

    var change = startingAmount % costPerBottle;

    return change;

}
console.log("Hello master, here is your : " + getMilk(5,1.5) + " change.");
                                    // total-money and cost of each milk