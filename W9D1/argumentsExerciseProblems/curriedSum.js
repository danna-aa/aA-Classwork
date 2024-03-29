Array.prototype.sumNums = function() {
    let total = 0;
    for (let i = 0; i<this.length; i++){
        total += this[i];
    }
    return total;
}

function curriedSum(numArgs){
    let numbers = [];
    function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.sumNums();
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56


















// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
Function.prototype.curry = function(numArgs) {
    numbers = []
    let that = this
    function _curry(num){
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that(...numbers);
        } else {
            return _curry;
        }
    }
    return _curry;
}








function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30