const numbers = [7, 9, 10, 1, 2, 3, 71, 8];


const nNumbers  = numbers.map(num => {

    if (num % 2 === 0) return num * 3;

    return num * 5;
});
