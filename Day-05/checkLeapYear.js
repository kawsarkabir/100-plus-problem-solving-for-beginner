//  Check whether a year is a Leap Year or not (simplified way)
function isLeapYear(year){
    // const remainder = year % 4;
    if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    return false;
}
const  checkIsLeapYear = 2016;
console.log(isLeapYear(checkIsLeapYear));
