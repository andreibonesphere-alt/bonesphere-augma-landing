export default function TermeniConditii() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1c1b1b', background: '#fcf9f8', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '16px 24px' }}>
        <a href="/"><img src="/logo-teal.png" alt="Bonesphere" style={{ height: 22, display: 'block' }} /></a>
      </header>
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#004a5d', marginBottom: 8 }}>Termeni și Condiții</h1>
        <p style={{ color: '#3f484c', fontSize: 14, marginBottom: 48 }}>SC BONESPHERE SRL · J40/506/2018 · CUI: RO38700141</p>

        <Section title="1. Informații generale">
          SC BONESPHERE SRL operează această pagină. Sediul social: Bd. Iuliu Maniu 6L, Campus 6.1, București, 061103. Contact: <strong>office@bonesphere.ro</strong> · <strong>0737 178 774</strong>.
        </Section>

        <Section title="2. Scopul paginii">
          Această pagină are ca scop exclusiv prezentarea produselor Augma Biomaterials și facilitarea programării unei demonstrații gratuite pentru profesioniști în domeniul stomatologic. Nu reprezintă o ofertă comercială directă.
        </Section>

        <Section title="3. Proprietatea produselor">
          Produsele rămân proprietatea SC BONESPHERE SRL până la achitarea integrală a contravalorii acestora, în cazul comenzilor ulterioare.
        </Section>

        <Section title="4. Livrare și costuri">
          <ul>
            <li>Livrare gratuită pentru comenzi peste 300 RON</li>
            <li>Cost standard livrare: 27 RON</li>
            <li>Termen standard: 24h pentru produse în stoc; până la 7 zile lucrătoare în situații excepționale</li>
          </ul>
        </Section>

        <Section title="5. Returnare">
          Produsele pot fi returnate în termen de 30 de zile calendaristice, în starea în care au fost primite, însoțite de toate accesoriile și documentele. Rambursarea se efectuează pe site sau prin transfer bancar.
        </Section>

        <Section title="6. Modificarea și anularea comenzilor">
          Comenzile pot fi modificate sau anulate contactând echipa la <strong>0737 178 774</strong> sau prin e-mail la <strong>office@bonesphere.ro</strong>, înainte de procesarea acestora.
        </Section>

        <Section title="7. Protecția datelor">
          Datele personale sunt prelucrate conform GDPR (UE 2016/679). Detalii în <a href="/confidentialitate" style={{ color: '#004a5d' }}>Politica de Confidențialitate</a>.
        </Section>

        <Section title="8. Litigii">
          Orice litigiu se soluționează conform legislației române, prin instanțele competente din București. Tentativa de soluționare amiabilă se adresează la <strong>office@bonesphere.ro</strong>.
        </Section>
      </main>
      <PageFooter />
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

function PageFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '20px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: 12, color: 'rgba(63,72,76,0.5)', margin: 0 }}>© 2026 SC Bonesphere SRL · J40/506/2018 · CUI: RO38700141</p>
    </footer>
  )
}
