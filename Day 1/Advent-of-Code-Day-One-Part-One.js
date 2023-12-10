function findCalibrationNumbers(str) {
    let everyLine = str.split("\n");
    let myArr = [];
    let myString = "";
    for (let i = 0; i < everyLine.length; i += 1) {
        for (let j = 0; j < everyLine[i].length; j += 1) {
            if (parseInt(everyLine[i][j]) || parseInt(everyLine[i][j]) === 0) {
                myString = everyLine[i].slice(j, j + 1);
                break;
            }             
        }
        for (let k = everyLine[i].length - 1; k > -1; k -= 1) {
            if (parseInt(everyLine[i][k]) || parseInt(everyLine[i][k]) === 0) {
                myString = myString + everyLine[i].slice(k, k + 1);
                break;
        }
    }
    myString = parseInt(myString);
    myArr.push(myString);
    }
    let superSum = myArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(superSum);
}

