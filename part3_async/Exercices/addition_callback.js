
// deux fonctions de callback : callback et error
const add = (number, callback, error) => {
    setTimeout(() => {
        if (isNaN(parseInt(number))) {
            error('not a number');

            return;
        }
        callback(number);
    }, 1000);
}

// premier appel de la fonction add
add(1, number => {
    let sum = number;

    add(2, number => {
        sum += number;

        console.log(`sum : ${sum}`);
    },
        error => console.error(erro));

}, error => console.error(error));


// tester l'erreur renvoyer par la fonction error 
add(1, number => {
    let sum = number;
    add("a", number => {
        sum += number;

        console.log(sum);
    }, error => console.error(error));
}, error => console.error(error));


// Addition trois nombres avec add  on tombe vite sur ce que l'on appelle callback hell 
// heureusement on d'autres solutions nottament les Promesses
add(1,
    number =>
        add(2 + number, number =>
            add(3 + number,
                number => { console.log(number) }
            )
        )
)