import { SiGoogleanalytics, SiGooglesearchconsole, SiHubspot, SiMeta, SiReddit, SiSemrush, SiWordpress } from "react-icons/si";
import { BarChart3, Bot, Braces, ChartNoAxesCombined, Mail, Palette, SearchCheck } from "lucide-react";

const tools = [
  [SiGooglesearchconsole, "Search Console", "#6ea8ff"], [SiSemrush, "SEMrush", "#ff7357"], [ChartNoAxesCombined, "Ahrefs", "#74e0a6"], [SiGoogleanalytics, "GA4", "#f9ab52"],
  [SearchCheck, "Bing Webmaster", "#58d8dd"], [BarChart3, "Microsoft Clarity", "#7774ff"], [Braces, "Tag Manager", "#7da3ff"], [SiWordpress, "WordPress", "#8eb7cf"],
  [SiReddit, "Reddit Ads", "#ff6a45"], [SiMeta, "Meta Ads", "#63a3ff"], [SiHubspot, "HubSpot", "#ff8f5b"], [Mail, "ConvertKit", "#f2d46f"],
  [Bot, "AI Visibility", "#55f2b5"], [Palette, "Canva", "#b786ff"],
] as const;

export function ToolGrid() {
  return <div className="tool-grid">{tools.map(([Icon, name, color]) => <div className="tool-card" key={name} style={{ "--tool": color } as React.CSSProperties}><div className="tool-icon"><Icon aria-hidden /></div><span>{name}</span></div>)}</div>;
}
