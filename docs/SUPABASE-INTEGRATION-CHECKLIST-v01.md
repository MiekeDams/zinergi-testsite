# Zinergi — Supabase Integration Checklist v0.1

Doel: de huidige lokale testapp gecontroleerd omzetten naar een beveiligde centrale testomgeving. Tot alle pilot-gates zijn afgerond: **geen echte cliëntgezondheidsdata gebruiken**.

## 1. Project & secrets
- [ ] Open het juiste Supabase-project op laptop.
- [ ] Noteer Project URL en publishable/anon key uitsluitend in de bedoelde frontend-configuratie.
- [ ] Service-role key nooit in browsercode, GitHub of publieke environment variables plaatsen.
- [ ] Controleer dat `.env`/lokale secrets niet worden gecommit.

## 2. Database schema
Maak/migreer minimaal aparte tabellen voor:
- profiles
- coach_client_assignments
- goals
- care_paths / care_path_events
- check_ins / progress
- evaluations
- measurements
- protocols / protocol_items
- messages
- notifications
- documents (metadata)
- consent_events (append-only historie)
- privacy_requests
- audit_events

Iedere cliëntgebonden rij krijgt een stabiele `user_id`/`client_id`; coachrelaties lopen via expliciete assignments. Gebruik UUID's en server timestamps.

## 3. Authentication
- [ ] E-mail login/testaccount flow activeren.
- [ ] Test cliëntaccount A.
- [ ] Test cliëntaccount B.
- [ ] Test coachaccount.
- [ ] Test adminaccount.
- [ ] Logout, verlopen sessie, password reset en ongeldige sessie testen.
- [ ] Rollen niet vertrouwen vanuit localStorage of browservelden.

## 4. RLS — harde pilot gate
RLS aanzetten op alle cliënt-/gezondheids-/communicatietabellen.

Bewijs met tests:
- [ ] Cliënt A leest/schrijft alleen toegestane eigen data.
- [ ] Cliënt A kan data van cliënt B niet lezen, schrijven of raden via UUID.
- [ ] Coach ziet alleen expliciet toegewezen cliënten.
- [ ] Coach kan alleen toegestane velden/acties wijzigen.
- [ ] Adminrechten worden server-side bepaald.
- [ ] Anonieme gebruiker krijgt geen gezondheidsdata.
- [ ] Verwijderde coach-client assignment trekt toegang direct in.

## 5. Consent & privacy
- [ ] Verplichte dienstverlening scheiden van optionele doeleinden.
- [ ] Consent als events bewaren: doel, status, timestamp, versie, actor.
- [ ] Intrekking schrijft nieuw event en overschrijft historie niet.
- [ ] Marketing, research, analytics en model improvement standaard niet impliciet toestaan.
- [ ] Privacyverzoeken server-side registreren.
- [ ] Export alleen na authenticatie/identiteitscontrole.
- [ ] Accountverwijdering met verificatie, bewaartermijnen en audit trail.

## 6. Private document storage
- [ ] Private bucket voor cliëntdocumenten.
- [ ] Geen publieke bucket/URL voor gezondheidsdocumenten.
- [ ] Storage policies spiegelen coach-client assignments.
- [ ] Tijdelijke signed URLs alleen voor geautoriseerde gebruikers.
- [ ] Bestandstype/grootte valideren.
- [ ] Metadata apart in database opslaan.
- [ ] Test cliënt A kan bestand cliënt B niet downloaden.

## 7. Migratie van huidige modules
Vervang per module localStorage pas nadat tabel + RLS + tests gereed zijn:
1. Profiel & doelen
2. Intake/onboarding
3. Zorgpad
4. Voortgang/check-ins
5. Evaluaties
6. Lab & Metingen
7. Supplementen & Protocol
8. Coach ↔ cliënt communicatie
9. Notificaties
10. Documentmetadata
11. Consent/privacy
12. Health Timeline als samengestelde view/query

Gebruik tijdens migratie uitsluitend fictieve testdata. Bouw tijdelijk een adapterlaag zodat UI niet tegelijk met alle datalagen hoeft te veranderen.

## 8. Health Timeline
De timeline wordt bij voorkeur niet één duplicerende datatabel. Bouw een veilige server/query-laag die gebeurtenissen uit de brontabellen normaliseert naar: `event_type`, `client_id`, `occurred_at`, `title`, `summary`, `source_id`.

## 9. Logging & audit
- [ ] Log gevoelige beheeracties en relevante dossierwijzigingen.
- [ ] Geen gezondheidsinhoud, tokens of secrets onnodig in browser/server logs.
- [ ] Audit event bevat actor, actie, resource, timestamp en resultaat.

## 10. Backup & herstel
- [ ] Backupbeleid controleren en documenteren.
- [ ] Herstelprocedure vastleggen.
- [ ] Minimaal één restore-oefening uitvoeren vóór bredere pilot.
- [ ] Bewaartermijnen en verwijderbeleid afstemmen op privacy/juridische review.

## 11. Security review
- [ ] Geen service-role/API secrets in repository of browser bundle.
- [ ] Inputvalidatie en output escaping.
- [ ] Rate limiting / abuse controls waar relevant.
- [ ] Security headers/deploymentconfig controleren.
- [ ] Dependencies nalopen.
- [ ] Autorisatie server-side testen, niet alleen UI-knoppen verbergen.

## 12. End-to-end fictieve pilot
Accounts: cliënt A, cliënt B, coach 1, admin 1.

Doorloop:
- [ ] Registratie/login
- [ ] Onboarding + consent
- [ ] Profiel/doelen
- [ ] Zorgpad
- [ ] Check-in/voortgang
- [ ] Meting
- [ ] Protocol
- [ ] Coachbericht
- [ ] Notificatie
- [ ] Evaluatie
- [ ] Timeline
- [ ] Documentmetadata + private testfile
- [ ] Data-export
- [ ] Consent intrekken
- [ ] Verwijderingsverzoek
- [ ] Coach assignment intrekken en toegang opnieuw testen

## 13. Go/no-go
**NO-GO** zolang één van deze punten niet aantoonbaar gereed is:
- authenticatie
- RLS/rollen
- private storage
- privacy/consent productieflow
- security review
- backup/herstel
- incidentprocedure
- volledige end-to-end test

Na technische GO volgt nog een finale privacy/juridische beoordeling voordat echte gezondheidsdata op schaal wordt verwerkt.
