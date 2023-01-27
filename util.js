//split:
let texto = "hello@yoursite.edu.co.mak";

console.log(texto.split("."));
//Replace:

let data = "A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk";
function replaceString(data) {
    let replacedStr = data.replace(/stun/g, "stump");
   return replacedStr
}

console.log(replaceString(data));

//Math floor:
console.log(Math.floor(23.49));

/*function coffeeAvailable() {
  console.log("Write how many ml of water the coffee machine has:");
  let userWater = Number(input());
  console.log("Write how many ml of milk the coffee machine has:");
  let userMilk = Number(input());
  console.log("Write how many grams of coffee beans the coffee machine has:");
  let userBeans = Number(input());
  console.log("Write how many cups of coffee you will need:");
  let userCups = Number(input());
  cupsOfCoffee(userWater, userMilk, userBeans, userCups);
}*/
/*function cupsOfCoffee(userWater, userMilk, userBeans, userCups) {
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
}*/
