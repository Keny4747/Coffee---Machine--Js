const input = require("sync-input");
const water = 200;
const milk = 50;
const beans = 15;
var machine = {water: 400,milk: 540,beans: 120,cups: 9,money: 550,};
function statusCoffeeMachine() {
  console.log(`\nThe coffee machine has:
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
      subtractSupply(espresso.water, espresso.milk, espresso.beans,espresso.price);
      break;
    case 2:
      subtractSupply(latte.water, latte.milk, latte.beans,latte.price);
      
      break;
    case 3:
      subtractSupply(capuccino.water, capuccino.milk, capuccino.beans,capuccino.price);
  
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
function subtractSupply(water, milk, beans,price) {

  if(machine.water<water){
    console.log('Sorry, not enough water!');
  }else{
    console.log('I have enough resources, making you a coffee!')
    machine.water -= water;
    machine.milk -= milk;
    machine.beans -= beans;
    machine.money+=price;

  }

}
function menu() {
  console.log("\nWrite action (buy, fill, take, remaining, exit):");
  let user = String(input());
  switch (user) {
    case 'buy':
      buy();
      break;
    case 'fill':
      fillMachine();
      break;
    case 'take':
      takeMoney();
   
      statusCoffeeMachine();
      break;
      case 'remaining':
        statusCoffeeMachine();
      break;
      case 'exit'://TODO
        break;
    default:
      console.log('Invalid input');
  }
  if(user=='exit'){
    flag=true;
  }
}

//RUN APP:
var flag = false;
do{
  menu();
}while(flag==false);

//coffeeAvailable();
