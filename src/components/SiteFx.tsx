"use client";

import { useEffect } from "react";

const supportsScrollTimeline =
  typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");

export default function SiteFx() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // scroll progress fallback for browsers without scroll-driven animations
    const progress = document.querySelector<HTMLElement>(".progress");
    if (progress && !supportsScrollTimeline) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const h = document.documentElement;
          const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
          progress.style.transform = `scaleX(${p})`;
          ticking = false;
        });
      };
      addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => removeEventListener("scroll", onScroll));
    }

    // reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(".rv, .clip, .sec-head")
      .forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // count-up metrics
    const cio = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          cio.unobserve(en.target);
          const el = en.target as HTMLElement;
          if (el.dataset.static) {
            el.textContent = el.dataset.static;
            continue;
          }
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const t0 = performance.now();
          const dur = 1300;
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    document
      .querySelectorAll<HTMLElement>(".q-metric .num")
      .forEach((c) => cio.observe(c));
    cleanups.push(() => cio.disconnect());

    // spotlight follows cursor on quality cards
    document.querySelectorAll<HTMLElement>(".quality").forEach((card) => {
      const onMove = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      card.addEventListener("pointermove", onMove);
      cleanups.push(() => card.removeEventListener("pointermove", onMove));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
