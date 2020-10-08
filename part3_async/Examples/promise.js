const p = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        if(number > 100) {
            reject(new Error('To big'));
            return;
        }
        resolve(number);
    }, 300);
    })
);

p(9)
.then( num => console.log(num))
.catch( err => console.error(err))