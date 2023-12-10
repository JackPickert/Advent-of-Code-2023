

function cubesLessThan(str) {
    const allProducts = [];
    const redRegex = /[1-9]*[0-9] red/g
    const greenRegex = /[1-9]*[0-9] green/g
    const blueRegex = /[1-9]*[0-9] blue/g
    const miniRedRegex = / red/g
    const miniGreenRegex = / green/g
    const miniBlueRegex = / blue/g
    const everyLine = str.split("\n");
    for (let i = 0; i < everyLine.length; i += 1) {
        const redArr = everyLine[i].match(redRegex);
        const greenArr = everyLine[i].match(greenRegex);
        const blueArr = everyLine[i].match(blueRegex);
        const maxNumbers = [];
        const redArrOnlyNumbers = [];
        const greenArrOnlyNumbers = [];
        const blueArrOnlyNumbers = [];
        for (let i = 0; i < redArr.length; i += 1) {
            redArrOnlyNumbers.push(parseInt(redArr[i].replaceAll(miniRedRegex, "")));
        }
        for (let i = 0; i < greenArr.length; i += 1) {
            greenArrOnlyNumbers.push(parseInt(greenArr[i].replaceAll(miniGreenRegex, "")));
        }
        for (let i = 0; i < blueArr.length; i += 1) {
            blueArrOnlyNumbers.push(parseInt(blueArr[i].replaceAll(miniBlueRegex, "")));
        }
            maxNumbers.push(Math.max(...redArrOnlyNumbers));
            maxNumbers.push(Math.max(...greenArrOnlyNumbers));
            maxNumbers.push(Math.max(...blueArrOnlyNumbers))
            const myProduct = maxNumbers.reduce((accumulator, currentValue) => {
                return accumulator * currentValue;
            });   
        allProducts.push(myProduct);

    }

    const superSum = allProducts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(superSum);
    }


