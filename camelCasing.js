//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let strToArr = string.split('')
    let newArr =[]
    for (let i = 0; i < strToArr.length; i++) {
       if (strToArr[i].includes(strToArr[i].toUpperCase())) {
        newArr.push(" ") + newArr.push(strToArr[i]) 
       } else {
           newArr.push(strToArr[i])
       }
    }
    return newArr.join('')
}

console.log(solution('camelCasingTest'))