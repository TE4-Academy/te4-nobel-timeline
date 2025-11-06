import { renderStart } from './ui.js';
import { loadNobelData } from './data.js';
import { countBy } from './game.js';
const app = document.getElementById('app');
renderStart(app);

loadNobelData().then(list => console.log('Antal pristagare:', list.length));

document.addEventListener('difficulty:selected', async (e) => {
    const all = await loadNobelData();
    const level = e.detail.level;
    const count = countBy(level);
    console.log(`Du valde ${level} (${count} kort)`);
});