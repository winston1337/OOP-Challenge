// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.


class pokemon {
    constructor (properties) {
        this.name = properties.name;
        this.type = properties.type;
        this.attack = properties.attack;
    }
    attack() {
        return `${this.name} just used ${this.attack}`;
    }

}
const pikachu = new pokemon({
    name: 'pikachu',
    type: 'electric',
    attack: 'thunderbolt'
})
const charizard = new pokemon({
    name: 'charizard',
    type: 'fire',
    attack: 'fireBlast'
})
