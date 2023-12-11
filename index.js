const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

const Protector = new Shield(10);
const Sword = new Weapon("🗡️ Sword", 1)
const Heracles = new Fighter("🧔‍♂️ Heracles", 20, 6, Sword, Protector);
const Boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

let round = 0

while (Heracles.isAlive() && Boar.isAlive()) {
  round++;
  console.log(`🔔 Round ${round}`);
  Heracles.fight(Boar);
  console.log(`${Heracles.name} 🗡️  ${Boar.name} 💙: ${Boar.life}`);
  Boar.fight(Heracles);
  console.log(`${Boar.name} 🗡️  ${Heracles.name} 💙: ${Heracles.life}`);
}

if (Heracles.life === 0) {
  console.log(`💀 ${Heracles.name} is dead`)
  console.log(`🏆 ${Boar.name} wins! (💙 ${Boar.life}) `);
} else {
  console.log(`💀 ${Boar.name} is dead`)
  console.log(`🏆 ${Heracles.name} wins! (💙 ${Heracles.life})`);
}