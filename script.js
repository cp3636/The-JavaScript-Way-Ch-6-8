//Ch 6: Modeling a Dog
const dog = {
    name: "Brinkley",
    breed: "maltipom",
    cuteness: "1000%",

    woof (){
 return "bark!!";
    }
};  

function Brinkleybark(){
    console.log(`${dog.name} is a ${dog.breed} dog cute ${dog.cuteness}`);
    console.log(`Look, a rat! ${dog.name} barks: ${dog.woof()}`);
}

//Ch 6: Modeling a circle (Failed)

//const r = Number(prompt("Enter the circle radius"))
//var circle = canvasElement.getContext("2d");
//circle.beginPath();
//circle.circumference(180, 100, 90, 0, 2 );
//circle.stroke();

//console.log('Its circumference is ${circle.circumference()}')
//console.log('Its area is ${circle.area()}');

//Ch 6: Adding character experience
const bongo ={
    name: "Bongo", 
    //Bongo with a health charm
    health = 150,
    //Bongo with bouncy shoes
    jump =  25,
    //Bongo reaches new level
    xp =  10,
}

   // describe(){
      //  return `${this.name} has ${this.health} health points and ${this
      //    .jump} as added jump and ${this.xp} as more xp';
      //  }
    
   // Ch 7: Musketeers
   const musketeers = ["Athos", "Porthos", "Aramis"]
   musketeers.pop() 
   console.log(musketeers.length);
   console.log(musketeers[2]); //get rid of Aramis
   musketeers.push("D'Artagnan"); //Add D'Artagnan
  
   for(let i = 0; i < myMusketeerssArray.length; i++) {
    console.log(myMusketeersArray[i]); 
}
 //forEach
musketeers.forEach(myFunction);

//ForOf
let text = "";
for (let i of musketeers){
    text+=i;
}

//Ch 7: Sum of Values

let sum = 0;
 const values = [3, 11, 7, 2, 9, 10];

 for (i = 0; i< values.length; i++){
    sum += values[i];
}
console.log (sum);


//Ch 8: Word Info

const str = "Halloween";
const len = str.length;
console.log(len);

//lowercase
const originalWord = "Halloween";
const lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // "halloween"

//uppercase
const uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); //"HALLOWEEN"


//Ch 8; Backwars Word
reverseString("Halloween");
function reverseString(str) {
    //split string
    var splitString = str.split(""); 
    //Reverse string
    var reverseArray = splitString.reverse(); 
    //Join string
    var joinArray = reverseArray.join(""); 

    return joinArray; 
    
    // "neewollaH"
}
