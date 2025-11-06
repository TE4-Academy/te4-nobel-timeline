export const gameState = { difficulty: null };
export function countBy(level){
    if(level==='easy') return 5;
    if(level==='medium') return 8;
    return 12;
}