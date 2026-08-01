# Zinergi Master Roadmap v0.1

Deze roadmap vult de bestaande productontwikkeling aan met de bedrijfs-, juridische, governance- en schaalbaarheidsfundamenten die nodig zijn om Zinergi veilig als professioneel gezondheidsplatform te laten groeien.

## Reeds gebouwde/testfase
- Cliëntfunctionaliteit, onboarding, profiel/doelen en voortgang
- Coach Portal / Coach Dashboard
- Zorgpad
- Lab & Metingen
- Supplementen & Protocol
- Health Timeline
- Notificatiecentrum
- Coach ↔ cliënt communicatie
- Documenten & Uitslagen metadata
- Admin Dashboard
- Pilot Readiness Dashboard
- Supabase Integration Checklist
- Data Ownership, Security & Residency uitgangspunten

## Fase A — Backend, Security & Compliance — harde pilot gate
- Supabase EU-productiearchitectuur; Frankfurt voorkeursregio
- Gescheiden development/test/productie
- Auth voor cliënt, coach, organisatiebeheerder en Zinergi-admin
- MFA voor admins en coaches; evalueren voor cliënten
- Default-deny Row Level Security
- Secrets/key management, rotation en intrekking
- TLS/HTTPS en encryptie at rest
- Private document storage + signed access
- Audit logging en security monitoring
- Back-upbeleid + aantoonbare restore-test
- Incident/datalekprocedure
- Security review en vóór opschaling onafhankelijke pentest
- Vendor-exit/export/restore-test naar andere PostgreSQL-omgeving
- Geen echte gezondheidsdata vóór technische en privacy GO

## Fase B — Legal & GDPR
- Vastleggen welke rechtspersoon Zinergi-platform/software exploiteert
- Rollen bepalen: verwerkingsverantwoordelijke, verwerker, gezamenlijke verantwoordelijkheid waar relevant
- Positie van zelfstandige coaches en organisaties juridisch vastleggen
- DPIA voor verwerking van gezondheidsgegevens
- Privacyverklaring
- Verwerkersovereenkomsten en subverwerkersregister
- Register van verwerkingsactiviteiten
- Rechtsgronden en bijzondere persoonsgegevens documenteren
- Bewaartermijnen per datatype
- Rechten van betrokkenen: inzage, export, correctie, beperking, verwijdering
- Datalekprocedure en meldproces
- Internationale doorgiften/subverwerkers controleren
- Finale review door gespecialiseerde privacy-/IT-jurist vóór echte pilot

## Fase C — Multi-tenant organisatiearchitectuur
Doelmodel:

`Zinergi → organisatie/praktijk → eigenaren/beheerders → coaches → coach-specialismen/certificaten → cliënten → zorgpaden → gezondheidsdata`

Eisen:
- Zelfstandige coach én grotere praktijk ondersteunen
- Meerdere coaches per organisatie
- Meerdere rollen per gebruiker waar nodig
- Eén coach kan meerdere specialismen/certificeringen hebben
- Technisch geschikt voor 500+ cliënten per coach en duizenden per organisatie
- Actieve/inactieve/gearchiveerde cliënten
- Zoeken, filters, paginering en schaalbare queries
- Expliciete coach-client assignments
- Team- en overdrachtsfunctionaliteit
- Directe intrekking van toegang na verwijderen assignment
- Geen autorisatie op basis van alleen frontend/localStorage

## Fase D — Clinical / Professional Governance
- Exact definiëren: coaching/wellness versus medische diagnostiek/behandeling
- Scope-of-practice per coachopleiding/specialisme
- Rode vlaggen en escalatie naar arts/specialist
- Geen automatische diagnose op basis van labs
- Geen onbevoegde medicatie-/behandelbeslissingen
- Protocolversies, auteur, evidencebron, reviewdatum en geldigheid
- Professionele review van lab- en supplementenmodules
- Onderzoeken of bepaalde toekomstige functies onder EU Medical Device Regulation / software medical device regels kunnen vallen vóór implementatie
- Menselijke goedkeuring verplicht voor high-impact gezondheidsbeslissingen

## Fase E — Zinergi Academy & Certification
Leerlijn:
- Foundations
- Specialist
- Zinergi Certified Coach

Eerste productlijnen:
- Training bij Obesitas
- Zinergi Voedingsprotocol
- Labuitslagen leren lezen
- Obesitas & Metabole Gezondheid
- Darmgezondheid voor Coaches
- Menopauze & Training
- Menopauze & Voeding
- Supplementen voor Coaches
- Gedragsverandering & Coaching

Certificeringssysteem:
- Toelatingseisen
- Leerdoelen en curriculum
- Toetsing en slagingsnorm
- Certificaatnummer
- Uitgiftedatum en eventueel geldigheidsduur
- Permanente educatie/nascholing
- Her-certificering waar relevant
- Mogelijkheid certificering te schorsen/intrekken
- Eén coach kan meerdere specialismen tegelijk bezitten
- Behaalde opleiding ontgrendelt passende zorgpaden, protocollen, templates en modules

## Fase F — Academy → Portal businessmodel
- Losse cursus: Portal tijdelijk inbegrepen
- Specialistopleiding: ruimer Portal-pakket inbegrepen
- Zinergi Certified Coach: 12–24 maanden Portal Pro inbegrepen als commerciële optie
- Daarna betaald SaaS-abonnement
- Mogelijke blijvende gratis basisvariant met beperkt actief gebruik
- Technische architectuur niet beperken op commerciële cliëntlimieten
- Abonnementstiers kunnen commercieel limieten hanteren zonder dat database-architectuur beperkt wordt
- Academy-aankoop koppelen aan entitlement/certificering
- Verlopen abonnement mag nooit leiden tot onveilige of onverwachte verwijdering van cliëntdata

## Fase G — SaaS, Billing & Commerce
- Academy checkout
- Portal abonnementen
- Facturatie en btw
- Upgrades/downgrades
- Trial/inbegrepen opleidingsperiode
- Betalingsachterstand/grace period
- Organisatie-abonnementen
- Coach seats en eventueel actieve-cliënttiers
- Entitlements los modelleren van betaling
- Duidelijk beleid bij opzegging
- Financiële rapportage

## Fase H — Intellectueel eigendom & merk
- Eigendom Zinergi-software en broncode vastleggen
- Eigendom methodiek, zorgpaden en protocollen
- Academy-video's, teksten, toetsen en templates
- Certificeringsmerk en gebruiksvoorwaarden
- Handelsmerk/merkregistratie beoordelen
- Licentievoorwaarden voor coaches
- Verbod/voorwaarden rond kopiëren en doorverkopen opleidingsmateriaal
- Rechten van externe auteurs/docenten contractueel regelen

## Fase I — Continuïteit & bedrijfszekerheid
- Disaster Recovery Plan
- Recovery Time Objective / Recovery Point Objective bepalen
- Onafhankelijke exports/back-ups
- Periodieke restore-oefeningen
- Leveranciersregister en kritieke afhankelijkheden
- Exitplan Supabase en andere kernleveranciers
- Storing- en onderhoudscommunicatie
- Continuïteit bij uitval coach/organisatie
- Procedure bij beëindiging Zinergi-account/praktijk

## Fase J — AI Governance — later bouwen
Nog geen autonome AI-coach activeren. Architectuur reserveren voor:
- Welke cliëntdata AI wel/niet mag gebruiken
- Doelbinding en toestemming
- Model/provider governance
- Geen training/model improvement met cliëntdata zonder expliciete passende grondslag/toestemming
- Dataminimalisatie
- Logging van AI-acties en gebruikte context
- Uitlegbaarheid en bronvermelding waar relevant
- Menselijke goedkeuring voor high-impact acties
- Escalatie bij rode vlaggen
- AI mag geen onbevoegde diagnose/voorschriftbeslissing nemen
- Evaluatie EU AI Act en overige toepasselijke regelgeving vóór productie
- Mogelijkheid AI-functionaliteit per organisatie/cliënt uit te schakelen

## Fase K — Pilot & schaalvergroting
1. Supabase integratie met uitsluitend fictieve data
2. Security hardening
3. RLS cross-account tests
4. 2 fictieve cliënten + 1 coach + 1 admin end-to-end
5. Private storage test
6. Export/verwijdering/consent-intrekking test
7. Back-up & restore test
8. Security/privacy/legal GO
9. Kleine gecontroleerde pilot met echte cliënten
10. Feedback, incidentreview en performance review
11. Gefaseerde opschaling
12. Pentest/security review vóór grote commerciële uitrol

## Niet-onderhandelbare ontwerpregels
1. Security & privacy by design.
2. Gezondheidsdata nooit gebruiken in productie voordat pilot security gates groen zijn.
3. Zinergi behoudt controle en dataportabiliteit; geen onnodige vendor lock-in.
4. Autorisatie wordt server-side afgedwongen.
5. Een coach kan meerdere specialismen hebben.
6. Architectuur ondersteunt minimaal 500+ cliënten per coach zonder herontwerp.
7. Commerciële cliëntlimieten staan los van technische schaalbaarheid.
8. AI wordt later als gecontroleerde laag toegevoegd, niet als ongecontroleerde medische beslisser.
9. Protocollen en professionele content zijn versieerbaar en auditeerbaar.
10. Juridische, privacy- en security-review zijn harde gates vóór brede livegang.
