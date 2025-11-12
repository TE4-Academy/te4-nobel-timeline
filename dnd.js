export function wireDnD(root){
    let active = null;
    let origin = null;

    const deck = root.querySelector('#deck');
    const setStyleForContext = (card, inSlot) => {
        if (!card) return;
        if (inSlot) {
            // Platt i tidslinjen
            card.classList.remove('card-deck', 'shadow-sm');
            card.classList.add('w-full');
        } else {
            // Tillbaka till kortleken
            card.classList.add('card-deck', 'shadow-sm');
            card.classList.remove('w-full');
        }
    };



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
            card.classList.add('ring-gold');
        });
    });
    root.querySelectorAll('#timeline > .timeline-slot').forEach(zone => {
        zone.addEventListener('pointerup', (e) => {
            e.preventDefault();
            if(!active) return;
            
            // Om målzonen har ett kort (inte placeholder) -> flytta det till origin 
            const existing = zone.firstElementChild;
            const hasCard = existing && !existing.hasAttribute('data-placeholder');
            if (hasCard) {
                if (origin && origin.id === 'deck') {
                    deck.appendChild(existing);
                    setStyleForContext(existing, false);
                } else if (origin) {
                    origin.innerHTML = ''; //töm origin-zon
                     origin.appendChild(existing); //flytta tillbaka kortet
                     setStyleForContext(existing, true);
                }
            } else {
                //om det bara fanns en placeholder -> rensa bort den 
                zone.innerHTML = '';
            }

            //flytta aktiva kortet till målzonen
            zone.appendChild(active);
            setStyleForContext(active, true);

            // om origin var en zon och blev tom -> återskapa placeholder 
            if (origin && origin !== deck  && origin.children.length === 0) {
                ensurePlaceholder(origin);
            }
            active.classList.remove('ring-gold');
                       // Om aktivt korts origin var deck -> återställ stil där
           if (origin && origin.id === 'deck') {
                setStyleForContext(active, true);
            }
            active = null;
            origin = null;
        });
    });
}

export function readUserOrder(root) {
    return [...root.querySelectorAll('#timeline > .timeline-slot')]
    .map(z => z.firstElementChild?.dataset?.id)
    .filter(Boolean)
    .map(Number);
}