export function wireDnD(root){
    let active = null;
    root.querySelectorAll('#deck .card').forEach(card =>{
        card.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            active = card;
            card.classList.add('ring-2', 'ring-nobel-gold');
        });
    });
    root.querySelectorAll('#timeline > .card').forEach(zone => {
        zone.addEventListener('pointerup', (e) => {
            e.preventDefault();
            if(!active) return;
            zone.innerHTML='';
            zone.appendChild(active);
            active.classList.remove('ring-2', 'ring-nobel-gold');
            active = null;
        });
    });
}

export function readUserOrder(root) {
    return [...root.querySelectorAll('#timeline > .card')]
    .map(z => z.firstElementChild?.dataset?.id)
    .filter(Boolean)
    .map(Number);
}