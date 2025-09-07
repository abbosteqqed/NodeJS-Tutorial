var titleToNumber = function (columnTitle) {
    let columnNumber = 0
    for(let i=0; i<columnTitle.length; i++){
        columnNumber += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - i - 1)
    }
    return columnNumber
};


console.log(titleToNumber("ZY"))
