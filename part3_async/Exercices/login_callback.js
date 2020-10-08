const login = (email, password, callback ) => {
    setTimeout(() => {
        callback ( { email });
    }, 1000);
}

login('alan@alan.fr', 1234567890, response => {
    console.log(response );
    // mettre à jour une partie du DOM
    
});

// Exemple de fonction de callback
function calcul(x, y, callback){

    return callback(x, y);
}

const res = calcul(1, 2, (x, y) => x + y);

console.log(res);

export default res;