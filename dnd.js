export function wireDnD(root) {
    const list = root.querySelector("#sortable-list");
    if (!list) return;

    let dragEl = null;
    let touchClone = null;
    let touchStartY = 0;

    // Desktop: Drag and drop
    list.addEventListener("dragstart", (e) => {
        const li = e.target.closest(".draggable");
        if (!li) return;
        dragEl = li;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", "");
    });

    list.addEventListener("dragover", (e) => {
        e.preventDefault();
        const over = e.target.closest(".draggable");
        if (!over || over === dragEl) return;
        const rect = over.getBoundingClientRect();
        const before = (e.clientY - rect.top) < rect.height / 2;
        if (before) {
            over.parentNode.insertBefore(dragEl, over);
        } else {
            over.parentNode.insertBefore(dragEl, over.nextSibling);
        }
    });

    list.addEventListener("drop", (e) => e.preventDefault());

    // Mobil: Touch events
    list.addEventListener("touchstart", (e) => {
        const li = e.target.closest(".draggable");
        if (!li) return;
        
        dragEl = li;
        touchStartY = e.touches[0].clientY;
        
        // Skapa en visuell klon
        touchClone = li.cloneNode(true);
        touchClone.style.position = "fixed";
        touchClone.style.width = li.offsetWidth + "px";
        touchClone.style.opacity = "0.8";
        touchClone.style.pointerEvents = "none";
        touchClone.style.zIndex = "1000";
        touchClone.style.left = li.getBoundingClientRect().left + "px";
        touchClone.style.top = e.touches[0].clientY - (li.offsetHeight / 2) + "px";
        document.body.appendChild(touchClone);
        
        li.style.opacity = "0.3";
    }, { passive: true });

    list.addEventListener("touchmove", (e) => {
        if (!dragEl || !touchClone) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        touchClone.style.top = touch.clientY - (dragEl.offsetHeight / 2) + "px";
        
        // Hitta elementet under fingret
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        const over = elementBelow?.closest(".draggable");
        
        if (over && over !== dragEl) {
            const rect = over.getBoundingClientRect();
            const before = (touch.clientY - rect.top) < rect.height / 2;
            if (before) {
                over.parentNode.insertBefore(dragEl, over);
            } else {
                over.parentNode.insertBefore(dragEl, over.nextSibling);
            }
        }
    }, { passive: false });

    list.addEventListener("touchend", () => {
        if (dragEl) {
            dragEl.style.opacity = "1";
            dragEl = null;
        }
        if (touchClone) {
            touchClone.remove();
            touchClone = null;
        }
    });
}

export function readUserOrder(root) {
    return [...root.querySelectorAll("#sortable-list > .draggable")]
    .map((el) => Number(el.dataset.id));
}