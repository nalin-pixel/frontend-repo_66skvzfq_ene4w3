import { motion } from 'framer-motion';

export function MiniIntro() {
  return (
    <section className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
              alt="Nishtha portrait"
              className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-2xl md:text-3xl font-bold">Hi, I’m Nishtha Narang</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            A Project Manager by profession, a Creator by passion, and a Social Activist by heart. I blend strategic execution with creative storytelling to build meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function QuickStats() {
  const stats = [
    { label: 'Years Experience', value: '7+', color: 'from-[#F4CE14] to-[#ffd84a]' },
    { label: 'Awards', value: '10+', color: 'from-[#F4CE14] to-[#ffd84a]' },
    { label: 'Collaborations', value: '100+', color: 'from-[#F4CE14] to-[#ffd84a]' },
    { label: 'NGOs Founded', value: '2', color: 'from-[#F4CE14] to-[#ffd84a]' },
    { label: 'Mission', value: 'Inspire', color: 'from-[#F4CE14] to-[#ffd84a]' },
  ];
  return (
    <section className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur-sm shadow-lg"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${s.color} mix-blend-overlay`} />
            <div className="relative">
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="text-white/75 text-sm mt-1">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function QuoteDivider({ text }) {
  return (
    <section className="bg-[#202020] text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl italic text-white/90"
        >
          “{text}”
        </motion.blockquote>
      </div>
    </section>
  );
}

export function PreviewCards() {
  const items = [
    {
      id: 'journey',
      title: 'Life Journey',
      desc: 'Past, present, and the future I’m building.',
      img: 'https://images.unsplash.com/photo-1529336953121-a0fc1f8f7e4f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'passions',
      title: 'Passions & Roles',
      desc: 'Where strategy meets creativity and purpose.',
      img: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'work',
      title: 'Featured Work',
      desc: 'Highlights, media, and collaborations.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
  ];
  return (
    <section className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <a key={it.id} href={`#${it.id}`} className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 block">
            <img src={it.img} alt={it.title} className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="text-white/80 text-sm">{it.desc}</p>
              <span className="mt-3 inline-flex items-center text-[#F4CE14] font-semibold">Explore →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function JourneySection() {
  const steps = [
    { title: 'Past', text: 'Where it all started — education, early roles, challenges.' },
    { title: 'Present', text: 'Today, I lead, create, and inspire — professional work and NGOs.' },
    { title: 'Future', text: 'The future I’m building — global vision, change, empowerment.' },
  ];
  return (
    <section id="journey" className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Life Journey</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 shadow-xl"
            >
              <div className="text-[#F4CE14] font-semibold">{s.title}</div>
              <p className="mt-2 text-white/85">{s.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#work" className="inline-flex px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 transition text-white">
            Explore My Work →
          </a>
        </div>
      </div>
    </section>
  );
}

export function PassionsSection() {
  const roles = [
    'Project Manager',
    'Model & UGC Creator',
    'German Trainer',
    'Social Activist',
    'Digital Marketing Expert',
    'NGO Co-founder',
    'Speaker / Event Judge',
    'Travel Creator',
  ];
  return (
    <section id="passions" className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Passions & Roles</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 shadow-xl origin-center transform perspective-1000 hover:[transform:rotateX(3deg)_rotateY(-3deg)] hover:bg-white/7"
            >
              <div className="text-lg font-semibold">{r}</div>
              <p className="mt-2 text-sm text-white/80">Blending strategy, creativity, and purpose.</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 italic text-white/85">“You don’t have to be one thing — just be real in everything you do.”</p>
      </div>
    </section>
  );
}

export function WorkSection() {
  const images = [
    'https://images.unsplash.com/photo-1520975928316-56f2aa85e1df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <section id="work" className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Work</h2>
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1.5 rounded-full bg-white/10 text-white/85">All</button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 hover:bg-white/10">Professional</button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 hover:bg-white/10">Modeling</button>
          </div>
        </div>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="space-y-4">
          {images.map((src, i) => (
            <motion.a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className="block overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img src={src} alt="work" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" />
            </motion.a>
          ))}
        </div></div>
        <div className="mt-10">
          <a href="#connect" className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F4CE14] to-[#ffd84a] text-[#202020] font-semibold shadow-[0_0_22px_rgba(244,206,20,0.35)]">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
}

export function ConnectSection() {
  return (
    <section id="connect" className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Connect & Collaborate</h2>
          <p className="mt-3 text-white/85">Good conversations create great collaborations — let’s begin one.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">Instagram</a>
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">LinkedIn</a>
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">YouTube</a>
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">X</a>
          </div>
        </div>
        <form className="relative bg-white/10 backdrop-blur-xl ring-1 ring-white/15 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-white/80">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4CE14]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4CE14]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Collaboration Type</label>
              <select className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#F4CE14]">
                <option>Brand Collaboration</option>
                <option>Speaking / Judging</option>
                <option>NGO / Social Impact</option>
                <option>Training / Workshop</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/80">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4CE14]" placeholder="Tell me about the opportunity" />
            </div>
          </div>
          <button type="button" className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 text-[#202020] bg-gradient-to-r from-[#F4CE14] to-[#ffd84a] font-semibold w-full shadow-[0_0_22px_rgba(244,206,20,0.35)] hover:shadow-[0_0_30px_rgba(244,206,20,0.55)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export function VisionSection() {
  const cards = [
    { title: 'Vision', text: 'Empower people to learn, lead, create, and care.' },
    { title: 'Global Goals', text: 'Education access, women leadership, and sustainable growth.' },
    { title: 'Future Projects', text: 'Community-led programs and global collaborations.' },
  ];
  return (
    <section id="vision" className="bg-gradient-to-b from-[#202020] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Future Vision</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 shadow-xl"
            >
              <div className="text-[#F4CE14] font-semibold">{c.title}</div>
              <p className="mt-2 text-white/85">{c.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#connect" className="inline-flex px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 transition text-white">Join me in creating what’s next</a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-[#121212] to-[#202020] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,206,20,0.08),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative z-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-lg">Nishtha Narang</div>
          <p className="text-white/75">Learn. Lead. Create. Care.</p>
        </div>
        <div className="text-white/80">
          <a href="#home" className="block hover:text-white">Home</a>
          <a href="#journey" className="block hover:text-white">Journey</a>
          <a href="#passions" className="block hover:text-white">Passions</a>
          <a href="#work" className="block hover:text-white">Work</a>
          <a href="#connect" className="block hover:text-white">Connect</a>
        </div>
        <div>
          <div className="flex gap-3">
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">Instagram</a>
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">LinkedIn</a>
            <a href="#" className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15">YouTube</a>
          </div>
        </div>
      </div>
      <div className="text-center text-white/70 pb-8">© 2025 Nishtha Narang | Made with purpose in India 🌿</div>
    </footer>
  );
}
