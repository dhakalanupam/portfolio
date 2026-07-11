'use client';

import { useEffect, useState } from 'react';

const workItems = [
  {
    id: 1,
    title: 'All New OMODA E5 Pro Nepal Review — Lokesh Oli',
    tag: 'Car Review · Long-Form',
    ratio: '16:9',
    youtubeId: 'J_HSSeYphhs',
    alt: 'Long-form YouTube edit thumbnail',
    accent: 'default',
  },
  {
    id: 2,
    title: 'Phones Under Rs. 30,000 — TechSathi',
    tag: 'Tech · Shorts',
    ratio: '9:16',
    youtubeId: 'pbaUGDFUfjM',
    alt: 'Tech short thumbnail',
    accent: 'alt',
  },
  {
    id: 3,
    title: 'Final Angel Video',
    tag: 'Long-Form',
    ratio: '16:9',
    youtubeId: 'DZrJbc9xavc',
    alt: 'Long-form YouTube edit thumbnail',
    accent: 'default',
  },
  {
    id: 4,
    title: 'Get Free Data From Every iPhone Purchase!! — Oliz Store',
    tag: 'Tech · Shorts',
    ratio: '9:16',
    youtubeId: '2iWOuuwLaDE',
    alt: 'Tech short thumbnail',
    accent: 'alt',
  },
  {
    id: 5,
    title: '2 July 2026 — Apple Price Hike Update — TechSathi',
    tag: 'Tech · Shorts',
    ratio: '9:16',
    youtubeId: 'stusc2kzuDE',
    alt: 'Tech short thumbnail',
    accent: 'alt',
  },
];

const credits = [
  { number: '01', name: 'Oliz Store', role: 'In-house Video Editor' },
  { number: '02', name: 'Lokesh Oli', role: 'Long-Form YouTube Editor' },
  { number: '03', name: 'TechSathi', role: 'Short-Form Tech Content Editor' },
];

const capabilities = [
  {
    title: 'Motion Graphics',
    description: 'Titles, transitions, and kinetic type built to hold attention.',
  },
  {
    title: 'Short-Form Content',
    description: 'Fast-paced reels and shorts cut for retention on every platform.',
  },
  {
    title: 'Long-Form YouTube',
    description: 'Full-length edits with pacing, sound design, and story structure.',
  },
  {
    title: 'Car Review Edits',
    description: 'Clean cuts and graphics built around specs, walk-arounds, and reveals.',
  },
];

const contactFields = [
  { label: 'Email', value: 'anupamdhakal3@gmail.com', href: 'mailto:anupamdhakal3@gmail.com' },
  { label: 'Phone', value: '+977 986 453 1708', href: 'tel:+9779864531708' },
  { label: 'Instagram', value: '@a_nu_pam_', href: 'https://www.instagram.com/a_nu_pam_/' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [copiedValue, setCopiedValue] = useState('');
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scene = document.getElementById('scene');
    const hero = document.querySelector('.hero');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!scene || !hero || reduceMotion) return;

    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
    };

    const reset = () => {
      scene.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseleave', reset);
    return () => {
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseleave', reset);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTimecode('00:00:12:04');
      return;
    }

    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      const f = frame % 30;
      const totalSec = Math.floor(frame / 30);
      const s = totalSec % 60;
      const m = Math.floor(totalSec / 60) % 60;
      const h = Math.floor(totalSec / 3600);
      const pad = (value) => String(value).padStart(2, '0');
      setTimecode(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
    }, 1000 / 30);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeModal) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveModal(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(''), 1600);
    } catch {
      setCopiedValue('');
    }
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="siteNav">
        <div className="wrap nav-row">
          <a href="#top" className="nav-mark">
            A<span>D</span>
          </a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#credits">Credits</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
          </ul>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="scene" id="scene" aria-hidden="true">
            <div className="grid-floor" />
            <div className="depth-dot d1" />
            <div className="depth-dot d2" />
            <div className="depth-dot d3" />
            <div className="depth-dot d4" />
            <div className="depth-dot d5" />
            <div className="depth-card c1" />
            <div className="depth-card c2" />
          </div>
          <div className="wrap">
            <div className="hero-eyebrow">VIDEO EDITOR — KATHMANDU, NEPAL</div>
            <h1 className="hero-name">
              ANUPAM
              <br />
              <span className="accent">DHAKAL</span>
            </h1>
            <p className="hero-tagline">
              Video editor specializing in <strong>motion graphics</strong>, attention-grabbing <strong>short-form content</strong>, and <strong>car review edits</strong>.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View the work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>

            <div className="timeline">
              <div className="timeline-track">
                <div className="timeline-ticks">
                  {['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30'].map((tick) => (
                    <div className="tick" key={tick}>
                      <span>{tick}</span>
                    </div>
                  ))}
                </div>
                <div className="playhead" />
              </div>
              <div className="timeline-readout">
                <span>PROJECT_REEL.PRPROJ</span>
                <span id="tc-live">{timecode}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Selected Work</span>
                <h2 className="section-title">Recent Cuts</h2>
              </div>
              <p className="section-sub">A mix of long-form YouTube edits, tech shorts, and a car review. Click any clip to play.</p>
            </div>

            <div className="work-grid">
              {workItems.map((item) => (
                <button key={item.id} className="clip-card reveal" onClick={() => setActiveModal(item)}>
                  <div className={`clip-thumb ${item.ratio === '9:16' ? 'ratio-9-16' : 'ratio-16-9'}`}>
                    <img src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} alt={item.alt} loading="lazy" />
                    <div className="clip-play">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.4" />
                        <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className="clip-meta">
                    <span className={`clip-tag ${item.accent === 'alt' ? 'alt' : ''}`}>{item.tag}</span>
                    <span className="clip-title">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="credits">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Worked With</span>
                <h2 className="section-title">Credits</h2>
              </div>
              <p className="section-sub">Clients and creators I&apos;ve edited for.</p>
            </div>

            <div className="credit-list reveal">
              {credits.map((credit) => (
                <div className="credit-row" key={credit.number}>
                  <span className="credit-num">{credit.number}</span>
                  <span className="credit-name">{credit.name}</span>
                  <span className="credit-role">{credit.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Capabilities</span>
                <h2 className="section-title">What I Cut</h2>
              </div>
            </div>

            <div className="cap-grid reveal">
              {capabilities.map((capability, index) => (
                <div className="cap-cell" key={capability.title}>
                  <span className="cap-ch">CH.{String(index + 1).padStart(2, '0')}</span>
                  <div className="cap-title">{capability.title}</div>
                  <div className="cap-desc">{capability.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact-panel reveal">
              <div className="contact-lead">
                <span className="eyebrow">Contact</span>
                <h2>
                  Let&apos;s cut
                  <br />
                  something
                  <br />
                  together.
                </h2>
                <p>Have a project in mind? Reach out directly — I usually reply within a day.</p>
                <a href="mailto:anupamdhakal3@gmail.com" className="btn btn-primary">
                  Email me
                </a>
              </div>
              <div className="contact-fields">
                {contactFields.map((field) => (
                  <div className="field" key={field.label}>
                    <span className="field-label">{field.label}</span>
                    <a href={field.href} className="field-value" target={field.href.startsWith('http') ? '_blank' : undefined} rel={field.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {field.value}
                    </a>
                    <button className="field-copy" type="button" onClick={() => handleCopy(field.value)}>
                      {copiedValue === field.value ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row">
          <span>© {new Date().getFullYear()} Anupam Dhakal</span>
          <span>
            <a href="https://www.instagram.com/a_nu_pam_" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            ·{' '}
            <a href="mailto:anupamdhakal3@gmail.com">Email</a>
          </span>
        </div>
      </footer>

      {activeModal ? (
        <div className="modal-backdrop open" onClick={() => setActiveModal(null)}>
          <div className="modal-box h169" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveModal(null)}>
              Close ✕
            </button>
            <div className="modal-frame-wrap h169">
              <iframe
                src={`https://www.youtube.com/embed/${activeModal.youtubeId}?autoplay=1&rel=0`}
                title="Video player"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
