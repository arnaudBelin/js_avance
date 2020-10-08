let a = 1 ;

function calcul(){

    a = 2 + a ;

    console.log( a  , "calcul" );

    function sub_calcul(){
        let b = a + 1;

        console.log(b  , "sub_calcul");
    }

    sub_calcul();
}

calcul();