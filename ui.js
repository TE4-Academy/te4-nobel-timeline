export function renderStart(root) {
  root.innerHTML = `
  <section class="mx-auto max-w-2xl text-center">
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
<section class="max-w-3xl mx-auto">
    <div class="sticky top-[env(safe-area-inset-top)] z-10 bg-neutral-50/80 backdrop-blur pb-3">
    <h2 class="text-xl font-bold pt-2">Dra och släpp korten för att sortera pristagarna från äldst till yngst (efter år)</h2>
    </div>

    <ul id="sortable-list" class="mt-2 space-y-3" aria-label="Sortera pristagarna"></ul>

    <div class="mt-4">
    <button id="submit" class="btn btn-secondary w-full py-4 text-base">Kolla ordning</button>
    </div>
    </section>
    `;

    const list = root.querySelector("#sortable-list");
    cards.forEach((c) => {
        const li = document.createElement("li");
        li.className = "draggable card p-3 bg-white shadow-sm flex items-center gap-4";
        li.draggable = true;
        li.dataset.id = c.id;
        li.innerHTML = `
        <div class="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-neutral-100 text-neutral-500 select-none" aria-hidden="true">⋮⋮</div>
        <img src="${c.imageUrl}" alt="${c.name}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg" loading="lazy"/>
        <div class="flex-1 min-w-0">
        <h4 class="font-bold truncate">${c.name}</h4>
        <span class="badge-gold">${c.category}</span>
        </div>
        `;
        list.appendChild(li);

    });
}

