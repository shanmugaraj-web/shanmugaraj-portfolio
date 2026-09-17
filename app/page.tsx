import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Sparkles,
  BarChart3,
  Mail,
  Check,
} from "lucide-react";
import Image from "next/image";
import { SearchStrategy } from "@/components/SearchStrategy";
import { Header } from "@/components/Header";
import { services, process, metrics } from "@/lib/content";

const email =
  "mailto:shanmugarajysr@gmail.com?subject=Let%27s%20discuss%20a%20project";

const linkedIn = "https://www.linkedin.com/in/shanmugaraj-digitalmarketer/";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shanmugaraj Y",
            jobTitle: "Digital Marketing & AI Search Strategist",
            email: "shanmugarajysr@gmail.com",
            knowsAbout: [
              "Technical SEO",
              "AI Search Optimization",
              "Content Strategy",
              "Marketing Analytics",
              "AI Citations",
              "Brand Mentions",
              "Sales Funnel Strategy",
            ],
          }),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-topline">
            <span>DIGITAL MARKETING STRATEGIST</span>
            <span>SEARCH / BRAND / DEMAND</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Shanmugaraj Y · SEO, AI search & growth
              </p>
              <h1>
                Be found.
                <br />
                Be the <em>answer.</em>
              </h1>
              <p className="hero-deck">
                I connect SEO, AI visibility, brand authority and sales funnels to help businesses move from discovery to meaningful action.
              </p>
              <div className="hero-actions">
                <a className="button primary" href={linkedIn}>
                  Let’s connect <ArrowUpRight size={19} />
                </a>
                <a className="text-link" href="#work">
                  See selected results <ArrowRight size={18} />
                </a>
              </div>
              <p className="hero-note">
                Search strategy. Brand discovery. Measurable customer journeys.
              </p>
            </div>
            <div
              className="signal-map"
              aria-label="Approach: connect search intent, useful answers and business action"
            >
              <div className="map-top">
                <span>THE DISCOVERY SYSTEM</span>
                <span>01 — 03</span>
              </div>
              <div className="signal-stage">
                <span className="signal-icon">
                  <Search />
                </span>
                <div>
                  <small>01 / DISCOVER</small>
                  <h2>Meet the intent.</h2>
                  <p>Technical SEO + audience research</p>
                </div>
              </div>
              <div className="signal-connector">
                <span />
              </div>
              <div className="signal-stage featured">
                <span className="signal-icon">
                  <Sparkles />
                </span>
                <div>
                  <small>02 / ANSWER</small>
                  <h2>Earn attention.</h2>
                  <p>Citations + brand mentions</p>
                </div>
              </div>
              <div className="signal-connector">
                <span />
              </div>
              <div className="signal-stage">
                <span className="signal-icon">
                  <BarChart3 />
                </span>
                <div>
                  <small>03 / ACT</small>
                  <h2>Make it count.</h2>
                  <p>Sales funnels + measurement</p>
                </div>
              </div>
              <div className="map-bottom">
                <span>FROM SEARCH TO NEXT STEP</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Good strategy connects the dots.</span>
            <a href="#services">Find your starting point ↓</a>
          </div>
        </section>

        <section className="services section wrap" id="services">
          <div className="section-top">
            <p className="eyebrow">01 / Areas of focus</p>
            <p className="section-aside">
              From technical foundations to qualified demand.
            </p>
          </div>
          <h2>
            Find the gap.
            <br />
            <span className="muted">Build the next move.</span>
          </h2>
          <div className="service-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{i + 1}</span>
                <p className="service-problem">{service.problem}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={linkedIn}
                >
                  Discuss {service.short} <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <SearchStrategy />

        <section className="work section" id="work">
          <div className="wrap">
            <div className="section-top">
              <p className="eyebrow">04 / Selected results</p>
              <span className="evidence-tag">ANONYMIZED PERFORMANCE</span>
            </div>
            <div className="work-heading">
              <h2>
                The numbers.
                <br />
                <em>The evidence.</em>
              </h2>
              <p>
                Selected historical search results, with account and business
                details removed. A reference for the work—not a promise of
                identical results.
              </p>
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <p>{metric.label}</p>
                  <strong>{metric.value}</strong>
                  <span>{metric.detail}</span>
                </div>
              ))}
            </div>
            <div className="evidence-grid">
              <figure>
                <figcaption>
                  <span>01 / BASELINE</span>
                  <span>Google Search Console</span>
                </figcaption>
                <a
                  href="/images/gsc-before-sanitized.jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open baseline Search Console evidence at full size"
                >
                  <Image
                    src="/images/gsc-before-sanitized.jpg"
                    alt="Anonymized Search Console baseline showing 12 clicks and 464 impressions"
                    width={1200}
                    height={600}
                    sizes="(max-width: 760px) 92vw, 43vw"
                  />
                </a>
              </figure>
              <figure>
                <figcaption>
                  <span>02 / RESULT</span>
                  <span>12-month captured view</span>
                </figcaption>
                <a
                  href="/images/gsc-12m-sanitized.jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open result Search Console evidence at full size"
                >
                  <Image
                    src="/images/gsc-12m-sanitized.jpg"
                    alt="Anonymized Search Console result showing 33.1K clicks and 2.85 million impressions"
                    width={1200}
                    height={600}
                    sizes="(max-width: 760px) 92vw, 43vw"
                  />
                </a>
              </figure>
            </div>
            <p className="evidence-note">
              Source: saved Google Search Console snapshots. Baseline and result
              are separate captured views; totals are shown as recorded, not as
              a like-for-like growth rate. Click either image to inspect.
            </p>
          </div>
        </section>

        <section className="process section wrap" id="process">
          <div className="section-top">
            <p className="eyebrow">05 / Approach</p>
            <p className="section-aside">You know what happens next.</p>
          </div>
          <div className="process-layout">
            <h2>
              Clear thinking.
              <br />
              <span className="muted">Shared direction.</span>
            </h2>
            <div className="process-steps">
              {process.map((step, i) => (
                <article key={step.title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <small>{step.output}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section wrap" id="about">
          <p className="eyebrow">06 / About</p>
          <div className="about-grid">
            <h2>
              A strategist who
              <br />
              gets into <em>the details.</em>
            </h2>
            <div>
              <p>
                I’m Shanmugaraj, a digital marketer and AI search strategist focused on how brands are discovered, understood and chosen.
              </p>
              <p>
                My work brings together technical SEO, AIO, content strategy, citation analysis and brand mentions with landing pages, lead nurturing and funnel measurement. I focus on clear priorities and the evidence behind each decision.
              </p>
              <div className="working-values">
                <span>Audience understanding</span>
                <span>Connected execution</span>
                <span>Clear reporting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="wrap">
            <p className="eyebrow">LET’S FIND YOUR NEXT MOVE</p>
            <h2>
              What are you
              <br />
              ready to <em>grow?</em>
            </h2>
            <div className="contact-bottom">
              <div>
                <p>
                  Send your website, the challenge you’re facing and your ideal
                  timeline. We can start from there.
                </p>
                <a className="email-link" href={email}>
                  shanmugarajysr@gmail.com <ArrowUpRight />
                </a>
              </div>
              <a className="button primary" href={email}>
                <Mail size={18} />
                Start a conversation
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="footer-name" href="#top">
          SHANMUGARAJ Y<span>Digital marketing & AI search strategist</span>
        </a>
        <span>Thoughtful strategy. Practical execution.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
