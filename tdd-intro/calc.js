class Calc {
    construcor(){

    }
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    divide(num1, num2) {
        return num1/num2;
    }
    addAsync(num1, num2, callback) {
        callback(num1 + num2);
    }
    subAsync(num1, num2, callback) {
        callback(num1 - num2);
    }
}

module.exports = Calc