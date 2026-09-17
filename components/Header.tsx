"use client";
import { useState, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["Expertise", "#services"],
  ["Results", "#work"],
  ["AI Search", "#ai-search"], ["Funnel", "#funnel"],
  ["About", "#about"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="brand" href="#top" aria-label="Shanmugaraj Y home">
        <span className="brand-mark">sy.</span>
        <span>SHANMUGARAJ Y</span>
      </a>
      <nav
        id="main-navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="mailto:shanmugarajysr@gmail.com?subject=Project%20enquiry"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        ref={toggle}
        className="menu"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="main-navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
