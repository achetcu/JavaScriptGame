const startPlay = prompt("Would you like to play?");

if (startPlay === `yes`){
user = prompt("What is your name?");
}

let userPoints = 40;
let grantPoints = 10;
let userWins = 0;

while (userWins < 3 && userPoints >= 0){

console.log(`Grant the Mighty Chicken has ${grantPoints} health left`);

 grantPoints -=  Math.floor((Math.random() * 2) + 1);

console.log(`${user} has ${userPoints} health left`);

userPoints -=  Math.floor((Math.random() * 2) + 1);

if (grantPoints <= 0){
  userWins++
  grantPoints = 10;  
  console.log(`Congrats, ${user} Wins`)
  }
  if (userPoints <= 0){
    console.log("Game over, Grant Wins")
  }
}