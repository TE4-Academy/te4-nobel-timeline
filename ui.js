export function renderStart(root){
    root.innerHTML = `
    <section class="card">
    <h2 class="text-2xl font-bold mb-4">Välj svårighetsgrad</h2>
    <div class="flex flex-col gap-3">
    <button class="btn btn-primary py-4 text-base w-full" data-level="easy">Lätt (5)</button>
    <button class="btn btn-primary py-4 text-base w-full" data-level="medium">Medel (8)</button>
    <button class="btn btn-primary py-4 text-base w-full" data-level="hard">Svårt (12)</button>
    </div>
    </section>
    `;

    btn.addEventListener('click', (e) => {
        const level = e.currentTarget.dataset.level;
        document.dispatchEvent(new CustomEvent('difficulty:selected', { detail: { level } }));
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
    <h3 class="text-xl md-2">Timeline</h3>
    <div id="timeline" class="flex flex-col gap-3 sm:gap-4" aria-label="Timeline"></div>
    <div class="fiex left-0 right-0 bottom-0 p-4 bg-white/90 backdrop-blur md:static md:p-0 md:bg-transparent">
    <button id="submit" class="btn btn-secondary w-full md:w-auto py-4 text-base">Kolla ordning</button>
    </div>
    </div>
    </section>`;
    const deck = root.querySelector('#deck');
    cards.forEach(c => {
        const el = document.createElement('article');
        el.className = 'card card-interactive';
        el.dataset.id = c.id;
        el.innerHTML = `
        <div class="flex items-center gap-4">
        <img src="${c.imageUrl}" alt="${c.name}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg" loading="lazy" sizes="(max-width:640px) 56px, 64px" />
        <div><h4 class="font-bold">${c.name}</h4><p class="text-sm text-neutral-500">${c.category}</p></div>
        </div>`;
        deck.appendChild(el);
    });
    const timeline = root.querySelector('#timeline');
    for (let i = 0; i < cards.length; i++) {
        const zone = document.createElement('div');
        zone.className = 'card min-h-24 flex items-center justify-center text-neutral-500';
        zone.dataset.slot = i;
        zone.innerHTML = '<span class="text-sm">Släpp här</span>';
        timeline.appendChild(zone);
    }
}
