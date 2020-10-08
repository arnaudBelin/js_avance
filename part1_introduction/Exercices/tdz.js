const { catchClause } = require("@babel/types");

function tdz() {
    console.log(tdz);

    let tdz = "Temporal Dead Zone";
}
try {
    tdz();

} catch (e) {
    //console.log(e);
    // ReferenceError: Cannot access 'tdz' before initialization

}

