# Workflow - Nobel Quest Fas 1

## Git och GitHub Workflow

### Repository Structure

Varje team får ett repository:
- **Team A:** `te4-nobel-trivia-rush`
- **Team B:** `te4-nobel-timeline`
- **Team C:** `te4-nobel-match-master`

### Initial Setup (Dag 1 morgon)

1. **Alla teammedlemmar cloner:**
   ```powershell
   git clone https://github.com/TE4-Academy/te4-nobel-GAME-NAME.git
   cd te4-nobel-GAME-NAME
   ```

2. **Project Lead skapar GitHub Project:**
   - Gå till repository
   - Projects → New Project → Board
   - Skapa kolumner: Backlog, To Do, In Progress, Review, Done

3. **Lägg till starter kit:**
   ```powershell
   # Kopiera från fas-1/starter-kit/
   # - tailwind.config.js
   # - styles.css
   # - nobel-data.json
   
   git add .
   git commit -m "Add starter kit (Tailwind, CSS, data)"
   git push
   ```

### Branch Strategy

**Main branch:**
- Aldrig commit direkt till `main`
- Alla ändringar via Pull Requests
- Minst 1 review innan merge

**Feature branches:**
```powershell
# Skapa ny branch för varje feature
git checkout -b feature/timer-logic
git checkout -b feature/question-display
git checkout -b design/game-card
git checkout -b fix/score-calculation
```

**Naming conventions:**
- `feature/` - Nya funktioner
- `design/` - UI/UX-arbete
- `fix/` - Bugfixar

### Daily Workflow

#### Morgon (efter standup)
```powershell
# Hämta senaste ändringar
git checkout main
git pull

# Skapa ny branch för dagens task
git checkout -b feature/min-feature

# Börja koda!
```

#### Under dagen
```powershell
# Commit ofta (flera gånger per dag)
git add .
git commit -m "Add question randomizer logic"

# Push till GitHub
git push -u origin feature/min-feature
```

#### När feature är klar
1. **Pusha final changes:**
   ```powershell
   git add .
   git commit -m "Complete timer logic with tests"
   git push
   ```

2. **Skapa Pull Request på GitHub:**
   - Gå till repository
   - "Compare & pull request"
   - Skriv tydlig beskrivning av vad du gjort
   - Assign reviewer (Project Lead eller teammedlem)

3. **Vänta på review:**
   - Fixa eventuella ändringar
   - Push updates (samma branch)
   - Diskutera i PR-kommentarer

4. **Merge efter approval:**
   - Project Lead mergar
   - Stäng relaterad Issue
   - Delete branch efter merge

### GitHub Issues

**Skapa issues för alla tasks:**
```markdown
Title: Implementera timer countdown

Description:
- [ ] Skapa timer state
- [ ] Visa countdown visuellt
- [ ] Stopp vid 0
- [ ] Update score baserat på tid kvar

Labels: feature, game-logic
Assignee: @username
```

**Labels:**
- `feature` - Nya funktioner
- `bug` - Bugfixar
- `design` - UI/UX-arbete
- `help-wanted` - Behöver hjälp
- `priority-high` - Måste göras snabbt

### GitHub Projects (Kanban)

**Columns:**
1. **Backlog** - Alla planerade tasks
2. **To Do** - Nästa att göra
3. **In Progress** - Pågående arbete (max 1 per person)
4. **Review** - PR skapad, väntar på review
5. **Done** - Mergat och klart

**Uppdatera dagligen:**
- Morgon: Flytta tasks från Backlog → To Do
- Under dagen: To Do → In Progress → Review
- Kväll: Review → Done

### Pull Requests

**När du skapar en PR:**
- Beskriv vad du gjort
- Nämn vilket Issue det löser
- Testa att koden fungerar innan du skapar PR

**Code review:**
- Testa koden lokalt
- Läs igenom ändringarna
- Ge konstruktiv feedback
- Godkänn när det ser bra ut

### Merge Conflicts

**Om conflict uppstår:**
```powershell
# Uppdatera din branch med main
git checkout feature/min-feature
git fetch origin
git merge origin/main

# Git visar conflicts
# Öppna filen i VS Code
# Välj "Accept Current" eller "Accept Incoming" eller redigera manuellt
# Ta bort <<<<<<, ======, >>>>>> markers

git add .
git commit -m "Resolve merge conflict"
git push
```

**Undvik conflicts:**
- Synka med main varje dag
- Kommunicera vem som arbetar på vilken fil
- Små PRs som mergas snabbt

### Code Review Process

1. **Testa koden:**
   ```powershell
   git fetch
   git checkout feature/branch-name
   # Öppna i browser, testa funktionalitet
   ```

2. **Läs koden:**
   - Är logiken korrekt?
   - Är det läsbart?
   - Finns edge cases?

3. **Ge feedback:**
   - Var konstruktiv
   - Förklara varför
   - Föreslå lösningar

**Exempel på bra feedback:**
```markdown
Timer logic fungerar bra! Överväg att extrahera magic number 30 till en konstant.
```

### Deployment (Netlify)

**Setup (Dag 1):**
1. Gå till [netlify.com](https://netlify.com)
2. Sign in med GitHub
3. "Add new site" → "Import an existing project"
4. Välj er repository
5. Build settings: (lämna tomt för static site)
6. Deploy site

**Efter merge till main:**
- Netlify auto-deployas
- Vänta 1-2 minuter
- Besök er live URL

**Testa deployment:**
- Öppna på mobil
- Testa alla features
- Kolla console för errors

### Om något går fel

**Ångra senaste commit (lokalt):**
```powershell
git reset --soft HEAD~1
```

**Ångra commit som redan är pushad:**
```powershell
git revert HEAD
git push
```

**Fastnat i merge:**
```powershell
# Avbryt merge
git merge --abort

# Börja om
git checkout main
git pull
git checkout -b new-branch-name
```

## Daglig Checklista

### Morgon
- [ ] Pull latest från main
- [ ] Check GitHub Issues för dagens task
- [ ] Skapa feature branch
- [ ] Flytta Issue till "In Progress" i Projects

### Under dagen
- [ ] Commit minst var 30-60 min
- [ ] Push till GitHub regelbundet
- [ ] Kommentera komplex kod
- [ ] Testa i browser ofta

### Kväll
- [ ] Push dagens arbete
- [ ] Skapa PR om feature klar
- [ ] Uppdatera Issue status
- [ ] Uppdatera GitHub Project board

## Resurser

- Git basics: https://git-scm.com/book/en/v2
- GitHub flow: https://guides.github.com/introduction/flow/
- Netlify docs: https://docs.netlify.com/
