function sum(...args) {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result
}

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;