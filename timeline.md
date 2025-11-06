# Nobel Timeline Challenge

## Syfte

Utveckla ett kronologiskt pusselspel där användare placerar Nobelpristagare och upptäckter i rätt tidsordning. Spelet ska vara visuellt tilltalande, pedagogiskt och belöna historisk kunskap.

## Spelmekanik

### Grundflöde
1. Användare väljer svårighetsgrad (lätt: 5 kort, medel: 8 kort, svår: 12 kort)
2. Slumpmässiga pristagare/upptäckter visas som dragbara kort
3. Användare drar och placerar korten på en vertikal timeline
4. När klar klickar användare "Submit"
5. Systemet validerar ordningen och visar vilket som är rätt/fel
6. Poäng baserat på antal korrekt placerade kort
7. Visuell timeline visar rätt ordning med årtal
8. Möjlighet att spara poäng till leaderboard

### Poängsystem
```
Svårighetsgrad  | Max poäng | Poäng per rätt
Lätt (5 kort)   | 500       | 100p
Medel (8 kort)  | 1000      | 125p
Svår (12 kort)  | 1800      | 150p

Bonus:
- Alla rätt: +200p
- 80%+ rätt: +100p
```

## Grundkrav (MVP)

### Funktionalitet
- [ ] Svårighetsvall (3 nivåer)
- [ ] Drag-and-drop funktionalitet
- [ ] Slumpmässigt urval av pristagare
- [ ] Submit-knapp för validering
- [ ] Visa rätt/fel efter submission
- [ ] Poängberäkning
- [ ] Slutskärm med resultat
- [ ] "Spela igen"-funktionalitet

### Teknisk
- [ ] Hämta data från `nobel-data.json`
- [ ] Drag & Drop API (HTML5)
- [ ] Sortering och validering av årtal
- [ ] Visual feedback vid drag
- [ ] Drop zones med state management
- [ ] Local storage för senaste poäng

### Design
- [ ] Mobile-first responsive layout
- [ ] Tydliga draggable cards
- [ ] Vertikal timeline med årtal-markeringar
- [ ] Visual drop zones
- [ ] Touch-friendly (mobilanpassat)
- [ ] Använd Tailwind-klasser från starter kit

## Prioriterade features

### Spelmekanik
- [ ] Hint-system (visa årtal för ett kort)
- [ ] "Undo" senaste placering
- [ ] Timer mode (snabbast vinner)
- [ ] Kategorifilter (endast Fysik, etc)

### UX-förbättringar
- [ ] Animerad timeline-rendering
- [ ] Kort visar bild + namn + kategori
- [ ] Hover-effekter på kort
- [ ] Smooth drag animations
- [ ] Konfetti vid perfekt score

### Leaderboard
- [ ] Top 10 per svårighetsgrad
- [ ] Användarnamn vid submission
- [ ] Visa bästa tid (om timer mode)
- [ ] Filtrera per kategori

### Visuell polish
- [ ] Historical theme (sepia tones, old paper texture)
- [ ] Årtal-markeringar på timeline
- [ ] Kategori-ikoner på kort
- [ ] Progress indicator (X av Y placerade)

## Nice-to-have

### Avancerade features
- [ ] Multiplayer race (två timelines)
- [ ] "Expert mode" med 20+ kort
- [ ] Tematiska timelines (t.ex. "Kvinnliga pristagare")
- [ ] Zoom på timeline (olika tidsepoker)

### Educational
- [ ] "Lär dig"-läge med fakta efter varje fel
- [ ] Historiska kontext-bubblor
- [ ] Quiz efter genomfört spel
- [ ] Dela din timeline (screenshot)

### Accessibility
- [ ] Tangentbordsnavigering (piltangenter för drag)
- [ ] Screen reader-support
- [ ] Alternativ till drag (click-to-place)
- [ ] Hög kontrast-läge

## Tekniska constraints

### Obligatoriskt
- Använd `nobel-data.json` som datakälla
- Implementera med vanilla JavaScript (ES6+)
- Använd HTML5 Drag & Drop API
- Använd Tailwind CSS från starter kit
- Mobile-first responsive design
- Fungera i Chrome, Firefox, Safari

### Tillåtet
- Libraries: anime.js, sortable.js, day.js
- LocalStorage för persistence
- CSS Grid för timeline layout
- Touch events för mobil

### Förbjudet
- Ingen backend (allt client-side)
- Inga stora frameworks

## Leverans (Måndag 17/11)

### Kod
- Fungerande spel deployat på Netlify
- Ren, kommenterad kod
- README med instruktioner
- Minst 5 commits med tydliga meddelanden

### Presentation
- Live demo (5 minuter)
- Kod-walkthrough av drag-drop implementation (3 minuter)
- Diskussion: Utmaningar och lärdomar (2 minuter)

## Tips

### Drag & Drop Implementation
```javascript
// Simplified structure
card.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', card.id);
});

dropZone.addEventListener('drop', (e) => {
  const cardId = e.dataTransfer.getData('text');
  // Validate and place
});
```

### Sortering & Validering
```javascript
// Compare user order with correct order
const userOrder = dropZones.map(zone => zone.dataset.year);
const correctOrder = laureates.map(l => l.year).sort();
const correctCount = userOrder.filter((year, i) => year === correctOrder[i]).length;
```

### Touch Support
```javascript
// For mobile
element.addEventListener('touchstart', handleTouchStart);
element.addEventListener('touchmove', handleTouchMove);
element.addEventListener('touchend', handleTouchEnd);
```

### Timeline Rendering
- Använd CSS Grid för jämn fördelning
- Placera årtal vid varje drop zone
- Highlight-effekt vid hover över zone
- Smooth scroll till rätt position vid många kort

## Resurser

- Nobel data: `../starter-kit/nobel-data.json`
- Tailwind config: `../starter-kit/tailwind.config.js`
- Styles: `../starter-kit/styles.css`
- Workflow: `../methodology/workflow.md`
- MDN Drag & Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

**Lycka till, Team B!**
