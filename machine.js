const input = require("sync-input");
const water = 200;
const milk = 50;
const beans = 15;
var machine = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  money: 550,
};
function statusCoffeeMachine() {
  console.log(`The coffee machine has:
${machine.water} ml of water
${machine.milk} ml of milk
${machine.beans} g of coffee beans
${machine.cups} disposable cups
$${machine.money} of money`);
}

function buy() {
  const espresso = { water: 250, milk: 0, beans: 16, price: 4 };
  const latte = { water: 350, milk: 75, beans: 20, price: 7 };
  const capuccino = { water: 200, milk: 100, beans: 12, price: 6 };
  console.log(
    "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"
  );
  let userInput = Number(input());

  switch (userInput) {
    case 1:
      subtractSupply(espresso.water, espresso.milk, espresso.beans);
      machine.money += espresso.price;
      break;
    case 2:
      subtractSupply(latte.water, latte.milk, latte.beans);
      machine.money += latte.price;
      break;
    case 3:
      subtractSupply(capuccino.water, capuccino.milk, capuccino.beans);
      machine.money += capuccino.price;
      break;
    default:
      console.log("Invalid input");
  }
}
function fillMachine() {
  console.log("Write how many ml of water you want to add: ");
  let userWater = Number(input());
  console.log("Write how many ml of milk you want to add:");
  let userMilk = Number(input());
  console.log("Write how many grams of coffee beans you want to add: ");
  let userBeans = Number(input());
  console.log("Write how many disposable cups you want to add: ");
  let userCups = Number(input());
  addSupply(userWater, userMilk, userBeans, userCups);
}
function takeMoney() {
  console.log(`I gave you $${machine.money}`);
  machine.money -= machine.money;
}
function addSupply(water, milk, beans, cups) {
  machine.water += water;
  machine.milk += milk;
  machine.beans += beans;
  machine.cups += cups;
}
function subtractSupply(water, milk, beans) {
  machine.water -= water;
  machine.milk -= milk;
  machine.beans -= beans;
  machine.cups--;
}
function menu() {
  console.log("\nWrite action (buy, fill, take):");
  let user = String(input());
  switch (user) {
    case "buy":
      buy();
      console.log("");
      statusCoffeeMachine();
      break;
    case "fill":
      fillMachine();
      console.log("");
      statusCoffeeMachine();
      break;
    case "take":
      takeMoney();
      console.log("");
      statusCoffeeMachine();
      break;
    default:
      console.log("Invalid input");
  }
}
function coffeeAvailable() {
  console.log("Write how many ml of water the coffee machine has:");
  let userWater = Number(input());
  console.log("Write how many ml of milk the coffee machine has:");
  let userMilk = Number(input());
  console.log("Write how many grams of coffee beans the coffee machine has:");
  let userBeans = Number(input());
  console.log("Write how many cups of coffee you will need:");
  let userCups = Number(input());
  cupsOfCoffee(userWater, userMilk, userBeans, userCups);
}
function cupsOfCoffee(userWater, userMilk, userBeans, userCups) {
  var totalW = Math.floor(userWater / water);
  var totalM = Math.floor(userMilk / milk);
  var totalB = Math.floor(userBeans / beans);
  var total = Math.min(totalB, Math.min(totalW, totalM));

  var res = total - userCups;
  if (total > userCups) {
    console.log(
      `Yes, I can make that amount of coffee (and even ${res} more than that)`
    );
  } else if (total == userCups) {
    console.log("Yes, I can make that amount of coffee");
  } else {
    console.log(`No, I can make only ${total} cups of coffee`);
  }
}

//RUN APP:
statusCoffeeMachine();
menu();
//coffeeAvailable();
