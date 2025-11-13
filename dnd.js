export function wireDnD(root) {
  const list = root.querySelector("#sortable-list");
  if (!list) return;

  let dragEl = null;

  function moveDragEl(clientX, clientY) {
    if (!dragEl) return;

    const over = document
      .elementFromPoint(clientX, clientY)?.closest(".draggable");
    if (!over || over === dragEl || over.parentElement !== list) return;

    const rect = over.getBoundingClientRect();
    const before = clientY < rect.top + rect.height / 2;

    if (before) {
      list.insertBefore(dragEl, over);
    } else {
      list.insertBefore(dragEl, over.nextSibling);
    }
  }

  function onPointerMove(e) {
    e.preventDefault();
    moveDragEl(e.clientX, e.clientY);
  }

  function onPointerUp() {
    if (!dragEl) return;
    dragEl.classList.remove("opacity-60", "ring-gold");
    dragEl = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  list.addEventListener("pointerdown", (e) => {
    const li = e.target.closest(".draggable");
    if (!li) return;

    dragEl = li;
    dragEl.classList.add("opacity-60", "ring-gold");

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  });
}

export function readUserOrder(root) {
  return [...root.querySelectorAll("#sortable-list > .draggable")].map((el) =>
    Number(el.dataset.id)
  );
}
