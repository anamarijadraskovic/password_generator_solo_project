const lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassword = document.getElementById("first-option");
let generateBtn = document.getElementById("generate-btn");
let symbolsCheck = document.querySelector("#no-symbols-checkbox");
let numsCheck = document.querySelector("#no-nums-checkbox");
let numOfLetters = document.querySelector("#letter-num");
let copyBtn = document.getElementById("copy-text");

generateBtn.addEventListener("click", generatePasswords)

function generatePasswords() {
    let array = whatArray()
    let passwordLength = numOfLetters.value
    let pwd1 = generateRandomPasswords(passwordLength, array);
    firstPassword.textContent = pwd1;
    generateBtn.textContent = "New Password"
    copyBtn.textContent = " Copy"
}

function whatArray(){
    if (symbolsCheck.checked === false && numsCheck.checked === false) {
        return lettersArray.concat(numsArray, symbolsArray)
    }
    if (symbolsCheck.checked === true && numsCheck.checked === false) {
        return lettersArray.concat(numsArray)
    }
    if (symbolsCheck.checked === false && numsCheck.checked === true){
        return lettersArray.concat(symbolsArray)
    }
    return lettersArray
}

function generateRandomPasswords(length, array){
    let password = ""
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * array.length);
        password += array[randomNum];
    }
    return password
}

copyBtn.addEventListener("click", copyOnClick)

function copyOnClick(){
    let pwdToCopy = firstPassword.textContent
    navigator.clipboard.writeText(pwdToCopy).then(() => {
        copyBtn.textContent = "Copied!"
    })
}
