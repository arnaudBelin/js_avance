

function accumulator(numbers, acc = 0) {
    if (numbers.length === 0) return acc;

    let curr = numbers.shift();
    acc = curr + acc ;

    return accumulator(numbers, acc)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
let total = accumulator(numbers);

console.log(total)
