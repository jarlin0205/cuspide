export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Maicao · La Guajira · Colombia</div>
        <h1 className="hero-title">
          <span className="t1">Cúspide</span>
          <span className="t2">Digital</span>
        </h1>
        <p className="hero-subtitle">
          Desde el punto más norte de Suramérica, construimos el software que lleva tu empresa a la cima.
        </p>
        <div className="hero-btns">
          <a href="#servicios" className="btn-p"><span>Ver Servicios</span></a>
          <a href="#contacto" className="btn-s">Iniciar Proyecto <span className="arr">→</span></a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="st-num">+130</div>
            <div className="st-lab">Proyectos</div>
          </div>
          <div>
            <div className="st-num">9+</div>
            <div className="st-lab">Años</div>
          </div>
          <div>
            <div className="st-num">100%</div>
            <div className="st-lab">Compromiso</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <svg className="hero-svg" viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4A843" stopOpacity=".15"/>
              <stop offset="100%" stopColor="#D4A843" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="mtnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4A843" stopOpacity=".9"/>
              <stop offset="100%" stopColor="#9B3A1A" stopOpacity=".3"/>
            </linearGradient>
            <linearGradient id="mtn2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E07B2A" stopOpacity=".6"/>
              <stop offset="100%" stopColor="#9B3A1A" stopOpacity=".15"/>
            </linearGradient>
          </defs>
          <circle cx="260" cy="320" r="240" fill="url(#glow)"/>
          <line x1="260" y1="30" x2="260" y2="530" stroke="rgba(212,168,67,.06)" strokeWidth="1"/>
          <line x1="30" y1="350" x2="490" y2="350" stroke="rgba(212,168,67,.06)" strokeWidth="1"/>
          <circle cx="260" cy="350" r="80" stroke="rgba(212,168,67,.05)" strokeWidth="1" fill="none"/>
          <circle cx="260" cy="350" r="160" stroke="rgba(212,168,67,.04)" strokeWidth="1" fill="none"/>
          <circle cx="260" cy="350" r="230" stroke="rgba(212,168,67,.03)" strokeWidth="1" fill="none"/>
          <polygon points="60,460 180,220 300,460" fill="rgba(212,168,67,.06)"/>
          <polygon points="200,460 340,200 480,460" fill="rgba(212,168,67,.07)"/>
          <polygon points="260,80 150,460 370,460" fill="url(#mtnGrad)" opacity=".85"/>
          <polygon points="260,80 260,460 370,460" fill="rgba(255,255,255,.04)"/>
          <circle cx="260" cy="80" r="18" fill="rgba(212,168,67,.4)"/>
          <circle cx="260" cy="80" r="8" fill="rgba(242,201,106,.9)"/>
          <path d="M220,200 C240,195 260,190 280,200" stroke="rgba(212,168,67,.15)" strokeWidth="1" fill="none"/>
          <path d="M200,260 C225,250 260,245 295,260" stroke="rgba(212,168,67,.12)" strokeWidth="1" fill="none"/>
          <path d="M180,320 C215,307 260,302 305,320" stroke="rgba(212,168,67,.1)" strokeWidth="1" fill="none"/>
          <path d="M165,380 C210,365 260,360 315,380" stroke="rgba(212,168,67,.08)" strokeWidth="1" fill="none"/>
          <polygon points="260,80 245,120 275,120" fill="rgba(245,240,230,.5)"/>
          <text x="270" y="78" fontSize="7" fill="rgba(212,168,67,.6)" fontFamily="monospace">12°N</text>
          <text x="270" y="88" fontSize="7" fill="rgba(212,168,67,.4)" fontFamily="monospace">71°W</text>
          <g transform="translate(340,130) rotate(-15)">
            <ellipse cx="0" cy="0" rx="22" ry="11" fill="rgba(224,123,42,.6)"/>
            <ellipse cx="5" cy="3" rx="12" ry="8" fill="rgba(242,201,106,.7)"/>
            <circle cx="22" cy="-3" r="10" fill="rgba(30,30,60,.8)"/>
            <path d="M31,-4 L44,-8 L31,-1 Z" fill="rgba(212,168,67,.9)"/>
            <circle cx="26" cy="-5" r="3" fill="rgba(242,201,106,.9)"/>
            <circle cx="27" cy="-6" r="1" fill="white"/>
            <path d="M-5,-5 C-30,-35 -55,-45 -70,-38 C-50,-20 -20,-8 -5,-5 Z" fill="rgba(30,30,60,.7)"/>
            <path d="M-2,5 C10,20 20,35 18,45 C5,38 -8,22 -2,5 Z" fill="rgba(30,30,60,.5)"/>
            <path d="M-22,2 L-45,8 M-22,2 L-46,2 M-22,2 L-45,-4" stroke="rgba(30,30,60,.6)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </g>
          <circle cx="310" cy="150" r="1.5" fill="rgba(212,168,67,.3)"/>
          <circle cx="290" cy="165" r="1" fill="rgba(212,168,67,.2)"/>
          <circle cx="275" cy="178" r="1" fill="rgba(212,168,67,.15)"/>
          <g transform="translate(80,220)">
            <line x1="20" y1="240" x2="20" y2="20" stroke="rgba(212,168,67,.2)" strokeWidth="2.5"/>
            <path d="M20,120 C50,100 70,80 60,50" stroke="rgba(212,168,67,.15)" strokeWidth="1.5" fill="none"/>
            <path d="M20,160 C-5,140 -20,115 -10,90" stroke="rgba(212,168,67,.12)" strokeWidth="1.5" fill="none"/>
            <ellipse cx="20" cy="80" rx="14" ry="48" fill="rgba(212,168,67,.12)" stroke="rgba(212,168,67,.2)" strokeWidth="1"/>
            <ellipse cx="12" cy="54" rx="4" ry="4" fill="rgba(212,168,67,.2)"/>
            <ellipse cx="20" cy="50" rx="4" ry="4" fill="rgba(212,168,67,.2)"/>
            <ellipse cx="28" cy="54" rx="4" ry="4" fill="rgba(212,168,67,.2)"/>
            <ellipse cx="12" cy="68" rx="4" ry="4" fill="rgba(212,168,67,.18)"/>
            <ellipse cx="20" cy="64" rx="4" ry="4" fill="rgba(212,168,67,.18)"/>
            <ellipse cx="28" cy="68" rx="4" ry="4" fill="rgba(212,168,67,.18)"/>
            <ellipse cx="12" cy="82" rx="4" ry="4" fill="rgba(212,168,67,.15)"/>
            <ellipse cx="20" cy="78" rx="4" ry="4" fill="rgba(212,168,67,.15)"/>
            <ellipse cx="28" cy="82" rx="4" ry="4" fill="rgba(212,168,67,.15)"/>
            <ellipse cx="12" cy="96" rx="4" ry="4" fill="rgba(212,168,67,.12)"/>
            <ellipse cx="20" cy="92" rx="4" ry="4" fill="rgba(212,168,67,.12)"/>
            <ellipse cx="28" cy="96" rx="4" ry="4" fill="rgba(212,168,67,.12)"/>
            <path d="M14,30 C4,10 -2,0 -8,-5" stroke="rgba(212,168,67,.2)" strokeWidth="1" fill="none"/>
            <path d="M18,28 C12,8 10,-4 8,-10" stroke="rgba(212,168,67,.18)" strokeWidth="1" fill="none"/>
            <path d="M22,27 C22,6 24,-6 26,-12" stroke="rgba(212,168,67,.16)" strokeWidth="1" fill="none"/>
            <path d="M26,29 C32,10 36,0 40,-4" stroke="rgba(212,168,67,.14)" strokeWidth="1" fill="none"/>
            <path d="M29,32 C40,14 48,4 54,0" stroke="rgba(212,168,67,.12)" strokeWidth="1" fill="none"/>
          </g>
          <rect x="10" y="10" width="500" height="540" rx="2" stroke="rgba(212,168,67,.07)" strokeWidth="1" strokeDasharray="6,8" fill="none"/>
          <circle cx="400" cy="60" r="1.5" fill="rgba(212,168,67,.5)"/>
          <circle cx="450" cy="110" r="1" fill="rgba(212,168,67,.4)"/>
          <circle cx="420" cy="180" r="1" fill="rgba(212,168,67,.3)"/>
          <circle cx="70" cy="80" r="1.5" fill="rgba(212,168,67,.4)"/>
          <circle cx="40" cy="140" r="1" fill="rgba(212,168,67,.3)"/>
          <circle cx="460" cy="240" r="1" fill="rgba(212,168,67,.25)"/>
        </svg>
      </div>
    </section>
  )
}
