

class Model {

    // le constructor est exécuté à l'instanciation de la classe
    // un paramètre de constructor obligatoire à l'instanciation de la classe Model
    constructor(db){
        this.tableName = "posts";
        this.db = db ;
        console.log("hello constructor")
    }
}

// On passe une valeur à l'attribut db de la classe à l'instanciation
// le constructor récupère dans les paramètres les arguments de la classe
const m = new Model("MongoDB") ;

console.log(m.tableName);

console.log(m.db);
