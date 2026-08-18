import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Study = { index: string; kicker: string; title: string; challenge: string; action: string; outcome: string; proof?: string; alt?: string; caption?: string; beforeProof?: string; beforeAlt?: string };

export function CaseStudy({ study, reverse = false }: { study: Study; reverse?: boolean }) {
  const hasProof = Boolean(study.proof);
  const className = `${reverse ? "case-study reverse" : "case-study"}${hasProof ? "" : " text-only"}`;
  return <article className={className}><Reveal className="case-copy"><div className="case-index">{study.index}</div><p className="case-kicker">{study.kicker}</p><h3>{study.title}</h3><dl><div><dt>Challenge</dt><dd>{study.challenge}</dd></div><div><dt>Action</dt><dd>{study.action}</dd></div><div><dt>Outcome</dt><dd>{study.outcome}</dd></div></dl>{hasProof && <span className="case-signal">Selected evidence <ArrowUpRight size={16} /></span>}</Reveal>{study.proof && <Reveal className="proof-wrap" delay={.1}>{study.beforeProof ? <div className="proof-comparison"><ProofFrame image={study.beforeProof} alt={study.beforeAlt ?? "Sanitized baseline performance"} label="Before · baseline" /><div className="comparison-arrow" aria-hidden><ArrowUpRight size={18} /></div><ProofFrame image={study.proof} alt={study.alt ?? "Sanitized performance evidence"} label="After · 12 months" /></div> : <ProofFrame image={study.proof} alt={study.alt ?? "Sanitized performance evidence"} label="performance / sanitized" />}{study.caption && <p className="caption">{study.caption}</p>}</Reveal>}</article>;
}

function ProofFrame({ image, alt, label }: { image: string; alt: string; label: string }) {
  return <div className="browser-frame"><div className="browser-bar"><i/><i/><i/><span>{label}</span></div><div className="proof-image"><Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 56vw" /></div></div>;
}
