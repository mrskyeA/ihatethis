window.getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}
function changeGame(ogGame){
  var game = ogGame;
  while(game == ogGame){
    game = games[getRandomInt(games.length)];
  }
  return game;
}
window.gameStart = ()=>{
  window.games = [/*"enzyme.html","foodwebs.html","macromolecules.html","phylogenetic.html",*/"naturalselection.html"];
  window.timer = 5;
  window.timerEl = document.getElementById("timey");
  window.frame = document.getElementById("geg");
  window.frame.src = changeGame(window.frame.src);
  window.score = {
  
  };
  window.lost = false;
  window.won = false;
  var id = setInterval(()=>{
    if(!lost){
      timer--;
      timerEl.innerHTML =  `Time Left:${timer}`;
    }
    
    if(timer <= 0){
      if(!won && !lost){
        lost = true;
        frame.src = "youlost.html";
        alert("i am alqaueda");
        clearInterval(id);
      } else if(!lost){
        frame.src = changeGame(frame.src);
        won = false;
        timer = 5;
      }
      
      
    } 
  },1000);
}
window.gameStart();