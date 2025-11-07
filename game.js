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