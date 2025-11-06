import { renderStart } from './ui.js';
import { loadNobelData } from './data.js';
const app = document.getElementById('app');
renderStart(app);

loadNobelData().then(list => console.log('Antal pristagare:', list.length));