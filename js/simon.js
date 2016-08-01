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
    $("#"+this.gameArray[i]+"-button").addClass('light-'+this.gameArray[i]);
    setTimeout(function() {
      $("#" + this.gameArray[i] + "-button").removeClass('light-' + this.gameArray[i])}, 500);
  }
};

exports.simonModule = Simon;
