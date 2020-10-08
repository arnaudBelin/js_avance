class Parser{
    constructor(sep){
        // this + nom de l'attribut attache les attributs à l'instance de la classe
        this.sep = sep;
        this.parsed_line = [];
    }

    parser(line){
        this.parsed_line = line
            .split(this.sep) // ne pas mettre le séparateur en dur ça s'appelle du hardcoding ce n'est pas très modulable ...
            .map( s => s.trim() )
            .filter( Number );
    }

    get str(){
        
        return this.parsed_line.join(' ');
    }
}

const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

const parser = new Parser(':');
parser.parser(phrase);
console.log(parser.str);