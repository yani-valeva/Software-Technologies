function printNumbers(args) {
    args = args.map(Number);

    for (let i = args.length - 1; i >= 0; i--){
        console.log(args[i]);
    }
}

printNumbers(['20', '1', '20', '1', '20']);