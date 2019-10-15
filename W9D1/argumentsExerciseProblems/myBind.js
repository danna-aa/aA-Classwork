Function.prototype.myBind = function(context, ...args1) {
    // return () => this.apply(context); //ES5
    let arr = Array.from(args1)
    let that = this;
    return function(...args2){ 
        arr = arr.concat(args2)
        return that.apply(context, arr)
    };
};

// Function.prototype.myBind = function (...args1) {
//     let context = args1.shift();
//     let arr = Array.from(args1);
//     let that = this;
//     return function (...args2) {
//         arr = arr.concat(args2)
//         return that.apply(context, arr)
//     };
// };


// Markov says meow to Ned!
// Pavlov says meow to Kush!
// Pavlov says meow to a tree!
// Pavlov says meow to Markov!
// Pavlov says meow to me!




class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true