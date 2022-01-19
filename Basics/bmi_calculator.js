function bmiCalculator(weight, height) {
    return (Math.round(weight / height ^ 2));
}

var bmi;

bmi = bmiCalculator(85, 5.5);

console.log(bmi)