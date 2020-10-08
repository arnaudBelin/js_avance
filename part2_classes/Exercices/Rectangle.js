class Rectangle {
    constructor(w, h) {
        this._w = w;
        this._h = h;
    }

    get w(w) {
        return this._w;
    }

    get h(h) {
        return this._h;
    }

    set w(w) {
        this._w = w;
    }

    set h(h) {
        this._h = h;
    }

    perimeter() {
        return 2 * (this._h + this._w);
    }

    area() {
        return this._w * this._h;
    }
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

const sq1 = new Square(3);

console.log(`Square : ${sq1.area()} cm2, dim : ${sq1.h} ${sq1.w} perimeter : ${sq1.perimeter()} cm`);
