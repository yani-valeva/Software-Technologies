function solve(args) {
    let students = [];
    args.forEach(dataString => {
        let student = JSON.parse(dataString);
        students.push(student);
    });

    students.forEach(stud => {
        console.log(`Name: ${stud.name}`);
        console.log(`Age: ${stud.age}`);
        console.log(`Date: ${stud.date}`);
    });
}

solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}', '{"name":"Tosho","age":11,"date":"04/04/2005"}']);