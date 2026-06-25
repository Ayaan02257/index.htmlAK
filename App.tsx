import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin, Menu, X, Star, ChevronLeft, ChevronRight } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Zenith GT-R",
    category: "Grand Tourer",
    price: "218,500",
    year: 2025,
    power: "650 hp",
    torque: "820 Nm",
    zeroToSixty: "3.1s",
    topSpeed: "318 km/h",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=600&fit=crop&auto=format",
    badge: "NEW MODEL",
    color: "Obsidian Black",
  },
  {
    id: 2,
    name: "Meridian S9",
    category: "Sport Sedan",
    price: "162,000",
    year: 2025,
    power: "540 hp",
    torque: "680 Nm",
    zeroToSixty: "3.6s",
    topSpeed: "295 km/h",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&h=600&fit=crop&auto=format",
    badge: "BESTSELLER",
    color: "Arctic Silver",
  },
  {
    id: 3,
    name: "Vantara Coupé",
    category: "Luxury Coupé",
    price: "289,000",
    year: 2024,
    power: "720 hp",
    torque: "950 Nm",
    zeroToSixty: "2.8s",
    topSpeed: "340 km/h",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&h=600&fit=crop&auto=format",
    badge: "LIMITED",
    color: "Champagne Gold",
  },
  {
    id: 4,
    name: "Solara Roadster",
    category: "Open-Top",
    price: "195,000",
    year: 2025,
    power: "480 hp",
    torque: "620 Nm",
    zeroToSixty: "3.9s",
    topSpeed: "278 km/h",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=900&h=600&fit=crop&auto=format",
    badge: null,
    color: "Venetian Red",
  },
];

const testimonials = [
  {
    name: "Eleanor Marsh",
    title: "Creative Director, Studio M",
    quote: "The Zenith GT-R transformed my daily commute into something I actually anticipate. The team at Apex handled every detail with extraordinary care.",
    rating: 5,
  },
  {
    name: "James Thornton",
    title: "Principal Architect",
    quote: "I have owned a dozen luxury vehicles over the years. Nothing compares to the craftsmanship Apex delivers — from the first consultation to the moment you take the wheel.",
    rating: 5,
  },
  {
    name: "Sophia Reeve",
    title: "Private Equity Partner",
    quote: "The Vantara Coupé is exactly what I wanted — and Apex found me the limited colorway I thought was impossible to source. Exceptional service.",
    rating: 5,
  },
];

const stats = [
  { value: "47", label: "Years of Excellence" },
  { value: "2,400+", label: "Vehicles Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Brand Partners" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [filterCategory, setFilterCategory] = useState("ALL");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = ["ALL", "Grand Tourer", "Sport Sedan", "Luxury Coupé", "Open-Top"];
  const filtered = filterCategory === "ALL" ? vehicles : vehicles.filter((v) => v.category === filterCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-black tracking-wider text-primary"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
            >
              APEX
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1 hidden sm:block">
              Motor Group
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["collection", "heritage", "experience", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollToSection(s)}
                className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
            >
              Book a Viewing
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border px-6 pb-8 pt-4 flex flex-col gap-6">
            {["collection", "heritage", "experience", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollToSection(s)}
                className="text-left text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 w-full hover:bg-primary/90 transition-colors font-medium"
            >
              Book a Viewing
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1800&h=1100&fit=crop&auto=format"
            alt="Apex Motor Group showroom hero — luxury sports car"
            className="w-full h-full object-cover scale-105"
            style={{ transform: "scale(1.04)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              Est. 1977 · London · Geneva · Dubai
            </p>
            <h1
              className="text-6xl lg:text-8xl font-black text-foreground leading-none mb-6"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.92 }}
            >
              Drive the
              <br />
              <em className="not-italic text-primary">Exceptional.</em>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10 font-light">
              Apex Motor Group curates the world's most extraordinary automobiles for discerning collectors and enthusiasts. Each vehicle hand-selected, every detail verified.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <button
                onClick={() => scrollToSection("collection")}
                className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-all"
              >
                View Collection
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("heritage")}
                className="text-[11px] tracking-[0.2em] uppercase text-foreground border border-border px-8 py-4 hover:border-primary/50 transition-colors"
              >
                Our Heritage
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 hidden lg:flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-px bg-border" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
          <ChevronDown size={12} className="animate-bounce" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <p
                className="text-4xl lg:text-5xl font-black text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-4">Current Inventory</p>
            <h2
              className="text-5xl lg:text-6xl font-black text-foreground leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Collection
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all ${
                  filterCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {filtered.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-background relative overflow-hidden cursor-pointer"
              onClick={() => setActiveVehicle(vehicle.id)}
            >
              <div className="relative h-64 overflow-hidden bg-card">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} — ${vehicle.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {vehicle.badge && (
                  <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase bg-primary text-primary-foreground px-3 py-1.5 font-medium">
                    {vehicle.badge}
                  </span>
                )}
              </div>

              <div className="p-8 border-t border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">{vehicle.category} · {vehicle.year}</p>
                    <h3
                      className="text-3xl font-bold text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {vehicle.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">from</p>
                    <p className="text-xl font-bold text-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                      £{vehicle.price}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {[
                    { label: "Power", value: vehicle.power },
                    { label: "0–60 mph", value: vehicle.zeroToSixty },
                    { label: "Top Speed", value: vehicle.topSpeed },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-sm font-medium text-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground">{vehicle.color}</span>
                  <span className="group-hover:text-primary transition-colors flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    Request Details <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-muted-foreground">
            <p className="text-sm tracking-widest uppercase">No vehicles in this category currently</p>
          </div>
        )}
      </section>

      {/* HERITAGE */}
      <section id="heritage" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-0">
          <div className="py-24 pr-0 lg:pr-20 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-6">Since 1977</p>
            <h2
              className="text-5xl lg:text-6xl font-black text-foreground leading-none mb-8"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.95 }}
            >
              Built on a
              <br />
              <em className="not-italic text-primary">legacy</em>
              <br />
              of taste.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 font-light max-w-sm">
              Founded in Mayfair in 1977 by Charles Apex, our group has spent nearly five decades cultivating relationships with the world's premier manufacturers — and with clients who understand that a great automobile is more than transport.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light max-w-sm">
              Every vehicle in our showroom has passed through the hands of our master technicians. We do not simply sell cars — we curate experiences, and we stand behind each one unconditionally.
            </p>
            <button
              onClick={() => scrollToSection("experience")}
              className="group self-start flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-foreground border border-border px-7 py-4 hover:border-primary/50 transition-colors"
            >
              The Apex Experience
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="hidden lg:block relative min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=700&fit=crop&auto=format"
              alt="Apex Motor Group showroom interior — polished luxury vehicle"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/30" />
            <div className="absolute bottom-10 left-10 right-10 bg-background/80 backdrop-blur-sm border border-border p-6">
              <p
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Perfection is not a destination — it is a discipline."
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">— Charles Apex, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-4">What Sets Us Apart</p>
          <h2
            className="text-5xl lg:text-6xl font-black text-foreground leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Apex Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-px">
          {[
            {
              number: "01",
              title: "Private Consultations",
              desc: "One-on-one sessions with our senior advisors — in-showroom, at your home, or aboard our private viewing lounge in Geneva.",
              img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
            },
            {
              number: "02",
              title: "White-Glove Delivery",
              desc: "Your vehicle arrives fully detailed, inspected, and presented with a bespoke accessory kit. We handle all registration paperwork worldwide.",
              img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop&auto=format",
            },
            {
              number: "03",
              title: "Lifetime Concierge",
              desc: "Apex owners receive lifetime access to our concierge — from priority service scheduling to sourcing parts for vehicles no longer in production.",
              img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
            },
          ].map((item) => (
            <div key={item.number} className="bg-background group">
              <div className="relative h-48 overflow-hidden bg-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span
                  className="absolute top-5 left-6 text-6xl font-black text-foreground/10 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.number}
                </span>
              </div>
              <div className="p-8 border-t border-border">
                <h3
                  className="text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card border-y border-border py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] tracking-[0.4em] text-primary uppercase text-center mb-16">Client Voices</p>

          <div className="relative min-h-[220px]">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-all duration-500 ${i === testimonialIdx ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
              >
                <div className="flex justify-center mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#C8A96E" stroke="none" />
                  ))}
                </div>
                <blockquote
                  className="text-2xl lg:text-3xl text-foreground text-center leading-snug font-light italic mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{t.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{t.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="p-3 border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-px transition-all ${i === testimonialIdx ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
              className="p-3 border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-6">Reach Us</p>
            <h2
              className="text-5xl lg:text-6xl font-black text-foreground leading-none mb-8"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.95 }}
            >
              Visit the
              <br />
              Showroom.
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed mb-12 max-w-sm">
              Our doors are open by appointment. Arrange a private viewing, test drive, or simply come in to explore what we have in residence this season.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "14 Berkeley Square, Mayfair, London W1J 6BS" },
                { icon: Phone, label: "Phone", value: "+44 20 7946 0821" },
                { icon: Mail, label: "Email", value: "enquiries@apexmotorgroup.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-1">{label}</p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-4">Showroom Hours</p>
              <div className="space-y-2 text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                {[
                  { days: "Mon – Fri", hours: "09:00 – 19:00" },
                  { days: "Saturday", hours: "10:00 – 17:00" },
                  { days: "Sunday", hours: "By appointment" },
                ].map((row) => (
                  <div key={row.days} className="flex justify-between text-muted-foreground">
                    <span>{row.days}</span>
                    <span className="text-foreground">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — a member of our team will be in touch shortly.");
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "First Name", id: "first", type: "text" },
                  { label: "Last Name", id: "last", type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder={f.label}
                    />
                  </div>
                ))}
              </div>

              {[
                { label: "Email Address", id: "email", type: "email", placeholder: "your@email.com" },
                { label: "Phone Number", id: "phone", type: "tel", placeholder: "+44 ..." },
              ].map((f) => (
                <div key={f.id}>
                  <label className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
                  Vehicle of Interest
                </label>
                <select className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                  <option value="">Select a model…</option>
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} — {v.category}
                    </option>
                  ))}
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us how we can assist you…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-primary/90 transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                Your details are held in strict confidence. We do not share client information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-2xl font-black tracking-wider text-primary"
                  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
                >
                  APEX
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">Motor Group</span>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                Curating the world's finest automobiles for collectors and enthusiasts since 1977. Showrooms in London, Geneva, and Dubai.
              </p>
            </div>

            {[
              {
                heading: "Explore",
                links: ["Current Collection", "Past Inventory", "Bespoke Orders", "Vehicle History"],
              },
              {
                heading: "Company",
                links: ["Our Heritage", "The Apex Experience", "Media & Press", "Careers"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-5">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-muted-foreground tracking-[0.15em]">
              © 2025 Apex Motor Group Ltd. All rights reserved. Registered in England & Wales.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((l) => (
                <a key={l} href="#" className="text-[10px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
