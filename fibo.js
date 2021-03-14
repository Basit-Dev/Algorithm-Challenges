// Get fibo numbers

function getFibo(num) {
    let input = 0;
    let output = 1;
 for (let i = 0; i < num; i++) {
    // 0
    // 1
    // 2

    input = output++; 
    // 0 - input(0) + output(1) = 1
    // 1 - input(1) + output(1) = 2
    // 2 - input(2) + output(1) = 3 
    // 3 - input(3) + output(2) = 5
    // 4 - input(5) + output(3) = 8
    // 5 - input(8) + output(5) = 13
    // 6 - input(13) + output(8) = 21
    // 7 - input(21) + output(13) = 34
     console.log(input);
     
 }
}

getFibo(5)