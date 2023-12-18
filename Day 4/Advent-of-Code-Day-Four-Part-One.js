function scratchCards(str) {
    let myBigSum = 0;
    const everyLine = str.split("\n");
    const cardNumbersRegex = /Card  * *[0-9]*[0-9]*[0-9]:/g; 
    for (let i = 0; i < everyLine.length; i += 1) {
        const thisLine = everyLine[i].replace(cardNumbersRegex, "");
        const leftAndRight = thisLine.split("|")
        const leftNumbers = leftAndRight[0].match(/[0-9]*[0-9]/g);
        const rightNumbers = leftAndRight[1].match(/[0-9]*[0-9]/g); 
        const leftNumbersTrimmedAndParsed = [];
        const rightNumbersTrimmedAndParsed = []; 
        for (let j = 0; j < leftNumbers.length; j += 1) {
            leftNumbersTrimmedAndParsed.push(parseInt(leftNumbers[j]));
        }
        for (let k = 0; k < rightNumbers.length; k += 1) {
            rightNumbersTrimmedAndParsed.push(parseInt(rightNumbers[k]));
        }
        let myNum = 0.5;
        for (let l = 0; l < leftNumbersTrimmedAndParsed.length; l += 1) {
            for (let m = 0; m < rightNumbersTrimmedAndParsed.length; m += 1) {
                if (leftNumbersTrimmedAndParsed[l] === rightNumbersTrimmedAndParsed[m]) {
                    myNum = myNum * 2; 
                }
            }
        }
        if (myNum >= 1) {
            myBigSum += myNum; 
        }
    }
    console.log(myBigSum);
}

