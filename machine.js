// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require("sync-input");

function starting() {
  console.log(`Starting to make a coffee\nGrinding coffee beans\nBoiling water\nMixing boiled water with crushed coffee beans
 Pouring coffee into the cup
 Pouring some milk into the cup
 Coffee is ready!`);
}
function inputUser() {
  console.log("Write how many cups of coffee you will need:");
  let user = Number(input());
  return user;
}
function calculateCoffe(inputUser) {
  const water = 200;
  const milk = 50;
  const beans = 15;
  console.log(`For ${inputUser} cups of coffee you will need:
${inputUser * water} ml of water
${inputUser * milk} ml of milk
${inputUser * beans} g of coffee beans`);
}

//RUN APP:
let data = inputUser();
calculateCoffe(data);
