const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => { 
    if (num % 2 == 0) {
        return true;
    }
};

var filterArray = (arr, f) => {
    var fArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            fArr.push(arr[i]);
        } 
    }

    return fArr;
}

console.log(filterArray(mixedArray, isEven));