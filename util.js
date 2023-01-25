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