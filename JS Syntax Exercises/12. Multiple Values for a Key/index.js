function solve(args) {
    let neededKey = args.pop();
    let result = {};

    for (let i = 0; i < args.length; i++) {
        let currentPair = args[i].split(' ');
        let currentKey = currentPair[0];
        let currentValue = currentPair[1];

        if (result[currentKey]){
            result[currentKey].push(currentValue);
        } else {
            result[currentKey] = [currentValue];
        }

    }
    console.log(result[neededKey] ? result[neededKey].join('\n') : "None");
}

solve(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);