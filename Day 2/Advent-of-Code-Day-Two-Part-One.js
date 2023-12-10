function cubesLessThan(str) {
    const myArr = [];
    const myOtherArr = [];
    const myFirstRegex = /[1-9][4-9] green/; 
    const mySecondRegex = /[1-9][3-9] red/; 
    const myThirdRegex = /[1-9][5-9] blue/; 
    const myImportantRegex = /Game [0-9]*[0-9]/
    const myLittleRegex = /Game /g
    const everyLine = str.split("\n");
    for (let i = 0; i < everyLine.length; i += 1) {
        if (everyLine[i].search(myFirstRegex) === -1 && everyLine[i].search(mySecondRegex) === -1 && everyLine[i].search(myThirdRegex) === -1) {
            myArr.push(everyLine[i].match(myImportantRegex)[0]);
        }
}
    for (let i = 0; i < myArr.length; i += 1) {
        myOtherArr.push(parseInt(myArr[i].replaceAll(myLittleRegex, "")));
}
let superSum = myOtherArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(superSum);
}
