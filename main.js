import { renderStart } from "./ui.js";
import { loadNobelData } from "./data.js";
import { countBy, setDifficulty } from "./game.js";
import { shuffle } from "./data.js";
import { renderBoard } from "./ui.js";
import { wireDnD } from "./dnd.js";
import { setPools, submitAndScore, showScore } from "./game.js";
import { readUserOrder } from "./dnd.js";
import { saveLastScore } from "./storage.js";
import { gameState } from "./game.js";
import { startTimer } from "./game.js";
import { stopTimer } from "./game.js";
import { renderLeaderboard } from "./ui.js";
import { addToLeaderboard } from "./storage.js";

const app = document.getElementById("app");
renderStart(app);
renderLeaderboard();

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
  startTimer(level);
  app.querySelector("#submit").addEventListener("click", () => {
    const order = readUserOrder(app);
    const { score, correctCount } = submitAndScore(order);
    saveLastScore({ score, correctCount, total: pool.length, ts: Date.now() });
    const playerName =
      document.getElementById("nameInput").value.trim() || "Anonym";
    const entry = {
      name: playerName,
      score: Math.round(score),
      correctCount,
      total: pool.length,
      difficulty: gameState.difficulty,
      ts: Date.now(),
    };
    stopTimer();
    addToLeaderboard(entry);
    saveLastScore(entry);
    renderLeaderboard();

    const laureateMap = {};
    pool.forEach((l) => (laureateMap[l.id] = l));

    // Bygg HTML för resultat-timelinen
    let resultHTML = `
        <section class="max-w-3xl mx-auto">
        <div class="text-center mb-6">
        <h2 class="text-2xl font-bold mb-2">Resultat</h2>
        <p class="mb-4">Rätt: ${correctCount}/${pool.length} • Poäng: <span class="score-display">${score}</span></p>
        <button id="again" class="btn btn-outline py-4 text-base w-2/4 md:w-auto restart-btn ">Spela igen</button>
        <p id="time-multiplier" class="text-2xl font-bold text-center py-2">Extrapoäng baserat på tid: ${Math.round((score * (1 + gameState.timeLeft/100)) - score)}</p>
        </div>
        <div class="space-y-3">
        `;

    order.forEach((placedId, index) => {
      const laureate = laureateMap[placedId];
      const correctId = gameState.orderCorrect[index];
      const isCorrect = placedId === correctId;

      resultHTML += `
            <div class="card p-2 rounded-lg ${
              isCorrect ? "ring-correct" : "ring-wrong"
            }">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1">
                        <h4 class="font-bold">${laureate.name}</h4>
                        <p class="text-sm text-neutral-500">${
                          laureate.category
                        }</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-neutral-500">${isCorrect ? `+${showScore()} Poäng` : "-25 Poäng"}</p>
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
