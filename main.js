import { renderStart } from "./ui.js";
import { loadNobelData } from "./data.js";
import { countBy, setDifficulty } from "./game.js";
import { shuffle } from "./data.js";
import { renderBoard } from "./ui.js";
import { wireDnD } from "./dnd.js";
import { setPools, submitAndScore } from "./game.js";
import { readUserOrder } from "./dnd.js";
import { saveLastScore } from "./storage.js";
import { gameState } from "./game.js";

const app = document.getElementById("app");
renderStart(app);

loadNobelData().then((list) => console.log("Antal pristagare:", list.length));

document.addEventListener("difficulty:selected", async (e) => {
  const all = await loadNobelData();
  const level = e.detail.level;
  setDifficulty(level);
  const count = countBy(level);
  const pool = shuffle(all).slice(0, count);
  renderBoard(app, pool);
  wireDnD(app);
  setPools(pool);
  app.querySelector("#submit").addEventListener("click", () => {
    const order = readUserOrder(app);
    if (order.length !== pool.length) return alert("Placera alla kort!");
    const { score, correctCount } = submitAndScore(order);
    saveLastScore({ score, correctCount, total: pool.length, ts: Date.now() });

    //Den här koden gör i princip ingenting
    const live =
      document.getElementById("result-live") ||
      (() => {
        const d = document.createElement("div");
        d.id = "result-live";
        d.className = "sr-only";
        document.body.appendChild(d);
        return d;
      })();
    live.textContent = `Resultat klart. Du fick ${correctCount} rätt.`;
    //till hit alltså
    const laureateMap = {};
    pool.forEach((l) => (laureateMap[l.id] = l));

    // Bygg HTML för resultat-timelinen
    let resultHTML = `
        <section class="max-w-3xl mx-auto">
        <div class="card text-center mb-6">
        <h2 class="text-2xl font-bold mb-2">Resultat</h2>
        <p class="mb-4">Rätt: ${correctCount}/${pool.length} • Poäng: <span class="score-display">${score}</span></p>
        <button id="again" class="btn btn-outline py-4 text-base w-full md:w-auto">Spela igen</button>
        </div>
        <div class="space-y-3">
        `;

    order.forEach((placedId, index) => {
      const laureate = laureateMap[placedId];
      const correctId = gameState.orderCorrect[index];
      const isCorrect = placedId === correctId;

      resultHTML += `
            <div class="card p-2 rounded-lg ${
              isCorrect ? "ring-2 ring-green-500" : "ring-2 ring-red-500"
            }">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1">
                        <h4 class="font-bold">${laureate.name}</h4>
                        <p class="text-sm text-neutral-500">${
                          laureate.category
                        }</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold ${
                          isCorrect ? "text-green-600" : "text-red-600"
                        }">${laureate.year}</p>
                    </div>
                </div>
            </div>`;
    });

    resultHTML += `
        </div>
        </section>`;

    app.innerHTML = resultHTML;
    app
      .querySelector("#again")
      .addEventListener("click", () => location.reload());
  });
  console.log(`Du valde ${level} (${count} kort)`);
});
