import { renderStart } from './ui.js';
import { loadNobelData } from './data.js';
import { countBy } from './game.js';
import { shuffle } from './data.js';
import { renderBoard } from './ui.js';
import { wireDnD } from './dnd.js';
const app = document.getElementById('app');
renderStart(app);
wireDnD(app);

loadNobelData().then(list => console.log('Antal pristagare:', list.length));

document.addEventListener('difficulty:selected', async (e) => {
    const all = await loadNobelData();
    const level = e.detail.level;
    const count = countBy(level);
    const pool = shuffle(all).slice(0,count);
    renderBoard(app, pool);
    wireDnD(app);
    console.log(`Du valde ${level} (${count} kort)`);
});