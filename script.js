/*function signature/sample */

function newPrice(currentPrice , discount ) {

// You have to write your code here

if(typeof currentPrice != "number" || typeof discount != "number"){

return "Invalid"

}

if(discount < 0 || discount > 100){

return "Invalid"

}

let cut = currentPrice * discount / 100

let result = currentPrice - cut

return result.toFixed(3)

}

/*function signature/sample */

function validOtp(otp) {

// You have to write your code here

if(typeof otp !== "string"){

return "Invalid"

}

if(otp.startsWith("ph-") && otp.length === 8){

return true

}else{

return false

}

}

/*function signature/sample */

function finalScore (omr) {

//write your code here

if(typeof omr !== "object" || Array.isArray(omr) || omr === null){

return "Invalid"

}

let sum = omr.right + omr.wrong + omr.skip

if(sum !== 100){

return "Invalid"

}

let rightMarks = omr.right * 1

let wrongMarks = omr.wrong * 0.5

let totalScore = rightMarks - wrongMarks

return Math.round(totalScore)

}

/*function signature/sample */

function gonoVote(array) {

//write your code here

if(Array.isArray(array) === false){

return "Invalid"

}

let haVote = 0

let naVote = 0

for(let i = 0; i < array.length; i++){

if(array[i] === "ha"){

haVote++

}

if(array[i] === "na"){

naVote++

}

}

if(haVote > naVote){

return true

}

if(haVote === naVote){

return "equal"

}

return false

}

/*function signature/sample */

function analyzeText(str) {

// You have to write your code here

if(typeof str !== "string"){

return "Invalid"

}

if(str.trim() === ""){

return "Invalid"

}

let parts = str.split(" ")

let bigWord = ""

for(let i = 0; i < parts.length; i++){

if(parts[i].length > bigWord.length){

bigWord = parts[i]

}

}

let textWithoutSpace = str.split(" ").join("")

let count = textWithoutSpace.length

return { longwords: bigWord , token: count }

}