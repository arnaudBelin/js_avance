

// 1 1 2 3 5 8 13 21 34 55 89 ...
const fibo_synchrone = n => {

    const numbers = [1, 1];
    for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }

    return numbers;
}

console.log(fibo_synchrone(10));

// Méthode asynchrone
const TIMER = 100;

const fibo_asynchrone = (u, v) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            [u, v] = [v, u + v];
            resolve([u, v]); // ici une fois que l'on a resolve la promesse s'arrête
        }, TIMER);
    }
);

fibo_asynchrone(1, 1)
    .then(val => fibo_asynchrone(val[0], val[1]))
    .then(val => console.log(val));


// on a peut peut-être y arriver async 
const fibo_async_await = async (n) => {
    let [u, v] = [1, 1];

    for (const _ of Array(n).keys()) {
        // on lance une promesse asynchrone await permet d'attendre le resolve de la promesse
        // avant de passer à la suite du programme
        [u, v] = await fibo_asynchrone(u, v)
    }

    return v;
}

// fibo_async_await(100).then( v => console.log(v) );
const delay = ms => new Promise((resolve, reject) => setTimeout(() => { resolve(1) }, ms));

const example_async_await = async () => {

    // on rend l'exécution de l'asynchrone de "manière synchrone"
    const num1 = await delay(5000); // on attend que la promesse retourne quelque chose avant de pass
    console.log('step1', num1);
    const num2 = await delay(2000);
    console.log('step2', num2);
    const num3 = await delay(1000);
    console.log('step3', num3);

    return { num1, num2, num3 }
}

console.log('Start');
example_async_await().then(res => console.log(res));
console.log('End');
