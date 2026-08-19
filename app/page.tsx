import { ArrowDownRight, ArrowRight, BrainCircuit, Check, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudy } from "@/components/CaseStudy";
import { ToolGrid } from "@/components/ToolGrid";
import { MarketingBackground } from "@/components/MarketingBackground";
import { capabilities, caseStudies, experience, metrics, process } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", name: "Shanmugaraj Y",
  jobTitle: "Digital Marketer & AI Search Strategist",
  description: "Digital marketing specialist focused on AI search optimization, technical SEO, organic growth and B2B demand generation.",
  knowsAbout: ["Answer Engine Optimization", "Generative Engine Optimization", "Technical SEO", "B2B Demand Generation", "Content Strategy", "Marketing Analytics"],
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="noise" aria-hidden />
    <MarketingBackground />
    <Header />
    <main id="main">
      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden><div className="orbit-core"><BrainCircuit /></div><span className="orbit orbit-one"/><span className="orbit orbit-two"/><i className="node n1"/><i className="node n2"/><i className="node n3"/></div>
        <Reveal className="hero-copy"><p className="hero-name">SHANMUGARAJ Y</p><p className="eyebrow"><span />AI Search Strategist · Digital Marketer</p><h1>I turn search complexity into <em>compounding visibility.</em></h1><p className="hero-deck">Technical SEO, answer-engine readiness and demand-led content—built into one measurable growth system.</p><div className="hero-actions"><a className="button primary" href="#work">Explore selected work <ArrowDownRight /></a><a className="button ghost" href="#contact">Start a conversation <ArrowRight /></a></div><div className="hero-trust"><ShieldCheck /><span>Performance evidence is sanitized to protect private account and client data.</span></div></Reveal>
        <div className="hero-side"><p>Operating across</p><ul><li>Traditional search</li><li>AI answer engines</li><li>B2B acquisition</li></ul><div className="status"><i/>Open to high-impact growth work</div></div>
        <div className="scroll-cue"><span>SCROLL TO SIGNAL</span><i/></div>
      </section>

      <section className="profile section"><Reveal><SectionHeading eyebrow="Profile" title="A systems thinker at the intersection of search, product and demand." /></Reveal><div className="profile-grid"><Reveal className="profile-lead"><p>Digital marketer and AI search strategist experienced in building organic visibility across traditional search and emerging answer engines.</p></Reveal><Reveal className="profile-body" delay={.08}><p>My work connects technical diagnosis with coordinated action across engineering, product, design and content. The remit spans AEO, GEO, AIO, technical SEO, editorial strategy, B2B demand generation, paid media, analytics and marketing automation.</p><p>The constant is simple: find the constraint, build the operating system around it and make progress visible in the data.</p></Reveal></div></section>

      <section className="metrics-band" aria-labelledby="impact-title"><div className="metrics-heading"><p className="eyebrow"><span />Selected impact</p><h2 id="impact-title">From near-zero to measurable organic growth.</h2><p className="metrics-context">Anonymized results from hands-on in-house product growth work across search, content and measurement.</p></div><div className="metric-grid">{metrics.map((m, i) => <Reveal key={m.label} className="metric-card" delay={i * .06}><div className="metric-number">{m.value}</div><h3>{m.label}</h3><p>{m.detail}</p></Reveal>)}</div></section>

      <section className="work section" id="work"><Reveal><SectionHeading eyebrow="Case studies" title="Three problems. Three growth systems." intro="Outcome-led work supported by privacy-sanitized performance evidence. URLs, account details and client-identifying data remain removed." /></Reveal><div className="cases">{caseStudies.map((study, i) => <CaseStudy key={study.index} study={study} reverse={i % 2 === 1} />)}</div></section>

      <section className="capabilities section" id="capabilities"><Reveal><SectionHeading eyebrow="Capabilities" title="Strategy with execution depth." /></Reveal><div className="capability-grid">{capabilities.map(([title, text], i) => <Reveal key={title} className="capability-card" delay={(i % 3) * .05}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRightIcon /></Reveal>)}</div></section>

      <section className="tools section"><Reveal><SectionHeading eyebrow="Stack" title="Tools are useful. Judgment is the multiplier." intro="A practical stack for diagnosis, activation, measurement and continuous improvement." /></Reveal><Reveal><ToolGrid /></Reveal></section>

      <section className="experience section" id="experience"><Reveal><SectionHeading eyebrow="Experience" title="A trajectory built around ownership." /></Reveal><div className="timeline">{experience.map((item, i) => <Reveal className="timeline-item" key={item.period} delay={i * .08}><div className="timeline-marker"><span>{String(i + 1).padStart(2, "0")}</span></div><time>{item.period}</time><div><h3>{item.role}</h3><h4>{item.org}</h4><p>{item.summary}</p></div></Reveal>)}</div></section>

      <section className="process section"><Reveal><SectionHeading eyebrow="How I work" title="Clarity before velocity." /></Reveal><div className="process-grid">{process.map(([title, text], i) => <Reveal className="process-step" key={title} delay={i * .05}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></section>

      <section className="education section"><div><Reveal><SectionHeading eyebrow="Foundation" title="Education & professional certifications" intro="Formal academic qualifications and specialist marketing certifications—clearly separated." /></Reveal></div><Reveal className="credential-panel"><p className="credential-label">Formal education</p><div className="degree"><Sparkles /><div><strong>Master of Business Administration</strong><span>Marketing · 2024</span></div></div><div className="degree"><Sparkles /><div><strong>Bachelor of Business Administration</strong><span>2022</span></div></div><p className="credential-label certification-label">Professional certifications</p><ul>{["Keyword Research · SEMrush", "Backlink Management · SEMrush", "International SEO", "Social Media · HubSpot", "Email Marketing · HubSpot", "Engage & Convert · SEMrush"].map(c => <li key={c}><Check />{c}</li>)}</ul></Reveal></section>

      <section className="contact section" id="contact"><div className="contact-glow" aria-hidden/><Reveal className="contact-copy"><p className="eyebrow"><span />Contact</p><h2>Let&apos;s build visibility that survives the next search shift.</h2><p>For privacy, direct contact information is not included in this preview. A private contact channel can be added after approval.</p><a className="button primary" href="#top">Review from the top <ArrowRight /></a></Reveal><div className="contact-mark" aria-hidden>AI<br/>/SEO</div></section>
    </main>
    <footer><span>SHANMUGARAJ Y</span><span>Designed for signal · Built for speed</span><a href="#top">Back to top ↑</a></footer>
  </>;
}

function ArrowUpRightIcon() { return <span className="cap-arrow" aria-hidden>↗</span>; }
