
// défini dans le bloc courant 
let i = 10;

// le let de la boucle est définie à chaque fois que la boucle est évaluée (tour de boucle)
for (let i = 0; i < 10; i++) {
    
    console.log(i);
}

// 
































for (let j = 0; j < 10; j++) {}
// console.log(j);  // j is not defined


// on ne peut pas ré-assigner j dans le troisième argument de la boucle for
// for (const j = 0; j < 10; j++) {}


// 2. 

const STUDENTS = ['Alan', 'Bernard', 'Jean' ];

for(const student of STUDENTS ){
    console.log(student);
}