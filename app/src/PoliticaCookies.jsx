export default function PoliticaCookies() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1c1b1b', background: '#fcf9f8', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '16px 24px' }}>
        <a href="/"><img src="/logo-teal.png" alt="Bonesphere" style={{ height: 22, display: 'block' }} /></a>
      </header>
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#004a5d', marginBottom: 8 }}>Politică Cookies</h1>
        <p style={{ color: '#3f484c', fontSize: 14, marginBottom: 48 }}>SC BONESPHERE SRL · office@bonesphere.ro</p>

        <Section title="Ce sunt cookie-urile?">
          Cookie-urile sunt fișiere text de mici dimensiuni, stocate pe dispozitivul dumneavoastră prin intermediul browserului, la cererea unui server web. Acestea nu conțin programe software, viruși sau spyware și nu pot accesa informații de pe hard disk-ul dumneavoastră.
        </Section>

        <Section title="Scopul utilizării cookie-urilor">
          Folosim cookie-uri pentru:
          <ul>
            <li>Recunoașterea dispozitivului și personalizarea afișării paginii</li>
            <li>Crearea de statistici anonime despre comportamentul utilizatorilor</li>
            <li>Asigurarea măsurilor de securitate ale site-ului</li>
            <li>Analizarea performanței paginii</li>
          </ul>
        </Section>

        <Section title="Tipuri de cookie-uri utilizate">
          <ul>
            <li><strong>Cookie-uri de sesiune</strong> — temporare, șterse automat la închiderea browserului</li>
            <li><strong>Cookie-uri persistente</strong> — rămân pe dispozitiv o perioadă determinată, în funcție de parametrii setați</li>
          </ul>
        </Section>

        <Section title="Date personale și cookie-uri">
          Cookie-urile nu solicită informații cu caracter personal și nu identifică personal utilizatorii. Orice date personale colectate prin intermediul cookie-urilor sunt criptate și protejate împotriva accesului neautorizat.
        </Section>

        <Section title="Cum puteți controla cookie-urile">
          Browserul dumneavoastră salvează automat cookie-urile. Puteți modifica setările browserului pentru a bloca instalarea automată a cookie-urilor, însă limitarea acestora poate afecta funcționalitatea paginii.
          <br /><br />
          Instrucțiuni pentru browserele principale:
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" style={{ color: '#004a5d' }}>Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/ro/kb/stergeti-cookie-urile-pentru-a-elimina-informatiile" target="_blank" rel="noreferrer" style={{ color: '#004a5d' }}>Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" style={{ color: '#004a5d' }}>Safari</a></li>
          </ul>
        </Section>

        <Section title="Securitate">
          Cookie-urile în sine nu sunt viruși, însă pot fi utilizate abuziv de programe spyware. Vă recomandăm să instalați regulat aplicații antispyware și să mențineți browserul actualizat.
        </Section>

        <Section title="Contact">
          Pentru orice întrebări legate de utilizarea cookie-urilor, ne puteți contacta la <strong>office@bonesphere.ro</strong>.
        </Section>
      </main>
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'rgba(63,72,76,0.5)', margin: 0 }}>© 2025 SC Bonesphere SRL · J40/506/2018 · CUI: RO38700141</p>
      </footer>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 22, fontWeight: 700, color: '#004a5d', marginBottom: 12 }}>{title}</h2>
      <div style={{ color: '#3f484c', lineHeight: 1.8, fontSize: 15 }}>{children}</div>
    </div>
  )
}
