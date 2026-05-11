// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';

// const BRAND = 'Amadeo';
// const ACCENT = '#CE2D3D';
// const DARK = '#1A1210';
// const WARM = '#F5F0EB';
// const MUTED = '#8C7B6B';
// const GOLD = '#B8965A';

// const products = [
//   {
//     id: 1,
//     name: 'The Oxford',
//     subtitle: 'Cap Toe Classic',
//     price: '$485',
//     tag: 'Bestseller',
//     desc: 'Full-grain calfskin, double-leather sole, hand-burnished finish.',
//     colors: ['#2C1810', '#1A1A2E', '#4A3728'],
//   },
//   {
//     id: 2,
//     name: 'The Derby',
//     subtitle: 'Open Lacing',
//     price: '$420',
//     tag: 'New',
//     desc: 'Supple pebbled leather upper, Goodyear-welted construction.',
//     colors: ['#3D2B1F', '#5C4033', '#1C1C1C'],
//   },
//   {
//     id: 3,
//     name: 'The Loafer',
//     subtitle: 'Horsebit Detail',
//     price: '$395',
//     tag: 'Limited',
//     desc: 'Smooth calfskin, leather lining, hand-stitched moccasin toe.',
//     colors: ['#4A2C1A', '#2C2C2C', '#6B4C35'],
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       'These shoes have outlasted three suits. The craftsmanship is extraordinary.',
//     author: 'James R.',
//     title: 'Architect, London',
//   },
//   {
//     quote: 'I wear them to every important meeting. They speak before I do.',
//     author: 'Marcus T.',
//     title: 'Partner, New York',
//   },
//   {
//     quote: 'Worth every penny — and they only get better with age.',
//     author: 'David L.',
//     title: 'Editor, Milan',
//   },
// ];

// const steps = [
//   {
//     num: '01',
//     label: 'Last Selection',
//     desc: 'Choose your last shape — from sleek to generous.',
//   },
//   {
//     num: '02',
//     label: 'Leather Choice',
//     desc: 'Select from our curated hides, sourced worldwide.',
//   },
//   {
//     num: '03',
//     label: 'Hand Crafting',
//     desc: 'Our artisans spend 40+ hours on each pair.',
//   },
//   {
//     num: '04',
//     label: 'Delivery',
//     desc: 'Shipped in a bespoke wooden box to your door.',
//   },
// ];

// const timeline = [
//   {
//     year: '1923',
//     title: 'Founded in Florence',
//     desc: 'Giuseppe Amadeo opens a modest workshop on Via dei Calzaiuoli, hand-lasting his first dozen pairs.',
//   },
//   {
//     year: '1951',
//     title: 'Royal Appointment',
//     desc: 'Granted a warrant of appointment to the House of Savoy. The Oxford becomes a symbol of Italian statecraft.',
//   },
//   {
//     year: '1974',
//     title: 'London Atelier',
//     desc: 'The second workshop opens on Jermyn Street, marrying Italian form with British precision.',
//   },
//   {
//     year: '2003',
//     title: 'New York Flagship',
//     desc: "The Madison Avenue boutique brings Amadeo's century of heritage to the Americas.",
//   },
//   {
//     year: '2026',
//     title: 'Still Handmade',
//     desc: 'Every pair still passes through a single pair of hands. Some things should never change.',
//   },
// ];

// const leathers = [
//   {
//     name: 'Full-Grain Calfskin',
//     origin: 'Tuscany, Italy',
//     tone: '#6B4226',
//     desc: 'The pinnacle of smooth leather. Tight grain, supple hand, ages to a rich patina over decades.',
//     care: 'Cedar shoe tree · Cream polish monthly · Brush after every wear',
//   },
//   {
//     name: 'Shell Amadeo',
//     origin: 'Chicago, USA',
//     tone: '#3D1F0F',
//     desc: "Cut from the fibrous flat muscle beneath a horse's hide. Non-porous, virtually creaseproof, deeply lustrous.",
//     care: 'Renovateur conditioner · No water · Bone burnish annually',
//   },
//   {
//     name: 'Scotch Grain',
//     origin: 'Northamptonshire, UK',
//     tone: '#4A3020',
//     desc: 'Pebbled surface embossed under heat and pressure. Forgiving, characterful, and undeniably British.',
//     care: 'Wax polish weekly · Brush vigorously · Waterproof spray seasonally',
//   },
//   {
//     name: 'Suede Reverse Calf',
//     origin: 'Córdoba, Spain',
//     tone: '#8C6040',
//     desc: 'Velvet-nap reverse side of calfskin. Casual refinement — the secret weapon of the well-dressed.',
//     care: 'Suede brush daily · Rubber eraser for scuffs · Waterproof before first wear',
//   },
// ];

// const lookbookItems = [
//   {
//     label: 'The Business Hour',
//     subtitle: 'Oxford + charcoal flannel',
//     accent: ACCENT,
//     h: 320,
//     shoeColor: '#2C1810',
//     bg: '#1E1410',
//   },
//   {
//     label: 'The Weekend Edit',
//     subtitle: 'Derby + selvedge denim',
//     accent: GOLD,
//     h: 220,
//     shoeColor: '#5C3A28',
//     bg: '#2A1F18',
//   },
//   {
//     label: 'The Grand Affair',
//     subtitle: 'Oxford + black tie',
//     accent: '#C0B090',
//     h: 220,
//     shoeColor: '#1A0F0A',
//     bg: '#0F0A08',
//   },
//   {
//     label: 'The Italian Sunday',
//     subtitle: 'Loafer + linen',
//     accent: GOLD,
//     h: 320,
//     shoeColor: '#6B4A30',
//     bg: '#261A10',
//   },
// ];

// const press = [
//   { pub: 'Financial Times', quote: 'The last shoemaker that still means it.' },
//   { pub: 'GQ', quote: 'A masterclass in restraint.' },
//   {
//     pub: 'Monocle',
//     quote: 'Amadeo endures precisely because it refuses to hurry.',
//   },
//   { pub: 'Esquire', quote: 'Buy once, wear forever.' },
// ];

// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, inView];
// }

// function useWindowSize() {
//   const [size, setSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1200,
//   });
//   useEffect(() => {
//     const h = () => setSize({ width: window.innerWidth });
//     window.addEventListener('resize', h);
//     return () => window.removeEventListener('resize', h);
//   }, []);
//   return size;
// }

// function ShoeIllustration({ color = '#2C1810', style = {} }) {
//   const id = `sg${color.replace('#', '')}`;
//   return (
//     <svg
//       viewBox="0 0 340 180"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ width: '100%', maxWidth: 340, ...style }}
//     >
//       <defs>
//         <radialGradient id={id} cx="50%" cy="40%" r="60%">
//           <stop offset="0%" stopColor={color} stopOpacity="0.7" />
//           <stop offset="100%" stopColor={color} stopOpacity="1" />
//         </radialGradient>
//         <filter id={`shd${id}`} x="-20%" y="-20%" width="140%" height="160%">
//           <feDropShadow
//             dx="0"
//             dy="8"
//             stdDeviation="10"
//             floodColor="#000"
//             floodOpacity="0.25"
//           />
//         </filter>
//       </defs>
//       <ellipse cx="170" cy="162" rx="130" ry="10" fill="#111" opacity="0.18" />
//       <rect
//         x="52"
//         y="128"
//         width="32"
//         height="22"
//         rx="4"
//         fill={color}
//         style={{ filter: 'brightness(0.6)' }}
//       />
//       <path
//         d="M84 148 Q60 148 55 132 Q50 116 62 108 Q74 100 90 100 L180 96 Q220 94 250 102 Q278 110 284 124 Q290 138 270 146 Q240 152 200 152 Z"
//         fill={`url(#${id})`}
//         filter={`url(#shd${id})`}
//       />
//       <path
//         d="M210 100 Q250 98 274 112 Q292 122 286 134 Q280 144 258 148 Q236 152 208 152 L208 100 Z"
//         fill={color}
//         style={{ filter: 'brightness(0.78)' }}
//         opacity="0.9"
//       />
//       <path
//         d="M210 100 L208 152"
//         stroke="#000"
//         strokeWidth="1"
//         opacity="0.15"
//       />
//       <path
//         d="M100 100 Q110 88 130 82 Q150 76 170 78 Q192 80 200 96 L180 96 Q164 86 148 86 Q132 86 118 96 Z"
//         fill={color}
//         style={{ filter: 'brightness(0.85)' }}
//       />
//       {[90, 104, 118, 132, 146].map((y, i) => (
//         <line
//           key={i}
//           x1="118"
//           y1={y - 6}
//           x2="178"
//           y2={y - 8}
//           stroke="#E8DDD0"
//           strokeWidth="1.2"
//           opacity="0.55"
//           strokeDasharray={i % 2 === 0 ? 'none' : '3 2'}
//         />
//       ))}
//       <ellipse
//         cx="195"
//         cy="112"
//         rx="38"
//         ry="10"
//         fill="#fff"
//         opacity="0.07"
//         transform="rotate(-10 195 112)"
//       />
//       <path
//         d="M84 148 Q170 155 270 146"
//         stroke="#000"
//         strokeWidth="1.5"
//         fill="none"
//         opacity="0.2"
//       />
//     </svg>
//   );
// }

// /* ─── GLOBAL STYLES ─── */
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//     html { scroll-behavior: smooth; }
//     body { background: ${DARK}; overflow-x: hidden; }
//     @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//     @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
//     @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
//     .marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
//     .marquee-track:hover { animation-play-state: paused; }
//     input::placeholder { color: rgba(255,255,255,0.3); }
//     input:focus { outline: none; border-color: rgba(206,45,61,0.5) !important; }
//     a, button { -webkit-tap-highlight-color: transparent; }
//   `}</style>
// );

// /* ─── NAV ─── */
// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   useEffect(() => {
//     const h = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', h);
//     return () => window.removeEventListener('scroll', h);
//   }, []);

//   useEffect(() => {
//     if (!isMobile) setMenuOpen(false);
//   }, [isMobile]);

//   return (
//     <>
//       <nav
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           background:
//             scrolled || menuOpen ? 'rgba(26,18,16,0.97)' : 'transparent',
//           backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
//           transition: 'background 0.4s, box-shadow 0.4s',
//           boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
//           padding: `0 ${isMobile ? '20px' : 'clamp(20px,5vw,60px)'}`,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           height: isMobile ? 60 : 68,
//         }}
//       >
//         {/* Logo */}
//         <div style={{ position: 'relative', width: '100px', height: '40px' }}>
//           <Image
//             src="/AMADEO_LOGO.png"
//             alt="Amadeo handcrafted shoe"
//             fill
//             style={{ objectFit: 'cover', objectPosition: 'center' }}
//             priority
//           />
//         </div>

//         {/* Desktop nav */}
//         {!isMobile && (
//           <div style={{ display: 'flex', gap: 32 }}>
//             {['Collection', 'Heritage', 'Materials', 'Craft', 'Lookbook'].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 14,
//                     letterSpacing: '0.12em',
//                     color: 'rgba(255,255,255,0.75)',
//                     textDecoration: 'none',
//                     transition: 'color 0.2s',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = '#fff';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
//                   }}
//                 >
//                   {item}
//                 </a>
//               ),
//             )}
//           </div>
//         )}

//         <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
//           {!isMobile && (
//             <a
//               href="#"
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 13,
//                 letterSpacing: '0.18em',
//                 color: ACCENT,
//                 textDecoration: 'none',
//                 border: `1px solid ${ACCENT}`,
//                 padding: '6px 18px',
//                 transition: 'all 0.25s',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = ACCENT;
//                 e.currentTarget.style.color = '#fff';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'transparent';
//                 e.currentTarget.style.color = ACCENT;
//               }}
//             >
//               ORDER
//             </a>
//           )}
//           {/* Hamburger */}
//           {isMobile && (
//             <button
//               onClick={() => setMenuOpen((o) => !o)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//                 padding: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 5,
//                 alignItems: 'flex-end',
//               }}
//             >
//               <span
//                 style={{
//                   display: 'block',
//                   width: menuOpen ? 22 : 22,
//                   height: 2,
//                   background: '#fff',
//                   transition: 'all 0.3s',
//                   transform: menuOpen
//                     ? 'rotate(45deg) translate(5px, 5px)'
//                     : 'none',
//                 }}
//               />
//               <span
//                 style={{
//                   display: 'block',
//                   width: 16,
//                   height: 2,
//                   background: '#fff',
//                   transition: 'all 0.3s',
//                   opacity: menuOpen ? 0 : 1,
//                 }}
//               />
//               <span
//                 style={{
//                   display: 'block',
//                   width: menuOpen ? 22 : 22,
//                   height: 2,
//                   background: '#fff',
//                   transition: 'all 0.3s',
//                   transform: menuOpen
//                     ? 'rotate(-45deg) translate(5px, -5px)'
//                     : 'none',
//                 }}
//               />
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu Drawer */}
//       {isMobile && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 60,
//             left: 0,
//             right: 0,
//             zIndex: 99,
//             background: 'rgba(26,18,16,0.98)',
//             backdropFilter: 'blur(16px)',
//             transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
//             opacity: menuOpen ? 1 : 0,
//             transition: 'transform 0.4s ease, opacity 0.3s ease',
//             padding: '24px 24px 32px',
//             borderBottom: `1px solid rgba(206,45,61,0.2)`,
//             pointerEvents: menuOpen ? 'auto' : 'none',
//           }}
//         >
//           {['Collection', 'Heritage', 'Materials', 'Craft', 'Lookbook'].map(
//             (item, i) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setMenuOpen(false)}
//                 style={{
//                   display: 'block',
//                   fontFamily: "'Playfair Display', serif",
//                   fontWeight: 700,
//                   fontSize: 22,
//                   color: '#fff',
//                   textDecoration: 'none',
//                   padding: '12px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.06)',
//                   letterSpacing: '0.05em',
//                   transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
//                   transition: `transform 0.4s ease ${i * 0.05}s, opacity 0.4s ease ${i * 0.05}s`,
//                   opacity: menuOpen ? 1 : 0,
//                 }}
//               >
//                 {item}
//               </a>
//             ),
//           )}
//           <a
//             href="#"
//             style={{
//               display: 'inline-block',
//               marginTop: 24,
//               background: ACCENT,
//               color: '#fff',
//               padding: '12px 32px',
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 14,
//               letterSpacing: '0.2em',
//               textDecoration: 'none',
//             }}
//           >
//             ORDER NOW
//           </a>
//         </div>
//       )}
//     </>
//   );
// }

// /* ─── HERO ─── */
// function Hero() {
//   const [loaded, setLoaded] = useState(false);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;
//   const isTablet = width >= 768 && width < 1024;

//   useEffect(() => {
//     setTimeout(() => setLoaded(true), 80);
//   }, []);

//   return (
//     <section
//       style={{
//         minHeight: '100vh',
//         background: DARK,
//         position: 'relative',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         paddingTop: isMobile ? 60 : 68,
//       }}
//     >
//       {/* Noise */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           opacity: 0.035,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
//           backgroundSize: '256px',
//         }}
//       />
//       {/* Glow */}
//       <div
//         style={{
//           position: 'absolute',
//           right: isMobile ? '-20%' : '8%',
//           top: '20%',
//           width: isMobile ? 300 : 520,
//           height: isMobile ? 300 : 520,
//           background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Side text — hidden on mobile */}
//       {!isMobile && (
//         <div
//           style={{
//             position: 'absolute',
//             left: 32,
//             top: '50%',
//             transform: 'translateY(-50%) rotate(-90deg)',
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 11,
//             letterSpacing: '0.35em',
//             color: 'rgba(255,255,255,0.25)',
//             whiteSpace: 'nowrap',
//           }}
//         >
//           EST. 1923 — HANDCRAFTED LEATHER
//         </div>
//       )}

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: '0 auto',
//           padding: isMobile ? '40px 24px 60px' : '0 clamp(20px,6vw,80px)',
//           display: 'grid',
//           gridTemplateColumns: isMobile
//             ? '1fr'
//             : isTablet
//               ? '1fr 1fr'
//               : '1fr 1fr',
//           gap: isMobile ? 32 : 40,
//           alignItems: 'center',
//           width: '100%',
//         }}
//       >
//         {/* Text */}
//         <div style={{ order: isMobile ? 2 : 1 }}>
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 12,
//               letterSpacing: '0.4em',
//               color: ACCENT,
//               marginBottom: 20,
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(12px)',
//               transition: 'all 0.7s ease 0.1s',
//             }}
//           >
//             THE ART OF THE SHOE
//           </div>
//           <h1
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontWeight: 900,
//               fontSize: isMobile ? '48px' : 'clamp(48px,6vw,88px)',
//               lineHeight: 1.0,
//               color: '#fff',
//               margin: '0 0 24px',
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(20px)',
//               transition: 'all 0.8s ease 0.2s',
//             }}
//           >
//             Crafted for
//             <br />
//             <span style={{ color: ACCENT }}>Generations</span>
//           </h1>
//           <p
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: isMobile ? 17 : 20,
//               lineHeight: 1.7,
//               color: 'rgba(255,255,255,0.55)',
//               maxWidth: 420,
//               margin: '0 0 36px',
//               opacity: loaded ? 1 : 0,
//               transition: 'all 0.8s ease 0.35s',
//             }}
//           >
//             Each pair is a hundred years of tradition distilled into leather,
//             thread, and sole.
//           </p>
//           <div
//             style={{
//               display: 'flex',
//               gap: 12,
//               alignItems: 'center',
//               flexWrap: 'wrap',
//               opacity: loaded ? 1 : 0,
//               transition: 'all 0.8s ease 0.5s',
//             }}
//           >
//             <a
//               href="#collection"
//               style={{
//                 background: ACCENT,
//                 color: '#fff',
//                 padding: isMobile ? '12px 28px' : '14px 36px',
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 14,
//                 letterSpacing: '0.2em',
//                 textDecoration: 'none',
//                 transition: 'all 0.25s',
//               }}
//               onMouseEnter={(e) => (e.target.style.background = '#a82230')}
//               onMouseLeave={(e) => (e.target.style.background = ACCENT)}
//             >
//               SHOP COLLECTION
//             </a>
//             <a
//               href="#craft"
//               style={{
//                 color: 'rgba(255,255,255,0.6)',
//                 padding: '12px 16px',
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 14,
//                 letterSpacing: '0.15em',
//                 textDecoration: 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 transition: 'color 0.2s',
//               }}
//               onMouseEnter={(e) => (e.target.style.color = '#fff')}
//               onMouseLeave={(e) =>
//                 (e.target.style.color = 'rgba(255,255,255,0.6)')
//               }
//             >
//               Our Craft <span style={{ fontSize: 18 }}>→</span>
//             </a>
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               gap: isMobile ? 24 : 40,
//               marginTop: isMobile ? 40 : 60,
//               opacity: loaded ? 1 : 0,
//               transition: 'all 0.9s ease 0.65s',
//               flexWrap: 'wrap',
//             }}
//           >
//             {[
//               ['40+', 'Hours per pair'],
//               ['100%', 'Full-grain leather'],
//               ['Life', 'time guarantee'],
//             ].map(([val, lab]) => (
//               <div key={val}>
//                 <div
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     fontSize: isMobile ? 22 : 26,
//                     color: '#fff',
//                     fontWeight: 700,
//                   }}
//                 >
//                   {val}
//                 </div>
//                 <div
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 12,
//                     color: MUTED,
//                     letterSpacing: '0.1em',
//                     marginTop: 2,
//                   }}
//                 >
//                   {lab}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Shoe */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             opacity: loaded ? 1 : 0,
//             transform: loaded
//               ? 'none'
//               : isMobile
//                 ? 'translateY(20px)'
//                 : 'translateX(30px)',
//             transition: 'all 1s ease 0.3s',
//             position: 'relative',
//             order: isMobile ? 1 : 2,
//           }}
//         >
//           {!isMobile && (
//             <>
//               <div
//                 style={{
//                   position: 'absolute',
//                   width: 360,
//                   height: 360,
//                   border: `1px solid rgba(206,45,61,0.15)`,
//                   borderRadius: '50%',
//                   animation: 'spin 18s linear infinite',
//                 }}
//               />
//               <div
//                 style={{
//                   position: 'absolute',
//                   width: 280,
//                   height: 280,
//                   border: `1px solid rgba(255,255,255,0.05)`,
//                   borderRadius: '50%',
//                   animation: 'spin 12s linear infinite reverse',
//                 }}
//               />
//             </>
//           )}
//           <div
//             style={{
//               position: 'relative',
//               padding: isMobile ? 0 : 20,
//               maxWidth: isMobile ? 280 : 380,
//               width: '100%',
//             }}
//           >
//             <div
//               style={{ position: 'relative', width: '300px', height: '400px' }}
//             >
//               <Image
//                 src="/IMG_3290.png"
//                 alt="Amadeo handcrafted shoe"
//                 fill
//                 style={{ objectFit: 'cover', objectPosition: 'center' }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: 1,
//           background:
//             'linear-gradient(90deg, transparent, rgba(206,45,61,0.3), transparent)',
//         }}
//       />
//     </section>
//   );
// }

// /* ─── PRESS MARQUEE ─── */
// function PressMarquee() {
//   const items = [...press, ...press];
//   return (
//     <div
//       style={{
//         background: '#100C0B',
//         borderTop: `1px solid rgba(206,45,61,0.2)`,
//         borderBottom: `1px solid rgba(206,45,61,0.2)`,
//         padding: '16px 0',
//         overflow: 'hidden',
//       }}
//     >
//       <div className="marquee-track">
//         {items.map((p, i) => (
//           <div
//             key={i}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 24,
//               paddingRight: 48,
//               whiteSpace: 'nowrap',
//             }}
//           >
//             <span
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: 11,
//                 fontWeight: 700,
//                 letterSpacing: '0.25em',
//                 color: ACCENT,
//               }}
//             >
//               {p.pub}
//             </span>
//             <span
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 14,
//                 fontStyle: 'italic',
//                 color: 'rgba(255,255,255,0.45)',
//               }}
//             >
//               "{p.quote}"
//             </span>
//             <span style={{ color: `${ACCENT}40`, fontSize: 18 }}>◆</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ─── COLLECTION ─── */
// function Collection() {
//   const [ref, inView] = useInView();
//   const [active, setActive] = useState({});
//   const { width } = useWindowSize();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   return (
//     <section
//       id="collection"
//       ref={ref}
//       style={{
//         background: WARM,
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//       }}
//     >
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div style={{ textAlign: 'center', marginBottom: 56 }}>
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 12,
//               letterSpacing: '0.4em',
//               color: ACCENT,
//               marginBottom: 14,
//               opacity: inView ? 1 : 0,
//               transition: 'all 0.6s ease',
//             }}
//           >
//             SS 2026 COLLECTION
//           </div>
//           <h2
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontWeight: 900,
//               fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
//               color: DARK,
//               lineHeight: 1.1,
//               opacity: inView ? 1 : 0,
//               transform: inView ? 'none' : 'translateY(20px)',
//               transition: 'all 0.7s ease 0.1s',
//             }}
//           >
//             The Classic Triad
//           </h2>
//         </div>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile
//               ? '1fr'
//               : isTablet
//                 ? '1fr 1fr'
//                 : 'repeat(3,1fr)',
//             gap: isMobile ? 28 : 32,
//           }}
//         >
//           {products.map((p, i) => (
//             <div
//               key={p.id}
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateY(30px)',
//                 transition: `all 0.7s ease ${0.15 + i * 0.12}s`,
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={() => setActive((a) => ({ ...a, [p.id]: true }))}
//               onMouseLeave={() => setActive((a) => ({ ...a, [p.id]: false }))}
//             >
//               <div
//                 style={{
//                   background: active[p.id] ? DARK : '#EDE8E2',
//                   transition: 'all 0.4s ease',
//                   padding: '36px 28px 28px',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {p.tag && (
//                   <div
//                     style={{
//                       position: 'absolute',
//                       top: 16,
//                       right: 16,
//                       background: ACCENT,
//                       color: '#fff',
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: 10,
//                       letterSpacing: '0.2em',
//                       padding: '3px 10px',
//                     }}
//                   >
//                     {p.tag}
//                   </div>
//                 )}
//                 <div style={{ marginBottom: 8 }}>
//                   <div
//                     style={{
//                       position: 'relative',
//                       width: '300px',
//                       height: '400px',
//                     }}
//                   >
//                     <Image
//                       src="/IMG_3280-.png"
//                       alt="Amadeo handcrafted shoe"
//                       fill
//                       style={{ objectFit: 'cover', objectPosition: 'center' }}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{ display: 'flex', gap: 8, justifyContent: 'center' }}
//                 >
//                   {p.colors.map((c) => (
//                     <div
//                       key={c}
//                       style={{
//                         width: 14,
//                         height: 14,
//                         borderRadius: '50%',
//                         background: c,
//                         border: `2px solid ${active[p.id] ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
//                         transition: 'border 0.4s',
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div style={{ padding: '20px 0 0' }}>
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'flex-start',
//                   }}
//                 >
//                   <div>
//                     <div
//                       style={{
//                         fontFamily: "'Playfair Display', serif",
//                         fontWeight: 700,
//                         fontSize: 20,
//                         color: DARK,
//                       }}
//                     >
//                       {p.name}
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "'Cormorant Garamond', serif",
//                         fontSize: 13,
//                         letterSpacing: '0.15em',
//                         color: MUTED,
//                         marginTop: 2,
//                       }}
//                     >
//                       {p.subtitle}
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                       fontWeight: 700,
//                       fontSize: 20,
//                       color: ACCENT,
//                     }}
//                   >
//                     {p.price}
//                   </div>
//                 </div>
//                 <p
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 15,
//                     color: MUTED,
//                     marginTop: 10,
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {p.desc}
//                 </p>
//                 <div
//                   style={{
//                     marginTop: 18,
//                     paddingTop: 18,
//                     borderTop: `1px solid rgba(0,0,0,0.08)`,
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     flexWrap: 'wrap',
//                     gap: 10,
//                   }}
//                 >
//                   <a
//                     href="#"
//                     style={{
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: 13,
//                       letterSpacing: '0.2em',
//                       color: DARK,
//                       textDecoration: 'none',
//                     }}
//                   >
//                     VIEW DETAILS →
//                   </a>
//                   <a
//                     href="#"
//                     style={{
//                       background: DARK,
//                       color: '#fff',
//                       padding: '8px 18px',
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: 12,
//                       letterSpacing: '0.15em',
//                       textDecoration: 'none',
//                       transition: 'background 0.2s',
//                     }}
//                     onMouseEnter={(e) => (e.target.style.background = ACCENT)}
//                     onMouseLeave={(e) => (e.target.style.background = DARK)}
//                   >
//                     ADD TO BAG
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── HERITAGE ─── */
// function Heritage() {
//   const [ref, inView] = useInView();
//   const [active, setActive] = useState(0);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   return (
//     <section
//       id="heritage"
//       ref={ref}
//       style={{
//         background: DARK,
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           right: '-5%',
//           bottom: '5%',
//           width: 400,
//           height: 400,
//           background: `radial-gradient(circle, ${GOLD}0a 0%, transparent 70%)`,
//           pointerEvents: 'none',
//         }}
//       />
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div style={{ textAlign: 'center', marginBottom: 52 }}>
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 12,
//               letterSpacing: '0.4em',
//               color: ACCENT,
//               marginBottom: 14,
//               opacity: inView ? 1 : 0,
//               transition: 'all 0.6s',
//             }}
//           >
//             A CENTURY OF CRAFT
//           </div>
//           <h2
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontWeight: 900,
//               fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
//               color: '#fff',
//               lineHeight: 1.1,
//               opacity: inView ? 1 : 0,
//               transform: inView ? 'none' : 'translateY(20px)',
//               transition: 'all 0.7s ease 0.1s',
//             }}
//           >
//             Our Heritage
//           </h2>
//         </div>

//         {/* Timeline tabs — scrollable on mobile */}
//         <div
//           style={{
//             overflowX: 'auto',
//             WebkitOverflowScrolling: 'touch',
//             marginBottom: 48,
//             borderBottom: '1px solid rgba(255,255,255,0.08)',
//             scrollbarWidth: 'none',
//           }}
//         >
//           <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
//             {timeline.map((t, i) => (
//               <button
//                 key={t.year}
//                 onClick={() => setActive(i)}
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   cursor: 'pointer',
//                   padding: `12px ${isMobile ? '20px' : '28px'}`,
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: isMobile ? 14 : 16,
//                   fontWeight: 700,
//                   color: active === i ? '#fff' : 'rgba(255,255,255,0.3)',
//                   borderBottom:
//                     active === i
//                       ? `2px solid ${ACCENT}`
//                       : '2px solid transparent',
//                   marginBottom: -1,
//                   transition: 'all 0.25s',
//                   letterSpacing: '0.05em',
//                   whiteSpace: 'nowrap',
//                 }}
//               >
//                 {t.year}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: isMobile ? 40 : 80,
//             alignItems: 'center',
//             opacity: inView ? 1 : 0,
//             transition: 'all 0.8s ease 0.2s',
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 12,
//                 letterSpacing: '0.3em',
//                 color: GOLD,
//                 marginBottom: 14,
//               }}
//             >
//               {timeline[active].year}
//             </div>
//             <h3
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 900,
//                 fontSize: isMobile ? '26px' : 'clamp(26px,3vw,40px)',
//                 color: '#fff',
//                 marginBottom: 20,
//                 lineHeight: 1.2,
//               }}
//             >
//               {timeline[active].title}
//             </h3>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: isMobile ? 17 : 19,
//                 lineHeight: 1.8,
//                 color: 'rgba(255,255,255,0.55)',
//                 maxWidth: 480,
//               }}
//             >
//               {timeline[active].desc}
//             </p>
//             <div style={{ display: 'flex', gap: 8, marginTop: 36 }}>
//               {timeline.map((_, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setActive(i)}
//                   style={{
//                     width: i === active ? 32 : 8,
//                     height: 3,
//                     background: i === active ? ACCENT : 'rgba(255,255,255,0.2)',
//                     transition: 'all 0.3s',
//                     cursor: 'pointer',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <div
//               style={{
//                 background: 'rgba(255,255,255,0.03)',
//                 border: '1px solid rgba(255,255,255,0.07)',
//                 padding: isMobile ? '32px 24px' : '52px 40px',
//                 position: 'relative',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   top: -1,
//                   left: 40,
//                   width: 60,
//                   height: 2,
//                   background: GOLD,
//                 }}
//               />
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: isMobile ? '60px' : 'clamp(72px,10vw,120px)',
//                   fontWeight: 900,
//                   color: 'rgba(255,255,255,0.04)',
//                   lineHeight: 1,
//                   textAlign: 'center',
//                   letterSpacing: '-0.02em',
//                 }}
//               >
//                 {timeline[active].year}
//               </div>
//               <div
//                 style={{
//                   marginTop: -20,
//                   display: 'grid',
//                   gridTemplateColumns: '1fr 1fr',
//                   gap: 16,
//                 }}
//               >
//                 {[
//                   ['Florence', 'Origin'],
//                   ['Goodyear', 'Welt method'],
//                   ['Single', 'Cobbler per pair'],
//                   ['40+', 'Hour build time'],
//                 ].map(([a, b]) => (
//                   <div
//                     key={a}
//                     style={{
//                       background: 'rgba(255,255,255,0.03)',
//                       padding: '14px 16px',
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontFamily: "'Playfair Display', serif",
//                         fontSize: 15,
//                         color: '#fff',
//                         fontWeight: 700,
//                       }}
//                     >
//                       {a}
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "'Cormorant Garamond', serif",
//                         fontSize: 12,
//                         color: MUTED,
//                         letterSpacing: '0.1em',
//                         marginTop: 2,
//                       }}
//                     >
//                       {b}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── MATERIALS ─── */
// function Materials() {
//   const [ref, inView] = useInView();
//   const [active, setActive] = useState(0);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   return (
//     <section
//       id="materials"
//       ref={ref}
//       style={{
//         background: '#F0EAE3',
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//       }}
//     >
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div style={{ marginBottom: 48 }}>
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 12,
//               letterSpacing: '0.4em',
//               color: ACCENT,
//               marginBottom: 14,
//               opacity: inView ? 1 : 0,
//               transition: 'all 0.6s',
//             }}
//           >
//             SOURCE & SUBSTANCE
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: isMobile ? 'flex-start' : 'flex-end',
//               flexDirection: isMobile ? 'column' : 'row',
//               gap: isMobile ? 12 : 0,
//             }}
//           >
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 900,
//                 fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
//                 color: DARK,
//                 lineHeight: 1.1,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateY(20px)',
//                 transition: 'all 0.7s ease 0.1s',
//               }}
//             >
//               Our Leathers
//             </h2>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 16,
//                 color: MUTED,
//                 maxWidth: isMobile ? '100%' : 340,
//                 lineHeight: 1.6,
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.8s ease 0.2s',
//               }}
//             >
//               Each hide is chosen by hand for its grain, temper, and potential
//               to age magnificently.
//             </p>
//           </div>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: isMobile ? 4 : 40,
//             opacity: inView ? 1 : 0,
//             transition: 'all 0.8s ease 0.3s',
//           }}
//         >
//           {/* Selector */}
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: isMobile ? 'row' : 'column',
//               gap: 2,
//               overflowX: isMobile ? 'auto' : 'visible',
//               WebkitOverflowScrolling: 'touch',
//               scrollbarWidth: 'none',
//               marginBottom: isMobile ? 4 : 0,
//             }}
//           >
//             {leathers.map((l, i) => (
//               <div
//                 key={l.name}
//                 onClick={() => setActive(i)}
//                 style={{
//                   padding: isMobile ? '14px 16px' : '22px 24px',
//                   cursor: 'pointer',
//                   background: active === i ? DARK : 'transparent',
//                   borderLeft:
//                     !isMobile && active === i
//                       ? `3px solid ${ACCENT}`
//                       : !isMobile
//                         ? '3px solid transparent'
//                         : 'none',
//                   borderBottom:
//                     isMobile && active === i
//                       ? `2px solid ${ACCENT}`
//                       : isMobile
//                         ? '2px solid transparent'
//                         : 'none',
//                   transition: 'all 0.3s',
//                   flexShrink: isMobile ? 0 : 1,
//                   minWidth: isMobile ? 'max-content' : 'auto',
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                   <div
//                     style={{
//                       width: isMobile ? 20 : 28,
//                       height: isMobile ? 20 : 28,
//                       borderRadius: '50%',
//                       background: l.tone,
//                       flexShrink: 0,
//                       boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.3)',
//                     }}
//                   />
//                   <div>
//                     <div
//                       style={{
//                         fontFamily: "'Playfair Display', serif",
//                         fontWeight: 700,
//                         fontSize: isMobile ? 14 : 16,
//                         color: active === i ? '#fff' : DARK,
//                         whiteSpace: isMobile ? 'nowrap' : 'normal',
//                       }}
//                     >
//                       {l.name}
//                     </div>
//                     {!isMobile && (
//                       <div
//                         style={{
//                           fontFamily: "'Cormorant Garamond', serif",
//                           fontSize: 11,
//                           letterSpacing: '0.2em',
//                           color: active === i ? MUTED : '#A09080',
//                           marginTop: 2,
//                         }}
//                       >
//                         {l.origin}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Detail */}
//           <div
//             style={{
//               background: DARK,
//               padding: isMobile ? '32px 24px' : '48px 44px',
//               position: 'relative',
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 3,
//                 background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
//               }}
//             />
//             <div
//               style={{
//                 display: 'flex',
//                 gap: 14,
//                 alignItems: 'center',
//                 marginBottom: 24,
//               }}
//             >
//               <div
//                 style={{
//                   width: isMobile ? 44 : 56,
//                   height: isMobile ? 44 : 56,
//                   borderRadius: '50%',
//                   background: leathers[active].tone,
//                   boxShadow:
//                     '0 8px 24px rgba(0,0,0,0.4), inset 0 -6px 12px rgba(0,0,0,0.3)',
//                   flexShrink: 0,
//                 }}
//               />
//               <div>
//                 <div
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     fontWeight: 700,
//                     fontSize: isMobile ? 18 : 22,
//                     color: '#fff',
//                   }}
//                 >
//                   {leathers[active].name}
//                 </div>
//                 <div
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 12,
//                     letterSpacing: '0.2em',
//                     color: ACCENT,
//                     marginTop: 2,
//                   }}
//                 >
//                   {leathers[active].origin}
//                 </div>
//               </div>
//             </div>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: isMobile ? 16 : 18,
//                 lineHeight: 1.75,
//                 color: 'rgba(255,255,255,0.6)',
//                 marginBottom: 28,
//               }}
//             >
//               {leathers[active].desc}
//             </p>
//             <div
//               style={{
//                 borderTop: '1px solid rgba(255,255,255,0.08)',
//                 paddingTop: 24,
//               }}
//             >
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: 11,
//                   color: ACCENT,
//                   letterSpacing: '0.3em',
//                   marginBottom: 10,
//                 }}
//               >
//                 CARE INSTRUCTIONS
//               </div>
//               <p
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: 14,
//                   color: 'rgba(255,255,255,0.4)',
//                   lineHeight: 1.7,
//                 }}
//               >
//                 {leathers[active].care}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── CRAFT ─── */
// function Craft() {
//   const [ref, inView] = useInView();
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   return (
//     <section
//       id="craft"
//       ref={ref}
//       style={{
//         background: DARK,
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           left: '-5%',
//           top: '10%',
//           width: 300,
//           height: 300,
//           background: `radial-gradient(circle, ${ACCENT}15 0%, transparent 70%)`,
//           pointerEvents: 'none',
//         }}
//       />
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: isMobile ? 48 : 80,
//             alignItems: 'center',
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 12,
//                 letterSpacing: '0.4em',
//                 color: ACCENT,
//                 marginBottom: 14,
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.6s',
//               }}
//             >
//               THE AMADEO METHOD
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 900,
//                 fontSize: isMobile ? '30px' : 'clamp(30px,4vw,52px)',
//                 color: '#fff',
//                 lineHeight: 1.1,
//                 marginBottom: 22,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateY(20px)',
//                 transition: 'all 0.7s ease 0.1s',
//               }}
//             >
//               Made by Hand.
//               <br />
//               <em style={{ fontStyle: 'italic', color: GOLD }}>
//                 Worn for Life.
//               </em>
//             </h2>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: isMobile ? 16 : 18,
//                 lineHeight: 1.75,
//                 color: 'rgba(255,255,255,0.55)',
//                 marginBottom: 36,
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.8s ease 0.2s',
//               }}
//             >
//               Every pair passes through the hands of a single master cobbler —
//               from pattern cutting to final polish. No conveyor belts. No
//               shortcuts.
//             </p>
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: isMobile ? 20 : 28,
//               }}
//             >
//               {steps.map((s, i) => (
//                 <div
//                   key={s.num}
//                   style={{
//                     opacity: inView ? 1 : 0,
//                     transform: inView ? 'none' : 'translateY(16px)',
//                     transition: `all 0.7s ease ${0.3 + i * 0.1}s`,
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                       fontSize: 11,
//                       color: ACCENT,
//                       letterSpacing: '0.25em',
//                       marginBottom: 5,
//                     }}
//                   >
//                     {s.num}
//                   </div>
//                   <div
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                       fontWeight: 700,
//                       fontSize: 15,
//                       color: '#fff',
//                       marginBottom: 5,
//                     }}
//                   >
//                     {s.label}
//                   </div>
//                   <div
//                     style={{
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: 13,
//                       color: 'rgba(255,255,255,0.4)',
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {s.desc}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {!isMobile && (
//             <div
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateX(30px)',
//                 transition: 'all 0.9s ease 0.2s',
//               }}
//             >
//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.03)',
//                   border: '1px solid rgba(255,255,255,0.07)',
//                   padding: '52px 40px',
//                   position: 'relative',
//                 }}
//               >
//                 <div
//                   style={{
//                     position: 'absolute',
//                     top: -1,
//                     left: 40,
//                     width: 60,
//                     height: 2,
//                     background: ACCENT,
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: 'relative',
//                     width: '400px',
//                     height: '500px',
//                   }}
//                 >
//                   <Image
//                     src="/IMG_3290.png"
//                     alt="Amadeo handcrafted shoe"
//                     fill
//                     style={{ objectFit: 'cover', objectPosition: 'center' }}
//                     priority
//                   />
//                 </div>
//                 <div
//                   style={{
//                     borderTop: '1px solid rgba(255,255,255,0.08)',
//                     paddingTop: 28,
//                     display: 'grid',
//                     gridTemplateColumns: '1fr 1fr 1fr',
//                     gap: 20,
//                     textAlign: 'center',
//                   }}
//                 >
//                   {[
//                     ['Goodyear', 'Welt'],
//                     ['Full-Grain', 'Leather'],
//                     ['Hand', 'Burnished'],
//                   ].map(([a, b]) => (
//                     <div key={a}>
//                       <div
//                         style={{
//                           fontFamily: "'Playfair Display', serif",
//                           fontSize: 13,
//                           color: '#fff',
//                           fontWeight: 700,
//                         }}
//                       >
//                         {a}
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "'Cormorant Garamond', serif",
//                           fontSize: 12,
//                           color: MUTED,
//                           letterSpacing: '0.1em',
//                         }}
//                       >
//                         {b}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Mobile shoe */}
//           {isMobile && (
//             <div
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.9s ease 0.3s',
//               }}
//             >
//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.03)',
//                   border: '1px solid rgba(255,255,255,0.07)',
//                   padding: '28px 24px',
//                   position: 'relative',
//                 }}
//               >
//                 <div
//                   style={{
//                     position: 'absolute',
//                     top: -1,
//                     left: 30,
//                     width: 48,
//                     height: 2,
//                     background: ACCENT,
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: 'relative',
//                     width: '300px',
//                     height: '500px',
//                   }}
//                 >
//                   <Image
//                     src="/IMG_3290.png"
//                     alt="Amadeo handcrafted shoe"
//                     fill
//                     style={{ objectFit: 'cover', objectPosition: 'center' }}
//                     priority
//                   />
//                 </div>
//                 <div
//                   style={{
//                     borderTop: '1px solid rgba(255,255,255,0.08)',
//                     paddingTop: 20,
//                     display: 'flex',
//                     justifyContent: 'space-around',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {[
//                     ['Goodyear', 'Welt'],
//                     ['Full-Grain', 'Leather'],
//                     ['Hand', 'Burnished'],
//                   ].map(([a, b]) => (
//                     <div key={a}>
//                       <div
//                         style={{
//                           fontFamily: "'Playfair Display', serif",
//                           fontSize: 12,
//                           color: '#fff',
//                           fontWeight: 700,
//                         }}
//                       >
//                         {a}
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "'Cormorant Garamond', serif",
//                           fontSize: 11,
//                           color: MUTED,
//                           letterSpacing: '0.08em',
//                         }}
//                       >
//                         {b}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── LOOKBOOK ─── */
// function Lookbook() {
//   const [ref, inView] = useInView();
//   const { width } = useWindowSize();
//   const isMobile = width < 640;

//   return (
//     <section
//       id="lookbook"
//       ref={ref}
//       style={{
//         background: '#0E0A09',
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//       }}
//     >
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'flex-end',
//             marginBottom: 40,
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 12,
//                 letterSpacing: '0.4em',
//                 color: ACCENT,
//                 marginBottom: 14,
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.6s',
//               }}
//             >
//               EDITORIAL
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 900,
//                 fontSize: isMobile ? '28px' : 'clamp(32px,4vw,52px)',
//                 color: '#fff',
//                 lineHeight: 1.1,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateY(20px)',
//                 transition: 'all 0.7s ease 0.1s',
//               }}
//             >
//               The Lookbook
//             </h2>
//           </div>
//           <a
//             href="#"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 13,
//               letterSpacing: '0.2em',
//               color: 'rgba(255,255,255,0.4)',
//               textDecoration: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 8,
//               opacity: inView ? 1 : 0,
//               transition: 'all 0.7s 0.2s',
//               whiteSpace: 'nowrap',
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')
//             }
//           >
//             VIEW ALL →
//           </a>
//         </div>

//         {isMobile ? (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//             {lookbookItems.map((item, i) => (
//               <LookbookCard
//                 key={item.label}
//                 item={{ ...item, h: 200 }}
//                 i={i}
//                 inView={inView}
//               />
//             ))}
//           </div>
//         ) : (
//           <div
//             style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
//           >
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//               {lookbookItems.slice(0, 2).map((item, i) => (
//                 <LookbookCard
//                   key={item.label}
//                   item={item}
//                   i={i}
//                   inView={inView}
//                 />
//               ))}
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//               {lookbookItems.slice(2).map((item, i) => (
//                 <LookbookCard
//                   key={item.label}
//                   item={item}
//                   i={i + 2}
//                   inView={inView}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function LookbookCard({ item, i, inView }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         position: 'relative',
//         height: item.h,
//         background: item.bg,
//         overflow: 'hidden',
//         cursor: 'pointer',
//         opacity: inView ? 1 : 0,
//         transform: inView ? 'none' : 'translateY(24px)',
//         transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)`,
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           transform: hover ? 'scale(1.04)' : 'scale(1)',
//           transition: 'transform 0.5s ease',
//         }}
//       >
//         <div
//           style={{
//             position: 'relative',
//             width: '210px',
//             height: '280px',
//           }}
//         >
//           <Image
//             src="/IMG_3290.png"
//             alt="Amadeo handcrafted shoe"
//             fill
//             style={{ objectFit: 'cover', objectPosition: 'center' }}
//             priority
//           />
//         </div>
//       </div>
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           background: `linear-gradient(to top, ${item.bg}ee 0%, transparent 50%)`,
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: '20px 22px',
//           transform: hover ? 'translateY(-4px)' : 'none',
//           transition: 'transform 0.3s',
//         }}
//       >
//         <div
//           style={{
//             fontFamily: "'Playfair Display', serif",
//             fontWeight: 700,
//             fontSize: 17,
//             color: '#fff',
//             marginBottom: 3,
//           }}
//         >
//           {item.label}
//         </div>
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 12,
//             letterSpacing: '0.15em',
//             color: item.accent,
//           }}
//         >
//           {item.subtitle}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─── TESTIMONIALS ─── */
// function Testimonials() {
//   const [ref, inView] = useInView();
//   const [active, setActive] = useState(0);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   useEffect(() => {
//     const t = setInterval(
//       () => setActive((a) => (a + 1) % testimonials.length),
//       4000,
//     );
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       style={{
//         background: '#F0EAE3',
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//         textAlign: 'center',
//       }}
//     >
//       <div style={{ maxWidth: 720, margin: '0 auto' }}>
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 12,
//             letterSpacing: '0.4em',
//             color: ACCENT,
//             marginBottom: 40,
//             opacity: inView ? 1 : 0,
//             transition: 'all 0.6s',
//           }}
//         >
//           WHAT THEY SAY
//         </div>
//         <div style={{ position: 'relative', minHeight: isMobile ? 180 : 160 }}>
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               style={{
//                 position: i === 0 ? 'relative' : 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 opacity: active === i ? 1 : 0,
//                 transition: 'opacity 0.6s ease',
//                 pointerEvents: active === i ? 'auto' : 'none',
//               }}
//             >
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontStyle: 'italic',
//                   fontSize: isMobile ? '18px' : 'clamp(20px,2.5vw,28px)',
//                   lineHeight: 1.5,
//                   color: DARK,
//                   marginBottom: 24,
//                 }}
//               >
//                 "{t.quote}"
//               </div>
//               <div
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: 13,
//                   letterSpacing: '0.2em',
//                   color: MUTED,
//                 }}
//               >
//                 — {t.author}, <span style={{ color: ACCENT }}>{t.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             gap: 8,
//             justifyContent: 'center',
//             marginTop: 36,
//           }}
//         >
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               style={{
//                 width: i === active ? 28 : 8,
//                 height: 8,
//                 background: i === active ? ACCENT : '#C4B9AE',
//                 border: 'none',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s',
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── SIZE GUIDE ─── */
// function SizeGuide() {
//   const [ref, inView] = useInView();
//   const { width } = useWindowSize();
//   const isMobile = width < 768;
//   const sizes = [
//     { uk: '6', eu: '39', us: '7', cm: '24.5' },
//     { uk: '7', eu: '40', us: '8', cm: '25.5' },
//     { uk: '8', eu: '41', us: '9', cm: '26.5' },
//     { uk: '9', eu: '42', us: '10', cm: '27.0' },
//     { uk: '10', eu: '43', us: '11', cm: '27.5' },
//     { uk: '11', eu: '44', us: '12', cm: '28.5' },
//     { uk: '12', eu: '45', us: '13', cm: '29.5' },
//   ];
//   const [unit, setUnit] = useState('UK');

//   return (
//     <section
//       ref={ref}
//       style={{
//         background: WARM,
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//       }}
//     >
//       <div style={{ maxWidth: 1000, margin: '0 auto' }}>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: isMobile ? 48 : 80,
//             alignItems: 'start',
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 12,
//                 letterSpacing: '0.4em',
//                 color: ACCENT,
//                 marginBottom: 14,
//                 opacity: inView ? 1 : 0,
//                 transition: 'all 0.6s',
//               }}
//             >
//               PERFECT FIT
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 900,
//                 fontSize: isMobile ? '28px' : 'clamp(28px,3.5vw,46px)',
//                 color: DARK,
//                 lineHeight: 1.1,
//                 marginBottom: 22,
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? 'none' : 'translateY(20px)',
//                 transition: 'all 0.7s ease 0.1s',
//               }}
//             >
//               Find Your Size
//             </h2>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: isMobile ? 16 : 18,
//                 lineHeight: 1.75,
//                 color: MUTED,
//                 marginBottom: 28,
//               }}
//             >
//               Our lasts run true to size in UK. If you are between sizes, we
//               recommend sizing up. All new shoes will conform to your foot
//               within two weeks of regular wear.
//             </p>
//             <div
//               style={{
//                 background: DARK,
//                 padding: '22px 24px',
//                 borderLeft: `3px solid ${ACCENT}`,
//               }}
//             >
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: 12,
//                   color: ACCENT,
//                   letterSpacing: '0.2em',
//                   marginBottom: 10,
//                 }}
//               >
//                 HOW TO MEASURE
//               </div>
//               <p
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: 14,
//                   color: 'rgba(255,255,255,0.55)',
//                   lineHeight: 1.7,
//                 }}
//               >
//                 Stand on a sheet of paper in the afternoon. Mark the heel and
//                 longest toe. Measure in centimetres.
//               </p>
//             </div>
//           </div>

//           <div
//             style={{
//               opacity: inView ? 1 : 0,
//               transform: inView ? 'none' : 'translateX(20px)',
//               transition: 'all 0.8s ease 0.2s',
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 gap: 0,
//                 marginBottom: 20,
//                 border: '1px solid rgba(0,0,0,0.12)',
//               }}
//             >
//               {['UK', 'EU', 'US', 'CM'].map((u) => (
//                 <button
//                   key={u}
//                   onClick={() => setUnit(u)}
//                   style={{
//                     flex: 1,
//                     padding: '10px 0',
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 13,
//                     letterSpacing: '0.15em',
//                     background: unit === u ? DARK : 'transparent',
//                     color: unit === u ? '#fff' : MUTED,
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s',
//                   }}
//                 >
//                   {u}
//                 </button>
//               ))}
//             </div>
//             <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
//               {sizes.map((s, i) => (
//                 <div
//                   key={s.uk}
//                   style={{
//                     display: 'grid',
//                     gridTemplateColumns: '1fr 1fr 1fr 1fr',
//                     padding: '13px 16px',
//                     background:
//                       i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent',
//                     borderBottom:
//                       i < sizes.length - 1
//                         ? '1px solid rgba(0,0,0,0.06)'
//                         : 'none',
//                   }}
//                 >
//                   {['UK', 'EU', 'US', 'CM'].map((col) => (
//                     <div
//                       key={col}
//                       style={{
//                         fontFamily:
//                           col === unit
//                             ? "'Playfair Display', serif"
//                             : "'Cormorant Garamond', serif",
//                         fontWeight: col === unit ? 700 : 400,
//                         fontSize: col === unit ? 15 : 13,
//                         color: col === unit ? DARK : MUTED,
//                         textAlign: 'center',
//                       }}
//                     >
//                       {col === 'UK'
//                         ? s.uk
//                         : col === 'EU'
//                           ? s.eu
//                           : col === 'US'
//                             ? s.us
//                             : s.cm}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr 1fr 1fr',
//                 padding: '10px 16px',
//                 background: DARK,
//               }}
//             >
//               {['UK', 'EU', 'US', 'CM'].map((col) => (
//                 <div
//                   key={col}
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 10,
//                     letterSpacing: '0.2em',
//                     color: col === unit ? ACCENT : 'rgba(255,255,255,0.3)',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {col}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── BANNER ─── */
// function Banner() {
//   const [ref, inView] = useInView();
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   return (
//     <section
//       ref={ref}
//       style={{
//         background: ACCENT,
//         padding: `60px ${isMobile ? '24px' : 'clamp(20px,6vw,80px)'}`,
//         textAlign: 'center',
//       }}
//     >
//       <div
//         style={{
//           opacity: inView ? 1 : 0,
//           transform: inView ? 'none' : 'translateY(20px)',
//           transition: 'all 0.7s ease',
//         }}
//       >
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 12,
//             letterSpacing: '0.4em',
//             color: 'rgba(255,255,255,0.7)',
//             marginBottom: 18,
//           }}
//         >
//           BESPOKE SERVICE
//         </div>
//         <h2
//           style={{
//             fontFamily: "'Playfair Display', serif",
//             fontWeight: 900,
//             fontSize: isMobile ? '26px' : 'clamp(28px,3.5vw,48px)',
//             color: '#fff',
//             marginBottom: 16,
//             lineHeight: 1.2,
//           }}
//         >
//           Your Foot. Your Last. Your Legacy.
//         </h2>
//         <p
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: isMobile ? 16 : 18,
//             color: 'rgba(255,255,255,0.8)',
//             marginBottom: 32,
//             maxWidth: 480,
//             margin: '0 auto 32px',
//           }}
//         >
//           Commission a pair built exclusively to your measurements, style, and
//           leather choice.
//         </p>
//         <a
//           href="#"
//           style={{
//             background: '#fff',
//             color: ACCENT,
//             padding: isMobile ? '12px 32px' : '14px 40px',
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 14,
//             letterSpacing: '0.2em',
//             textDecoration: 'none',
//             transition: 'all 0.25s',
//             display: 'inline-block',
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = DARK;
//             e.target.style.color = '#fff';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = '#fff';
//             e.target.style.color = ACCENT;
//           }}
//         >
//           BEGIN YOUR ORDER
//         </a>
//       </div>
//     </section>
//   );
// }

// /* ─── NEWSLETTER ─── */
// function Newsletter() {
//   const [ref, inView] = useInView();
//   const [email, setEmail] = useState('');
//   const [sent, setSent] = useState(false);
//   const { width } = useWindowSize();
//   const isMobile = width < 768;

//   return (
//     <section
//       ref={ref}
//       style={{
//         background: DARK,
//         padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           left: '50%',
//           top: '50%',
//           transform: 'translate(-50%,-50%)',
//           width: 500,
//           height: 500,
//           background: `radial-gradient(circle, ${ACCENT}0d 0%, transparent 70%)`,
//           pointerEvents: 'none',
//         }}
//       />
//       <div
//         style={{
//           maxWidth: 640,
//           margin: '0 auto',
//           textAlign: 'center',
//           position: 'relative',
//           opacity: inView ? 1 : 0,
//           transform: inView ? 'none' : 'translateY(24px)',
//           transition: 'all 0.8s ease',
//         }}
//       >
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 12,
//             letterSpacing: '0.4em',
//             color: ACCENT,
//             marginBottom: 18,
//           }}
//         >
//           STAY INFORMED
//         </div>
//         <h2
//           style={{
//             fontFamily: "'Playfair Display', serif",
//             fontWeight: 900,
//             fontSize: isMobile ? '26px' : 'clamp(28px,3.5vw,46px)',
//             color: '#fff',
//             lineHeight: 1.15,
//             marginBottom: 18,
//           }}
//         >
//           The Amadeo
//           <br />
//           <em style={{ fontStyle: 'italic', color: GOLD }}>Correspondence</em>
//         </h2>
//         <p
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: isMobile ? 16 : 18,
//             lineHeight: 1.7,
//             color: 'rgba(255,255,255,0.5)',
//             marginBottom: 36,
//           }}
//         >
//           Quarterly dispatches on new leathers, limited editions, care guides,
//           and the rare art of dressing well.
//         </p>
//         {!sent ? (
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: isMobile ? 'column' : 'row',
//               gap: isMobile ? 0 : 0,
//               maxWidth: 480,
//               margin: '0 auto',
//             }}
//           >
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email address"
//               style={{
//                 flex: 1,
//                 background: 'rgba(255,255,255,0.05)',
//                 border: '1px solid rgba(255,255,255,0.12)',
//                 borderRight: isMobile
//                   ? '1px solid rgba(255,255,255,0.12)'
//                   : 'none',
//                 borderBottom: isMobile
//                   ? 'none'
//                   : '1px solid rgba(255,255,255,0.12)',
//                 color: '#fff',
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 16,
//                 padding: '14px 20px',
//                 outline: 'none',
//                 width: '100%',
//               }}
//             />
//             <button
//               onClick={() => email && setSent(true)}
//               style={{
//                 background: ACCENT,
//                 color: '#fff',
//                 border: 'none',
//                 padding: '14px 28px',
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 13,
//                 letterSpacing: '0.2em',
//                 cursor: 'pointer',
//                 transition: 'background 0.2s',
//                 whiteSpace: 'nowrap',
//               }}
//               onMouseEnter={(e) => (e.target.style.background = '#a82230')}
//               onMouseLeave={(e) => (e.target.style.background = ACCENT)}
//             >
//               SUBSCRIBE
//             </button>
//           </div>
//         ) : (
//           <div
//             style={{
//               background: 'rgba(255,255,255,0.04)',
//               border: '1px solid rgba(206,45,61,0.3)',
//               padding: '20px 28px',
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 17,
//               color: 'rgba(255,255,255,0.7)',
//             }}
//           >
//             Welcome to the correspondence. Your first letter will arrive
//             shortly.
//           </div>
//         )}
//         <div
//           style={{
//             display: 'flex',
//             gap: isMobile ? 16 : 32,
//             justifyContent: 'center',
//             marginTop: 40,
//             flexWrap: 'wrap',
//           }}
//         >
//           {['No spam, ever', 'Quarterly only', 'Unsubscribe freely'].map(
//             (t) => (
//               <div
//                 key={t}
//                 style={{ display: 'flex', alignItems: 'center', gap: 8 }}
//               >
//                 <div
//                   style={{
//                     width: 4,
//                     height: 4,
//                     background: ACCENT,
//                     borderRadius: '50%',
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 13,
//                     color: 'rgba(255,255,255,0.35)',
//                     letterSpacing: '0.1em',
//                   }}
//                 >
//                   {t}
//                 </span>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── FOOTER ─── */
// function Footer() {
//   const { width } = useWindowSize();
//   const isMobile = width < 768;
//   const isTablet = width >= 768 && width < 1024;

//   return (
//     <footer
//       style={{
//         background: '#100C0B',
//         padding: `48px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'} 32px`,
//       }}
//     >
//       <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile
//               ? '1fr 1fr'
//               : isTablet
//                 ? '1fr 1fr 1fr'
//                 : '2fr 1fr 1fr 1fr',
//             gap: isMobile ? 32 : 48,
//             marginBottom: 48,
//           }}
//         >
//           <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 marginBottom: 16,
//               }}
//             >
//               <svg width="18" height="18" viewBox="0 0 22 22">
//                 <circle
//                   cx="11"
//                   cy="11"
//                   r="10"
//                   fill="none"
//                   stroke={ACCENT}
//                   strokeWidth="1.5"
//                 />
//                 <path
//                   d="M6 13 Q11 7 16 13"
//                   stroke={ACCENT}
//                   strokeWidth="1.5"
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//                 <circle cx="11" cy="13" r="1.5" fill={ACCENT} />
//               </svg>
//               <span
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontWeight: 700,
//                   letterSpacing: '0.2em',
//                   fontSize: 13,
//                   color: '#fff',
//                 }}
//               >
//                 Amadeo
//               </span>
//             </div>
//             <p
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 14,
//                 color: 'rgba(255,255,255,0.35)',
//                 lineHeight: 1.7,
//                 maxWidth: isMobile ? '100%' : 240,
//               }}
//             >
//               Handcrafted leather footwear since 1993. Built to outlast trends —
//               and time.
//             </p>
//             <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
//               {['IG', 'FB', 'TW', 'PT'].map((s) => (
//                 <div
//                   key={s}
//                   style={{
//                     width: 32,
//                     height: 32,
//                     border: '1px solid rgba(255,255,255,0.1)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     cursor: 'pointer',
//                     transition: 'border-color 0.2s',
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.borderColor = ACCENT)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.borderColor =
//                       'rgba(255,255,255,0.1)')
//                   }
//                 >
//                   <span
//                     style={{
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: 9,
//                       letterSpacing: '0.1em',
//                       color: 'rgba(255,255,255,0.4)',
//                     }}
//                   >
//                     {s}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {[
//             [
//               'Collection',
//               ['Oxford', 'Derby', 'Loafer', 'Bespoke', 'New Arrivals'],
//             ],
//             [
//               'Company',
//               ['Our Story', 'Heritage', 'Craftsmen', 'Sustainability', 'Press'],
//             ],
//             [
//               'Support',
//               [
//                 'Sizing Guide',
//                 'Care & Repair',
//                 'Returns',
//                 'Shipping',
//                 'Contact',
//               ],
//             ],
//           ].map(([title, links]) => (
//             <div key={title}>
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontWeight: 700,
//                   fontSize: 13,
//                   color: '#fff',
//                   letterSpacing: '0.1em',
//                   marginBottom: 16,
//                 }}
//               >
//                 {title}
//               </div>
//               {links.map((l) => (
//                 <a
//                   key={l}
//                   href="#"
//                   style={{
//                     display: 'block',
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: 13,
//                     color: 'rgba(255,255,255,0.35)',
//                     textDecoration: 'none',
//                     marginBottom: 9,
//                     transition: 'color 0.2s',
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = '#fff')}
//                   onMouseLeave={(e) =>
//                     (e.target.style.color = 'rgba(255,255,255,0.35)')
//                   }
//                 >
//                   {l}
//                 </a>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div
//           style={{
//             borderTop: '1px solid rgba(255,255,255,0.07)',
//             paddingTop: 24,
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flexDirection: isMobile ? 'column' : 'row',
//             gap: isMobile ? 10 : 0,
//             textAlign: isMobile ? 'center' : 'left',
//           }}
//         >
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 12,
//               color: 'rgba(255,255,255,0.25)',
//               letterSpacing: '0.05em',
//             }}
//           >
//             © 2026 Amadeo Co. All rights reserved.
//           </div>
//           <div
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 11,
//               color: 'rgba(255,255,255,0.25)',
//               letterSpacing: '0.15em',
//             }}
//           >
//             LONDON · MILAN · NEW YORK · FLORENCE
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ─── ROOT ─── */
// export default function App() {
//   return (
//     <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//       <GlobalStyles />
//       <Nav />
//       <Hero />
//       <PressMarquee />
//       <Collection />
//       <Heritage />
//       <Materials />
//       <Craft />
//       <Lookbook />
//       <Testimonials />
//       <SizeGuide />
//       <Banner />
//       <Newsletter />
//       <Footer />
//     </div>
//   );
// }
'use client';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Image from 'next/image';

const BRAND = 'Amadeo';
const ACCENT = '#CE2D3D';
const DARK = '#1A1210';
const WARM = '#F5F0EB';
const MUTED = '#8C7B6B';
const GOLD = '#B8965A';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  tag: string;
  desc: string;
  colors: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface Step {
  num: string;
  label: string;
  desc: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  desc: string;
}

interface Leather {
  name: string;
  origin: string;
  tone: string;
  desc: string;
  care: string;
}

interface LookbookItem {
  label: string;
  subtitle: string;
  accent: string;
  h: number;
  shoeColor: string;
  bg: string;
}

interface PressItem {
  pub: string;
  quote: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'The Oxford',
    subtitle: 'Cap Toe Classic',
    price: '$485',
    tag: 'Bestseller',
    desc: 'Full-grain calfskin, double-leather sole, hand-burnished finish.',
    colors: ['#2C1810', '#1A1A2E', '#4A3728'],
  },
  {
    id: 2,
    name: 'The Derby',
    subtitle: 'Open Lacing',
    price: '$420',
    tag: 'New',
    desc: 'Supple pebbled leather upper, Goodyear-welted construction.',
    colors: ['#3D2B1F', '#5C4033', '#1C1C1C'],
  },
  {
    id: 3,
    name: 'The Loafer',
    subtitle: 'Horsebit Detail',
    price: '$395',
    tag: 'Limited',
    desc: 'Smooth calfskin, leather lining, hand-stitched moccasin toe.',
    colors: ['#4A2C1A', '#2C2C2C', '#6B4C35'],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'These shoes have outlasted three suits. The craftsmanship is extraordinary.',
    author: 'James R.',
    title: 'Architect, London',
  },
  {
    quote: 'I wear them to every important meeting. They speak before I do.',
    author: 'Marcus T.',
    title: 'Partner, New York',
  },
  {
    quote: 'Worth every penny — and they only get better with age.',
    author: 'David L.',
    title: 'Editor, Milan',
  },
];

const steps: Step[] = [
  {
    num: '01',
    label: 'Last Selection',
    desc: 'Choose your last shape — from sleek to generous.',
  },
  {
    num: '02',
    label: 'Leather Choice',
    desc: 'Select from our curated hides, sourced worldwide.',
  },
  {
    num: '03',
    label: 'Hand Crafting',
    desc: 'Our artisans spend 40+ hours on each pair.',
  },
  {
    num: '04',
    label: 'Delivery',
    desc: 'Shipped in a bespoke wooden box to your door.',
  },
];

const timeline: TimelineEntry[] = [
  {
    year: '1923',
    title: 'Founded in Florence',
    desc: 'Giuseppe Amadeo opens a modest workshop on Via dei Calzaiuoli, hand-lasting his first dozen pairs.',
  },
  {
    year: '1951',
    title: 'Royal Appointment',
    desc: 'Granted a warrant of appointment to the House of Savoy. The Oxford becomes a symbol of Italian statecraft.',
  },
  {
    year: '1974',
    title: 'London Atelier',
    desc: 'The second workshop opens on Jermyn Street, marrying Italian form with British precision.',
  },
  {
    year: '2003',
    title: 'New York Flagship',
    desc: "The Madison Avenue boutique brings Amadeo's century of heritage to the Americas.",
  },
  {
    year: '2026',
    title: 'Still Handmade',
    desc: 'Every pair still passes through a single pair of hands. Some things should never change.',
  },
];

const leathers: Leather[] = [
  {
    name: 'Full-Grain Calfskin',
    origin: 'Tuscany, Italy',
    tone: '#6B4226',
    desc: 'The pinnacle of smooth leather. Tight grain, supple hand, ages to a rich patina over decades.',
    care: 'Cedar shoe tree · Cream polish monthly · Brush after every wear',
  },
  {
    name: 'Shell Amadeo',
    origin: 'Chicago, USA',
    tone: '#3D1F0F',
    desc: "Cut from the fibrous flat muscle beneath a horse's hide. Non-porous, virtually creaseproof, deeply lustrous.",
    care: 'Renovateur conditioner · No water · Bone burnish annually',
  },
  {
    name: 'Scotch Grain',
    origin: 'Northamptonshire, UK',
    tone: '#4A3020',
    desc: 'Pebbled surface embossed under heat and pressure. Forgiving, characterful, and undeniably British.',
    care: 'Wax polish weekly · Brush vigorously · Waterproof spray seasonally',
  },
  {
    name: 'Suede Reverse Calf',
    origin: 'Córdoba, Spain',
    tone: '#8C6040',
    desc: 'Velvet-nap reverse side of calfskin. Casual refinement — the secret weapon of the well-dressed.',
    care: 'Suede brush daily · Rubber eraser for scuffs · Waterproof before first wear',
  },
];

const lookbookItems: LookbookItem[] = [
  {
    label: 'The Business Hour',
    subtitle: 'Oxford + charcoal flannel',
    accent: ACCENT,
    h: 320,
    shoeColor: '#2C1810',
    bg: '#1E1410',
  },
  {
    label: 'The Weekend Edit',
    subtitle: 'Derby + selvedge denim',
    accent: GOLD,
    h: 220,
    shoeColor: '#5C3A28',
    bg: '#2A1F18',
  },
  {
    label: 'The Grand Affair',
    subtitle: 'Oxford + black tie',
    accent: '#C0B090',
    h: 220,
    shoeColor: '#1A0F0A',
    bg: '#0F0A08',
  },
  {
    label: 'The Italian Sunday',
    subtitle: 'Loafer + linen',
    accent: GOLD,
    h: 320,
    shoeColor: '#6B4A30',
    bg: '#261A10',
  },
];

const press: PressItem[] = [
  { pub: 'Financial Times', quote: 'The last shoemaker that still means it.' },
  { pub: 'GQ', quote: 'A masterclass in restraint.' },
  {
    pub: 'Monocle',
    quote: 'Amadeo endures precisely because it refuses to hurry.',
  },
  { pub: 'Esquire', quote: 'Buy once, wear forever.' },
];

function useInView(
  threshold = 0.1,
): [MutableRefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useWindowSize(): { width: number } {
  const [size, setSize] = useState<{ width: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });
  useEffect(() => {
    const h = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return size;
}

interface ShoeIllustrationProps {
  color?: string;
  style?: React.CSSProperties;
}

function ShoeIllustration({
  color = '#2C1810',
  style = {},
}: ShoeIllustrationProps) {
  const id = `sg${color.replace('#', '')}`;
  return (
    <svg
      viewBox="0 0 340 180"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 340, ...style }}
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        <filter id={`shd${id}`} x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="10"
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>
      </defs>
      <ellipse cx="170" cy="162" rx="130" ry="10" fill="#111" opacity="0.18" />
      <rect
        x="52"
        y="128"
        width="32"
        height="22"
        rx="4"
        fill={color}
        style={{ filter: 'brightness(0.6)' }}
      />
      <path
        d="M84 148 Q60 148 55 132 Q50 116 62 108 Q74 100 90 100 L180 96 Q220 94 250 102 Q278 110 284 124 Q290 138 270 146 Q240 152 200 152 Z"
        fill={`url(#${id})`}
        filter={`url(#shd${id})`}
      />
      <path
        d="M210 100 Q250 98 274 112 Q292 122 286 134 Q280 144 258 148 Q236 152 208 152 L208 100 Z"
        fill={color}
        style={{ filter: 'brightness(0.78)' }}
        opacity="0.9"
      />
      <path
        d="M210 100 L208 152"
        stroke="#000"
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        d="M100 100 Q110 88 130 82 Q150 76 170 78 Q192 80 200 96 L180 96 Q164 86 148 86 Q132 86 118 96 Z"
        fill={color}
        style={{ filter: 'brightness(0.85)' }}
      />
      {[90, 104, 118, 132, 146].map((y, i) => (
        <line
          key={i}
          x1="118"
          y1={y - 6}
          x2="178"
          y2={y - 8}
          stroke="#E8DDD0"
          strokeWidth="1.2"
          opacity="0.55"
          strokeDasharray={i % 2 === 0 ? 'none' : '3 2'}
        />
      ))}
      <ellipse
        cx="195"
        cy="112"
        rx="38"
        ry="10"
        fill="#fff"
        opacity="0.07"
        transform="rotate(-10 195 112)"
      />
      <path
        d="M84 148 Q170 155 270 146"
        stroke="#000"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

/* ─── GLOBAL STYLES ─── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: ${DARK}; overflow-x: hidden; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
    .marquee-track:hover { animation-play-state: paused; }
    input::placeholder { color: rgba(255,255,255,0.3); }
    input:focus { outline: none; border-color: rgba(206,45,61,0.5) !important; }
    a, button { -webkit-tap-highlight-color: transparent; }
  `}</style>
);

/* ─── NAV ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background:
            scrolled || menuOpen ? 'rgba(26,18,16,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          transition: 'background 0.4s, box-shadow 0.4s',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
          padding: `0 ${isMobile ? '20px' : 'clamp(20px,5vw,60px)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isMobile ? 60 : 68,
        }}
      >
        {/* Logo */}
        <div style={{ position: 'relative', width: '100px', height: '40px' }}>
          <Image
            src="/AMADEO_LOGO.png"
            alt="Amadeo handcrafted shoe"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 32 }}>
            {['Collection', 'Heritage', 'Materials', 'Craft', 'Lookbook'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  }}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {!isMobile && (
            <a
              href="#"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                letterSpacing: '0.18em',
                color: ACCENT,
                textDecoration: 'none',
                border: `1px solid ${ACCENT}`,
                padding: '6px 18px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = ACCENT;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = ACCENT;
              }}
            >
              ORDER
            </a>
          )}
          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                alignItems: 'flex-end',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#fff',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 16,
                  height: 2,
                  background: '#fff',
                  transition: 'all 0.3s',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#fff',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                }}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 60,
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'rgba(26,18,16,0.98)',
            backdropFilter: 'blur(16px)',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: menuOpen ? 1 : 0,
            transition: 'transform 0.4s ease, opacity 0.3s ease',
            padding: '24px 24px 32px',
            borderBottom: `1px solid rgba(206,45,61,0.2)`,
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
        >
          {['Collection', 'Heritage', 'Materials', 'Craft', 'Lookbook'].map(
            (item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  letterSpacing: '0.05em',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `transform 0.4s ease ${i * 0.05}s, opacity 0.4s ease ${i * 0.05}s`,
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {item}
              </a>
            ),
          )}
          <a
            href="#"
            style={{
              display: 'inline-block',
              marginTop: 24,
              background: ACCENT,
              color: '#fff',
              padding: '12px 32px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 14,
              letterSpacing: '0.2em',
              textDecoration: 'none',
            }}
          >
            ORDER NOW
          </a>
        </div>
      )}
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        background: DARK,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: isMobile ? 60 : 68,
      }}
    >
      {/* Noise */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          right: isMobile ? '-20%' : '8%',
          top: '20%',
          width: isMobile ? 300 : 520,
          height: isMobile ? 300 : 520,
          background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Side text — hidden on mobile */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            left: 32,
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 11,
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.25)',
            whiteSpace: 'nowrap',
          }}
        >
          EST. 1923 — HANDCRAFTED LEATHER
        </div>
      )}

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '40px 24px 60px' : '0 clamp(20px,6vw,80px)',
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
              ? '1fr 1fr'
              : '1fr 1fr',
          gap: isMobile ? 32 : 40,
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Text */}
        <div style={{ order: isMobile ? 2 : 1 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: '0.4em',
              color: ACCENT,
              marginBottom: 20,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(12px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            THE ART OF THE SHOE
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: isMobile ? '48px' : 'clamp(48px,6vw,88px)',
              lineHeight: 1.0,
              color: '#fff',
              margin: '0 0 24px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            Crafted for
            <br />
            <span style={{ color: ACCENT }}>Generations</span>
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 17 : 20,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 420,
              margin: '0 0 36px',
              opacity: loaded ? 1 : 0,
              transition: 'all 0.8s ease 0.35s',
            }}
          >
            Each pair is a hundred years of tradition distilled into leather,
            thread, and sole.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transition: 'all 0.8s ease 0.5s',
            }}
          >
            <a
              href="#collection"
              style={{
                background: ACCENT,
                color: '#fff',
                padding: isMobile ? '12px 28px' : '14px 36px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.background = '#a82230')
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.background = ACCENT)
              }
            >
              SHOP COLLECTION
            </a>
            <a
              href="#craft"
              style={{
                color: 'rgba(255,255,255,0.6)',
                padding: '12px 16px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                letterSpacing: '0.15em',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = '#fff')
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
              }
            >
              Our Craft <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              gap: isMobile ? 24 : 40,
              marginTop: isMobile ? 40 : 60,
              opacity: loaded ? 1 : 0,
              transition: 'all 0.9s ease 0.65s',
              flexWrap: 'wrap',
            }}
          >
            {[
              ['40+', 'Hours per pair'],
              ['100%', 'Full-grain leather'],
              ['Life', 'time guarantee'],
            ].map(([val, lab]) => (
              <div key={val}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isMobile ? 22 : 26,
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    color: MUTED,
                    letterSpacing: '0.1em',
                    marginTop: 2,
                  }}
                >
                  {lab}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shoe */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded
              ? 'none'
              : isMobile
                ? 'translateY(20px)'
                : 'translateX(30px)',
            transition: 'all 1s ease 0.3s',
            position: 'relative',
            order: isMobile ? 1 : 2,
          }}
        >
          {!isMobile && (
            <>
              <div
                style={{
                  position: 'absolute',
                  width: 360,
                  height: 360,
                  border: `1px solid rgba(206,45,61,0.15)`,
                  borderRadius: '50%',
                  animation: 'spin 18s linear infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: 280,
                  height: 280,
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderRadius: '50%',
                  animation: 'spin 12s linear infinite reverse',
                }}
              />
            </>
          )}
          <div
            style={{
              position: 'relative',
              padding: isMobile ? 0 : 20,
              maxWidth: isMobile ? 280 : 380,
              width: '100%',
            }}
          >
            <div
              style={{ position: 'relative', width: '300px', height: '400px' }}
            >
              <Image
                src="/IMG_3290.png"
                alt="Amadeo handcrafted shoe"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(206,45,61,0.3), transparent)',
        }}
      />
    </section>
  );
}

/* ─── PRESS MARQUEE ─── */
function PressMarquee() {
  const items = [...press, ...press];
  return (
    <div
      style={{
        background: '#100C0B',
        borderTop: `1px solid rgba(206,45,61,0.2)`,
        borderBottom: `1px solid rgba(206,45,61,0.2)`,
        padding: '16px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-track">
        {items.map((p, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              paddingRight: 48,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.25em',
                color: ACCENT,
              }}
            >
              {p.pub}
            </span>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              &ldquo;{p.quote}&rdquo;
            </span>
            <span style={{ color: `${ACCENT}40`, fontSize: 18 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── COLLECTION ─── */
function Collection() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState<Record<number, boolean>>({});
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  return (
    <section
      id="collection"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: WARM,
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: '0.4em',
              color: ACCENT,
              marginBottom: 14,
              opacity: inView ? 1 : 0,
              transition: 'all 0.6s ease',
            }}
          >
            SS 2026 COLLECTION
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
              color: DARK,
              lineHeight: 1.1,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            The Classic Triad
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : isTablet
                ? '1fr 1fr'
                : 'repeat(3,1fr)',
            gap: isMobile ? 28 : 32,
          }}
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `all 0.7s ease ${0.15 + i * 0.12}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setActive((a) => ({ ...a, [p.id]: true }))}
              onMouseLeave={() => setActive((a) => ({ ...a, [p.id]: false }))}
            >
              <div
                style={{
                  background: active[p.id] ? DARK : '#EDE8E2',
                  transition: 'all 0.4s ease',
                  padding: '36px 28px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {p.tag && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: ACCENT,
                      color: '#fff',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      padding: '3px 10px',
                    }}
                  >
                    {p.tag}
                  </div>
                )}
                <div style={{ marginBottom: 8 }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '300px',
                      height: '400px',
                    }}
                  >
                    <Image
                      src="/IMG_3280-.png"
                      alt="Amadeo handcrafted shoe"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
                <div
                  style={{ display: 'flex', gap: 8, justifyContent: 'center' }}
                >
                  {p.colors.map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: c,
                        border: `2px solid ${active[p.id] ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                        transition: 'border 0.4s',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ padding: '20px 0 0' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: DARK,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13,
                        letterSpacing: '0.15em',
                        color: MUTED,
                        marginTop: 2,
                      }}
                    >
                      {p.subtitle}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: ACCENT,
                    }}
                  >
                    {p.price}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 15,
                    color: MUTED,
                    marginTop: 10,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 18,
                    borderTop: `1px solid rgba(0,0,0,0.08)`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                >
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      letterSpacing: '0.2em',
                      color: DARK,
                      textDecoration: 'none',
                    }}
                  >
                    VIEW DETAILS →
                  </a>
                  <a
                    href="#"
                    style={{
                      background: DARK,
                      color: '#fff',
                      padding: '8px 18px',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 12,
                      letterSpacing: '0.15em',
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.background = ACCENT)
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.background = DARK)
                    }
                  >
                    ADD TO BAG
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HERITAGE ─── */
function Heritage() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="heritage"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: DARK,
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: '5%',
          width: 400,
          height: 400,
          background: `radial-gradient(circle, ${GOLD}0a 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: '0.4em',
              color: ACCENT,
              marginBottom: 14,
              opacity: inView ? 1 : 0,
              transition: 'all 0.6s',
            }}
          >
            A CENTURY OF CRAFT
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
              color: '#fff',
              lineHeight: 1.1,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            Our Heritage
          </h2>
        </div>

        {/* Timeline tabs — scrollable on mobile */}
        <div
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            marginBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            scrollbarWidth: 'none',
          }}
        >
          <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
            {timeline.map((t, i) => (
              <button
                key={t.year}
                onClick={() => setActive(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: `12px ${isMobile ? '20px' : '28px'}`,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: 700,
                  color: active === i ? '#fff' : 'rgba(255,255,255,0.3)',
                  borderBottom:
                    active === i
                      ? `2px solid ${ACCENT}`
                      : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'all 0.25s',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.year}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 40 : 80,
            alignItems: 'center',
            opacity: inView ? 1 : 0,
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 12,
                letterSpacing: '0.3em',
                color: GOLD,
                marginBottom: 14,
              }}
            >
              {timeline[active].year}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? '26px' : 'clamp(26px,3vw,40px)',
                color: '#fff',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {timeline[active].title}
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 17 : 19,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 480,
              }}
            >
              {timeline[active].desc}
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 36 }}>
              {timeline.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 32 : 8,
                    height: 3,
                    background: i === active ? ACCENT : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: isMobile ? '32px 24px' : '52px 40px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -1,
                  left: 40,
                  width: 60,
                  height: 2,
                  background: GOLD,
                }}
              />
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? '60px' : 'clamp(72px,10vw,120px)',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  textAlign: 'center',
                  letterSpacing: '-0.02em',
                }}
              >
                {timeline[active].year}
              </div>
              <div
                style={{
                  marginTop: -20,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                }}
              >
                {[
                  ['Florence', 'Origin'],
                  ['Goodyear', 'Welt method'],
                  ['Single', 'Cobbler per pair'],
                  ['40+', 'Hour build time'],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '14px 16px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 15,
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      {a}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 12,
                        color: MUTED,
                        letterSpacing: '0.1em',
                        marginTop: 2,
                      }}
                    >
                      {b}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MATERIALS ─── */
function Materials() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="materials"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: '#F0EAE3',
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: '0.4em',
              color: ACCENT,
              marginBottom: 14,
              opacity: inView ? 1 : 0,
              transition: 'all 0.6s',
            }}
          >
            SOURCE & SUBSTANCE
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'flex-end',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 12 : 0,
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? '32px' : 'clamp(32px,4vw,56px)',
                color: DARK,
                lineHeight: 1.1,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: 'all 0.7s ease 0.1s',
              }}
            >
              Our Leathers
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16,
                color: MUTED,
                maxWidth: isMobile ? '100%' : 340,
                lineHeight: 1.6,
                opacity: inView ? 1 : 0,
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              Each hide is chosen by hand for its grain, temper, and potential
              to age magnificently.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 4 : 40,
            opacity: inView ? 1 : 0,
            transition: 'all 0.8s ease 0.3s',
          }}
        >
          {/* Selector */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              gap: 2,
              overflowX: isMobile ? 'auto' : 'visible',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              marginBottom: isMobile ? 4 : 0,
            }}
          >
            {leathers.map((l, i) => (
              <div
                key={l.name}
                onClick={() => setActive(i)}
                style={{
                  padding: isMobile ? '14px 16px' : '22px 24px',
                  cursor: 'pointer',
                  background: active === i ? DARK : 'transparent',
                  borderLeft:
                    !isMobile && active === i
                      ? `3px solid ${ACCENT}`
                      : !isMobile
                        ? '3px solid transparent'
                        : 'none',
                  borderBottom:
                    isMobile && active === i
                      ? `2px solid ${ACCENT}`
                      : isMobile
                        ? '2px solid transparent'
                        : 'none',
                  transition: 'all 0.3s',
                  flexShrink: isMobile ? 0 : 1,
                  minWidth: isMobile ? 'max-content' : 'auto',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: isMobile ? 20 : 28,
                      height: isMobile ? 20 : 28,
                      borderRadius: '50%',
                      background: l.tone,
                      flexShrink: 0,
                      boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.3)',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: isMobile ? 14 : 16,
                        color: active === i ? '#fff' : DARK,
                        whiteSpace: isMobile ? 'nowrap' : 'normal',
                      }}
                    >
                      {l.name}
                    </div>
                    {!isMobile && (
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          letterSpacing: '0.2em',
                          color: active === i ? MUTED : '#A09080',
                          marginTop: 2,
                        }}
                      >
                        {l.origin}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail */}
          <div
            style={{
              background: DARK,
              padding: isMobile ? '32px 24px' : '48px 44px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
              }}
            />
            <div
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'center',
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: isMobile ? 44 : 56,
                  height: isMobile ? 44 : 56,
                  borderRadius: '50%',
                  background: leathers[active].tone,
                  boxShadow:
                    '0 8px 24px rgba(0,0,0,0.4), inset 0 -6px 12px rgba(0,0,0,0.3)',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: isMobile ? 18 : 22,
                    color: '#fff',
                  }}
                >
                  {leathers[active].name}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    letterSpacing: '0.2em',
                    color: ACCENT,
                    marginTop: 2,
                  }}
                >
                  {leathers[active].origin}
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: 28,
              }}
            >
              {leathers[active].desc}
            </p>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 11,
                  color: ACCENT,
                  letterSpacing: '0.3em',
                  marginBottom: 10,
                }}
              >
                CARE INSTRUCTIONS
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.7,
                }}
              >
                {leathers[active].care}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CRAFT ─── */
function Craft() {
  const [ref, inView] = useInView();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="craft"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: DARK,
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-5%',
          top: '10%',
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${ACCENT}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 48 : 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 12,
                letterSpacing: '0.4em',
                color: ACCENT,
                marginBottom: 14,
                opacity: inView ? 1 : 0,
                transition: 'all 0.6s',
              }}
            >
              THE AMADEO METHOD
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? '30px' : 'clamp(30px,4vw,52px)',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 22,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: 'all 0.7s ease 0.1s',
              }}
            >
              Made by Hand.
              <br />
              <em style={{ fontStyle: 'italic', color: GOLD }}>
                Worn for Life.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 36,
                opacity: inView ? 1 : 0,
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              Every pair passes through the hands of a single master cobbler —
              from pattern cutting to final polish. No conveyor belts. No
              shortcuts.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: isMobile ? 20 : 28,
              }}
            >
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'none' : 'translateY(16px)',
                    transition: `all 0.7s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 11,
                      color: ACCENT,
                      letterSpacing: '0.25em',
                      marginBottom: 5,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#fff',
                      marginBottom: 5,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.5,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateX(30px)',
                transition: 'all 0.9s ease 0.2s',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '52px 40px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -1,
                    left: 40,
                    width: 60,
                    height: 2,
                    background: ACCENT,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: '400px',
                    height: '500px',
                  }}
                >
                  <Image
                    src="/IMG_3290.png"
                    alt="Amadeo handcrafted shoe"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: 28,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 20,
                    textAlign: 'center',
                  }}
                >
                  {[
                    ['Goodyear', 'Welt'],
                    ['Full-Grain', 'Leather'],
                    ['Hand', 'Burnished'],
                  ].map(([a, b]) => (
                    <div key={a}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 13,
                          color: '#fff',
                          fontWeight: 700,
                        }}
                      >
                        {a}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          color: MUTED,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {b}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile shoe */}
          {isMobile && (
            <div
              style={{
                opacity: inView ? 1 : 0,
                transition: 'all 0.9s ease 0.3s',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '28px 24px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -1,
                    left: 30,
                    width: 48,
                    height: 2,
                    background: ACCENT,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: '300px',
                    height: '500px',
                  }}
                >
                  <Image
                    src="/IMG_3290.png"
                    alt="Amadeo handcrafted shoe"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: 20,
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                  }}
                >
                  {[
                    ['Goodyear', 'Welt'],
                    ['Full-Grain', 'Leather'],
                    ['Hand', 'Burnished'],
                  ].map(([a, b]) => (
                    <div key={a}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 12,
                          color: '#fff',
                          fontWeight: 700,
                        }}
                      >
                        {a}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          color: MUTED,
                          letterSpacing: '0.08em',
                        }}
                      >
                        {b}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── LOOKBOOK ─── */
function Lookbook() {
  const [ref, inView] = useInView();
  const { width } = useWindowSize();
  const isMobile = width < 640;

  return (
    <section
      id="lookbook"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: '#0E0A09',
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 12,
                letterSpacing: '0.4em',
                color: ACCENT,
                marginBottom: 14,
                opacity: inView ? 1 : 0,
                transition: 'all 0.6s',
              }}
            >
              EDITORIAL
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? '28px' : 'clamp(32px,4vw,52px)',
                color: '#fff',
                lineHeight: 1.1,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: 'all 0.7s ease 0.1s',
              }}
            >
              The Lookbook
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              opacity: inView ? 1 : 0,
              transition: 'all 0.7s 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
              (e.currentTarget.style.color = '#fff')
            }
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
              (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')
            }
          >
            VIEW ALL →
          </a>
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {lookbookItems.map((item, i) => (
              <LookbookCard
                key={item.label}
                item={{ ...item, h: 200 }}
                i={i}
                inView={inView}
              />
            ))}
          </div>
        ) : (
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {lookbookItems.slice(0, 2).map((item, i) => (
                <LookbookCard
                  key={item.label}
                  item={item}
                  i={i}
                  inView={inView}
                />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {lookbookItems.slice(2).map((item, i) => (
                <LookbookCard
                  key={item.label}
                  item={item}
                  i={i + 2}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface LookbookCardProps {
  item: LookbookItem;
  i: number;
  inView: boolean;
}

function LookbookCard({ item, i, inView }: LookbookCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        height: item.h,
        background: item.bg,
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '210px',
            height: '280px',
          }}
        >
          <Image
            src="/IMG_3290.png"
            alt="Amadeo handcrafted shoe"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${item.bg}ee 0%, transparent 50%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 22px',
          transform: hover ? 'translateY(-4px)' : 'none',
          transition: 'transform 0.3s',
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 17,
            color: '#fff',
            marginBottom: 3,
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            letterSpacing: '0.15em',
            color: item.accent,
          }}
        >
          {item.subtitle}
        </div>
      </div>
    </div>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: '#F0EAE3',
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            letterSpacing: '0.4em',
            color: ACCENT,
            marginBottom: 40,
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s',
          }}
        >
          WHAT THEY SAY
        </div>
        <div style={{ position: 'relative', minHeight: isMobile ? 180 : 160 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0,
                opacity: active === i ? 1 : 0,
                transition: 'opacity 0.6s ease',
                pointerEvents: active === i ? 'auto' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: isMobile ? '18px' : 'clamp(20px,2.5vw,28px)',
                  lineHeight: 1.5,
                  color: DARK,
                  marginBottom: 24,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  letterSpacing: '0.2em',
                  color: MUTED,
                }}
              >
                — {t.author}, <span style={{ color: ACCENT }}>{t.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            marginTop: 36,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active ? ACCENT : '#C4B9AE',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SIZE GUIDE ─── */
function SizeGuide() {
  const [ref, inView] = useInView();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  interface SizeRow {
    uk: string;
    eu: string;
    us: string;
    cm: string;
  }

  const sizes: SizeRow[] = [
    { uk: '6', eu: '39', us: '7', cm: '24.5' },
    { uk: '7', eu: '40', us: '8', cm: '25.5' },
    { uk: '8', eu: '41', us: '9', cm: '26.5' },
    { uk: '9', eu: '42', us: '10', cm: '27.0' },
    { uk: '10', eu: '43', us: '11', cm: '27.5' },
    { uk: '11', eu: '44', us: '12', cm: '28.5' },
    { uk: '12', eu: '45', us: '13', cm: '29.5' },
  ];
  const [unit, setUnit] = useState<'UK' | 'EU' | 'US' | 'CM'>('UK');
  const columns: Array<'UK' | 'EU' | 'US' | 'CM'> = ['UK', 'EU', 'US', 'CM'];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: WARM,
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 48 : 80,
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 12,
                letterSpacing: '0.4em',
                color: ACCENT,
                marginBottom: 14,
                opacity: inView ? 1 : 0,
                transition: 'all 0.6s',
              }}
            >
              PERFECT FIT
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? '28px' : 'clamp(28px,3.5vw,46px)',
                color: DARK,
                lineHeight: 1.1,
                marginBottom: 22,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: 'all 0.7s ease 0.1s',
              }}
            >
              Find Your Size
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 28,
              }}
            >
              Our lasts run true to size in UK. If you are between sizes, we
              recommend sizing up. All new shoes will conform to your foot
              within two weeks of regular wear.
            </p>
            <div
              style={{
                background: DARK,
                padding: '22px 24px',
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 12,
                  color: ACCENT,
                  letterSpacing: '0.2em',
                  marginBottom: 10,
                }}
              >
                HOW TO MEASURE
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Stand on a sheet of paper in the afternoon. Mark the heel and
                longest toe. Measure in centimetres.
              </p>
            </div>
          </div>

          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 0,
                marginBottom: 20,
                border: '1px solid rgba(0,0,0,0.12)',
              }}
            >
              {columns.map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  style={{
                    flex: 1,
                    padding: '10px 0',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    letterSpacing: '0.15em',
                    background: unit === u ? DARK : 'transparent',
                    color: unit === u ? '#fff' : MUTED,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {u}
                </button>
              ))}
            </div>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {sizes.map((s, i) => (
                <div
                  key={s.uk}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    padding: '13px 16px',
                    background:
                      i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent',
                    borderBottom:
                      i < sizes.length - 1
                        ? '1px solid rgba(0,0,0,0.06)'
                        : 'none',
                  }}
                >
                  {columns.map((col) => (
                    <div
                      key={col}
                      style={{
                        fontFamily:
                          col === unit
                            ? "'Playfair Display', serif"
                            : "'Cormorant Garamond', serif",
                        fontWeight: col === unit ? 700 : 400,
                        fontSize: col === unit ? 15 : 13,
                        color: col === unit ? DARK : MUTED,
                        textAlign: 'center',
                      }}
                    >
                      {s[col.toLowerCase() as keyof SizeRow]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                padding: '10px 16px',
                background: DARK,
              }}
            >
              {columns.map((col) => (
                <div
                  key={col}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: col === unit ? ACCENT : 'rgba(255,255,255,0.3)',
                    textAlign: 'center',
                  }}
                >
                  {col}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BANNER ─── */
function Banner() {
  const [ref, inView] = useInView();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: ACCENT,
        padding: `60px ${isMobile ? '24px' : 'clamp(20px,6vw,80px)'}`,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease',
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 18,
          }}
        >
          BESPOKE SERVICE
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: isMobile ? '26px' : 'clamp(28px,3.5vw,48px)',
            color: '#fff',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Your Foot. Your Last. Your Legacy.
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 16 : 18,
            color: 'rgba(255,255,255,0.8)',
            marginBottom: 32,
            maxWidth: 480,
            margin: '0 auto 32px',
          }}
        >
          Commission a pair built exclusively to your measurements, style, and
          leather choice.
        </p>
        <a
          href="#"
          style={{
            background: '#fff',
            color: ACCENT,
            padding: isMobile ? '12px 32px' : '14px 40px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14,
            letterSpacing: '0.2em',
            textDecoration: 'none',
            transition: 'all 0.25s',
            display: 'inline-block',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = DARK;
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = ACCENT;
          }}
        >
          BEGIN YOUR ORDER
        </a>
      </div>
    </section>
  );
}

/* ─── NEWSLETTER ─── */
function Newsletter() {
  const [ref, inView] = useInView();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: DARK,
        padding: `80px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${ACCENT}0d 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'all 0.8s ease',
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            letterSpacing: '0.4em',
            color: ACCENT,
            marginBottom: 18,
          }}
        >
          STAY INFORMED
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: isMobile ? '26px' : 'clamp(28px,3.5vw,46px)',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 18,
          }}
        >
          The Amadeo
          <br />
          <em style={{ fontStyle: 'italic', color: GOLD }}>Correspondence</em>
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 36,
          }}
        >
          Quarterly dispatches on new leathers, limited editions, care guides,
          and the rare art of dressing well.
        </p>
        {!sent ? (
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 0 : 0,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              placeholder="Your email address"
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRight: isMobile
                  ? '1px solid rgba(255,255,255,0.12)'
                  : 'none',
                borderBottom: isMobile
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16,
                padding: '14px 20px',
                outline: 'none',
                width: '100%',
              }}
            />
            <button
              onClick={() => email && setSent(true)}
              style={{
                background: ACCENT,
                color: '#fff',
                border: 'none',
                padding: '14px 28px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                (e.currentTarget.style.background = '#a82230')
              }
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
                (e.currentTarget.style.background = ACCENT)
              }
            >
              SUBSCRIBE
            </button>
          </div>
        ) : (
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(206,45,61,0.3)',
              padding: '20px 28px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Welcome to the correspondence. Your first letter will arrive
            shortly.
          </div>
        )}
        <div
          style={{
            display: 'flex',
            gap: isMobile ? 16 : 32,
            justifyContent: 'center',
            marginTop: 40,
            flexWrap: 'wrap',
          }}
        >
          {['No spam, ever', 'Quarterly only', 'Unsubscribe freely'].map(
            (t) => (
              <div
                key={t}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: ACCENT,
                    borderRadius: '50%',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {t}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <div
      style={{
        background: '#100C0B',
        padding: `48px ${isMobile ? '20px' : 'clamp(20px,6vw,80px)'} 32px`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr 1fr'
              : isTablet
                ? '1fr 1fr 1fr'
                : '2fr 1fr 1fr 1fr',
            gap: isMobile ? 32 : 48,
            marginBottom: 48,
          }}
        >
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 22 22">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1.5"
                />
                <path
                  d="M6 13 Q11 7 16 13"
                  stroke={ACCENT}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="11" cy="13" r="1.5" fill={ACCENT} />
              </svg>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  fontSize: 13,
                  color: '#fff',
                }}
              >
                {BRAND}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.7,
                maxWidth: isMobile ? '100%' : 240,
              }}
            >
              Handcrafted leather footwear since 1923. Built to outlast trends —
              and time.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['IG', 'FB', 'TW', 'PT'].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 32,
                    height: 32,
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
                    (e.currentTarget.style.borderColor = ACCENT)
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
                    (e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.1)')
                  }
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 9,
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {(
            [
              [
                'Collection',
                ['Oxford', 'Derby', 'Loafer', 'Bespoke', 'New Arrivals'],
              ],
              [
                'Company',
                [
                  'Our Story',
                  'Heritage',
                  'Craftsmen',
                  'Sustainability',
                  'Press',
                ],
              ],
              [
                'Support',
                [
                  'Sizing Guide',
                  'Care & Repair',
                  'Returns',
                  'Shipping',
                  'Contact',
                ],
              ],
            ] as [string, string[]][]
          ).map(([title, links]) => (
            <div key={title}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#fff',
                  letterSpacing: '0.1em',
                  marginBottom: 16,
                }}
              >
                {title}
              </div>
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    display: 'block',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    marginBottom: 9,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = '#fff')
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')
                  }
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 10 : 0,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.05em',
            }}
          >
            © 2026 Amadeo Co. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 11,
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.15em',
            }}
          >
            LONDON · MILAN · NEW YORK · FLORENCE
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ROOT ─── */
export default function App() {
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <GlobalStyles />
      <Nav />
      <Hero />
      <PressMarquee />
      <Collection />
      <Heritage />
      <Materials />
      <Craft />
      <Lookbook />
      <Testimonials />
      <SizeGuide />
      <Banner />
      <Newsletter />
      <Footer />
    </div>
  );
}
