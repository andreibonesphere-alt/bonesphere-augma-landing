# AUGMA - Master Product Knowledge Base

Ultima actualizare: 2026-04-14
Limba canonică: română
Scop: document de bază pentru ingestie în LLM, onboarding intern și taskuri viitoare de marketing / vânzări / content.

## 1. Cum se folosește acest document

Acest document separă intenționat patru straturi de informație:

1. `site oficial Augma` - ceea ce Augma afirmă public despre companie, produse, indicații și protocoale.
2. `literatură` - review-uri și articole clinice care susțin cadrul materialelor pe bază de calcium sulfate sau HA + calcium sulfate.
3. `training intern` - formulări, explicații și framing clinic/comercial din materialele locale Amos + documentele Bonesphere.
4. `poziționare Bonesphere` - cum sunt traduse aceste informații în ofertă, ICP și mesaj comercial front-end.

Pentru uz LLM, ordinea de prioritate este:

`literatură + site oficial Augma > e-book / protocol oficial > training intern > poziționare Bonesphere`

## 2. Entități canonice

### 2.1 Augma Biomaterials

- Categorie canonică: `bone graft cement company`
- Domeniu: substitute osoase pentru augmentare în chirurgia orală / implantologie
- Nucleu de poziționare oficial: handling simplificat, rezultate mai bune, suport clinic și educație
- Rolul lui Amos Yahav:
  - `site oficial Augma`: fondator și inventatorul tehnologiei biphasic calcium sulfate
  - `training intern`: autoritatea clinică centrală și vocea principală pentru protocol

### 2.2 Bond Apatite

- Tip canonic: `long-term space maintainer`
- Compoziție canonică: compozit din `2/3 biphasic calcium sulfate (BCS)` + `hydroxyapatite (HA)` cu distribuție controlată a particulelor
- Rol canonic: produsul principal pentru defecte osoase mai variate și augmentări mai ample

### 2.3 3D Bond+

- Tip canonic: `short-term space maintainer`
- Compoziție canonică: `pure biphasic calcium sulfate`
- Rol canonic: produs orientat în primul rând spre `socket grafting`

### 2.4 Augma Shield

- Tip canonic: `intraoral wound dressing / graft protection layer`
- Rol canonic:
  - protejează graftul
  - permite proliferarea țesutului moale peste graft
  - se folosește în special în socket grafting și ca strat suplimentar de protecție peste suturi

### 2.5 Starter Package Bonesphere

- Tip canonic: `ofertă comercială Bonesphere`
- Nu este produs oficial de catalog Augma
- Pachetul front-end actual din documentele locale:
  - `6 seringi Bond Apatite`
  - `1 cutie Augma Shield`
  - protocol, selecție de caz, analiză CBCT și suport clinic

## 3. Surse locale analizate

### 3.1 Training și materiale clinice

- `TRAINING AMOS VANZARI.pdf`
- `Training Amos Augma (1).pdf`
- `Bone+Graft+Cement+-+Features+&+Clinical+Benefits+-+E-Book.pdf`

### 3.2 Documente interne Bonesphere

- `Ideal Customer Profile (ICP) - Bonesphere_Augma.md`
- `OFERTA $100M.md`
- `Landing Page Final Copy - AUGMA.md`
- `Landing Page Structure - AUGMA.md`
- `Overview Strategie Ecosistem Marketing.md`

### 3.3 Observație importantă

- Promptul inițial a menționat de două ori `Training Amos Augma (1)`. În workspace există o singură versiune cu acest nume; documentul a fost tratat ca o sursă unică.

## 4. Surse externe oficiale și literatură

### 4.1 Site oficial Augma

- `https://www.augmabio.com/about-us/`
- `https://www.augmabio.com/product/bond-apatite/`
- `https://www.augmabio.com/product/3d-bond/`
- `https://www.augmabio.com/faq/`
- `https://www.augmabio.com/product/augma-standard/`
- `https://www.augmabio.com/biphasic-calcium-sulfate-overview/`

### 4.2 Literatură / articole

- Thomas MV, Puleo DA. `Calcium sulfate: Properties and clinical applications`. J Biomed Mater Res B Appl Biomater. 2009. PMID: `19025981`
- Nilsson M, Zheng MH, Tagil M. `The composite of hydroxyapatite and calcium sulphate: a review of preclinical evaluation and clinical applications`. Expert Rev Med Devices. 2013. PMID: `24053255`
- Baranes D et al. `Increasing Lateral Ridge Width for Implant Placement Using Calcium Sulphate Bone Cement Technique`. 2022. PMID: `35334198`
- Ferreira JC, Kurtzman GM. `Minimal invasive horizontal ridge augmentation with Calcium Sulfate bone cement: A case series`. 2023. DOI: `10.18103/mra.v11i10.4598`

## 5. Ce este Augma, pe scurt

### Sinteză canonică

Augma Biomaterials este o companie axată pe `bone graft cements` pentru augmentare osoasă în zona dentară și maxilo-facială. Nucleul tehnologic al companiei este `biphasic calcium sulfate`, iar diferențierea publică se face prin combinarea a trei elemente:

- materiale injectabile / modelabile care fac priză în prezența sângelui și salivei
- protocoale chirurgicale minim invazive comparativ cu abordările tradiționale cu membrană
- suport clinic și educație continuă

`Source tags: [site oficial Augma] [literatură]`

## 6. Identitate companie + rolul lui Amos Yahav

### Ce afirmă oficial Augma

- Augma dezvoltă substitute osoase pentru augmentare și pune accent pe produse noi + suport clinic pentru utilizatori.
- Site-ul oficial descrie compania ca dezvoltator și producător de substitute osoase pentru piața dentară, cu accent pe handling clinic mai bun și rezultate mai bune.
- Sloganul oficial: `Better handling, Better results`.
- Viziunea companiei este legată direct de căutarea unor soluții mai simple pentru augmentare osoasă.

### Rolul lui Amos Yahav

- Fondator al Augma Biomaterials; în materialele publice Augma este asociat cu conducerea strategică a companiei.
- Pe site este prezentat drept inventatorul tehnologiei `biphasic calcium sulfate`.
- În materialele locale este și principala sursă de autoritate pentru:
  - diferențele dintre `3D Bond+` și `Bond Apatite`
  - logica biologică a protocolului fără membrană
  - mesajul comercial către implantologi

### Interpretare internă utilă

Pentru LLM, Amos Yahav trebuie tratat ca:

- `expert/inventator` în stratul factual
- `voce de training și framing` în stratul intern

Nu trebuie tratat automat ca dovadă științifică independentă pentru orice claim clinic.

`Source tags: [site oficial Augma] [training intern]`

## 7. Arhitectura de produs

### 7.1 Imagine de ansamblu

Augma nu este doar un singur material, ci un sistem format din:

- `3D Bond+` - produs de bază pe `pure BCS`, orientat spre socket grafting
- `Bond Apatite` - produs compozit `BCS + HA`, pentru defecte mai largi și control de volum pe termen mai lung
- `Augma Shield` - strat de protecție / wound dressing peste graft sau peste suturi, în funcție de protocol

### 7.2 Relația dintre produse

- `3D Bond+` este baza tehnologică din punct de vedere conceptual: pur BCS, resorbție mai rapidă, focus pe socket-uri.
- `Bond Apatite` extinde capabilitatea clinică prin adăugarea de HA pentru menținerea volumului mai mult timp.
- `Augma Shield` nu este un graft; este accesoriul de protecție și management al vindecării țesutului moale.

`Source tags: [site oficial Augma] [training intern]`

## 8. Fișe canonice de produs

### 8.1 Bond Apatite

#### Rezumat

Bond Apatite este produsul care trebuie tratat ca `front-end flagship` în ecosistemul Bonesphere actual.

#### Ce spune oficial Augma

- este un `composite graft`
- compus din `2/3 biphasic calcium sulfate cement matrix` și `HA granules`
- este `long-term space maintainer`
- este destinat să umple sau să augmenteze `a large diversity of osseous defects`
- protocoalele publice asociate includ:
  - socket grafting cu flap reflection
  - socket grafting fără flap reflection
  - lateral ridge augmentation
  - augmentation in the aesthetic zone
  - open sinus lift
  - closed sinus lift

#### Ce reiese din e-book și training

- BCS oferă handling, setting rapid și efect de barieră.
- HA este introdus pentru menținerea volumului pe indicații mai mari sau defecte mai puțin contenitive.
- În training, Bond Apatite este produsul recomandat când se trece de la socket-uri simple la:
  - augmentare laterală
  - sinus lift
  - cazuri mai mari sau mai puțin stabile volumetric

#### Ce trebuie reținut pentru LLM

- `Bond Apatite = produsul pentru defecte mai largi și control de volum pe termen mai lung`
- LLM-ul poate spune cu încredere că produsul combină `BCS + HA` și că este produsul Augma pentru o gamă mai largă de defecte osoase.
- LLM-ul nu trebuie să afirme automat că este potrivit `pentru orice defect, în orice situație` fără context clinic.

`Source tags: [site oficial Augma] [literatură] [training intern] [poziționare Bonesphere]`

### 8.2 3D Bond+

#### Rezumat

3D Bond+ este produsul Augma centrat pe `socket grafting`.

#### Ce spune oficial Augma

- este `short-term space maintainer`
- este `pure biphasic calcium sulfate`
- vine în smart syringe
- este optim pentru `socket grafting procedures`
- indicații publice clare:
  - socket grafting cu 4 walls
  - socket grafting cu missing buccal plate

#### Ce reiese din training

- este descris ca varianta `albastră`, 100% BCS
- resorbția mai rapidă îl face mai puțin potrivit pentru defecte mai mari unde trebuie menținut volumul pe termen mai lung
- trainingul explică explicit că pentru augmentare laterală se preferă `Bond Apatite`, nu `3D Bond+`

#### Notă de prudență

Pagina de produs afirmă `100% bone regeneration 3 months after augmentation procedure`. Pentru LLM, formularea sigură este:

`3D Bond+ este poziționat oficial de Augma ca produs pentru socket grafting, cu transformare osoasă rapidă și menținere pe termen scurt a spațiului.`

Nu folosi automat formularea `100% bone regeneration la 3 luni` ca adevăr universal în răspunsuri generale.

`Source tags: [site oficial Augma] [training intern]`

### 8.3 Augma Shield

#### Rezumat

Augma Shield este componenta de protecție a graftului și a plăgii, nu materialul de regenerare osoasă.

#### Ce spune oficial Augma

- pentru graft protection se folosește `Augma Shield`
- când este plasat peste graft, `protects it and allows soft tissue to proliferate over the Augma graft`
- în bundle-urile oficiale este descris drept `attachable intraoral wound dressing`
- utilizare menționată oficial:
  - socket grafting cu 4 bony walls
  - strat suplimentar de protecție peste suturi după augmentare

#### Ce reiese din training și documentele locale

- în documentele locale, Shield este parte a protocolului complet și a starter package-ului
- trainingul discută timing-ul de scoatere / menținere și rolul de protecție când graftul rămâne expus parțial sau este nevoie de stabilizare a vindecării moi

#### Ce trebuie reținut pentru LLM

- `Augma Shield = wound dressing / protection layer`
- nu îl confunda cu membrană clasică de GBR
- nu îl descrie ca principal agent de regenerare osoasă

`Source tags: [site oficial Augma] [training intern] [poziționare Bonesphere]`

## 9. Mecanism și logică de material

### 9.1 Biphasic Calcium Sulfate (BCS)

#### Idee centrală

BCS este nucleul tehnologic Augma. Atât site-ul oficial, cât și trainingul intern insistă asupra combinației controlate dintre fazele hemihidrat și dihidrat ale calcium sulfate pentru a obține:

- modelabilitate
- timp de priză rapid
- priză în prezența sângelui și salivei

#### Ce susține literatura

- calcium sulfate are istoric clinic lung, este bine tolerat și se resoarbe rapid și complet, fără răspuns inflamator major în majoritatea contextelor discutate în review-uri
- interesul modern revine tocmai datorită handlingului, biocompatibilității și resorbției rapide

#### Ce adaugă trainingul Amos

- explicația industrială a transformării `dihidrat -> hemihidrat -> dihidrat cristalizat`
- diferențierea puternică față de `biphasic calcium phosphate`, care este alt material
- insistența că termenul corect de educat doctorii este `biphasic calcium sulfate`, nu altă familie de materiale

`Source tags: [site oficial Augma] [literatură] [training intern]`

### 9.2 Rolul Hydroxyapatite în Bond Apatite

#### Sinteză

HA este componenta care extinde menținerea de volum și susține utilizarea în defecte mai mari.

#### Ce susțin sursele

- e-book-ul Augma spune că BCS are resorbție rapidă și formare de os nou, iar HA furnizează `slow-resorbing osteoconductive scaffold`
- review-ul PubMed despre HA + calcium sulfate susține că această combinație are potențial mare ca substitute osos și transformare osoasă în volum, nu doar de la suprafață către interior

#### Concluzie operațională

- `BCS = handling + priză + efect de barieră + turnover rapid`
- `HA = space maintenance mai lungă + control de volum în defecte mai mari`

`Source tags: [site oficial Augma] [literatură] [training intern]`

### 9.3 Radiographic behavior

#### Pattern descris în surse

- imediat post-op: aspect radiopac
- după câteva zile: poate deveni mai radiotransparent în faza de osteoid / os tânăr
- ulterior: devine din nou mai radioopac pe măsură ce osul se calcifică

Acesta este un element important pentru LLM, fiindcă mulți clinicieni interpretează greșit dispariția radiopacității inițiale.

`Source tags: [site oficial Augma] [e-book] [training intern]`

## 10. Indicații și limite

### 10.1 Ce este susținut clar oficial

#### Bond Apatite

- socket grafting
- lateral ridge augmentation
- aesthetic zone augmentation
- open sinus lift
- closed sinus lift
- defecte osoase diverse

#### 3D Bond+

- socket grafting cu 4 walls
- socket grafting cu missing buccal plate

### 10.2 Ce apare puternic în training, dar trebuie formulat atent

- `în afară de augmentarea verticală, merge cam tot`
- `cu Bond Apatite poți lucra pe orice`

Aceste formulări apar ca limbaj intern de convingere și simplificare. Pentru LLM, formularea sigură este:

`Bond Apatite este poziționat de Augma pentru o gamă largă de defecte osoase și este frecvent asociat în materialele de training cu augmentarea laterală, zona estetică, sinus lift și defecte mai mari. Selecția cazului rămâne dependentă de protocol și de evaluarea clinicianului.`

### 10.3 Limite / zone care cer context clinic

- augmentare verticală
- defecte foarte mari sau slab vascularizate
- infecție acută activă
- indicații în care clinicianul întreabă despre decorticare, flap design, primary closure sau membrane substitute în context foarte specific

Pentru aceste întrebări, LLM-ul trebuie să recomande protocolul oficial și clinicianul, nu să improvizeze.

`Source tags: [site oficial Augma] [training intern] [literatură]`

## 11. Logica protocolului

### 11.1 No membrane

#### Poziția oficială Augma

- cu `Augma bone graft cement`, membrana nu este necesară
- materialul este prezentat ca `graft and barrier at the same time`
- folosirea membranei este descrisă ca element care poate întârzia healingul și forța revenirea la protocoale mai invazive

#### Cum traduce trainingul intern ideea

- avantajele pentru medic sunt: fără membrană, procedură mai rapidă, mai puțin invazivă, mai puține complicații
- pitch-ul comercial se mută de la `preț` la `valoare procedurală`

#### Regulă LLM-safe

LLM-ul poate spune:

`În protocolul oficial Augma pentru bone cements, membrana nu este în mod obișnuit necesară, deoarece materialul este prezentat ca graft și barieră în același timp.`

LLM-ul nu trebuie să spună:

`În augmentarea osoasă nu ai nevoie niciodată de membrană.`

`Source tags: [site oficial Augma] [training intern]`

### 11.2 Flap handling și closure

#### Ce apare oficial

- protocoale minim invazive
- tension-free flap și primary closure nu sunt obligatorii în logica Augma
- expunerea parțială poate fi protejată cu collagen sponge sau Augma Shield, conform FAQ și protocolului

#### Ce apare în training

- accent pe lambou minim
- fără periosteal releasing incisions extinse
- `full tension` / `flap closure with tension` ca opoziție față de paradigma tradițională `tension-free closure`

#### Traducere sigură pentru LLM

- LLM-ul poate descrie filosofia protocolului: `minimal flap manipulation`, `fără dependență de periosteal release extins`, `primary closure nu este întotdeauna obligatorie`
- LLM-ul nu trebuie să dea instrucțiuni chirurgicale operative pas cu pas dacă întrebarea este medicală și de caz

`Source tags: [site oficial Augma] [training intern]`

### 11.3 Compaction și working logic

- FAQ-ul oficial insistă pe compresie cu dry gauze `3 secunde`, urmată de compactare suplimentară
- trainingul Amos repetă că `well compacted` este critic pentru rezultat
- această idee trebuie considerată parte centrală a protocolului, nu un detaliu minor

`Source tags: [site oficial Augma] [training intern]`

### 11.4 Rolul Augma Shield în protocol

- protejează graftul
- susține proliferarea țesutului moale peste graft
- poate fi folosit când există expunere sau ca strat suplimentar peste suturi
- în ecosistemul Bonesphere, Shield este parte din `protocolul complet`, nu un accesoriu secundar

`Source tags: [site oficial Augma] [training intern] [poziționare Bonesphere]`

## 12. Evidence map

### 12.1 Ce este bine susținut

- calcium sulfate are istoric clinic lung și resorbție rapidă / completă în multe contexte
- combinația HA + calcium sulfate are logică de material pentru menținere de volum și transformare osoasă
- Bond Apatite este produsul Augma pentru defecte mai variate și indicații mai largi decât 3D Bond+
- 3D Bond+ este produsul orientat spre socket grafting
- Augma promovează oficial protocolul `no membrane`
- Augma pune accent pe suport clinic și educație, nu doar pe material

### 12.2 Ce este plauzibil, dar trebuie calificat

- `complete transformation into the patient's own bone`
- `true bone regeneration`
- `no increased risk of peri-implantitis`
- `fără complicații / fără infecții`

Acestea se pot menționa doar:

- ca formulări oficiale Augma
- sau ca rezultate raportate în anumite surse

nu ca garanții universale.

### 12.3 Ce trebuie tratat ca limbaj de training sau de vânzare

- `merge pe orice`
- `în afară de verticală, tot se poate face`
- `100% os`
- `nu ai nevoie niciodată de membrană`
- `garantat dacă respecți protocolul`

Acestea nu trebuie folosite ca adevăruri brute de LLM.

`Source tags: [literatură] [site oficial Augma] [training intern] [poziționare Bonesphere]`

## 13. Strat comercial Bonesphere

### 13.1 Ce vindem front-end

Conform documentelor locale, front-end-ul comercial este:

- produs principal: `Bond Apatite`
- produs de completare protocol: `Augma Shield`
- format ofertă: `Primele 6 cazuri`
- diferențiator principal: suport clinic real, nu doar biomaterial

### 13.2 De ce focusul e pe Bond Apatite

Documentele locale arată clar că:

- majoritatea argumentelor de landing page sunt construite în jurul lui `Bond Apatite`
- `3D Bond+` există în arhitectura de produs, dar nu este focusul principal al paginii front-end actuale
- motivul este comercial și educațional:
  - Bond Apatite permite discuția despre augmentare laterală, defecte mai serioase, control de volum și protocol complet

### 13.3 Starter package actual

- `6 seringi Bond Apatite`
- `1 cutie Augma Shield`
- protocol pas cu pas
- selecția cazurilor
- analiză CBCT
- suport clinic direct / grup privat / ghidare pe cazuri

### 13.4 Mesajul comercial central

Bonesphere nu vinde doar un material. Bonesphere vinde:

- reducerea complexității percepute
- implementarea controlată a primelor cazuri
- reducerea fricii de eșec
- accesul implantologului la augmentare fără a intra în paradigma chirurgiei clasice complexe

`Source tags: [poziționare Bonesphere] [training intern]`

## 14. ICP și cumpărătorul ideal

### Profil canonic

- medic stomatolog implantolog
- clinică privată
- volum recurent de implanturi
- nu chirurg maxilo-facial tradițional
- deja folosește biomateriale, dar este frustrat de complexitatea GBR clasic

### Ce îl doare

- prea multe variabile în protocol
- membrană, pini, șuruburi, flapuri mari, complicații
- pierdere de cazuri către chirurgi
- anxietate că nu poate reproduce sigur rezultatul

### Ce îl motivează

- protocol mai simplu
- mai puține componente
- minim invaziv
- suport clinic la primele cazuri
- cost total procedural mai bun, nu neapărat cel mai mic preț pe seringă

### Cine nu e fit bun

- chirurgul tradițional atașat de tehnicile clasice
- medicul care cumpără doar pe preț
- medicul care face augmentări foarte rar
- medicul fără apetit pentru educație și protocol

`Source tags: [poziționare Bonesphere]`

## 15. Terminologie preferată și terminologie de evitat

### Termeni preferați

- `bone graft cement`
- `biphasic calcium sulfate (BCS)`
- `long-term space maintainer`
- `short-term space maintainer`
- `intraoral wound dressing`
- `socket grafting`
- `lateral ridge augmentation`
- `true bone regeneration` numai dacă este atribuit sursei Augma
- `transformare progresivă în os vital` când este formulată prudent

### Termeni de folosit cu prudență

- `100% bone regeneration`
- `complete regeneration`
- `no membrane`
- `any type of bony defect`
- `stands alone in all cases`

### Termeni de evitat în copy LLM-safe

- `merge pe orice`
- `garantat`
- `fără niciun risc`
- `înlocuiește orice protocol`
- `nu mai ai nevoie de judecată clinică`

## 16. LLM guardrails

### 16.1 Ce poate spune cu încredere

- Augma este o companie axată pe `bone graft cements`
- Amos Yahav este fondatorul și inventatorul tehnologiei BCS, conform site-ului Augma
- Bond Apatite este compozit `BCS + HA` și este poziționat pentru o gamă largă de defecte osoase
- 3D Bond+ este produsul `pure BCS` orientat spre socket grafting
- Augma Shield este stratul de protecție / wound dressing folosit peste graft sau suturi
- protocolul oficial Augma este construit în jurul ideii că membrana nu este în mod obișnuit necesară pentru aceste bone cements

### 16.2 Ce trebuie formulat cu prudență

- transformarea completă în osul pacientului
- viteza exactă de resorbție
- valori absolute de os nou la intervale fixe
- lipsa complicațiilor
- rezultate pentru defecte mari sau dificile

Formularea preferată:

`sursele Augma descriu...`

`review-urile și materialele clinice indică...`

`în funcție de caz și protocol...`

### 16.3 Ce nu trebuie să facă LLM-ul

- să dea indicații chirurgicale definitive pentru un caz real
- să recomande materiale sau pași operatori fără context clinic
- să transforme limbajul de training în adevăr absolut
- să promită rezultat sau vindecare

### 16.4 Întrebări la care LLM-ul trebuie să ceară context clinic

- `Ce folosesc la cazul meu: 3D Bond+ sau Bond Apatite?`
- `Pot face augmentare laterală într-un caz cu vascularizație slabă / infecție / defect mare?`
- `Dacă nu obțin primary closure, ce fac?`
- `Când e indicată decorticarea și cât de profundă?`
- `Pot înlocui membrana în orice protocol cu Augma?`
- `Care este timpul exact până la implant în cazul meu?`

## 17. Răspunsuri scurte canonice pentru LLM

### Ce este Augma?

Augma Biomaterials este o companie de `bone graft cements` pentru augmentare osoasă în implantologie și chirurgie dentară, construită în jurul tehnologiei `biphasic calcium sulfate` și a unor protocoale minim invazive, fără membrană în logica oficială Augma.

### Care e diferența dintre Bond Apatite și 3D Bond+?

`Bond Apatite` este compozitul `BCS + HA`, poziționat pentru defecte osoase mai diverse și menținere de volum pe termen mai lung. `3D Bond+` este `pure BCS`, poziționat în primul rând pentru socket grafting și menținere de spațiu pe termen scurt.

### Ce rol are Augma Shield?

Augma Shield este un `intraoral wound dressing` folosit pentru protecția graftului și pentru a susține vindecarea țesutului moale peste zona augmentată.

### Ce vindem front-end și de ce?

Front-end-ul Bonesphere actual vinde în principal `Bond Apatite` plus `Augma Shield` într-un pachet starter cu suport clinic, deoarece accentul comercial este pe implementarea controlată a primelor cazuri și pe reducerea fricii de eșec.

### Ce claims sunt safe pentru un LLM?

Sunt safe claims despre:

- arhitectura de produs
- compoziția materialelor
- indicațiile publice generale
- filosofia protocolului Augma
- rolul suportului clinic și al educației

Nu sunt safe, fără calificare, claims absolute despre rezultate garantate, lipsa completă a complicațiilor sau potrivirea universală a protocolului.

## 18. Open questions / zone de clarificat în viitor

- IFU-urile complete pentru fiecare piață pot rafina și mai precis indicațiile / contraindicațiile
- pentru uz medical-reglementat, ar trebui extras separat un `claims whitelist` strict din IFU + pagini oficiale + articole
- dacă se dorește un agent LLM pentru răspunsuri clinice, trebuie adăugat un `medical escalation policy` separat

## 19. Rezumat executiv

Augma are două produse principale de interes pentru voi:

- `Bond Apatite` - produsul principal de front-end, pentru defecte mai largi și protocol complet
- `3D Bond+` - produs orientat spre socket grafting

`Augma Shield` este piesa de protecție a protocolului, iar Bonesphere vinde comercial nu doar materialul, ci implementarea controlată a unui protocol mai simplu pentru implantologi. Documentul acesta trebuie tratat ca sursa canonică pentru orice LLM care urmează să vorbească despre Augma, diferențele dintre produse, oferta Bonesphere și limitele claims-urilor permise.
