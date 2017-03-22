function solve(args) {
    let number = Number(args[0]);
    let result = "";

    for (let i = 1; i <= number; i++) {
        if (isSymetric(i)){
            result += i + " ";
        }
    }

    console.log(result);

    function isSymetric(someNumber) {
        let currentNumber = someNumber.toString();
        for (let i = 0; i <= currentNumber.length/2; i++){
            if (currentNumber[i] !== currentNumber[currentNumber.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

}

solve(['100']);