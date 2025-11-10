export function wireDnD(root){
    let active = null;
    let origin = null;

    const deck = root.querySelector('#deck');
    const ensurePlaceholder = (zone) => {
        if (!zone) return; 
        if (!zone.firstElementChild) {
            zone.innerHTML = '<span data-placeholder class="text-sm">Släpp här</span>';
        }
    };
    root.querySelectorAll('#deck .card').forEach(card =>{
        card.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            active = card;
            origin = card.parentElement;
            card.classList.add('ring-2', 'ring-nobel-gold');
        });
    });
    root.querySelectorAll('#timeline > .card').forEach(zone => {
        zone.addEventListener('pointerup', (e) => {
            e.preventDefault();
            if(!active) return;
            
            // Om målzonen har ett kort (inte placeholder) -> flytta det till origin 
            const existing = zone.firstElementChild;
            const hasCard = existing && !existing.hasAttribute('data-placeholder');
            if (hasCard) {
                if (origin && origin.id === 'deck') {
                    deck.appendChild(existing);
                } else if (origin) {
                    origin.innerHTML = ''; //töm origin-zon
                    origin.appendChild(existing); //flytta tillbaka kortet
                }
            } else {
                //om det bara fanns en placeholder -> rensa bort den 
                zone.innerHTML = '';
            }

            //flytta aktiva kortet till målzonen
            zone.appendChild(active);

            // om origin var en zon och blev tom -> återskapa placeholder 
            if (origin && origin !== deck  && origin.children.length === 0) {
                ensurePlaceholder(origin);
            }
            active.classList.remove('ring-2', 'ring-nobel-gold');
            active = null;
            origin = null;
        });
    });
}

export function readUserOrder(root) {
    return [...root.querySelectorAll('#timeline > .card')]
    .map(z => z.firstElementChild?.dataset?.id)
    .filter(Boolean)
    .map(Number);
}