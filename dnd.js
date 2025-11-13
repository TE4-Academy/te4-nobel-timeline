// dnd.js

export function wireDnD(root) {
  const list = root.querySelector("#sortable-list");
  if (!list) return;

  let dragEl = null;

  function moveDragEl(clientX, clientY) {
    if (!dragEl) return;

    // Hitta vilket kort vi är över
    const over = document.elementFromPoint(clientX, clientY)?.closest(".draggable");
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
    // Stoppa scroll på touch
    e.preventDefault();
    moveDragEl(e.clientX, e.clientY);
  }

  function onPointerUp(e) {
    if (!dragEl) return;

    dragEl.classList.remove("opacity-60", "ring-gold");

    // Sluta lyssna på events på det här kortet
    dragEl.removeEventListener("pointermove", onPointerMove);
    dragEl.removeEventListener("pointerup", onPointerUp);
    dragEl.removeEventListener("pointercancel", onPointerUp);

    // Släpp pointer capture
    if (e.pointerId != null && dragEl.hasPointerCapture?.(e.pointerId)) {
      dragEl.releasePointerCapture(e.pointerId);
    }

    dragEl = null;
  }

  list.addEventListener("pointerdown", (e) => {
    const li = e.target.closest(".draggable");
    if (!li) return;

    e.preventDefault(); // förhindra text-markering m.m.

    dragEl = li;
    dragEl.classList.add("opacity-60", "ring-gold");

    // Se till att alla kommande pointer-events går till just detta kort
    if (e.pointerId != null) {
      dragEl.setPointerCapture(e.pointerId);
    }

    dragEl.addEventListener("pointermove", onPointerMove);
    dragEl.addEventListener("pointerup", onPointerUp);
    dragEl.addEventListener("pointercancel", onPointerUp);
  });
}

export function readUserOrder(root) {
  return [...root.querySelectorAll("#sortable-list > .draggable")].map((el) =>
    Number(el.dataset.id)
  );
}
