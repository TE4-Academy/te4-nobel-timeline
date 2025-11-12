export function wireDnD(root) {
    const list = root.querySelector("#sortable-list");
    if (!list) return;

    let dragEl = null;

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
}

export function readUserOrder(root) {
    return [...root.querySelectorAll("#sortable-list > .draggable")]
    .map((el) => Number(el.dataset.id));
}
