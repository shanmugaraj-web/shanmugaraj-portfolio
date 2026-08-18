"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Work", "#work"], ["Capabilities", "#capabilities"], ["Experience", "#experience"], ["Contact", "#contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="brand" href="#top" aria-label="Shanmugaraj Y portfolio home"><span className="brand-mark">SY</span><span>SHANMUGARAJ Y</span></a><nav className={open ? "nav open" : "nav"} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk</a></nav><button className="menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>;
}
