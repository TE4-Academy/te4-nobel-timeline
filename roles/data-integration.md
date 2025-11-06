# Roll: Data Integration (Optional - vid 4 personer)

## Ansvar

Du ansvarar för att ladda och hantera data från JSON-filen. Du ser till att spelet får rätt data och att bilder laddas korrekt.

**OBS:** Denna roll används bara om ni är 4 personer. Vid 3-personsteam tar Game Logic Developer hand om data.

## Dagliga uppgifter

### Morgon
- Delta i daily standup
- Kolla data-relaterade issues
- Planera dagens arbete

### Under dagen
- Implementera data-loading funktioner
- Se till att bilder laddas
- Testa att data fungerar

### Eftermiddag
- Visa vad du gjort för teamet
- Testa edge cases (vad händer om något går fel?)

## Huvudsakliga leveranser

- Ladda data från JSON-fil
- Filtrera data efter kategori
- Slumpa frågor/kort
- Hantera bildladdning
- Spara leaderboard i LocalStorage
## Samarbete

Du pratar med Game Logic Developer om vilka funktioner som behövs och hur data ska struktureras. UI/UX Developer behöver veta hur bilder laddas och vad som händer medan data laddar.

## Verktyg

- VS Code för JavaScript
- Chrome DevTools för att se network requests
- Browser Console för debugging

## Checklista varje dag

- [ ] Data laddas från JSON-filen
- [ ] Inga errors i Console
- [ ] Bilder visas korrekt
- [ ] Funktioner för att filtrera data finns
- [ ] Error handling implementerat

## Kod-exempel

### Ladda data
```javascript
async function loadNobelData() {
  try {
    const response = await fetch('./nobel-data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load data:', error);
    return [];
  }
}
```

### Filtrera efter kategori
```javascript
function getByCategory(data, category) {
  return data.filter(laureate => 
    laureate.category.includes(category)
  );
}
```

### Slumpa frågor
```javascript
function getRandomQuestions(data, count) {
  const shuffled = shuffle([...data]);
  return shuffled.slice(0, count);
}

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```

### Hantera bilder
```javascript
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error('Image failed'));
    img.src = url;
  });
}
```

### LocalStorage
```javascript
function cacheData(data) {
  localStorage.setItem('nobel-data', JSON.stringify(data));
}

function getCachedData() {
  const data = localStorage.getItem('nobel-data');
  return data ? JSON.parse(data) : null;
}
```

## Vanliga utmaningar

**"Data tar lång tid att ladda"**
Använd caching i LocalStorage. Ladda bara det som behövs.

**"Bilder laddar långsamt"**
Ladda bilder när de behövs, inte alla på en gång.

**"Spelet kraschar vid no network"**
Spara data i LocalStorage som fallback.

## Resurser

- `../starter-kit/nobel-data.json`
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://javascript.info/async-await
