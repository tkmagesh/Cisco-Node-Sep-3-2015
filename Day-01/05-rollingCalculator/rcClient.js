var calc = require('./rollingCalculator');
calc.add(100);
calc.subtract(50);
calc.multiply(4);
calc.divide(10);
console.log(calc.getResult());
