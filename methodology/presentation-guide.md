# Presentation Guide - Nobel Quest Demo (Måndag 17/11)

## Syfte

På måndag 17/11 presenterar varje team sitt spel för de andra teamen.

## Format

- **Per team:** 10 minuter (7 min presentation + 3 min frågor)
- **Deltagare:** Alla tre teams

## Presentation Structure

### 1. Intro (1 minut)
- Teamnamn och medlemmar
- Vilket spel ni byggt
- En mening pitch

**Exempel:**
"Vi är Team A och har byggt Trivia Rush, ett quiz-spel om nobelpristagare där man tävlar mot klockan."

### 2. Demo (5 minuter)
- Spela igenom spelet live
- Visa key features
- Förklara vad som händer

**Tips:**
- Testa demon innan
- Förbered bra data
- Spela, inte bara prata om spelet

### 3. Teknisk genomgång (1 minut)
- Visa 1-2 kod-snippets
- Förklara intressanta lösningar
- Vad var utmanande?

**Exempel:**
```javascript
function startTimer(duration) {
  let timeLeft = duration;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) endGame();
  }, 1000);
}
```
"Vi använde setInterval för countdown."

### 4. Frågor (3 minuter)
- Andra teams ställer frågor
- Ni svarar

## Förberedelse

### Dag 6 eftermiddag
- [ ] Bestäm vem som säger vad
- [ ] Öva demon minst 2 gånger
- [ ] Välj kod-snippets att visa
- [ ] Testa att spelet fungerar

### Måndag 17/11 morgon
- [ ] Test demon en sista gång
- [ ] Deploy senaste version till Netlify
- [ ] Öka font size i VS Code och browser
- [ ] Stäng notifications

## Vem säger vad

**Project Lead:**
- Intro och team presentation
- Koordinerar presentationen

**UI/UX Developer:**
- Visar design
- Förklarar user experience

**Game Logic Developer:**
- Teknisk genomgång
- Visar kod

**Data Integration (om 4 personer):**
- Förklarar data-hantering

## Presentation Tips

- Ha backup (screen recording om demon kraschar)
- Tala till publiken, inte skärmen
- Börja med demon, inte teori
- Öka font sizes så alla ser
- Stäng alla andra browser tabs
## Efter presentationen

**Team retrospective:**
- Vad gick bra?
- Vad skulle vi göra annorlunda?
- Vad lärde vi oss?

**Nästa steg:**
- Fixa bugs som upptäcktes
- Uppdatera README
- Celebration!
