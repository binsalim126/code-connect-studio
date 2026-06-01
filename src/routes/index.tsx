import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/yahiya-portrait.jpg";
import projHyper from "@/assets/project-hypershop.jpg";
import projVeg from "@/assets/project-vegshop.jpg";
import projZahra from "@/assets/project-zahrahenna.jpg";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Send, Sparkles, Code2, Database, Cloud, Bot, GraduationCap, Menu, X, Atom, Boxes, Cpu, Server, Cog, Layers, Braces, Terminal, Globe, Zap, Brain, Container } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Yahiya DS — Full Stack & AI Developer Portfolio" },
      { name: "description", content: "Full Stack Developer and AI Solutions Developer building modern web apps, e-commerce platforms, and intelligent chatbots from Kerala, India." },
      { property: "og:title", content: "Mohammed Yahiya DS — Portfolio" },
      { property: "og:description", content: "3+ years building modern web apps, AI chatbots, and business automation." },
    ],
  }),
  component: Portfolio,
});

const services = [
  { icon: Code2, title: "Web & App Development", desc: "Production-grade websites, web apps, and mobile experiences built with React, Next.js, and modern stacks." },
  { icon: Bot, title: "AI Chatbots & Agents", desc: "RAG systems, voice assistants, and intelligent agents using OpenAI, Gemini, and Claude APIs." },
  { icon: Database, title: "E-Commerce Solutions", desc: "Scalable storefronts, payment integration, inventory dashboards, and admin tools." },
  { icon: Cloud, title: "Business Automation", desc: "Workflow automation, OCR pipelines, and computer vision systems that save real hours." },
  { icon: Sparkles, title: "API Development", desc: "REST and GraphQL APIs with Node, NestJS, FastAPI — clean, documented, and secure." },
  { icon: GraduationCap, title: "Technical Training", desc: "Hands-on training in modern web development and AI tools, online and offline." },
];

type SkillGroup = {
  cat: string;
  icon: typeof Code2;
  tagline: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  { cat: "Frontend", icon: Atom, tagline: "Interfaces that feel inevitable.", items: ["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"] },
  { cat: "Backend", icon: Server, tagline: "APIs that don't break under load.", items: ["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI"] },
  { cat: "Database", icon: Database, tagline: "Data modeled to outlast the app.", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"] },
  { cat: "DevOps & Cloud", icon: Container, tagline: "Ship Friday. Sleep Friday.", items: ["Docker", "AWS", "Azure", "GCP", "Nginx", "Linux", "CI/CD"] },
  { cat: "AI & Automation", icon: Brain, tagline: "Models with a job to do.", items: ["OpenAI", "Gemini", "Claude", "RAG", "AI Agents", "OCR", "Computer Vision", "Voice Assistants"] },
];

function Portfolio() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TechCloud />
      <About />
      <Services />
      <Skills />
      <Training />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Services" },
    { href: "#skills", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`max-w-6xl mx-auto px-4 lg:px-6 transition-all duration-500`}>
        <div className={`flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/70 backdrop-blur-xl pl-5 pr-2 py-2 ${scrolled ? "shadow-2xl shadow-primary/10" : ""}`}>
          <a href="#top" className="flex items-center gap-2 text-mono text-sm tracking-tight shrink-0">
            <span className="relative inline-flex size-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-semibold">yahiya<span className="text-primary">.ds</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative px-3 py-1.5 text-muted-foreground hover:text-foreground transition group">
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="relative hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground px-5 py-2 rounded-lg group overflow-hidden"
              style={{ background: "var(--gradient-indigo)", boxShadow: "var(--shadow-glow)" }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="size-3.5" /> Hire me
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
            <button onClick={() => setOpen((v) => !v)} className="md:hidden size-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface/60" aria-label="menu">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <div className="mx-6 mt-1 h-px bg-border/40 overflow-hidden rounded-full">
          <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-border/60 bg-background/90 backdrop-blur-xl p-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-surface/60 transition">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 block px-4 py-3 rounded-lg text-sm text-primary-foreground font-semibold text-center" style={{ background: "var(--gradient-indigo)" }}>Hire me</a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.58 0.22 275 / 0.18), transparent 60%)", filter: "blur(60px)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative">
        {/* Text left */}
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
          <div className="inline-flex items-center gap-3 text-xs text-mono uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary" />
            Available for projects · 2026
          </div>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-balance">
            Building the web,<br />
            <span className="text-primary">teaching machines</span><br />
            to think.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Mohammed Yahiya DS</span> — a Full Stack Developer and AI Solutions Developer with 3+ years crafting modern web applications, intelligent chatbots, and business automation from Ernakulam, Kerala.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              Start a project <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition font-medium">
              View services
            </a>
          </div>
          <div className="flex items-center gap-8 pt-8 text-sm">
            <Stat n="3+" l="Years experience" />
            <div className="h-10 w-px bg-border" />
            <Stat n="45+" l="Students trained" />
            <div className="h-10 w-px bg-border" />
            <Stat n="4" l="Languages spoken" />
          </div>
        </div>

        {/* Portrait right */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative flex lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/30 rounded-2xl group-hover:-inset-2 transition-all duration-500" />
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden bg-surface" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={portrait} alt="Mohammed Yahiya DS" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-mono text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Portrait</div>
                  <div className="text-display text-xl font-semibold mt-1">Mohammed Yahiya</div>
                </div>
                <div className="text-mono text-[10px] text-muted-foreground text-right uppercase tracking-widest">
                  Est.<br />2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-display text-3xl text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

// Variety tech cloud — replaces the single-line marquee with a richer mixed-size badge field
function TechCloud() {
  type Chip = { label: string; icon?: typeof Atom; size?: "sm" | "md" | "lg"; accent?: boolean };
  const chips: Chip[] = [
    { label: "React", icon: Atom, size: "lg", accent: true },
    { label: "TypeScript", icon: Braces, size: "md" },
    { label: "Next.js", icon: Layers, size: "md", accent: true },
    { label: "Node.js", icon: Server, size: "sm" },
    { label: "Python", icon: Terminal, size: "md" },
    { label: "FastAPI", icon: Zap, size: "sm", accent: true },
    { label: "PostgreSQL", icon: Database, size: "md" },
    { label: "OpenAI", icon: Brain, size: "lg", accent: true },
    { label: "Gemini", icon: Sparkles, size: "sm" },
    { label: "Claude", icon: Bot, size: "sm" },
    { label: "RAG", icon: Cpu, size: "sm", accent: true },
    { label: "Docker", icon: Container, size: "md" },
    { label: "AWS", icon: Cloud, size: "sm" },
    { label: "Supabase", icon: Boxes, size: "md" },
    { label: "NestJS", icon: Cog, size: "sm" },
    { label: "Tailwind", icon: Globe, size: "sm", accent: true },
  ];

  const sizeCls = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  } as const;

  return (
    <section aria-label="technologies" className="relative border-y border-border/50 bg-surface/30 py-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.58 0.22 275 / 0.1), transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="flex items-center gap-3 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
          <span className="h-px w-6 bg-primary" />
          A taste of the toolbox
        </div>
        <div className="flex flex-wrap gap-2.5 items-center">
          {chips.map((c, i) => {
            const Icon = c.icon;
            return (
              <span
                key={i}
                className={`group inline-flex items-center gap-2 rounded-full border ${c.accent ? "border-primary/50 bg-primary/10 text-foreground" : "border-border bg-background/60 text-muted-foreground"} ${sizeCls[c.size ?? "sm"]} hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {Icon && <Icon className="size-3.5" />}
                <span className="text-mono tracking-tight">{c.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        {/* Photo left */}
        <div className="lg:col-span-5 relative">
          <div className="relative group max-w-[420px]">
            <div className="absolute -inset-3 border border-primary/30 rounded-2xl group-hover:-inset-1 transition-all duration-500" />
            <div className="absolute -bottom-4 -right-4 text-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 bg-background border border-primary/40 px-3 py-1.5 rounded-full z-10">
              / 01 — About
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={portrait} alt="Mohammed Yahiya DS at work" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-mono text-[10px] uppercase tracking-widest text-primary bg-background/70 backdrop-blur px-3 py-1.5 rounded-full border border-primary/30">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" /> In studio · Kerala
              </div>
            </div>
          </div>
        </div>

        {/* Copy right */}
        <div className="lg:col-span-7 space-y-7">
          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 01 — About</div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05] tracking-tight text-balance">
              An engineer obsessed with <span className="text-primary">craft</span>, shipping, and the edges where software meets intelligence.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              For three years I've architected and shipped production systems — high-performance web platforms, e-commerce backbones, and AI-native products that quietly do the work of entire teams. I treat every codebase like a long-term commitment: clean architecture, observable systems, pixel-honest interfaces, and zero patience for friction.
            </p>
            <p>
              My deepest fluency lives at the intersection of <span className="text-foreground">full-stack engineering and applied AI</span> — retrieval-augmented generation, autonomous agents, voice assistants, and OCR pipelines built on OpenAI, Gemini, and Claude. I bridge product intent and technical execution, partnering closely with founders to translate ambiguity into shipped software.
            </p>
            <p>
              Beyond client work, I've mentored <span className="text-foreground">45+ developers</span> as a technical trainer — turning curiosity into employable skill across modern web, AI tooling, and the discipline of shipping real things.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 text-sm">
            <Detail k="Based in" v="Ernakulam, Kerala" />
            <Detail k="Experience" v="3+ years, production" />
            <Detail k="Languages" v="Malayalam · English · Arabic · Urdu" />
            <Detail k="Availability" v="Freelance & contract" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-foreground mt-1">{v}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="work" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 02 — Services</div>
            <h2 className="text-display text-4xl md:text-5xl mt-4">What I build.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">From a quick landing page to a full AI-powered platform — pick the engagement that fits.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} idx={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, idx }: { icon: typeof Code2; title: string; desc: string; idx: number }) {
  return (
    <div className="group bg-background p-8 lg:p-10 hover:bg-surface transition-colors duration-500 relative">
      <div className="flex items-start justify-between mb-8">
        <div className="size-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
          <Icon className="size-5" />
        </div>
        <span className="text-mono text-xs text-muted-foreground">0{idx}</span>
      </div>
      <h3 className="text-display text-2xl mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// Redesigned Skills — interactive vertical category index with detail panel
function Skills() {
  const [active, setActive] = useState(0);
  const current = skillGroups[active];
  const Icon = current.icon;

  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 03 — Stack</div>
            <h2 className="text-display text-4xl md:text-5xl mt-4 max-w-2xl">Tools I reach for, daily.</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm">
            Five disciplines, one stack. Pick a layer to see what's in the toolbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Category index */}
          <div className="lg:col-span-5 space-y-2">
            {skillGroups.map((g, i) => {
              const GIcon = g.icon;
              const isActive = i === active;
              return (
                <button
                  key={g.cat}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-surface shadow-lg shadow-primary/10"
                      : "border-border bg-background hover:border-primary/40 hover:bg-surface/40"
                  }`}
                >
                  <span className={`text-mono text-xs w-6 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    0{i + 1}
                  </span>
                  <span className={`size-10 rounded-xl flex items-center justify-center border transition ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-surface border-border text-foreground"}`}>
                    <GIcon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-display text-lg leading-tight">{g.cat}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{g.items.length} tools</span>
                  </span>
                  <ArrowUpRight className={`size-4 transition ${isActive ? "text-primary translate-x-0 translate-y-0" : "text-muted-foreground -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div key={active} className="relative rounded-3xl border border-primary/30 bg-surface/60 p-8 lg:p-10 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.58 0.22 275 / 0.35), transparent 60%)", filter: "blur(70px)" }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="size-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center" style={{ boxShadow: "var(--shadow-glow)" }}>
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-primary">Layer 0{active + 1}</div>
                      <h3 className="text-display text-3xl mt-1">{current.cat}</h3>
                    </div>
                  </div>
                  <span className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">
                    {current.items.length} / tools
                  </span>
                </div>

                <p className="text-foreground text-lg leading-snug mb-8 max-w-md text-balance">
                  {current.tagline}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {current.items.map((s) => (
                    <div
                      key={s}
                      className="text-mono text-xs px-3 py-2.5 rounded-lg border border-border bg-background/60 text-foreground hover:border-primary hover:text-primary transition flex items-center justify-between"
                    >
                      <span className="truncate">{s}</span>
                      <span className="text-primary opacity-60">✦</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl p-10 lg:p-16 relative overflow-hidden border border-primary/30 bg-surface/40">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.58 0.22 275 / 0.35), transparent 60%)", filter: "blur(80px)" }} />
          <div className="grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-7">
              <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 04 — Training</div>
              <h2 className="text-display text-4xl md:text-5xl font-bold mt-4 text-balance">
                Teaching the craft to the <span className="text-primary">next generation</span>.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
                As a technical trainer, I've delivered hands-on workshops in modern web development and AI tooling to 45+ students through both online and offline sessions.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-4">
              <BigStat n="45+" l="Students mentored" />
              <BigStat n="100%" l="Practical, project-based" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BigStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-border pt-4 flex items-baseline justify-between">
      <div className="text-display text-5xl text-primary">{n}</div>
      <div className="text-sm text-muted-foreground text-right">{l}</div>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:yahiyamohammed126@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 05 — Contact</div>
            <h2 className="text-display text-5xl md:text-6xl font-bold mt-4 text-balance">
              Let's build <span className="text-primary">something</span>.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For project enquiries, training requests, or just a friendly hello — reach out through any of the channels below.
          </p>
          <div className="space-y-4">
            <ContactRow icon={Mail} label="Email" value="yahiyamohammed126@gmail.com" href="mailto:yahiyamohammed126@gmail.com" />
            <ContactRow icon={Phone} label="Phone" value="+91 8075540923" href="tel:+918075540923" />
            <ContactRow icon={Github} label="GitHub" value="binsalim126" href="https://github.com/binsalim126" />
            <ContactRow icon={MapPin} label="Based in" value="Ernakulam, Kerala, India" />
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 bg-surface border border-border rounded-3xl p-8 lg:p-10 space-y-6" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="grid md:grid-cols-2 gap-6">
            <Field name="name" label="Your name" placeholder="Jane Doe" required />
            <Field name="email" label="Email" type="email" placeholder="jane@company.com" required />
          </div>
          <Field name="company" label="Company (optional)" placeholder="Acme Inc." />
          <div>
            <label className="text-mono text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the project, timeline, and budget…"
              className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full font-medium hover:opacity-90 transition">
            {status === "sent" ? "Opening your mail client…" : <>Send enquiry <Send className="size-4 group-hover:translate-x-0.5 transition-transform" /></>}
          </button>
          <p className="text-xs text-muted-foreground text-center">Typical reply within 24 hours.</p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Cmp: any = href ? "a" : "div";
  return (
    <Cmp href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary hover:bg-surface/50 transition">
      <div className="size-10 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
        <Icon className="size-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground truncate">{value}</div>
      </div>
      {href && <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />}
    </Cmp>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="text-mono text-xs">
          © 2026 Mohammed Yahiya DS — Crafted in Kerala.
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/binsalim126" target="_blank" rel="noreferrer" className="hover:text-primary transition">GitHub</a>
          <a href="mailto:yahiyamohammed126@gmail.com" className="hover:text-primary transition">Email</a>
          <a href="tel:+918075540923" className="hover:text-primary transition">Phone</a>
        </div>
      </div>
    </footer>
  );
}
