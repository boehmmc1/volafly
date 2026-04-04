/**
 * volafly — templates.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Hier werden alle wählbaren Risikomanagement-Templates definiert.
 * Neue Templates einfach als weiteres Objekt im Array ergänzen.
 * Nach dem Speichern und Pushen auf GitHub erscheinen sie sofort auf der Website.
 *
 * ── AUFBAU EINES TEMPLATES ───────────────────────────────────────────────────
 *
 *   id:         Eindeutiger Bezeichner, keine Leerzeichen
 *   name:       Anzeigename auf der Template-Karte
 *   desc:       Kurzbeschreibung unter dem Namen
 *   classes:    Volatilitätsklassen — mind. 2, max. beliebig
 *   thresholds: Indikatoren mit Grenzwerten
 *
 * ── AUFBAU EINER KLASSE ──────────────────────────────────────────────────────
 *
 *   label:      Name der Klasse, z.B. "Stille" oder "Panik"
 *   color:      Hex-Farbe, z.B. "#30D158"
 *   investPct:  Investitionsgrad in % — muss eindeutig sein pro Template
 *   subtitle:   Kurze Zeile unter dem Klassennamen
 *   desc:       Handlungssatz im Bewertungs-Tab (kann leer "" sein)
 *
 * ── AUFBAU EINES INDIKATORS IN thresholds ────────────────────────────────────
 *
 * Einfach — Standard-Grenzwerte übernehmen, Indikator nur aktivieren:
 *   vix: true
 *
 * Vollständig — eigene Grenzwerte definieren:
 *   vix: {
 *     values: [15, 20, 30, 40],
 *     // Anzahl Werte = Anzahl Klassen minus 1
 *     // Beispiel: 5 Klassen = 4 Grenzwerte, 3 Klassen = 2 Grenzwerte
 *     dir: 'asc',
 *     // 'asc'  = höherer Wert -> höhere Stress-Klasse  (z.B. VIX)
 *     // 'desc' = niedrigerer Wert -> höhere Stress-Klasse (z.B. Fear & Greed)
 *   }
 *
 * Nicht aufgeführte Indikatoren werden automatisch deaktiviert.
 *
 * ── VERFÜGBARE INDIKATOREN ───────────────────────────────────────────────────
 *
 *  Kürzel         Bedeutung                     dir     Standard-Werte (5 Klassen)
 *  ──────────────────────────────────────────────────────────────────────────────
 *  vix            CBOE VIX                       asc     15, 20, 30, 40
 *  vvix           CBOE VVIX                      asc     85, 100, 120, 140
 *  vixVxv         VIX / VXV Ratio                asc     0.85, 0.95, 1.00, 1.10
 *  vxn            CBOE VXN (Nasdaq Vola)         asc     18, 23, 33, 43
 *  rvx            CBOE RVX (Russell Vola)        asc     18, 23, 30, 40
 *  fearGreed      CNN Fear & Greed Index         desc    75, 55, 35, 20
 *  equityPutCall  Equity Put/Call Ratio          asc     0.60, 0.75, 0.95, 1.10
 *  vx1Spread      VX1 minus VIX Spot             desc    2.0, 0.5, -0.5, -2.0
 *  vx2Spread      VX2 minus VX1                  desc    1.0, 0.3, -0.3, -1.0
 *  hySpread       HY Credit Spread               asc     3.0, 4.0, 5.5, 8.0
 *  dxy            US Dollar Index (DXY)          asc     94, 99, 104, 109
 *  goldSP         Gold / S&P 500 Ratio           asc     0.35, 0.45, 0.55, 0.70
 *  wti            WTI Rohöl                      asc     60, 80, 100, 120
 *  yieldSpread    10Y minus 2Y Yield             desc    1.5, 0.5, 0.0, -0.5
 *  spxAbove200d   S&P 500 über 200-Tage-Linie    desc    1, 1, 0, 0
 *  ndxAbove200d   Nasdaq über 200-Tage-Linie     desc    1, 1, 0, 0
 */

window.VOLAFLY_TEMPLATES = [

  // ── Template 1: Der Antizykliker ──────────────────────────────────────────
  {
    id: 'antizykliker',
    name: 'Der Antizykliker',
    desc: '5 Klassen · VIX & Sentiment-fokussiert · kauft Angst, verkauft Gier',
    classes: [
      { label: 'Stille',   color: '#8E8E93', investPct: 30,  subtitle: 'Niedriges Risiko — defensiv positioniert',  desc: 'Märkte sind ruhig. Antizykliker wartet geduldig mit 30% Investitionsgrad.' },
      { label: 'Ruhe',     color: '#30D158', investPct: 55,  subtitle: 'Normales Umfeld — solide Basis',             desc: 'Normales Marktumfeld. Solide Basis-Position von bis zu 55% ist angemessen.' },
      { label: 'Spannung', color: '#FFCC00', investPct: 80,  subtitle: 'Erhöhte Unsicherheit — selektiv aufbauen',   desc: 'Erhöhte Unsicherheit schafft erste Chancen. Selektiv auf bis zu 80% aufbauen.' },
      { label: 'Stress',   color: '#FF9F0A', investPct: 100, subtitle: 'Deutlicher Stress — antizyklisch erhöhen',   desc: 'Deutlicher Marktstress. Antizyklisch auf bis zu 100% erhöhen.' },
      { label: 'Panik',    color: '#FF453A', investPct: 120, subtitle: 'Kapitulation — maximale Position',           desc: 'Kapitulation und maximale Angst — historisch bester Kaufzeitpunkt. Bis zu 120%.' },
    ],
    thresholds: {
      // 5 Klassen = 4 Grenzwerte pro Indikator
      vix:           { values: [15, 20, 30, 40],          dir: 'asc'  },
      vvix:          { values: [85, 100, 120, 140],       dir: 'asc'  },
      fearGreed:     { values: [75, 55, 35, 20],          dir: 'desc' },
      equityPutCall: { values: [0.60, 0.75, 0.95, 1.10], dir: 'asc'  },
      vx1Spread:     { values: [2.0, 0.5, -0.5, -2.0],   dir: 'desc' },
      vx2Spread:     { values: [1.0, 0.3, -0.3, -1.0],   dir: 'desc' },
    },
  },

  // ── Template 2: Der Momentum-Investor ────────────────────────────────────
  {
    id: 'momentum',
    name: 'Der Momentum-Investor',
    desc: '3 Klassen · Trend & Breadth-fokussiert · folgt dem Markt, meidet Turbulenzen',
    classes: [
      { label: 'Trend',   color: '#30D158', investPct: 100, subtitle: 'Klarer Aufwärtstrend — voll investiert',   desc: 'Klarer Aufwärtstrend bestätigt. Momentum-Investor ist voll investiert bis zu 100%.' },
      { label: 'Neutral', color: '#FFCC00', investPct: 60,  subtitle: 'Unklarer Trend — selektiv positioniert',  desc: 'Trend ist unklarer — selektiv positioniert bleiben. Bis zu 60%.' },
      { label: 'Crash',   color: '#FF453A', investPct: 20,  subtitle: 'Abwärtstrend — defensiv positioniert',    desc: 'Abwärtstrend aktiv — Kapitalschutz hat Priorität. Maximal 20% Exposure.' },
    ],
    thresholds: {
      // 3 Klassen = 2 Grenzwerte pro Indikator
      vix:          { values: [20, 30],       dir: 'asc'  },
      vixVxv:       { values: [0.95, 1.05],   dir: 'asc'  },
      vx1Spread:    { values: [0.5, -1.0],    dir: 'desc' },
      spxAbove200d: { values: [1, 0],         dir: 'desc' },
      ndxAbove200d: { values: [1, 0],         dir: 'desc' },
    },
  },

  // ── Template 3: Der Risiko-Manager ───────────────────────────────────────
  {
    id: 'risikoManager',
    name: 'Der Risiko-Manager',
    desc: '4 Klassen · Spread & Makro-fokussiert · Kapitalerhalt als oberstes Ziel',
    classes: [
      { label: 'Grün',   color: '#30D158', investPct: 40,  subtitle: 'Niedriges Risiko — defensiv positioniert', desc: 'Risikoumfeld ist ruhig, aber Kapitalschutz hat Vorrang. Maximal 40% investiert.' },
      { label: 'Gelb',   color: '#FFCC00', investPct: 60,  subtitle: 'Erhöhtes Risiko — selektiv aufbauen',      desc: 'Erhöhtes Risikoumfeld — erste antizyklische Positionen aufbauen. Bis zu 60%.' },
      { label: 'Orange', color: '#FF9F0A', investPct: 80,  subtitle: 'Hohes Risiko — antizyklisch erhöhen',      desc: 'Hohes Risikoniveau — Risiko-Manager erhöht antizyklisch auf bis zu 80%.' },
      { label: 'Rot',    color: '#FF453A', investPct: 100, subtitle: 'Extremes Risiko — maximale Position',      desc: 'Extremes Risikoumfeld mit Kapitulation — historisch bester Kaufzeitpunkt. Bis zu 100%.' },
    ],
    thresholds: {
      // 4 Klassen = 3 Grenzwerte pro Indikator
      hySpread:    { values: [3.0, 5.0, 8.0],      dir: 'asc'  },
      dxy:         { values: [97, 102, 108],        dir: 'asc'  },
      yieldSpread: { values: [1.0, 0.0, -0.5],     dir: 'desc' },
      vix:         { values: [18, 28, 40],          dir: 'asc'  },
      goldSP:      { values: [0.40, 0.55, 0.70],   dir: 'asc'  },
    },
  },

];
