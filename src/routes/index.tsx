import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/yahiya-portrait.jpg";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Send, Sparkles, Code2, Database, Cloud, Bot, GraduationCap } from "lucide-react";

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

const skills = {
  Frontend: ["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  "DevOps & Cloud": ["Docker", "AWS", "Azure", "GCP", "Nginx", "Linux", "CI/CD"],
  "AI & Automation": ["OpenAI", "Gemini", "Claude", "RAG", "AI Agents", "OCR", "Computer Vision", "Voice Assistants"],
};

function Portfolio() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
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
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-mono text-sm tracking-tight">
          <span className="text-primary">/</span> yahiya.ds
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Services</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-1.5 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
          Hire me <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 text-xs text-mono uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for projects · 2026
          </div>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Building the web,<br />
            <span className="italic text-primary">teaching machines</span><br />
            to think.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Mohammed Yahiya DS</span> — a Full Stack Developer and AI Solutions Developer with 3+ years crafting modern web applications, intelligent chatbots, and business automation from Ernakulam, Kerala.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition">
              Start a project <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition">
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

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
            <img src={portrait} alt="Mohammed Yahiya DS" className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-mono text-xs text-primary uppercase tracking-widest">/ portrait</div>
                <div className="text-display text-xl mt-1">Mohammed Yahiya</div>
              </div>
              <div className="text-mono text-xs text-muted-foreground text-right">
                EST.<br />2022
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-mono text-xs uppercase tracking-widest rotate-[-6deg] shadow-lg">
            Kerala · India
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

function Marquee() {
  const items = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "OpenAI", "Gemini", "Claude", "RAG", "Docker", "AWS", "Supabase"];
  return (
    <section aria-hidden className="border-y border-border/50 py-6 overflow-hidden bg-surface/30">
      <div className="marquee flex gap-12 whitespace-nowrap text-display text-2xl text-muted-foreground">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            {s} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 01 — About</div>
          <h2 className="text-display text-4xl md:text-5xl mt-4">A developer who delivers.</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I build scalable websites, web applications, e-commerce platforms, and intelligent chatbot systems for clients who care about quality. Known for <span className="text-foreground">timely delivery, professional communication,</span> and creating modern interactive experiences — including 3D and animated interfaces.
          </p>
          <p>
            Beyond client work, I've trained <span className="text-foreground">45+ students</span> as a technical trainer through online and offline sessions, helping the next wave of developers ship real software with modern tools.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
            <Detail k="Location" v="Ernakulam, Kerala" />
            <Detail k="Experience" v="3+ years" />
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

function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 03 — Stack</div>
          <h2 className="text-display text-4xl md:text-5xl mt-4 max-w-2xl">Tools I reach for, daily.</h2>
        </div>
        <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-background p-6 lg:p-8 grid md:grid-cols-12 gap-6 items-center hover:bg-surface transition">
              <div className="md:col-span-3">
                <div className="text-display text-xl">{cat}</div>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface/50 text-muted-foreground hover:text-primary hover:border-primary transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl p-10 lg:p-16 relative overflow-hidden border border-border" style={{ background: "var(--gradient-warm)" }}>
          <div className="grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-7">
              <div className="text-mono text-xs uppercase tracking-widest text-primary">/ 04 — Training</div>
              <h2 className="text-display text-4xl md:text-5xl mt-4 text-balance">
                Teaching the craft to the <span className="italic text-primary">next generation</span>.
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
            <h2 className="text-display text-5xl md:text-6xl mt-4 text-balance">
              Let's build <span className="italic text-primary">something</span>.
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
