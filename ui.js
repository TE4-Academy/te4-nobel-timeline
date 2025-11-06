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
}