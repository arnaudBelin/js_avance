
class Rectangle{
    constructor(w, h){
        // attributs en JS 
        this._w = w;
        this._h = h;
    }

    // Setters set est un mot reservé de JS
    set w(w){
        this._w = w;
    }

     set h(h){
        this._h = h;
    }

    // Getters get est un mot reservé du JS
    get w (){
        return this._w ;
    }

    get h (){
        return this._h ;
    }
}

const rec = new Rectangle(10, 9);

// getter 
console.log( rec.h );

// setter
rec.w = 8;

console.log(rec.w);

