function solve(args) {
    let objects = {};

    for (let i = 0; i < args.length; i++) {
        let studentData = args[i].split(/\s->\s/);
        let key = studentData[0];
        let value = studentData[1];

        if (key === 'age' || key === 'grade'){
            value = Number(value);
        }
        objects[key] = value;
    }

    console.log(JSON.stringify(objects));
}

solve(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia'])