function solve(args) {
    let objects = args.map(JSON.parse);
    let results = {};

   for (let i = 0; i < objects.length; i++) {

        let theTown = objects[i]['town'];
        let income = objects[i]['income'];
        if (objects[i].town in results){
            results[objects[i].town] += objects[i].income;
        } else {
            results[objects[i].town] = objects[i].income;
        }
    }
    let sortedElements = Object.keys(results).sort();
    for (let town of sortedElements) {
        console.log(`${town} -> ${results[town]}`);
    }
}

solve(['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
]);