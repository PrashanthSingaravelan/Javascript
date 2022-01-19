var output = [];
var num1 = 1;
// without loop
function fizzbuzz() {

    if (num1 % 3 == 0 && num1 % 5 == 0) { output.push("fizzbuzz"); } else if (num1 % 3 == 0) { output.push("fizz"); } else if (num1 % 5 == 0) { output.push("buzz"); } else { output.push(num1); }

    num1 += 1;

    console.log(output);
}

// with loop
// function fizzbuzz() {

//     while(num1<=100) {

//     if (num1 % 3 == 0 && num1 % 5 == 0) { output.push("fizzbuzz"); } else if (num1 % 3 == 0) { output.push("fizz"); } else if (num1 % 5 == 0) { output.push("buzz"); } else { output.push(num1); }

//     num1 += 1;

//     }

//     console.log(output);
// }

// with loop

function fizzbuzz() {
    for (var num1 = 1; num1 <= 100; num1++) {
        if (num1 % 3 == 0 && num1 % 5 == 0) { output.push("fizzbuzz"); } else if (num1 % 3 == 0) { output.push("fizz"); } else if (num1 % 5 == 0) { output.push("buzz"); } else { output.push(num1); }
    }
    console.log(output);
}