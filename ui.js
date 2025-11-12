export function renderStart(root) {
  root.innerHTML = `
  <section class="card mx-auto max-w-2xl text-center">
    <h2 class="text-2xl font-bold mb-6">Välj svårighetsgrad</h2>
    <div class="flex flex-col gap-4 items-center">
      <button class="btn btn-primary py-4 text-base w-3/4 sm:w-2/3 md:w-1/2" data-level="easy">Lätt (5)</button>
      <button class="btn btn-primary py-4 text-base w-3/4 sm:w-2/3 md:w-1/2" data-level="medium">Medel (8)</button>
      <button class="btn btn-primary py-4 text-base w-3/4 sm:w-2/3 md:w-1/2" data-level="hard">Svår (12)</button>
    </div>
  </section>`;

  root.querySelectorAll("[data-level]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const level = e.currentTarget.dataset.level;
      document.dispatchEvent(new CustomEvent("difficulty:selected", { detail: { level } })
      );
    });
  });
}

export function renderBoard(root, cards) { 
  root.innerHTML = `
    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
    <div>
    <h3 class="text-xl mb-2">Kort</h3>
    <div id="deck" class="grid gap-3"></div>
    </div>
    <div>
    <h3 class="text-xl mb-2">Timeline</h3>
    <div id="timeline" class="flex flex-col gap-3 sm:gap-4" aria-label="Timeline"></div>
    <div class="p-4 bg-white/90 backdrop-blur md:static md:p-0 md:bg-transparent">
    <button id="submit" class="btn btn-secondary w-full md:w-auto py-4 text-base">Kolla ordning</button>
    </div>
    </div>
    </section>`;
  const deck = root.querySelector("#deck");
  cards.forEach((c) => {
    const el = document.createElement("article");
    el.className = "card card-interactive card-deck p-2 shadow-sm";
    el.dataset.id = c.id;
    el.innerHTML = `
        <div class="flex items-center gap-4">
        <img src="${c.imageUrl}" alt="${c.name}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg" loading="lazy" sizes="(max-width:640px) 56px, 64px" />
        <div><h4 class="font-bold">${c.name}</h4><span class="badge-gold">${c.category}</span></div>
        </div>`;
    deck.appendChild(el);
  });
  const timeline = root.querySelector("#timeline");
  for (let i = 0; i < cards.length; i++) {
    const zone = document.createElement("div");
    zone.className = "timeline-slot px-3 py-2";
    zone.dataset.slot = i;
    zone.innerHTML = '<span data-placeholder class="text-sm">Släpp här</span>';
    timeline.appendChild(zone);
  }
}

