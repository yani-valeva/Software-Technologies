function setValues(args) {
    let number = Number(args[0]);
    let arr = [];
    for (let i = 0; i < number; i++){
        arr[i] = 0;
    }
    for (let i = 1; i < args.length; i++){
        let currentPair = args[i].split(/\s-\s/);
        let currentIndex = Number(currentPair[0]);
        let currentValue = Number(currentPair[1]);
        arr[currentIndex] = currentValue;
    }

    for (let i = 0; i < number; i++){
        console.log(arr[i]);
    }
}

setValues(['5', '0 - 3', '3 - -1', '4 - 2']);