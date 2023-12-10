const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, weapon, shield) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.shield = shield;
        this.life = MAX_LIFE;
    };

    getWeaponDamage() {
        return this.weapon ? this.weapon.damage : 0;
    }

    getShieldProtection() {
        return this.shield ? this.shield.protection : 0;
    }
    
    // Method to calculate Damage done (Fighter Strength + Weapon Damage)
    getDamage() {
        // console.log(this.getWeaponDamage());
        return this.strength + this.getWeaponDamage();
    };

    // Method to calculate Defense achieved (Fighter Dexterity + Shield Protection)    
    getDefense() {
        // console.log(this.getShieldProtection());
        return this.dexterity + this.getShieldProtection();
    };
    
    fight(enemy) {
      const damageDone = Math.floor(Math.random() * this.getDamage() - 1) + 1;
      const damageTaken = Math.max(0, damageDone - enemy.getDefense());
      enemy.life = Math.max(0, (enemy.life - damageTaken));
    }

    isAlive() {
      return this.life > 0
    };  
};

module.exports = Fighter;