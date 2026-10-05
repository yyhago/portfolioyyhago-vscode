import type { PointerEvent } from "react";

type Move = (dx: number, dy: number) => void;

export function onDrag(e: PointerEvent, fn: Move, cursor = "", onUp?: Move) {
  if (e.button !== 0) return;
  e.preventDefault();
  const el = e.currentTarget as Element;
  const pid = e.pointerId;
  try {
    el.setPointerCapture(pid);
  } catch {}
  const x0 = e.clientX, y0 = e.clientY;
  let done = false;
  document.body.style.cursor = cursor;
  const finish = (ev: globalThis.PointerEvent) => {
    if (done) return;
    done = true;
    document.body.style.cursor = "";
    removeEventListener("pointermove", move);
    removeEventListener("pointerup", finish);
    removeEventListener("pointercancel", finish);
    el.removeEventListener("lostpointercapture", lost);
    try {
      el.releasePointerCapture(pid);
    } catch {}
    onUp?.(ev.clientX - x0, ev.clientY - y0);
  };
  const lost = (ev: Event) => finish(ev as globalThis.PointerEvent);
  const move = (ev: globalThis.PointerEvent) => {
    if (ev.pointerType === "mouse" && ev.buttons === 0) return finish(ev);
    fn(ev.clientX - x0, ev.clientY - y0);
  };
  addEventListener("pointermove", move);
  addEventListener("pointerup", finish);
  addEventListener("pointercancel", finish);
  el.addEventListener("lostpointercapture", lost);
}
