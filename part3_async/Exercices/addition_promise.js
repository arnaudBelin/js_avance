const add = number => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(parseInt(number))) {
                reject(new Error('not a number ...'));

                return;
            }

            resolve(number);
        }, 1000);
    })
);

add(1)
    .then(number => add(2 + number))
    .then(sum => console.log(sum))
    .catch(error => console.error(error));