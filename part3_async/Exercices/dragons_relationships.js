import * as fs from 'fs';

const readJSON = fileName => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(fileName, { encoding: 'utf8' },
                (err, data) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
        }
    );
}

// v1 correction officielle

Promise.all([readJSON('./data/dragons.json'), readJSON('./data/relationships.json')])
    .then(data => {

        const { dragons } = data[0];
        const { relationships } = data[1];

        //console.log(dragons);
        //console.log(relationships);

        let dragonRelations = [];
        for (relationship of relationships) {

            const dragon = dragons.filter(dragon => dragon.id === relationship.id); //filter renvoie un tableau
            const { name } = dragon[0];

            const relations = [];
            const { relation } = relationship;
            //console.log(relation);
            for (const id of relation) {

                const { name: dragonName } = dragons.filter(dragon => dragon.id === id)[0];
                relations.push(dragonName);

            }
            dragonRelations.push({ name, relations });
            //console.log(relationship);
        }
        console.log(dragonRelations);

    });

// V2 correction avancée
// Promise.all([readJSON('./data/dragons.json'), readJSON('./data/relationships.json')])

//     // destructuration et assignation des variables dans les paramètres de la fonction de callback
//     .then( ( [{ dragons }, {relationships }] ) => {

//         const friends = new Map();

//         for (const { id, relation } of relationships) {
//             const { name } = dragons.find( d => d.id === id);

//             const names = dragons
//                 .filter( d => relation.includes(d.id) )
//                 .map(d => d.name);

//             friends.set(name, names);
//         }

//         console.log(friends);
//     })