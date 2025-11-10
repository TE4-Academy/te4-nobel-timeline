export const gameState = { difficulty: null };
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
    let score = correct * per;
    const pct = correct / userIds.length;
    if (pct === 1) score += 200; else if (pct >= 0.8) score += 100;
    gameState.score = score; gameState.finished = true;
    return { correctCount: correct, score, pct};
}