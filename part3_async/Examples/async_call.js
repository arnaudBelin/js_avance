

const login = (email, password, callback ) => {
    setTimeout(() => {
        // ...
    }, 1000);
}


function foo(num, baz ){

    console.log(baz(num)) ;
}

foo( 7, num => num * 3 );

function calcul(x, y, callback){

    return callback(x, y);
}

