import { site } from "@/data/site";

const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#projects", "Work"],
  ["#contact", "Contact"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <a href="#hero" className="logo">
            <b>{site.initials}</b> {site.name.split(" ")[0]}
            <span style={{ color: "var(--gold)" }}>.</span>
          </a>
          <nav className="foot-links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="socials">
            <a href={site.socials.github} className="glass" aria-label="GitHub">⌨</a>
            <a href={site.socials.linkedin} className="glass" aria-label="LinkedIn">in</a>
            <a href={site.socials.whatsapp} className="glass" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {site.name} — Designed &amp; built with intent.</p>
      </div>
    </footer>
  );
}
