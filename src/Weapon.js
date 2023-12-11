class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage || 10;
  };
};

module.exports = Weapon;