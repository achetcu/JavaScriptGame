(function () {
    let userPoints = 40;
    let grantPoints = 10;
    let userWins = 0;
    let user;
    let continueGame;
    
    startGame();
    function startGame() {
    const startPlay = prompt("Would you like to play?");
    
    if (startPlay === `yes`){
    user = prompt("What is your name?");
    startCombat(user);
    }
    }
    
    function startCombat(user){
    while (userWins < 3 && userPoints >= 0){
    
    continueGame = prompt("Would you like to attack or quit?");
    if (continueGame === `attack`) {
            
    grantPoints -= getDamage();
    userPoints -= getDamage();
    
    console.log(`Grant the Mighty Chicken has ${grantPoints} health left`);
    console.log(`${user} has ${userPoints} health left`);
    
    if (grantPoints <= 0){
      userWins++
      grantPoints = 10;  
      console.log(`Congrats, ${user} wins ${userWins})` )
      }
    }
    else {
      console.log("Game over, Grant Wins")
      return;
    }
    }
    }
    function getDamage(){
      return Math.floor((Math.random() * 5) + 1);
    }
    })();