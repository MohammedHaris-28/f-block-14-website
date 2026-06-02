import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram, Play, MapPin, Mail, Phone, Send, ArrowUpRight,
  Megaphone, Camera, Sparkles, Flame, Heart, Eye,
  Trophy, Calendar, ChevronRight, Quote, Star, MessageSquare, UserPlus,Code, 
  Users, Menu,
  X,
  Palette
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.png";
import franklin from "@/assets/franklin.png";
import hiddenAntsLogo from "@/assets/hidden-ants-logo.png";
import city from "@/assets/city.jpg";
import reel1 from "@/assets/reel1.png";
import reel2 from "@/assets/reel2.png";
import reel3 from "@/assets/reel3.png";
import reel4 from "@/assets/reel4.png";
import tire from "@/assets/tire-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "F_BLOCK_14 — Shivamogga's Premium Local Business Channel" },
      { name: "description", content: "Spotlighting Shivamogga's best local businesses through cinematic reels and stories. Run by Franklin." },
      { property: "og:title", content: "F_BLOCK_14 — Shivamogga Local Promotions" },
      { property: "og:description", content: "Cinematic promotions for Shivamogga's finest local businesses." },
    ],
  }),
  component: Page,
});

const reels = [
  {
    img: reel1,
    title: "Restraunt promotions",
    tag: "Food",
    views: "182K",
    url: "https://www.instagram.com/reel/DTe5pDlE2No/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: reel2,
    title: "Creator Studio",
    tag: "customized content",
    views: "94K",
    url: "https://www.instagram.com/reel/DVr_0Cukxkn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: reel3,
    title: "Event Organizers",
    tag: "events",
    views: "126K",
    url: "https://www.instagram.com/reel/DWs45r1ToNR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: reel4,
    title: "Auto mobile showcase",
    tag: "Auto",
    views: "211K",
    url: "https://www.instagram.com/reel/DVeGCiRk6Bk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const services = [
  { 
    icon: Camera, 
    title: "Cinematic Reels", 
    desc: "Story-driven shoots that make your brand feel like a film." 
  },
  { 
    icon: Megaphone, 
    title: "Local Promotions", 
    desc: "Targeted reach across Shivamogga's most engaged audience." 
  },
  { 
    icon: Sparkles, 
    title: "Brand Spotlights", 
    desc: "Dedicated features that put your business in the frame." 
  },
  { 
    icon: Flame, 
    title: "Viral Campaigns", 
    desc: "Hook-first edits engineered to travel across the feed." 
  },
  { 
    icon: Code, 
    title: "Website Development", 
    desc: "Premium, high-converting digital storefronts tailored for your business." 
  },
  { 
    icon: Users, 
    title: "Social Media Management", 
    desc: "End-to-end page handling, community growth, and strategic daily engagement." 
  },
  { 
    icon: Palette, 
    title: "Content & Graphic Design", 
    desc: "Bespoke posts, luxury carousels, and visual branding that dominates the feed." 
  },
];

const timeline = [
  { year: "2023", title: "Engine started", desc: "F_BLOCK_14 goes live. First reel uploaded." },
  { year: "2024", title: "Picking up speed", desc: "Crossed 25K followers. Onboarded 40+ local brands." },
  { year: "2025", title: "Full throttle", desc: "Viral campaigns, 10M+ views, Shivamogga's go-to channel." },
  { year: "2026", title: "New territory", desc: "Account Verified,Studio set-up, expanding to new regions." },
];

function Page() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <ProfileCard />
      <Reels />
      <Services />
      <Timeline />
      <About />
      <Enquiry />
      <Footer year={year} />
    </div>
  );
}

function Nav() {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);
const [progress, setProgress] = useState(0);

useEffect(() => {
const onScroll = () => {
setScrolled(window.scrollY > 20);


  const h = document.documentElement;
  const p =
    (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;

  setProgress(p);
};

onScroll();

window.addEventListener("scroll", onScroll, {
  passive: true,
});

return () =>
  window.removeEventListener("scroll", onScroll);


}, []);

const navLinks = [
{ href: "#reels", label: "Reels" },
{ href: "#services", label: "Services" },
{ href: "#journey", label: "Journey" },
{ href: "#about", label: "About" },
];

return (
<header
className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-5"
      }`}
> <div className="mx-auto max-w-7xl px-4 sm:px-6">

    <nav
      className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 border transition-all duration-500 ${
        scrolled
          ? "glass shadow-soft border-gold/10 backdrop-blur-xl"
          : "bg-transparent border-transparent"
      }`}
    >

      {/* Logo */}
      <a
        href="#top"
        className="flex items-center gap-3 group"
      >
        <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-105">
          <img
            src={logo}
            alt="F_BLOCK_14"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="display text-xl tracking-wider">
          F_BLOCK_
          <span className="text-gold">
            14
          </span>
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-gold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://www.instagram.com/hidden_ants_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 text-sm text-muted-foreground hover:text-gold rounded-full hover:bg-white/5 transition-all duration-300"
        >
          Hidden Ants
        </a>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-3">

        <a
          href="https://instagram.com/f_block_14"
          target="_blank"
          rel="noreferrer"
          className="glass h-10 w-10 rounded-xl flex items-center justify-center hover:border-gold/40 transition"
        >
          <Instagram className="h-4 w-4 text-gold" />
        </a>

        <a
          href="#enquiry"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-gold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition-all duration-300"
        >
          Enquire
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 rounded-xl hover:bg-white/5 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

    </nav>

    {/* Mobile Menu */}
    {open && (
      <div className="md:hidden mt-2 glass rounded-2xl border border-gold/10 p-4 shadow-soft">

        <div className="flex flex-col gap-2">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://www.instagram.com/hidden_ants_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 rounded-xl hover:bg-white/5 transition"
          >
            Hidden Ants Media
          </a>

          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gradient-gold text-primary-foreground px-4 py-3 rounded-xl text-center font-semibold shadow-gold"
          >
            Enquire Now
          </a>

        </div>

      </div>
    )}
  </div>

  {/* Scroll Progress Bar */}
  <div
    className="absolute bottom-0 left-0 h-[2px] bg-gold shadow-gold"
    style={{
      width: `${progress}%`,
      transition: "width 0.1s linear",
    }}
  />
</header>


);
}


function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pt-28 pb-16 overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
      <img src={tire} alt="" className="absolute -bottom-4 left-0 right-0 w-full opacity-20 mix-blend-screen pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse-gold" />
            Shivamogga • Est. 2023
          </div>
         <h1 className="display text-[14vw] md:text-[9rem] leading-[0.85] tracking-tight whitespace-nowrap">
  <span>F<span className="text-gold">_</span>BLOCK<span className="text-stroke">_14</span></span>
</h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            Where Shivamogga's local legends get the spotlight they deserve.
            Cinematic reels, premium storytelling, a feed that feels like cinema.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#enquiry" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-gold hover:scale-[1.03] transition">
              Promote your business <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/f_block_14" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl font-medium hover:border-gold/40 transition">
              <Instagram className="h-5 w-5 text-gold" /> @f_block_14
            </a>
          </div>
        </div>
        <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3">
          {[
            { k: "100K+", v: "Followers" },
            { k: "10M+", v: "Reel views" },
            { k: "120+", v: "Brands featured" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-4 md:p-5 shadow-soft">
              <div className="display text-3xl md:text-4xl text-gold">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["FOOD", "FASHION", "CAFES", "AUTO", "FITNESS", "EVENTS", "REAL ESTATE", "RETAIL", "BEAUTY"];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border/60 bg-surface/60 py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="display text-2xl md:text-3xl text-muted-foreground/70 flex items-center gap-12">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-background/95 to-background flex items-center justify-center overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        <div className="relative backdrop-blur-md bg-surface/40 rounded-3xl p-8 sm:p-12 border border-white/[0.06] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 hover:border-gold/20 group">
          
          {/* Subtle internal corner accent glow */}
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-10 items-center relative">
            
            {/* Premium Avatar Container */}
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-gold via-gold/40 to-transparent blur-md opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105" />
              <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full p-1 bg-gradient-to-b from-white/[0.1] to-transparent">
                <img 
                  src={logo} 
                  alt="F_BLOCK_14 logo" 
                  className="h-full w-full rounded-full object-cover ring-2 ring-background/50 bg-muted transform transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </div>
            </div>
            
            {/* Profile Information */}
            <div className="text-center lg:text-left">
              <a 
                href="https://instagram.com/f_block_14" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-muted-foreground hover:text-gold text-xs font-medium tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                <Instagram className="h-3.5 w-3.5 text-gold" /> 
                <span>instagram.com/f_block_14</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/80 mt-4 font-display">
                f_block_14
              </h2>
              
              <p className="mt-3 text-muted-foreground/90 max-w-xl text-base leading-relaxed mx-auto lg:mx-0">
                Shivamogga's premium local biz channel · cinematic reels · run by{' '}
                <a 
                  href="https://www.instagram.com/franklin.franky.589?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="relative inline-block text-gold font-semibold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  Franklin
                </a>
              </p>
              
              {/* Stats Grid */}
              <div className="mt-8 flex justify-center lg:justify-start gap-8 border-t border-white/[0.06] pt-6">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-foreground">950+</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mt-0.5">posts</div>
                </div>
                <div className="border-l border-white/[0.06] pl-8">
                  <div className="text-2xl font-bold tracking-tight text-foreground bg-clip-text bg-gradient-to-r from-gold via-white to-white">100K+</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mt-0.5">followers</div>
                </div>
                <div className="border-l border-white/[0.06] pl-8">
                  <div className="text-2xl font-bold tracking-tight text-foreground">917</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mt-0.5">following</div>
                </div>
              </div>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex sm:flex-row lg:flex-col gap-3 w-full lg:w-48 mutual-justify">
              <a 
                href="https://instagram.com/f_block_14" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3.5 rounded-xl font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <UserPlus className="h-4 w-4" />
                <span>Follow</span>
              </a>
              <a 
                href="#enquiry" 
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] px-5 py-3.5 rounded-xl font-medium border border-white/[0.08] hover:border-white/[0.15] text-foreground transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Message</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Reels() {
  return (
    <section id="reels" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Top Reels" title="Stories that travel" desc="Hand-picked drops from the feed — the ones the city couldn't stop sharing." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {reels.map((r, i) => (
            <article key={i} className="group relative aspect-[9/14] rounded-3xl overflow-hidden shadow-soft border border-border/60">
              <img src={r.img} alt={r.title} loading="lazy" width={720} height={1024}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <span className="glass text-xs px-2.5 py-1 rounded-full text-gold">{r.tag}</span>
                <span className="glass text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1"><Eye className="h-3 w-3" /> {r.views}</span>
              </div>
              <button aria-label="Play" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Play className="h-6 w-6 text-primary-foreground fill-current" />
                </span>
              </button>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="text-base font-semibold leading-tight">{r.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3 text-gold" /> 12K</span>
                  <span className="inline-flex items-center gap-1"><Send className="h-3 w-3 text-gold" /> 3.2K</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      <img
        src={tire}
        alt=""
        aria-hidden
        className="absolute -left-20 top-10 w-[120%] opacity-[0.07] rotate-[-4deg] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative">

        <SectionHeader
          eyebrow="What we do"
          title="Services built to convert"
          desc="Pick a lane. We'll make your brand the one people stop scrolling for."
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-6 bg-surface/70 border border-border hover:border-gold/40 transition shadow-soft overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition" />

              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                <h3 className="display text-2xl mt-5">
                  {s.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden Ants Media Feature */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-surface/90 via-surface/60 to-background p-8 sm:p-12 shadow-soft">

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

            <div className="relative grid lg:grid-cols-[1.2fr_auto] gap-10 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.25em] text-gold">
                  Hidden Ants Media
                </div>

                <h3 className="display text-4xl sm:text-5xl mt-5 leading-none">
                  Social Media Growth
                  <span className="text-gold"> Engine</span>
                </h3>

                <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
                  Beyond content creation, we operate
                  <span className="text-gold font-medium">
                    {" "}Hidden Ants Media
                  </span>
                  {" "}— our dedicated account management and social media
                  growth studio.
                  We help businesses build consistent online presence,
                  increase engagement, grow communities, and convert followers
                  into paying customers.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">

                  <div className="glass rounded-2xl p-4">
                    <div className="text-gold font-semibold">
                      Account Management
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Daily handling of your business profiles.
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-4">
                    <div className="text-gold font-semibold">
                      Organic Growth
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Audience building through proven strategies.
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-4">
                    <div className="text-gold font-semibold">
                      Content Planning
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Structured posting systems that drive results.
                    </p>
                  </div>

                </div>
              </div>

             <div className="flex flex-col items-center justify-center text-center">

  <div className="relative">
    <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />

    <img
      src={hiddenAntsLogo}
      alt="Hidden Ants Media"
      className="relative h-36 w-36 object-contain"
    />
  </div>

  <div className="mt-5 display text-3xl">
    Hidden Ants Media
  </div>

  <div className="text-muted-foreground text-sm">
    Social Media Growth Studio
  </div>
<div className="mt-8">
  <a
    href="https://www.instagram.com/hidden_ants_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2.5 bg-gradient-gold text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5 group"
  >
    <Instagram className="h-4 w-4" />
    <span>Visit Hidden Ants Media</span>

    <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
  </a>
</div>
</div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Journey" title="From first reel to full throttle" desc="The road so far. Built in Shivamogga, fueled by stories." />
        <div className="relative mt-14">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={i} className={`relative grid sm:grid-cols-2 gap-6 items-center ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                  <div className="glass rounded-2xl p-5 shadow-soft inline-block text-left">
                    <div className="display text-gold text-2xl">{t.year}</div>
                    <div className="font-semibold mt-1">{t.title}</div>
                    <p className="text-sm text-muted-foreground mt-1 max-w-sm">{t.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-gradient-gold shadow-gold ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background ambient glow */}
      <div className="absolute -inset-6 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Image Panel */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.4)] aspect-square lg:aspect-auto lg:h-[600px]">
            <img 
              src={franklin} 
              alt="Franklin, founder of F_BLOCK_14" 
              width={1024} 
              height={1024} 
              loading="lazy" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" 
            />
          </div>
        </div>
        
        {/* Right Side: Content Panel */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">About the founder</div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none font-display text-foreground">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold/90 to-gold/70">Franklin</span>
          </h2>
          
          <p className="mt-6 text-muted-foreground/90 leading-relaxed text-base">
            The face behind F_BLOCK_14. Franklin built the channel from a single phone and a stubborn
            belief — that Shivamogga's local businesses deserve the same cinematic treatment global brands get.
            Inspired by the calm, calculated playbook of <span className="text-gold font-medium">MS Dhoni</span>, every reel
            is timed, framed, and finished with the same composure.
          </p>
          
          {/* Quote Block */}
          <div className="mt-8 backdrop-blur-md bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 relative">
            <Quote className="h-5 w-5 text-gold absolute -top-3 left-6 bg-background rounded-full p-1.5 box-content border border-white/[0.08]" />
            <p className="text-lg italic text-foreground/90">
              "I don't sell promotions. I sell trust — built one frame at a time."
            </p>
            <div className="mt-3 text-sm text-muted-foreground/60">— Franklin, Founder @f_block_14</div>
          </div>
          
          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { i: Users, k: "100K", v: "Community" },
              { i: Star, k: "4.9", v: "Brand rating" },
              { i: Calendar, k: "3+ yrs", v: "On the Way" },
            ].map(({ i: Icon, k, v }) => (
              <div key={v} className="rounded-2xl bg-surface/40 backdrop-blur-sm border border-white/[0.06] p-4 transition-all duration-300 hover:border-gold/20">
                <Icon className="h-4 w-4 text-gold" />
                <div className="text-2xl font-bold tracking-tight mt-2 text-foreground">{k}</div>
                <div className="text-xs text-muted-foreground/60 font-medium tracking-wide mt-0.5">{v}</div>
              </div>
            ))}
          </div>

          {/* Premium Instagram Route Button */}
          <div className="mt-8 flex">
            <a 
              href="https://www.instagram.com/franklin.franky.589?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-gold text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Instagram className="h-4 w-4" />
              <span>Connect on Instagram</span>
              <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
 NEW ENQUIRY

 Name: ${formData.name}

 Business: ${formData.business}

 Phone: ${formData.phone}

 Category: ${formData.category}

 Details:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/916363217857?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="enquiry" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative glass rounded-[2.5rem] p-6 sm:p-12 shadow-soft overflow-hidden">

          <img
            src={city}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/95" />

          <img
            src={tire}
            alt=""
            aria-hidden
            className="absolute bottom-0 inset-x-0 w-full opacity-10 pointer-events-none"
          />

          <div className="relative grid lg:grid-cols-2 gap-10">

           <div>
  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
    Enquire
  </div>

  <h2 className="display text-5xl sm:text-6xl leading-none">
    Let's put your
    <br />
    brand in the
    <span className="text-gold"> frame.</span>
  </h2>

  <p className="mt-5 text-muted-foreground max-w-md">
    Drop your details. We reply within 24 hours — usually faster,
    because Shivamogga doesn't sleep.
  </p>

  <div className="mt-8 space-y-3 text-sm">

    <a
      href="tel:+916363217857"
      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition"
    >
      <span className="h-9 w-9 rounded-xl bg-surface-2 flex items-center justify-center">
        <Phone className="h-4 w-4 text-gold" />
      </span>

      +91 6363217857
    </a>

    <a
      href="mailto:franklinfrank.smg@gmail.com"
      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition"
    >
      <span className="h-9 w-9 rounded-xl bg-surface-2 flex items-center justify-center">
        <Mail className="h-4 w-4 text-gold" />
      </span>

      franklinfrank.smg@gmail.com
    </a>

    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="h-9 w-9 rounded-xl bg-surface-2 flex items-center justify-center">
        <MapPin className="h-4 w-4 text-gold" />
      </span>

      Shivamogga, Karnataka
    </div>

  </div>
</div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <Field
                label="Your name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <Field
                label="Business name"
                name="business"
                placeholder="Enter your business name"
                value={formData.business}
                onChange={handleInputChange}
              />

              <div className="grid sm:grid-cols-2 gap-4">

                <Field
                  label="Phone"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <Field
                  label="Category"
                  name="category"
                  placeholder="Food / Fashion / Gym"
                  value={formData.category}
                  onChange={handleInputChange}
                />

              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Tell us about your brand
                </label>

                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder="A line or two is plenty."
                  className="w-full rounded-2xl bg-surface/80 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3.5 rounded-2xl font-semibold shadow-gold hover:scale-[1.01] transition"
              >
                Send Enquiry
                <Send className="h-4 w-4" />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({
  label,
  placeholder,
  name,
  value,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-surface/80 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 transition"
      />
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
      <h2 className="display text-4xl sm:text-5xl md:text-6xl leading-none">{title}</h2>
      <p className="mt-4 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Footer({ year }: { year: string }) {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-lg" />
          <div>
            <div className="display text-lg">F_BLOCK_14</div>
            <div className="text-xs text-muted-foreground">
              Shivamogga · est. 2023
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Built with grit by Franklin. Engineered to make local feel legendary.
        </p>

        <div className="flex md:justify-end items-center gap-3">
          <a
            href="https://instagram.com/f_block_14"
            target="_blank"
            rel="noreferrer"
            className="glass h-10 w-10 rounded-xl flex items-center justify-center hover:border-gold/50 transition"
          >
            <Instagram className="h-4 w-4 text-gold" />
          </a>

          <a
            href="#enquiry"
            className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-gold"
          >
            Work with us
          </a>
        </div>
      </div>

      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {year} F_BLOCK_14 · All rights reserved · Designed and Developed by{" "}
        <a
          href="https://hash2codeteam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80 font-semibold transition-colors duration-300"
        >
          #2CODE
        </a>
      </div>
    </footer>
  );
}
