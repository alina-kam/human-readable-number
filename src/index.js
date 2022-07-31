module.exports = function toReadable (number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimal = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numberStr = number.toString();
    const numberLen = numberStr.length;

    let readableNumber = [];

    if (number === 0){
        readableNumber.push('zero');
    }

    if (numberStr[numberLen-1] !== '0'){
        readableNumber.unshift(units[+numberStr[numberLen-1]-1]);
    }

    if (numberStr[numberLen-2] === undefined){
        return readableNumber.toString();
    }
    else if (numberStr[numberLen-2] === '1'){
        readableNumber.splice(0, 1, teens[+numberStr[numberLen-1]]);
        }
        else if (numberStr[numberLen-2] !== '0'){
                readableNumber.unshift(decimal[+numberStr[numberLen-2]-2]);
            }

    if (numberStr[numberLen-3] === undefined){
        return readableNumber.join(' ');
    }
    else{
        readableNumber.unshift(units[+numberStr[numberLen-3]-1], 'hundred');
    }
    return readableNumber.join(' ');
}

console.log(module.exports(990));
