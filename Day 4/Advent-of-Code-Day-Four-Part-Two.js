function scratchCardsPlusCopies(str) {
    let everyLine = str.split("\n");
    const cardNumbersRegex = /Card  * *[0-9]*[0-9]*[0-9]:/g;
    const reachedByHowManyCards = new Array(everyLine.length).fill(0);
    const howManyOfThisCard = new Array(everyLine.length).fill(1);
    const howManyMatchesForThisCard = new Array(everyLine.length).fill(0);
    for (let i = 0; i < everyLine.length; i += 1) {
        let myNum = 0;
        const thisLine = everyLine[i].replace(cardNumbersRegex, "");
        const leftAndRight = thisLine.split("|")
        const leftNumbers = leftAndRight[0].match(/[0-9]*[0-9]/g);
        const rightNumbers = leftAndRight[1].match(/[0-9]*[0-9]/g); 
        const leftNumbersParsed = [];
        const rightNumbersParsed = []; 
        for (let j = 0; j < leftNumbers.length; j += 1) {
            leftNumbersParsed.push(parseInt(leftNumbers[j]));
        }
        for (let k = 0; k < rightNumbers.length; k += 1) {
            rightNumbersParsed.push(parseInt(rightNumbers[k]));
        }
        for (let l = 0; l < leftNumbersParsed.length; l += 1) {
            for (let m = 0; m < rightNumbersParsed.length; m += 1) {
                if (leftNumbersParsed[l] === rightNumbersParsed[m]) {
                    myNum += 1;
                    howManyMatchesForThisCard[i] += 1;
                }
            }
        }
        for (let n = 1; n < myNum + 1; n += 1) {
            reachedByHowManyCards[i + n] += 1;
        }
    }
    for (let o = 1; o < howManyOfThisCard.length; o += 1) {
        let counter1 = 1;
        let counter2 = 0;
            while (counter2 < reachedByHowManyCards[o]) {
                if ((o - counter1) >= 0 && howManyMatchesForThisCard[o - counter1] >= counter1) {
                howManyOfThisCard[o] += howManyOfThisCard[o - counter1]
                counter2 += 1;
                }
                counter1 += 1;
            }
        }
        let superSum = howManyOfThisCard.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });
        console.log(superSum);

        }