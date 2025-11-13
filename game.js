export const gameState = { 
    difficulty: null,
    timerInterval: null,
    timeLeft: 0,
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
    let score = Math.round((correct * per) * (1 + (gameState.timeLeft / 100)) - (incorrect * 25));
    if(score < 0) score = 0;
    gameState.score = score; gameState.finished = true;
    return { correctCount: correct, score};
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
      alert("Tid slut");
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