# Prerequisites - Nobel Quest Fas 1

## HTML

### Grundläggande (krävs)
- **Semantisk HTML:** `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Formulär:** `<form>`, `<input>`, `<button>`, `<select>`
- **Attribut:** `class`, `id`, `data-*` attribut
- **Struktur:** Nästlade element, indentation

**Exempel:**
```html
<section class="game-container">
  <h2>Välj kategori</h2>
  <button class="btn" data-category="Physics">Fysik</button>
</section>
```

### Bra att kunna (rekommenderat)
- **Accessibility:** `alt` text, `aria-label`, semantic markup
- **Meta tags:** `viewport`, `charset`
- **Links:** `<a>` för navigation

### Kan läras under projektet
- **Canvas API** (om ni vill använda för visualiseringar)
- **Drag & Drop attribut** (Timeline Challenge)

## CSS

### Grundläggande (krävs)
- **Selectors:** Class (`.class`), ID (`#id`), element (`div`)
- **Box model:** `margin`, `padding`, `border`, `width`, `height`
- **Colors:** hex, rgb, named colors
- **Text styling:** `font-size`, `color`, `font-weight`

**Exempel:**
```css
.card {
  padding: 20px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
```

### Bra att kunna (rekommenderat)
- **Flexbox:** `display: flex`, `justify-content`, `align-items`
- **Grid:** `display: grid`, `grid-template-columns`
- **Pseudo-classes:** `:hover`, `:focus`, `:active`
- **Transitions:** `transition: all 0.3s ease`
- **Media queries:** `@media (min-width: 768px)`

**Exempel:**
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

### Kan läras under projektet
- **Tailwind utility classes** (vi har starter kit)
- **CSS animations** (keyframes)
- **CSS transforms** (3D flip för Match Master)

## JavaScript

### Grundläggande (krävs)
- **Variables:** `const`, `let` (inte `var`)
- **Data types:** String, Number, Boolean, Array, Object
- **Functions:** Function declaration, arrow functions
- **Conditionals:** `if/else`, ternary operator
- **Loops:** `for`, `forEach`

**Exempel:**
```javascript
const name = "Marie Curie";
let score = 0;

function calculateScore(timeLeft) {
  if (timeLeft > 20) {
    return 100;
  } else {
    return 50;
  }
}

const result = calculateScore(25);
```

### Bra att kunna (rekommenderat)
- **Array methods:** `map`, `filter`, `reduce`, `find`
- **Object destructuring:** `const { name, year } = laureate`
- **Template literals:** `` `Score: ${score}` ``
- **Spread operator:** `[...array]`
- **Arrow functions:** `const add = (a, b) => a + b`

**Exempel:**
```javascript
const physics = laureates.filter(l => l.category === 'Physics');
const names = laureates.map(l => l.name);
const { name, year } = laureates[0];
```

### DOM Manipulation (krävs)
- **Select elements:** `document.querySelector()`, `getElementById()`
- **Event listeners:** `addEventListener('click', handler)`
- **Modify content:** `textContent`, `innerHTML`
- **Modify classes:** `classList.add()`, `classList.remove()`

**Exempel:**
```javascript
const button = document.querySelector('.start-btn');
button.addEventListener('click', () => {
  console.log('Game started!');
});

const scoreElement = document.getElementById('score');
scoreElement.textContent = `Score: ${score}`;
```

### Kan läras under projektet
- **Async/await:** För data loading
- **Fetch API:** För att ladda JSON
- **LocalStorage:** För leaderboard
- **ES6 modules:** Import/export
- **Promises:** För async operations

**Men vi har exempel i starter kit och docs!**

## Git och GitHub

### Grundläggande (krävs)
- **Clone:** `git clone URL`
- **Status:** `git status`
- **Add:** `git add .`
- **Commit:** `git commit -m "Message"`
- **Push:** `git push`

### Bra att kunna (rekommenderat)
- **Branches:** `git checkout -b branch-name`
- **Pull:** `git pull`
- **Merge:** Förstå merge conflicts
- **GitHub:** Skapa repository, Issues, Pull Requests

### Kan läras under projektet
- **GitHub Projects:** Kanban boards
- **Code review:** PR comments
- **Netlify:** Deployment

**Vi har `workflow.md` som guide!**

## Verktyg

### Krävs
- **VS Code** (eller annan code editor)
- **Modern browser** (Chrome, Firefox, Edge)
- **Git** installerat
- **GitHub account**

### Rekommenderat
- **Live Server extension** (VS Code)
- **Browser DevTools:** Console, Elements, Network tabs
- **Discord/Slack:** För team kommunikation

### Optional
- **Tailwind IntelliSense** (VS Code extension)
- **ESLint** (code quality)
- **Prettier** (code formatting)

## Kompetenser (soft skills)

### Teamwork
- **Kommunikation:** Dela updates, fråga om hjälp
- **Collaboration:** Git workflow, code review
- **Problem-solving:** Debug tillsammans
- **Time management:** Håll deadlines

### Self-learning
- **Google-fu:** Hitta lösningar online
- **MDN reading:** Förstå dokumentation
- **Debugging:** Använd console.log och DevTools
- **Trial and error:** Testa, fail, learn, repeat

## Kunskapsluckor? No problem!

### "Jag kan inte Flexbox"
**Lösning:**
- https://flexboxfroggy.com/ (15 min)
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### "Jag har aldrig använt array methods"
**Lösning:**
- https://javascript.info/array-methods
- Practice: https://www.freecodecamp.org/

### "Jag förstår inte async/await"
**Lösning:**
- Vi har exempel i starter kit
- Kopiera mönstret först, förstå senare
- https://javascript.info/async-await

### "Jag har aldrig använt Git"
**Lösning:**
- Se `workflow.md` för steg-för-steg guide
- Project Lead hjälper
- Använd GitHub Docs och tutorials

## Kunskapsnivåer per roll

### Project Lead
**Behöver:**
- ✅ Git och GitHub (branches, PRs, merges)
- ✅ Communication skills
- ✅ Basic JavaScript (för att review kod)

**Nice-to-have:**
- Testing mindset
- Time management

### UI/UX Developer
**Behöver:**
- ✅ HTML struktur
- ✅ CSS (Flexbox, Grid, eller villig att lära)
- ✅ Tailwind (eller kopiera från starter kit)
- ✅ Basic JavaScript (för event handlers)

**Nice-to-have:**
- Design eye
- Accessibility knowledge
- Animations

### Game Logic Developer
**Behöver:**
- ✅ JavaScript (functions, loops, conditionals)
- ✅ DOM manipulation
- ✅ Problem-solving mindset
- ✅ Debugging skills

**Nice-to-have:**
- Algorithm knowledge
- Performance optimization
- ES6+ features

### Data Integration (om 4 personer)
**Behöver:**
- ✅ JavaScript (objects, arrays)
- ✅ Fetch API (eller villig att lära)
- ✅ JSON structure förståelse

**Nice-to-have:**
- Async/await
- Error handling
- Caching strategies

## Self-assessment

Utvärdera dig själv (1-5):

**HTML:**
- [ ] 1 - Aldrig skrivit HTML
- [ ] 2 - Kan basic tags
- [ ] 3 - Kan formulär och struktur
- [ ] 4 - Kan semantic HTML och accessibility
- [ ] 5 - Expert

**CSS:**
- [ ] 1 - Aldrig använt CSS
- [ ] 2 - Kan basic styling
- [ ] 3 - Kan Flexbox/Grid basics
- [ ] 4 - Kan responsive design och animations
- [ ] 5 - Expert

**JavaScript:**
- [ ] 1 - Aldrig kodat JS
- [ ] 2 - Kan variables och functions
- [ ] 3 - Kan DOM manipulation och events
- [ ] 4 - Kan ES6+, async, modules
- [ ] 5 - Expert

**Git:**
- [ ] 1 - Aldrig använt
- [ ] 2 - Kan clone, commit, push
- [ ] 3 - Kan branches och basic merges
- [ ] 4 - Kan PRs, reviews, conflict resolution
- [ ] 5 - Expert

**Recommendations:**
- **Mostly 1-2:** Ta en roll som låter dig lära (UI/UX eller Data Integration)
- **Mostly 3:** Du klarar alla roller, välj efter intresse
- **Mostly 4-5:** Bli Project Lead eller Game Logic Developer

## Pre-project Preparation

### Veckan före start
1. **Setup environment:**
   ```powershell
   # Installera Git
   git --version
   
   # Installera VS Code
   code --version
   
   # Test browser DevTools
   # Öppna Chrome → F12 → Console → Skriv: console.log("Hello")
   ```

2. **Refresh skills:**
   - FreeCodeCamp JavaScript basics (1-2 timmar)
   - Flexbox Froggy (15 min)
   - Git tutorial (30 min)

3. **Read documentation:**
   - `assignments/YOUR-GAME.md`
   - `roles/YOUR-ROLE.md`
   - `methodology/workflow.md`

### Dag 1 morgon
- [ ] Klart GitHub account
- [ ] VS Code installerat
- [ ] Git konfigurerat (`git config --global user.name "Your Name"`)
- [ ] Live Server extension installerat
- [ ] Läst team assignment
- [ ] Valt roll (eller diskuterat med team)

## Resurser för att fylla kunskapsluckor

### HTML/CSS
- **MDN:** https://developer.mozilla.org/en-US/docs/Web
- **CSS Tricks:** https://css-tricks.com/
- **Flexbox:** https://flexboxfroggy.com/
- **Grid:** https://cssgridgarden.com/

### JavaScript
- **JavaScript.info:** https://javascript.info/ (excellent tutorials)
- **Eloquent JavaScript:** https://eloquentjavascript.net/ (free book)
- **FreeCodeCamp:** https://www.freecodecamp.org/
- **Codecademy:** https://www.codecademy.com/learn/introduction-to-javascript

### Git/GitHub
- **GitHub Learning Lab:** https://lab.github.com/
- **Git tutorial:** https://www.atlassian.com/git/tutorials
- **GitHub Docs:** https://docs.github.com/

### Tailwind CSS
- **Official Docs:** https://tailwindcss.com/docs
- **Tailwind Play:** https://play.tailwindcss.com/ (experimentera)

### General
- **Stack Overflow:** För Q&A
- **MDN Web Docs:** Referens för allt web
- **YouTube:** Tutorials för visuellt lärande

## Mindset

**Viktigast av allt:**
- ✅ Villig att lära
- ✅ Ber om hjälp när fast
- ✅ Collaborates med teamet
- ✅ Testar och experimenterar
- ✅ Inte rädd för att göra fel

**Du behöver inte kunna allt från början - det är därför ni har 6 dagar och ett team!**

## Quiz: Är du redo?

Svara Ja/Nej:

1. [ ] Jag kan skapa en enkel HTML-fil med header, main, footer
2. [ ] Jag kan style:a en button med CSS (färg, padding, hover)
3. [ ] Jag kan lyssna på click-events med JavaScript
4. [ ] Jag kan clone:a ett GitHub repository
5. [ ] Jag har VS Code (eller annan editor) installerat
6. [ ] Jag är bekväm med att googla lösningar
7. [ ] Jag vågar fråga teamet om hjälp
8. [ ] Jag är redo att lära mig nya saker

**5+ Ja:** Du är redo!
**3-4 Ja:** Du klarar det, men läs resurser ovan först
**<3 Ja:** Gör prep work innan projektet startar

**Lycka till!**
