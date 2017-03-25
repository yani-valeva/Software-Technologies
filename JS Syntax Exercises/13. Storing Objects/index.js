function solve(args) {
    let students = [];

    for (let i = 0;i < args.length; i++) {
        let currentStudentData = args[i].split(/\s->\s/);
        let student = { name: currentStudentData[0], age: currentStudentData[1], grade: currentStudentData[2]};
        students.push(student);
    }

    students.forEach(student => {
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    });
}

solve(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);