/* 
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const getHr = s.slice(0,2);
    let convertHr = 0;
    let result = '';
    if (s.endsWith('PM') && getHr < 12  ) {
        convertHr = Number(getHr) + 12;
        result = convertHr + s.slice(2,8)
    } else if(s.endsWith('PM') && getHr >= 12 ){
        result = s.slice(0,8)
    } else if (s.endsWith('AM') && getHr >= 12 ){
        convertHr = Number(getHr) - 12;
        result = "0" + convertHr + s.slice(2,8)
    } else if(s.endsWith('AM') && getHr < 12 ){
        result = "0" + s.slice(1,8)
    }
    return result
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('13:05:45AM'));
console.log(timeConversion('06:05:45AM'));
console.log(timeConversion('12:05:45PM'));