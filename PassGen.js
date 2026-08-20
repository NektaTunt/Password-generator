const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const Password = []

let PassOne = document.getElementById("pass-one")

let PassTwo = document.getElementById("pass-two")

let index = 0



function generatePass() {
    for (let i=0; i < 10; i++) {
        index = Math.floor(Math.random() * characters.length)
        Password.push(characters[index])
    }

    let newPass = ""
    newPass = Password.join("")
    return newPass
}

function showPass() {

    PassOne.textContent = generatePass()

    for (let i=0; i < 10; i++) {
        Password.pop()
    }

    PassTwo.textContent = generatePass()

    for (let i=0; i < 10; i++) {
        Password.pop()
    }

}