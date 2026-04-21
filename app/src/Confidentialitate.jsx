export default function Confidentialitate() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1c1b1b', background: '#fcf9f8', minHeight: '100vh' }}>
      {/* Nav minimal */}
      <header style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '16px 24px' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo-teal.png" alt="Bonesphere" style={{ height: 22, display: 'block' }} />
        </a>
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#004a5d', marginBottom: 8 }}>
          Politică de Confidențialitate
        </h1>
        <p style={{ color: '#3f484c', fontSize: 14, marginBottom: 48 }}>SC BONESPHERE SRL · office@bonesphere.ro · 0737 178 774</p>

        <Section title="1. Informații generale">
          SC BONESPHERE SRL prelucrează datele cu caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR). Responsabilul pentru protecția datelor poate fi contactat la <strong>office@bonesphere.ro</strong>.
        </Section>

        <Section title="2. Ce date colectăm și de ce">
          <p>Prin formularul de pe această pagină colectăm:</p>
          <ul>
            <li><strong>Nume</strong> — pentru a vă adresa personalizat</li>
            <li><strong>Telefon</strong> — pentru a vă contacta în vederea stabilirii datei demonstrației</li>
            <li><strong>Clinică / Oraș</strong> — pentru a planifica deplasarea reprezentantului nostru</li>
          </ul>
          <p>Temeiul juridic: consimțământul dumneavoastră explicit (Art. 6(1)(a) GDPR) și interesul legitim în derularea relației comerciale (Art. 6(1)(f) GDPR).</p>
        </Section>

        <Section title="3. Cum utilizăm datele">
          Datele colectate sunt folosite exclusiv pentru:
          <ul>
            <li>Contactarea dumneavoastră în vederea programării demonstrației gratuite</li>
            <li>Derularea relației comerciale ulterioare, dacă este cazul</li>
            <li>Comunicări de marketing, doar cu consimțământ prealabil</li>
          </ul>
        </Section>

        <Section title="4. Cui transmitem datele">
          Datele nu sunt vândute sau transferate către terți în scop publicitar. Utilizăm următorii furnizori de servicii care prelucrează datele strict în baza unor acorduri contractuale conforme GDPR (Art. 28):
          <ul>
            <li><strong>Vercel Inc.</strong> — hosting și infrastructură (SUA, cu clauze contractuale standard UE)</li>
            <li><strong>Telegram Messenger Inc.</strong> — notificări interne privind cererile de demonstrație primite prin formular. Datele transmise (nume, telefon, clinică/oraș) sunt folosite exclusiv în acest scop și nu sunt partajate cu terți.</li>
          </ul>
        </Section>

        <Section title="5. Cât timp păstrăm datele">
          Datele se păstrează până la retragerea consimțământului sau încetarea relației comerciale, cu excepțiile prevăzute de legislația fiscală în vigoare.
        </Section>

        <Section title="6. Drepturile dumneavoastră">
          În conformitate cu GDPR, aveți dreptul la:
          <ul>
            <li>Acces la datele prelucrate (Art. 15)</li>
            <li>Rectificarea datelor inexacte (Art. 16)</li>
            <li>Ștergerea datelor ("dreptul de a fi uitat") (Art. 17)</li>
            <li>Restricționarea prelucrării (Art. 18)</li>
            <li>Portabilitatea datelor (Art. 20)</li>
            <li>Obiecție față de prelucrare (Art. 21)</li>
            <li>Retragerea consimțământului oricând, fără consecințe (Art. 7)</li>
            <li>Depunerea unei plângeri la ANSPDCP (Art. 77)</li>
          </ul>
          Pentru exercitarea oricărui drept, scrieți la <strong>office@bonesphere.ro</strong>.
        </Section>

        <Section title="7. Modificări ale politicii">
          Această politică poate fi actualizată periodic. Versiunea actualizată va fi publicată pe această pagină cu data intrării în vigoare.
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
