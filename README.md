Nobel Timeline
Ett interaktivt och mobilanpassat timeline-spel där spelaren placerar Nobelpristagare i rätt kronologisk ordning. Sortera pristagarna från den som fick priset tidigast till den som fick det senast – och tävla om högst poäng på leaderboarden!

---

Funktioner
*Drag & Drop* (stöd för både mus och mobil/touch)
*Namnlagring i LocalStorage* – leaderboarden sparas lokalt
*Tre svårighetsgrader*  
   Lätt (5 kort) – 100 poäng per rätt  
   Medel (8 kort) – 125 poäng per rätt  
   Svår (12 kort) – 150 poäng per rätt
   Fel svar kostar -25 poäng** (poängen kan aldrig gå under noll)
   Tidsbaserad bonus** – kvarvarande tid omvandlas till multiplikator  
  *Exempel: 30 sekunder kvar = ×1.3 på slutpoängen
 Mobil first-design
 Leaderboard som uppdateras efter varje spelomgång

---

Hur spelet fungerar
  1. Ange ditt namn (sparas automatiskt i LocalStorage).
  2. Välj svårighetsgrad.
  3. Dra och släpp korten (Nobelpristagarna) i den ordning du tror att de fick sitt Nobelpris.
  4. Tryck på Kolla ordning för att få resultat.
  5. Dina poäng sparas och visas i leaderboarden.

---
Projektstruktur
  Spelet är byggt i ES6 JavaScript och består av följande filer:
   index.html
   dnd.js # Drag & drop-logik
   game.js # Spelets huvudlogik
   data.js # Data om Nobelpristagare
   main.js # Initiering och koppling av delar
   storage.js # LocalStorage-funktioner


---

Tekniker & verktyg
   HTML5
   ES6 JavaScript
   Tailwind CSS
   LocalStorage
   Utvecklat i VS Code

---

Mobilanpassning
  Spelet är byggt mobile-first och stödjer:
   Touch-dragning
   Responsiv layout
   Enkelt gränssnitt för små skärmar

---
Teamet bakom projektet
  Backend Developers:  
    - Christian  
    - Liam  

  UI/UX Designer:  
    Arthur  

  Projektledare: 
    Melvin  

Alla har bidragit till utvecklingen på olika sätt.

---

 Framtida förbättringar (valfritt)
   Online-leaderboard
   Fler kategorier eller teman (t.ex. tidsperioder)
   Ljud- och animationsfeedback
   Dark mode


