export function wireDnD(root){
    let active = null;
    root.querySelectorAll('#deck .card').forEach(card =>{
        card.addEventListener('pointerdown', () => {
            active = card;
            card.classList.add('ring-2', 'ring-nobel-gold');
        }, { passive: true });
    });
    root.querySelectorAll('#timeline > .card').forEach(zone => {
        zone.addEventListener('pointerup', () => {
            if(!active) return;
            zone.innerHTML='';
            zone.appendChild(active);
            active.classList.remove('ring-2', 'ring-nobel-gold');
            active = null;
        }, {passive: true });
    });
}

export function readUserOrder(root) {
    return [...root.querySelectorAll('#timeline > .card')]
    .map(z => z.firstElementChild?.dataset?.id)
    .filter(Boolean)
    .map(Number);
}