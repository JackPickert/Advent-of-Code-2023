function findCalibrationNumbersIncludingThoseSpelled(str) {
    const bigRegex = /one|two|three|four|five|six|seven|eight|nine/g;
    const numberMap = new Map();
    numberMap.set('one', "1");
    numberMap.set('two', "2");
    numberMap.set('three', "3");
    numberMap.set('four', "4");
    numberMap.set('five', "5");
    numberMap.set('six', "6");
    numberMap.set('seven', "7");
    numberMap.set('eight', "8");
    numberMap.set('nine', "9");
    numberMap.set('eno', "1");
    numberMap.set('owt', "2");
    numberMap.set('eerht', "3");
    numberMap.set('ruof', "4");
    numberMap.set('evif', "5");
    numberMap.set('xis', "6");
    numberMap.set('neves', "7");
    numberMap.set('thgie', "8");
    numberMap.set('enin', "9");
    const everyLine = str.split("\n");
    const myArr = [];
    let myString = "";
    for (let i = 0; i < everyLine.length; i += 1) {
        for (let j = 0; j < everyLine[i].length; j += 1) {
            if (parseInt(everyLine[i][j]) || parseInt(everyLine[i][j]) === 0) {
                if (everyLine[i].search(bigRegex) > -1 && everyLine[i].search(bigRegex) < j) {
                    myString = numberMap.get(everyLine[i].match(bigRegex)[0]);
                    console.log(myString);
                    break;
                } else { myString = everyLine[i][j];
                    console.log(myString);
                    break;
                }
            }          
        }
        for (let k = (everyLine[i].length - 1); k > -1; k -= 1) {
            if (parseInt(everyLine[i][k]) || parseInt(everyLine[i][k]) === 0) {
                if (everyLine[i].slice(k).search(bigRegex) > -1) {
                    console.log(myString);
                    console.log(numberMap.get(everyLine[i].match(bigRegex)[everyLine[i].match(bigRegex).length - 1]));
                    myString = myString + numberMap.get(everyLine[i].match(bigRegex)[everyLine[i].match(bigRegex).length - 1]);
                    console.log(myString);
                    break;
                } else { myString = myString + everyLine[i].slice(k, k + 1);
                    console.log(myString);
                    break;
                }
    }
}
    console.log(myString);
    myString = parseInt(myString);
    myArr.push(myString);
    }
    console.log(myArr);
    let superSum = myArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(superSum);
}



findCalibrationNumbersIncludingThoseSpelled(`9963onefourthree6oneightq`)

