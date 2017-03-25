function solve(args) {
    let arr = [];

    for (let i = 0; i < args.length; i++){
        let currentOperation = args[i].split(' ');
        let operation = currentOperation[0];
        let number = Number(currentOperation[1]);

        switch (operation){
            case 'add':
                arr.push(number);
                break;
            case 'remove':
                if (number >= 0 && number < arr.length){
                    arr.splice(number, 1);
                }
                break;
        }
    }

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

}

solve(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);