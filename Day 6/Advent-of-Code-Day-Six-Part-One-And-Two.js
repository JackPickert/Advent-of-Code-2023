function waysToWin(...numbers) {
    const argsArr = [...numbers];
    let totalWaysToWin = [];
    for (let i = 0; i < argsArr.length; i += 2) {
        const numberArr = [];
        let timeLeftForRace = argsArr[i];
        let timeHoldingButton = 0;
        let waysToWin = 0;
        while (timeLeftForRace > 0) {
           numberArr.push(timeLeftForRace * timeHoldingButton)
           timeHoldingButton += 1;
           timeLeftForRace -= 1;
        }
        for (let j = 0; j < numberArr.length; j += 1) {
            if (numberArr[j] > argsArr[i + 1])
            waysToWin += 1;
        }
        totalWaysToWin.push(waysToWin);
    }

    let superSum = totalWaysToWin.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    });
    console.log(superSum);
}
