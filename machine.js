// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require("sync-input");
const water = 200;
const milk = 50;
const beans = 15;

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

  console.log(`For ${inputUser} cups of coffee you will need:
${inputUser * water} ml of water
${inputUser * milk} ml of milk
${inputUser * beans} g of coffee beans`);
}
function coffeeAvailable(){
    console.log("Write how many ml of water the coffee machine has:");
    let userWater=Number(input());
    console.log("Write how many ml of milk the coffee machine has:");
    let userMilk=Number(input());
    console.log("Write how many grams of coffee beans the coffee machine has:");
    let userBeans=Number(input());
    console.log("Write how many cups of coffee you will need:");
    let userCups=Number(input());

}

//RUN APP:
let data = inputUser();
calculateCoffe(data);
