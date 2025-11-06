# Approved Libraries - Nobel Quest Fas 1

## Policy

Nobel Quest Fas 1 fokuserar på **vanilla JavaScript** och **Tailwind CSS** för att bygga solid förståelse för web fundamentals.

**Huvudregel:**
- ✅ Små, focused libraries för specifika features är OK
- ❌ Stora frameworks (React, Vue, Angular) är INTE tillåtna
- ❌ Libraries som ersätter grundläggande kod är discouraged

**Varför?**
- Lär er grunderna först
- Förstå vad libraries gör "under huven"
- Håll projektet enkelt och debuggable
- Undvik dependency hell

## Pre-approved Libraries

Dessa libraries är godkända för specifika use cases:

### Animations

#### Anime.js
**Användning:** Smooth, complex animations

**Varför godkänd:**
- Small (9kb)
- Declarative API
- Great for game animations

**Installation:**
```html
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
```

**Exempel:**
```javascript
anime({
  targets: '.card',
  translateY: -10,
  scale: 1.1,
  duration: 300,
  easing: 'easeOutQuad'
});
```

**Use cases:**
- Card flip animations (Match Master)
- Smooth transitions between questions (Trivia Rush)
- Timeline visualization (Timeline Challenge)

**Dokumentation:** https://animejs.com/

---

#### Confetti.js (canvas-confetti)
**Användning:** Celebration effects vid win

**Varför godkänd:**
- Fun user experience
- Small (5kb)
- No dependencies

**Installation:**
```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
```

**Exempel:**
```javascript
// When user wins
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
```

**Use cases:**
- High score celebrations
- Correct answer feedback
- Game completion

**Dokumentation:** https://github.com/catdad/canvas-confetti

---

### Sound Effects

#### Howler.js
**Användning:** Audio playback (optional)

**Varför godkänd:**
- Cross-browser audio support
- Simple API
- Good for game sounds

**Installation:**
```html
<script src="https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"></script>
```

**Exempel:**
```javascript
const correctSound = new Howl({
  src: ['correct.mp3'],
  volume: 0.5
});

correctSound.play();
```

**Use cases:**
- Correct/incorrect answer feedback
- Timer countdown sounds
- Button click sounds
- Background music (be careful with volume!)

**Dokumentation:** https://howlerjs.com/

**OBS:** Sound är nice-to-have, inte MVP!

---

### Drag & Drop Enhancement

#### SortableJS
**Användning:** Enhanced drag-and-drop (Timeline Challenge)

**Varför godkänd:**
- Better touch support than native HTML5 Drag & Drop
- Mobile-friendly
- Smooth animations

**Installation:**
```html
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
```

**Exempel:**
```javascript
const timeline = document.getElementById('timeline');
Sortable.create(timeline, {
  animation: 150,
  onEnd: function(evt) {
    validateOrder();
  }
});
```

**Use cases:**
- Timeline Challenge drag-and-drop
- Alternative to native HTML5 D&D

**OBS:** Bara om native drag-and-drop är för svårt!

**Dokumentation:** https://github.com/SortableJS/Sortable

---

### Utilities

#### Day.js
**Användning:** Date formatting (om behövs)

**Varför godkänd:**
- Tiny (2kb)
- Modern alternative till Moment.js
- Good for leaderboard timestamps

**Installation:**
```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js"></script>
```

**Exempel:**
```javascript
const timestamp = dayjs().format('YYYY-MM-DD HH:mm');
// "2024-01-15 14:30"
```

**Use cases:**
- Format dates för leaderboard
- Show "played 2 hours ago"

**OBS:** Vanlig `Date()` object funkar också för basics!

**Dokumentation:** https://day.js.org/

---

#### Lodash (selective functions)
**Användning:** Utility functions

**Varför godkänd:**
- **MEN:** Använd endast enskilda functions, inte hela library
- Lär er implementera shuffle, debounce själva först

**Installation (selective):**
```html
<script src="https://cdn.jsdelivr.net/npm/lodash.shuffle@4.2.0/index.js"></script>
```

**Exempel:**
```javascript
// Shuffle (men implementera själv först!)
const shuffled = _.shuffle(array);

// Debounce
const debouncedSearch = _.debounce(search, 300);
```

**Rekommendation:** Implementera själva istället!

**Dokumentation:** https://lodash.com/

---

## NOT Approved (utan diskussion med Michael)

### Frameworks
- ❌ **React, Vue, Angular, Svelte**
  - För stort scope för detta projekt

### UI Frameworks
- ❌ **Bootstrap, Material UI, Chakra UI**
  - Ni har Tailwind CSS
  - Bygg egen design

### Heavy Libraries
- ❌ **jQuery**
  - Outdated, vanilla JS är bättre
  - Lär er moderna DOM APIs

- ❌ **Moment.js**
  - Deprecated, use Day.js istället

- ❌ **Three.js, D3.js**
  - Overkill för Fas 1
  - För komplex

### Backend-related
- ❌ **Axios, Socket.io**
  - Ingen backend i Fas 1
  - Fetch API räcker

### Build Tools
- ❌ **Webpack, Rollup, Parcel**
  - Ingen build step i Fas 1
  - Håll det enkelt

## How to Request New Library

Om ni vill använda en library som inte är listad:

### Process
1. **Research:** Varför behöver ni den?
2. **Alternatives:** Kan ni implementera själva?
3. **Size:** Hur stor är den? (check bundle size)
4. **Popularity:** Är den välmaintained? (GitHub stars, npm downloads)
5. **Diskutera:** Fråga Michael eller Project Lead

### Template för request
```markdown
**Library:** [namn]
**URL:** [GitHub/npm link]
**Size:** [kb]
**Use case:** [Vad ska ni använda den till?]
**Alternatives:** [Varför kan ni inte implementera själva?]
**Team consensus:** [Alla i teamet håller med?]
```

**Exempel:**
```markdown
**Library:** Chart.js
**URL:** https://www.chartjs.org/
**Size:** 60kb
**Use case:** Visa statistik över spelares performance över tid
**Alternatives:** Kan rita med Canvas själva men tar lång tid
**Team consensus:** Ja, alla vill ha detta
```

**Michael beslutar:** ✅ eller ❌

## Best Practices

### When to use a library
✅ **Good reasons:**
- Komplex feature (animations, audio)
- Cross-browser compatibility (drag-and-drop on mobile)
- Time-saving för nice-to-have features
- Well-tested och maintained

❌ **Bad reasons:**
- För lat för att lära sig grunderna
- "Alla andra använder det"
- Overkill för enkel feature
- Lägga till bara för att ha många dependencies

### How to evaluate
**Checklist:**
- [ ] Är den liten? (<50kb preferred)
- [ ] Är den aktivt maintained? (recent commits)
- [ ] Har den bra dokumentation?
- [ ] Funkar den utan build step? (CDN tillgänglig)
- [ ] Är den värd komplexiteten?

### Installation guidelines
**Preferred: CDN**
```html
<script src="https://cdn.jsdelivr.net/npm/library@version/dist/file.min.js"></script>
```

**Avoid: npm install (i Fas 1)**
- Ni har ingen build step
- Håll det enkelt
- Använd CDN istället

**Version pinning:**
```html
<!-- ✅ Bra: Specific version -->
<script src="https://cdn.jsdelivr.net/npm/anime@3.2.1/lib/anime.min.js"></script>

<!-- ❌ Dåligt: Latest (kan bryta) -->
<script src="https://cdn.jsdelivr.net/npm/anime/lib/anime.min.js"></script>
```

## Implementation Example

### Adding Anime.js to your project

**1. Include in HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Nobel Quest</title>
</head>
<body>
  <div id="app"></div>
  
  <!-- Anime.js from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
  
  <!-- Your code -->
  <script type="module" src="main.js"></script>
</body>
</html>
```

**2. Use in JavaScript:**
```javascript
// main.js
function animateCard(element) {
  anime({
    targets: element,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 400,
    easing: 'easeOutQuad'
  });
}

// Usage
const card = document.querySelector('.card');
animateCard(card);
```

**3. Document in README:**
```markdown
## Dependencies

- **Anime.js** (3.2.1): Animation library
  - Used for: Card animations, transitions
  - Size: 9kb
  - License: MIT
```

## Performance Considerations

### Bundle size budget
**Total external libraries: < 100kb** (recommended)

**Rationale:**
- Fast initial load
- Mobile-friendly
- Netlify bandwidth är gratis, men håll det snabbt

**Check bundle size:**
- https://bundlephobia.com/

### Loading strategy
```html
<!-- Critical: Load in <head> -->
<script src="critical-lib.js"></script>

<!-- Non-critical: Load at end of <body> -->
<script defer src="nice-to-have-lib.js"></script>
```

## Debugging Libraries

### Common issues

**Library not loading:**
```javascript
// Check in console
if (typeof anime !== 'undefined') {
  console.log('Anime.js loaded!');
} else {
  console.error('Anime.js failed to load');
}
```

**Version conflicts:**
- Use specific versions (not `@latest`)
- Check browser console for errors

**CORS issues:**
- Use CDN (jsdelivr, unpkg, cdnjs)
- Don't download and serve locally without understanding CORS

## Summary

**Philosophy:**
- Vanilla JavaScript first
- Libraries for enhancement, not replacement
- Small, focused tools
- Learn fundamentals before abstractions

**Process:**
1. Try to implement yourself
2. If too complex/time-consuming, check approved list
3. If not on list, request approval
4. Document what you use and why

**Remember:**
- Fewer dependencies = easier debugging
- Understanding > convenience
- You're learning, not just shipping
