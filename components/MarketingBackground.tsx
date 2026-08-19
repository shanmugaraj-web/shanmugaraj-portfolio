import { SiGoogleads, SiGoogleanalytics, SiMeta, SiSemrush } from "react-icons/si";

const marks = [
  [SiGoogleanalytics, "GA4", "#f9ab52", "float-a"],
  [SiSemrush, "SEMrush", "#ff7357", "float-b"],
  [SiGoogleads, "Google Ads", "#6ea8ff", "float-c"],
  [SiMeta, "Meta Ads", "#63a3ff", "float-d"],
] as const;

export function MarketingBackground() {
  return <div className="marketing-bg" aria-hidden>{marks.map(([Icon, label, color, motion], index) => <div className={`floating-mark ${motion}`} key={`${label}-${index}`} style={{ "--mark": color } as React.CSSProperties}><Icon /><span>{label}</span></div>)}</div>;
}
