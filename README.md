# Nobel Quest - Starter Kit

Tailwind CSS setup för Nobel Quest-projektet.

## Snabbstart

### 1. Kopiera starter-kit till ditt projekt
```powershell
# I ditt team-repo
xcopy ..\nobel-fas1\starter-kit\* . /E /I
```

### 2. Installera Tailwind och bygg CSS
```powershell
npm install
npm run build
```

Detta skapar `styles.css` från `src/input.css` + `tailwind.config.js`.

### 3. Öppna index.html
Starta Live Server i VS Code och öppna `index.html` för att se alla komponenter.

---

## Hur fungerar det?

**Tailwind CSS** är ett verktyg som läser dina filer och genererar CSS.

```
src/input.css + tailwind.config.js  →  [npm run build]  →  styles.css
(source med @apply)   (Nobel färger)                         (färdig CSS)
```

**Du behöver INTE köra npm under development** - `styles.css` är redan klar att använda!

**Endast om du vill ändra:**
- Nobel-färger → editera `tailwind.config.js` → kör `npm run build`
- Custom komponenter → editera `src/input.css` → kör `npm run build`

---

## Filer

### `index.html`
Demo-fil som visar alla komponenter i praktiken. Öppna med Live Server och kopiera koden du behöver.

### `styles.css` (GENERERAD)
Färdig CSS-fil med Tailwind utilities, Nobel-färger och custom komponenter.

**⚠️ Editera inte denna fil** - den genereras från `src/input.css`.

### `src/input.css`
Source-fil med custom komponenter som `.btn`, `.card`, `.modal` etc.

**Endast för avancerade användare** som vill skapa egna komponenter med `@apply`.

### `tailwind.config.js`
Konfiguration med Nobel-färger, fonts och animationer.

**Endast för avancerade användare** som vill ändra färgpaletten.

### `nobel-data.json`
Data om 75 nobelpristagare - se huvudprojektets README för användning.

---

## Vill du ändra något?

### Ändra Nobel-färger
1. Editera `tailwind.config.js`
2. Kör `npm run build`
3. Refresha browsern

### Skapa egen komponent
1. Editera `src/input.css`:
```css
.my-component {
  @apply bg-white rounded-lg p-4 shadow-md;
}
```
2. Kör `npm run build`
3. Använd `<div class="my-component">...</div>`

### Watch-mode (auto-rebuild)
```powershell
npm run dev
```
Lämna terminalen öppen - `styles.css` uppdateras vid varje ändring.

---

## FAQ

### "npm: command not found"
Installera Node.js från https://nodejs.org/

### "Tailwind-klasser fungerar inte"
Kolla att `<link rel="stylesheet" href="styles.css">` finns i `<head>`.

### "Nobel-färger fungerar inte"
Kör `npm run build` igen.

### "Mina ändringar syns inte"
- Kör `npm run build`
- Refresha browsern (Ctrl+Shift+R)
- Kontrollera att du editerat `src/input.css` (inte `styles.css`)

### "Vad är skillnaden mellan styles.css och src/input.css?"
- `src/input.css` = source-fil (du editerar här)
- `styles.css` = genererad fil (editera aldrig manuellt)

### "Behöver jag köra npm under development?"
Nej! `styles.css` är redan genererad. Kör npm endast om du ändrar färger/komponenter.

---

## Resurser

- **Tailwind Docs:** https://tailwindcss.com/docs
- **Demo:** `index.html` i denna mapp
- **Huvudprojekt README:** Se `../README.md` för komponenter och kodexempel

**Lycka till!**

