// console.log('hello');
const crypto = require("crypto");


const operation = process.argv[2];
const firstValue = process.argv[3];
const secondValue = process.argv[4];


function sum(a,b){
     console.log(`The Answer is:`, a + b);
}

function subtract(a,b){
    console.log(`The Answer is:`, a - b);
}

function multiplication(a,b){
    console.log(`The Answer is:`, a * b);
}

function division(a,b){
    console.log(`The Answer is:`, a / b);
}

function randomNumber(firstValue){
    crypto.randomBytes(firstValue,(err,buf)=>{
        if (err) {
            console.log(err);
        }
        console.log(`${buf.toString("binary")}`);
    })
}

switch (operation) {
    case "add":
        sum(Number(firstValue), Number(secondValue));
        break;

    case "sub":
        subtract(Number(firstValue), Number(secondValue));
        break;

    case "mult":
        multiplication(Number(firstValue), Number(secondValue));
        break;

    case "divide":
        division(Number(firstValue), Number(secondValue));
        break;

    case "random":
        if(operation === 'random' && firstValue!=null){
            randomNumber(Number(firstValue));
        }
        break;

    default:
        console.log("Invalid Operation");
        break;
}