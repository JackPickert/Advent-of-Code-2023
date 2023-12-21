function findCalibrationNumbersIncludingThoseSpelled(str) {
    const bigRegex = /one|two|three|four|five|six|seven|eight|nine/g;
    const otherBigRegex = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;
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
    let myArr = [];
    let reverseArr = [];
    let myString = "";
    let secondString = "";
    for (let i = 0; i < everyLine.length; i += 1) {
        for (let j = 0; j < everyLine[i].length; j += 1) {
            if (parseInt(everyLine[i][j]) || parseInt(everyLine[i][j]) === 0) {
                if (everyLine[i].search(bigRegex) > -1 && everyLine[i].search(bigRegex) < j) {
                    myString = numberMap.get(everyLine[i].match(bigRegex)[0]);
                    break;
                } else { myString = everyLine[i][j];
                    break;
                }
            }          
        }
        for (let k = 0; k < everyLine[i].length; k += 1) {
              reverseArr.push(everyLine[i].slice(everyLine[i].length - k - 1, everyLine[i].length - k));
        }
        const reverseLine = reverseArr.join('')
        for (let l = 0; l < reverseLine.length; l += 1) {
            if (parseInt(reverseLine[l]) || parseInt(reverseLine[l]) === 0) {
                if (reverseLine.search(otherBigRegex) > -1 && reverseLine.search(otherBigRegex) < l) {
                    secondString = numberMap.get(reverseLine.match(otherBigRegex)[0]);
                    break;
                } else { secondString = reverseLine[l];
                    break;
                }
        } else {
            continue;
        }
        } 
    myString = parseInt(myString + secondString);
    myArr.push(myString);
    reverseArr = [];
    }
    let superSum = myArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(superSum);
}