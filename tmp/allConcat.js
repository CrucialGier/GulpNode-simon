var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function(){
  var newSimonGame = new Simon();
  newSimonGame.selectRandom();
  // newSimonGame.patternDisplay();
  console.log(newSimonGame.gameArray);
  $("new-game").click(function() {
    newSimonGame = newSimonGame.resetGame();
  });
  $(".btn-red").click(function(){
    $(this).addClass('light-red');
    setTimeout(function(){$("#red-button").removeClass('light-red')}, 1000);
    newSimonGame.playerArray.push("red");
    if (newSimonGame.gameArray.length === newSimonGame.playerArray.length) {
      if(!newSimonGame.loseCheck()) {
        newSimonGame.selectRandom();
        newSimonGame.turn += 1;
        newSimonGame.playerArray = [];
      }
      else {
          $("#game-status").text("You Lose");
        }
      //display pattern
    };
    console.log(newSimonGame.playerArray);
    console.log(newSimonGame.gameArray);
    console.log(newSimonGame.turn);
  });
  $(".btn-green").click(function(){
    $(this).addClass('light-green');
    setTimeout(function(){$("#green-button").removeClass('light-green')}, 1000);
    newSimonGame.playerArray.push("green");
    if (newSimonGame.gameArray.length === newSimonGame.playerArray.length) {
      if(!newSimonGame.loseCheck()) {
        newSimonGame.selectRandom();
        newSimonGame.turn += 1;
        newSimonGame.playerArray = [];
      }
      else {
          $("#game-status").text("You Lose");
        }
      //display pattern
    };
    console.log(newSimonGame.playerArray);
    console.log(newSimonGame.gameArray);
    console.log(newSimonGame.turn);
  });
  $(".btn-blue").click(function(){
    $(this).addClass('light-blue');
    setTimeout(function(){$("#blue-button").removeClass('light-blue')}, 1000);
    newSimonGame.playerArray.push("blue");
    if (newSimonGame.gameArray.length === newSimonGame.playerArray.length) {
      if(!newSimonGame.loseCheck()) {
        newSimonGame.selectRandom();
        newSimonGame.turn += 1;
        newSimonGame.playerArray = [];
      }
      else {
          $("#game-status").text("You Lose");
        }
      //display pattern
    };
    console.log(newSimonGame.playerArray);
    console.log(newSimonGame.gameArray);
    console.log(newSimonGame.turn);
  });
  $(".btn-yellow").click(function(){
    $(this).addClass('light-yellow');
    setTimeout(function(){$("#yellow-button").removeClass('light-yellow')}, 1000);
    newSimonGame.playerArray.push("yellow");
    if (newSimonGame.gameArray.length === newSimonGame.playerArray.length) {
      if(!newSimonGame.loseCheck()) {
        newSimonGame.selectRandom();
        newSimonGame.turn += 1;
        newSimonGame.playerArray = [];
      }
      else {
          $("#game-status").text("You Lose");
        }
      //display pattern
    };
    console.log(newSimonGame.playerArray);
    console.log(newSimonGame.gameArray);
    console.log(newSimonGame.turn);
  });
});
