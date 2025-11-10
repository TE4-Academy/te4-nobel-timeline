import { renderStart } from './ui.js';
import { loadNobelData } from './data.js';
import { countBy, setDifficulty } from './game.js';
import { shuffle } from './data.js';
import { renderBoard } from './ui.js';
import { wireDnD } from './dnd.js';
import { setPools, submitAndScore } from './game.js';
import { readUserOrder } from './dnd.js';
import { saveLastScore } from './storage.js';
const app = document.getElementById('app');
renderStart(app);


loadNobelData().then(list => console.log('Antal pristagare:', list.length));

document.addEventListener('difficulty:selected', async (e) => {
    const all = await loadNobelData();
    const level = e.detail.level;
    setDifficulty(level);
    const count = countBy(level);
    const pool = shuffle(all).slice(0,count);
    renderBoard(app, pool);
    wireDnD(app);
    setPools(pool);
    app.querySelector('#submit').addEventListener('click', () => {
        const order = readUserOrder(app);
        if (order.length !== pool.length) return alert('Placera alla kort!');
        const { score, correctCount} = submitAndScore(order);
        saveLastScore({ score, correctCount, total: pool.length, ts: Date.now()});

        //Den här koden gör i princip ingenting
        const live = document.getElementById('result-live') || (() => {
            const d = document.createElement('div');
            d.id = 'result-live';
            d.className = 'sr-only';
            document.body.appendChild(d);
            return d;
        })();
        live.textContent = `Resultat klart. Du fick ${correctCount} rätt.`;
        //till hit alltså

        app.innerHTML = `
        <section class="card text-center">
        <h2 class="text-2xl font-bold mb-2">Resultat</h2>
        <p class="mb-4">Rätt: ${correctCount}/${pool.length} • Poäng: <span class="score-display">${score}</span></p>
        <button id="again" class="btn btn-outline py-4 text-base w-full md:w-auto">Spela igen</button>
        </section>`;
        app.querySelector('#again').addEventListener('click', () => location.reload());

        [...app.querySelectorAll('#timeline > .card')].forEach((zone,i)=>{
            const placedId = zone.firstElementChild?.dataset?.id;
            const ok = placedId && Number(placedId) === gameState.orderCorrect[i];
            zone.classList.remove('ring-2', 'ring-red-500', 'ring-green-500');
            zone.classList.add('ring-2', ok ? 'ring-green-500' : 'ring-red-500');
        });
    })
    console.log(`Du valde ${level} (${count} kort)`);
});