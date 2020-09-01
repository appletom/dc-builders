class Person {
    constructor(inputName) {
        this.name = inputName;
        this.health = 100;
        this.weapon = null;
    } 
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    attack(person) {
        this.health -= this.weapon;
    }
}