export const gameState = { 
    difficulty: null,
    timerInterval: null,
    timeLeft: 0,
    timeBonus: 0,
 };

export function setDifficulty(level){
    gameState.difficulty = level;
}

export function countBy(level){
    if(level==='easy') return 5;
    if(level==='medium') return 8;
    return 12;
}

export function setPools(laureates) {
    gameState.pool = laureates;
    gameState.orderCorrect = [...laureates].sort((a,b) => a.year - b.year).map(x=>x.id);
}

export function submitAndScore(userIds) {
    const per = { easy:100, medium:125, hard:150 }[gameState.difficulty];
    let correct = userIds.filter((id,i) => id===gameState.orderCorrect[i]).length;
    let incorrect = userIds.length - correct;
    
    const basePoints = correct * per;
    const timeBonus = Math.round(basePoints * (gameState.timeLeft / 100));
    let score = basePoints + timeBonus - (incorrect * 25);
    
    if(score < 0) score = 0;
    gameState.score = score; 
    gameState.finished = true;
    gameState.timeBonus = timeBonus;
    return { correctCount: correct, score, timeBonus};
}






export function showScore(){
  const per = { easy:100, medium:125, hard:150 }[gameState.difficulty];
  return per;
}

export function startTimer(difficulty) {
  const timeLeftEl = document.getElementById("timer");
    if(difficulty === 'easy') gameState.timeLeft = 30;
    if(difficulty === 'medium') gameState.timeLeft = 45;
    if(difficulty === 'hard') gameState.timeLeft = 60;
  gameState.timerInterval = setInterval(() => {
    if (gameState.timeLeft <= 0) {
      stopTimer();
      document.querySelector("#submit").click();
      return;
    }
    timeLeftEl.textContent = `Tid kvar: ${gameState.timeLeft}`;
    gameState.timeLeft--;
  }, 1000);
}

export function stopTimer() {
  clearInterval(gameState.timerInterval);
  gameState.timerInterval = null;
}