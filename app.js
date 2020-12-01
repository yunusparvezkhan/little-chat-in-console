let fruits = ['apples','oranges'];
let vegies = ['broccolis','potatos'];
let meats = ['chicken','mutton'];

let foodForVegeterians = fruits.concat(vegies);
let foodForNonVegeterians = fruits.concat(vegies, meats);

let iDoNotEatMutton = "Ooops I am so soory about that 😟";

function whereismutton() {
    let position = foodForNonVegeterians.indexOf('mutton') + 1 ;
    let postfix = "th"
    if (position === 1) {
        postfix = "st";
    }else if (position === 2) {
        postfix = "nd";
    }else{
        postfix = "th";
    }
    console.log("In"+" "+position+postfix+" "+"position");
};

function throughMuttonAway() {
    foodForNonVegeterians.splice(foodForNonVegeterians.indexOf('mutton'));
    console.log("Mutton is thrown away 😁");
}

function showMeTheNewList() {
    console.log("Please tell which list");
};

let wellDone = "it's my plesure"; 
let thanks = "I am ready for you anytime";
let thankYou = "Helping you is my duty";
let bye = "Don't say bye to me 😒😒"

