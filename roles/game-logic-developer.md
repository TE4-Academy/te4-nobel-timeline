# Roll: Game Logic Developer

## Ansvar

Du ansvarar för JavaScript-koden som gör spelet spelbart. Du skriver funktioner för spelmekanik, hanterar vad som händer när användaren klickar eller drar, och ser till att spelet fungerar logiskt.

## Dagliga uppgifter

### Morgon
- Delta i daily standup
- Kolla gårdagens commits
- Planera dagens features

### Under dagen
- Skriv JavaScript-kod
- Använd console.log för att debugga
- Testa spelet genom att spela det
- Kommentera komplex kod

### Eftermiddag
- Visa vad du byggt för teamet
- Testa tillsammans med UI/UX Developer

## Huvudsakliga leveranser

- Game state (objekt som håller spelstatus)
- Event handlers (click, drag, submit)
- Spelflöde (start, play, end, restart)
- Score-beräkning
- LocalStorage för leaderboard

## Samarbete

Du pratar med UI/UX Developer om vilka CSS-klasser som behöver togglas och när animationer ska starta. Rapportera till Project Lead när du fastnar. Om ni är 4 personer pratar du med Data Integration om hur data ska struktureras.

## Verktyg

- VS Code för JavaScript
- Chrome DevTools Console för debugging
- Live Server för att testa
- Browser för att spela och hitta buggar

## Checklista varje dag

- [ ] JavaScript-kod skriven och testad
- [ ] Inga console errors
- [ ] Spelet går att spela igenom
- [ ] State uppdateras korrekt
- [ ] Kod är kommenterad där det behövs

## Kod-exempel

### Game state
```javascript
const gameState = {
  score: 0,
  currentQuestion: 0,
  timeLeft: 30,
  isPlaying: false
};

function updateGameState(updates) {
  Object.assign(gameState, updates);
  renderUI();
}
```

### Event listeners
```javascript
function setupEventListeners() {
  document.getElementById('start-btn')
    .addEventListener('click', startGame);
  
  document.getElementById('answer-container')
    .addEventListener('click', handleAnswerClick);
}
```

### LocalStorage
```javascript
function saveScore(name, score) {
  const leaderboard = getLeaderboard();
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function getLeaderboard() {
  const data = localStorage.getItem('leaderboard');
  return data ? JSON.parse(data) : [];
}
```

### Timer
```javascript
let timerInterval;

function startTimer(duration) {
  let timeLeft = duration;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateGameState({ timeLeft });
    
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}
```

### Shuffle array (Fisher-Yates)
```javascript
function shuffle(array) {
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}
```

## Vanliga utmaningar

**"Spelet kraschar ibland"**
Använd console.log för att se vad som händer. Kolla att variabler inte är null eller undefined.

**"Timer fortsätter efter game over"**
Spara interval ID och använd clearInterval() när spelet slutar.

**"Data försvinner vid refresh"**
Använd localStorage för att spara data mellan sessioner.

**"Koden blir rörig"**
Dela upp i små funktioner. Ge funktioner tydliga namn. Kommentera komplex logik.

## Resurser

- `../starter-kit/nobel-data.json` (data att använda)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://javascript.info/
