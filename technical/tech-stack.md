# Tech Stack - Nobel Quest Fas 1

## Overview

Nobel Quest Fas 1 använder en modern men enkel tech stack baserad på vanilla JavaScript och CSS frameworks. Ingen backend eller databas används i Fas 1.

## Core Technologies

### HTML5
**Version:** HTML5 (standard)

**Användning:**
- Semantisk markup för accessibility
- Form elements för user input
- Canvas (optional för vissa spel)

**Viktiga features:**
```html
<!-- Semantisk struktur -->
<header>, <main>, <section>, <article>, <footer>

<!-- Interactive elements -->
<button>, <input>, <select>

<!-- Media -->
<img>, <picture> (responsive images)

<!-- Data attributes -->
<div data-id="123" data-category="Physics">
```

**Drag & Drop API (Timeline Challenge):**
```html
<div draggable="true" ondragstart="handleDragStart(event)">
  Item
</div>
```

### CSS / Tailwind CSS
**Version:** Tailwind CSS 3.x

**Varför Tailwind?**
- Snabb prototyping med utility classes
- Konsistent design system
- Responsiv design built-in
- Nobel-färger preconfigured i starter kit

**Tailwind features ni använder:**
- **Responsive:** `sm:`, `md:`, `lg:`, `xl:`
- **Hover/Focus:** `hover:`, `focus:`
- **Flexbox/Grid:** `flex`, `grid`
- **Spacing:** `p-4`, `m-4`, `gap-4`
- **Colors:** `nobel-gold`, `nobel-blue`, `neutral-*`
- **Animations:** `transition-*`, `animate-*`

**Custom CSS (styles.css):**
```css
/* Component patterns med @apply */
.btn-primary {
  @apply px-6 py-3 rounded-lg bg-nobel-gold text-white;
  @apply hover:bg-nobel-gold-dark transition-colors;
}
```

**CSS Features:**
- Flexbox för layouts
- CSS Grid för card layouts
- CSS Transitions för smooth animations
- CSS Transforms (särskilt för Match Master flip effect)
- Media queries (via Tailwind)

### JavaScript (ES6+)
**Version:** ECMAScript 2015+ (ES6 and newer)

**Varför ES6+?**
- Modern syntax
- Modules för kod-organisation
- Arrow functions
- Destructuring
- Template literals
- Promises och async/await

**ES6+ Features ni använder:**

**1. Modules:**
```javascript
// game.js
export function startGame() { /*...*/ }
export const GAME_CONFIG = { /*...*/ };

// main.js
import { startGame, GAME_CONFIG } from './game.js';
```

**2. Arrow functions:**
```javascript
const calculateScore = (timeLeft) => {
  return Math.floor(100 * (timeLeft / 30));
};

// Array methods
const filtered = laureates.filter(l => l.category === 'Physics');
```

**3. Destructuring:**
```javascript
const { name, year, category } = laureate;
const [first, second, ...rest] = array;
```

**4. Template literals:**
```javascript
const html = `
  <div class="card">
    <h2>${laureate.name}</h2>
    <p>Year: ${laureate.year}</p>
  </div>
`;
```

**5. Spread operator:**
```javascript
const shuffled = [...array];
const merged = { ...defaultConfig, ...userConfig };
```

**6. Array methods:**
```javascript
// Modern array iteration
laureates.forEach(l => console.log(l.name));
const names = laureates.map(l => l.name);
const physics = laureates.filter(l => l.category === 'Physics');
const total = scores.reduce((sum, s) => sum + s, 0);
```

**7. Promises och async/await:**
```javascript
async function loadData() {
  try {
    const response = await fetch('./nobel-data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

**8. Const och let (inte var):**
```javascript
const TIMER_DURATION = 30; // Constant
let score = 0; // Variable that changes
```

**Browser APIs ni använder:**
- **DOM Manipulation:** `querySelector`, `addEventListener`
- **Fetch API:** För att ladda JSON data
- **LocalStorage:** För leaderboards
- **Timer APIs:** `setTimeout`, `setInterval`
- **Drag & Drop:** För Timeline Challenge
- **Touch Events:** För mobil-support

## Build Tools

### Ingen build step required!

Nobel Quest Fas 1 använder **ingen bundler** eller build process.

**Varför?**
- Snabbare att komma igång
- Enklare debugging
- Direkt i browser
- Fokus på kod, inte tooling

**Detta betyder:**
- ✅ Direkta `<script>` tags i HTML
- ✅ Tailwind via CDN
- ✅ ES6 modules i browser (`type="module"`)
- ❌ Ingen Webpack, Vite, Parcel
- ❌ Ingen npm build script (bara för Tailwind CLI optional)

### Tailwind Setup

**Option 1: CDN (snabbast, rekommenderat för Fas 1):**
```html
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'nobel-gold': '#C5A572',
            'nobel-blue': '#003C71'
          }
        }
      }
    }
  </script>
</head>
```

**Option 2: Tailwind CLI (om ni vill custom build):**
```powershell
# Install
npm install -D tailwindcss

# Build CSS
npx tailwindcss -i ./input.css -o ./output.css --watch
```

## Development Environment

### Required
- **Browser:** Chrome, Firefox, eller Edge (senaste versionen)
- **Code Editor:** VS Code (rekommenderat)
- **Git:** För version control
- **GitHub Account:** För hosting och collaboration

### VS Code Extensions (rekommenderade)
- **Live Server:** Auto-reload när filer ändras
- **Tailwind CSS IntelliSense:** Autocomplete för Tailwind
- **ESLint:** JavaScript linting
- **Prettier:** Code formatting
- **GitLens:** Git visualization

### Browser DevTools
- **Console:** Debug och log
- **Sources:** Breakpoints och debugger
- **Network:** Check fetch requests
- **Application:** Inspect localStorage
- **Device Mode:** Test responsive design

## File Structure

```
te4-nobel-GAME-NAME/
├── index.html           # Main HTML file
├── styles.css           # Custom CSS (med Tailwind @apply)
├── tailwind.config.js   # Tailwind configuration (optional)
├── main.js              # Entry point JavaScript
├── game.js              # Game logic
├── ui.js                # UI rendering
├── data.js              # Data loading och management
├── storage.js           # LocalStorage utilities
├── utils.js             # Helper functions
├── nobel-data.json      # Data source
└── README.md            # Documentation
```

**HTML structure:**
```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nobel Quest - GAME NAME</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  
  <script type="module" src="main.js"></script>
</body>
</html>
```

## Data Format

### JSON Structure
```json
[
  {
    "id": 1,
    "name": "Marie Curie",
    "year": 1903,
    "category": ["Fysik"],
    "achievement": "Upptäckte radioaktivitet",
    "country": "Polen/Frankrike",
    "imageUrl": "https://upload.wikimedia.org/..."
  }
]
```

**Categories:**
- Fysik
- Kemi
- Medicin
- Litteratur
- Fred
- Ekonomi

## Version Control

### Git
**Version:** Git 2.x

**Basic commands:**
```powershell
git clone URL
git checkout -b feature/name
git add .
git commit -m "Message"
git push origin branch-name
```

### GitHub
- **Repositories:** En per team
- **Branches:** Feature branches
- **Pull Requests:** Code review workflow
- **Issues:** Task tracking
- **Projects:** Kanban board

## Hosting

### Netlify
**Free static hosting med automatic deploys**

**Setup:**
1. Skapa konto på netlify.com
2. Connect till GitHub repo
3. Deploy settings: Auto-deploy från `main` branch

**URL format:**
`https://your-site-name.netlify.app/`

**Features:**
- Auto-deploy vid push till `main`
- HTTPS automatiskt
- Custom domains (optional)
- Deploy previews för PRs

**Requirements:**
- `index.html` i root
- Alla assets relative paths

## Performance Considerations

### Optimization Strategies

**1. Minimize initial load:**
```javascript
// Load data async
async function init() {
  const data = await loadData();
  renderUI(data);
}
```

**2. Lazy load images:**
```html
<img loading="lazy" src="image.jpg" alt="...">
```

**3. Debounce events:**
```javascript
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
```

**4. Use LocalStorage wisely:**
```javascript
// Cache data
localStorage.setItem('data', JSON.stringify(data));

// Retrieve
const cached = JSON.parse(localStorage.getItem('data'));
```

## Browser Compatibility

### Target Browsers
- **Chrome:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Edge:** 90+

**Modern features assumed:**
- ES6 modules
- Fetch API
- LocalStorage
- CSS Grid/Flexbox
- Drag & Drop API

**No polyfills needed** för modern browsers.

## Testing

### Manual Testing
- **Chrome DevTools:** Primary testing
- **Firefox DevTools:** Cross-browser check
- **Mobile:** Chrome DevTools Device Mode
- **Real devices:** Test på physical mobil om möjligt

### No automated testing (Fas 1)
- Ingen Jest, Mocha, etc.
- Focus på manual testing
- Code review via PRs

## Security

### Minimal attack surface (static site)
- ✅ No backend = No SQL injection
- ✅ No user authentication = No password issues
- ✅ Static files = No server vulnerabilities

### Best practices
- **Input validation:** Validate user input
- **XSS prevention:** Use textContent, not innerHTML för user data
- **HTTPS:** Netlify auto-provides

## Limitations

**Vad ni INTE har:**
- ❌ Backend/database
- ❌ User authentication
- ❌ Real-time multiplayer
- ❌ Persistent global leaderboard
- ❌ External APIs (förutom JSON fetch)
- ❌ Build tools/bundlers
- ❌ TypeScript
- ❌ Testing frameworks
- ❌ CSS preprocessors (SASS/LESS)

## Resurser

- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Tailwind: https://tailwindcss.com/docs
- ES6 features: https://es6-features.org/
- Netlify: https://docs.netlify.com/
- Git: https://git-scm.com/doc

