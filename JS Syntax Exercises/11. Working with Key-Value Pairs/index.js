function solve(args) {
    let neededKey = args.pop();
    let result = [];

    for (let i = 0; i < args.length; i++) {
        let currentPair = args[i].split(' ');
        let currentKey = currentPair[0];
        let currentValue = currentPair[1];
        result[currentKey] = currentValue;
    }
    console.log(result[neededKey] || "None");
}

solve(['3 bla', '3 bla', '2']);