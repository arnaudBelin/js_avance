


function model(){
    this.count = 10;

    function subModel(){
        console.log(this.count);
    }

    subModel();
}

console.log(model());