# Roll: UI/UX Developer

## Ansvar

Du ansvarar för hur spelet ser ut och hur det känns att använda. Du bygger HTML-strukturen och använder Tailwind CSS för att göra spelet snyggt och lätt att använda.

## Dagliga uppgifter

### Morgon
- Delta i daily standup
- Kolla vad du gjorde igår
- Planera dagens design-arbete

### Under dagen
- Skissa layout (papper eller digitalt)
- Skriv HTML-struktur
- Styla med Tailwind CSS
- Testa på mobil och desktop

### Eftermiddag
- Visa vad du gjort för teamet
- Testa att allt fungerar responsivt

## Huvudsakliga leveranser

- HTML-struktur för spelet
- Tailwind CSS styling
- Responsiv design (mobil först)
- Smooth transitions och animations
- Buttons, cards och andra komponenter

## Samarbete

Du pratar med Game Logic Developer om vilka CSS-klasser som behövs och hur JavaScript ska kopplas till UI. Visa design-förslag för Project Lead innan du implementerar stora ändringar.

## Verktyg

- VS Code för HTML och CSS
- Live Server för att se ändringar direkt
- Browser DevTools för att testa och justera
- https://play.tailwindcss.com/ för att testa Tailwind
- https://tailwindcss.com/docs för dokumentation

## Checklista varje dag

- [ ] HTML-struktur skriven
- [ ] Tailwind-klasser applicerade
- [ ] Testat på mobil och desktop
- [ ] Färger från starter kit används
- [ ] Buttons och hover-states fungerar

## Tailwind exempel

```html
<!-- Button -->
<button class="px-6 py-3 bg-nobel-gold text-white rounded-lg hover:bg-nobel-gold-dark transition-colors">
  Starta spel
</button>

<!-- Card -->
<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 class="text-xl font-bold mb-2">Marie Curie</h2>
  <p class="text-gray-600">Fysik, 1903</p>
</div>

<!-- Responsiv grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards här -->
</div>
```

## Vanliga utmaningar

**"Design tar för lång tid"**
Börja enkelt. Använd komponenter från starter kit. Polish kommer senare.

**"Ser olika ut i olika browsers"**
Testa ofta. Tailwind hanterar det mesta automatiskt.

**"Svårt att göra responsivt"**
Använd Tailwind breakpoints: `sm:`, `md:`, `lg:`. Testa med Chrome DevTools device mode.

## Resurser

- `../starter-kit/styles.css` (färdiga komponenter)
- `../starter-kit/tailwind.config.js` (färger och inställningar)
- https://tailwindcss.com/docs
- https://play.tailwindcss.com/
