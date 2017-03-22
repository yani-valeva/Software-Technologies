function calculate(args) {
    let arr = args[0].split(' ');
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);

    if (num1 + num2 === num3){
        console.log(Math.min(num1, num2) + ' + ' + Math.max(num1, num2)+ ' = ' + num3);
    } else if (num2 + num3 === num1){
        console.log(Math.min(num2, num3) + ' + ' + Math.max(num2, num3)+ ' = ' + num1);
    } else if (num3 + num1 === num2){
        console.log(Math.min(num3, num1) + ' + ' + Math.max(num3, num1)+ ' = ' + num2);
    } else {
        console.log(`No`)
    }
}

calculate(["18 15 7"]);