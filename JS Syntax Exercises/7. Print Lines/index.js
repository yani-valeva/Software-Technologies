function printLines(args) {
    for (let i = 0; i < args.length; i++){
        if (args[i] !== 'Stop'){
            console.log(args[i]);
        } else {
            return;
        }
    }
}

printLines(['3', '6', '5', '4', 'Stop', '10', '12']);