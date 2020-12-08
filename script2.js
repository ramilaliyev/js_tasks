const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

console.log(getWorthyWorkers(workers));


function getWorthyWorkers (arr) {
    var worthyWorkers = [];

    // Один из вариантов

    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i].salary > 1000) {
    //         worthyWorkers.push(arr[i].name);
    //     }
    // }

    arr.forEach(element => {
        if (element.salary > 1000) {
            worthyWorkers.push(element.name);
        }
    });
    return worthyWorkers;
}