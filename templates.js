/**
 * volafly — templates.js
 *
 * Hier werden alle wählbaren Risikomanagement-Templates definiert.
 * Neue Templates einfach als weiteres Objekt im Array ergänzen.
 *
 * Pflichtfelder pro Template:
 *   id          — eindeutiger Bezeichner (keine Leerzeichen)
 *   name        — Anzeigename
 *   desc        — Kurzbeschreibung (erscheint auf der Template-Karte)
 *   classes     — Array von Volatilitätsklassen (mind. 2)
 *   thresholds  — Objekt: welche Indikatoren aktiv sind (true = aktiv)
 *
 * Pflichtfelder pro Klasse:
 *   label       — Name der Klasse (z.B. "Stille", "Panik")
 *   color       — Hex-Farbe (z.B. "#30D158")
 *   investPct   — Investitionsgrad in % (muss eindeutig sein)
 *   subtitle    — Kurzbeschreibung (eine Zeile)
 *   desc        — Handlungssatz (erscheint im Bewertungs-Tab)
 *
 * Verfügbare Indikatoren für thresholds:
 *   vix, vvix, vixVxv, vxn, rvx, fearGreed, equityPutCall,
 *   vx1Spread, vx2Spread, hySpread, dxy, goldSP, wti,
 *   yieldSpread, spxAbove200d, ndxAbove200d
 */

window.VOLAFLY_TEMPLATES = [
  {
    id: 'antizykliker',
    name: 'Der Antizykliker',
    desc: '5 Klassen · VIX & Sentiment-fokussiert · kauft Angst, verkauft Gier',
    classes: [
      { label: 'Stille',   color: '#8E8E93', investPct: 30,  subtitle: 'Niedriges Risiko — defensiv positioniert',       desc: 'Märkte sind ruhig. Antizykliker wartet geduldig mit 30% Investitionsgrad.' },
      { label: 'Ruhe',     color: '#30D158', investPct: 55,  subtitle: 'Normales Umfeld — solide Basis',                  desc: 'Normales Marktumfeld. Solide Basis-Position von bis zu 55% ist angemessen.' },
      { label: 'Spannung', color: '#FFCC00', investPct: 80,  subtitle: 'Erhöhte Unsicherheit — selektiv aufbauen',        desc: 'Erhöhte Unsicherheit schafft erste Chancen. Selektiv auf bis zu 80% aufbauen.' },
      { label: 'Stress',   color: '#FF9F0A', investPct: 100, subtitle: 'Deutlicher Stress — antizyklisch erhöhen',        desc: 'Deutlicher Marktsstress. Antizyklisch auf bis zu 100% erhöhen.' },
      { label: 'Panik',    color: '#FF453A', investPct: 120, subtitle: 'Kapitulation — maximale Position',                desc: 'Kapitulation und maximale Angst — historisch bester Kaufzeitpunkt. Bis zu 120% für mutige Investoren.' },
    ],
    thresholds: {
      vix: true, vvix: true, fearGreed: true, equityPutCall: true,
      vx1Spread: true, vx2Spread: true,
    },
  },
  {
    id: 'momentum',
    name: 'Der Momentum-Investor',
    desc: '2 Klassen · Fokussiert auf Momentum im Markt · folgt dem Markt, meidet Turbulenzen',
    classes: [
      { label: 'Trend',   color: '#30D158', investPct: 100, subtitle: 'Klarer Aufwärtstrend — voll investiert',    desc: 'Klarer Aufwärtstrend bestätigt. Momentum-Investor ist voll investiert bis zu 100%.' },
      { label: 'Raus aus dem Markt',   color: '#FF453A', investPct: 0,  subtitle: 'Abwärtstrend — wir beobachten den Markt von der Seitenlinie',     desc: 'Abwärtstrend aktiv — Kapitalschutz hat Priorität.' },
    ],
    thresholds: {
      vix: true, 
      spxAbove200d: true, ndxAbove200d: true,
    },
  },
  {
    id: 'risikoManager',
    name: 'Der Risiko-Manager',
    desc: '4 Klassen · Spread & Makro-fokussiert · Kapitalerhalt als oberstes Ziel',
    classes: [
      { label: 'Grün',   color: '#30D158', investPct: 40,  subtitle: 'Niedriges Risiko — defensiv positioniert',  desc: 'Risikoumfeld ist ruhig, aber Kapitalschutz hat Vorrang. Maximal 40% investiert.' },
      { label: 'Gelb',   color: '#FFCC00', investPct: 60,  subtitle: 'Erhöhtes Risiko — selektiv aufbauen',       desc: 'Erhöhtes Risikoumfeld — erste antizyklische Positionen aufbauen. Bis zu 60%.' },
      { label: 'Orange', color: '#FF9F0A', investPct: 80,  subtitle: 'Hohes Risiko — antizyklisch erhöhen',       desc: 'Hohes Risikoniveau — Risiko-Manager erhöht antizyklisch auf bis zu 80%.' },
      { label: 'Rot',    color: '#FF453A', investPct: 100, subtitle: 'Extremes Risiko — maximale Position',       desc: 'Extremes Risikoumfeld mit Kapitulation — historisch bester Kaufzeitpunkt. Bis zu 100%.' },
    ],
    thresholds: {
      hySpread: true, dxy: true, yieldSpread: true,
      moveIndex: true, vix: true, goldSP: true,
    },
  },
];
