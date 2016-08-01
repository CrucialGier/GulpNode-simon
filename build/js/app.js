(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.gameArray = [];
  this.playerArray = [];
  this.turn = 1;
}

Simon.prototype.loseCheck = function() {
  for(var i = 0; i < this.playerArray.length; i++) {
    if (this.playerArray[i] === this.gameArray[i]) {
      return false;
    }
    else
    {
      return true;
    }
  }
  };

Simon.prototype.resetGame = function() {
  this.gameArray = [];
  this.playerArray = [];
  this.turn = 1;
  return this;
};

Simon.prototype.selectRandom = function() {
  pieceArray = ["red", "green", "blue", "yellow"];
  this.gameArray.push(pieceArray[Math.floor(Math.random() * 4)]);
};

Simon.prototype.patternDisplay = function() {
  // debugger;
  for (var i = 0; i < this.gameArray.length; i++) {
    if (i >= this.gameArray.length) {
      // clearTimeout(interval);
    }
    setTimeout(function(){}, 500);
    clearTimeout();
    $("#"+this.gameArray[i]+"-button").addClass('light-'+this.gameArray[i]);
    setTimeout(function() {
      $("#" + this.gameArray[i] + "-button").removeClass('light-' + this.gameArray[i])}, 500);
  }
};

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
