function birthdayCakeCandles(candles) {
    // Get the max value
    const max = Math.max(...candles)
    let result= 0;
    // Filter all the values that are equal to max
    candles.filter((el) => {
        if (el == max) {
            result += 1
        }
    })
    return result
}

console.log(birthdayCakeCandles([3,2,1,3]));
console.log(birthdayCakeCandles([90,2,91,90, 90, 2]));