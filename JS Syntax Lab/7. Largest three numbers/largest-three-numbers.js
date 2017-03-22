function solve(args) {
    let arr = args.map(Number);
    let sortedNumbers = arr.sort((a, b) => b - a);
    let count = Math.min(sortedNumbers.length, 3);

    for (let i = 0; i < count; i++){
        console.log(sortedNumbers[i]);
    }
}

solve(['10', '30', '15', '20', '50', '5']);