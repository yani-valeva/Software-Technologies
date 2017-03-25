function solve(args) {
    args = args.map(Number);

    if (args[0] <= args[1]){
        console.log(args[0] * args[1]);
    } else {
        console.log((args[0] / args[1]));
    }
}

solve(['144', '12']);