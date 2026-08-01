# Zinergi Data & Consent Architecture v0.1

## Principle
Zinergi separates data required to deliver the health/coaching service from optional secondary uses. Consent for optional purposes must never be bundled with access to care/coaching.

## Data domains
1. Account & identity: account ID, email, role, language, status.
2. Service profile: goals, preferences, onboarding answers needed for personalization.
3. Health/coaching data: nutrition, training, sleep, stress, gut/hormone signals, check-ins, care paths, evaluations, coach notes and later lab results.
4. Operational data: appointments, support and subscription status.
5. Consent & governance: consent version, purpose, timestamp, withdrawal and provenance.
6. Analytics: prefer aggregate/non-identifying product telemetry; never send health payloads to generic analytics.
7. Research/model improvement: OFF by default and separately governed. No assumption that service consent authorizes research, AI training, resale or third-party commercialization.

## Purpose registry v0.1
- service_delivery: required to provide requested Zinergi functions; legal basis to be confirmed in final privacy/DPIA review.
- coach_access: access by assigned professional for service delivery; controlled by assignment and authorization.
- product_analytics: minimal technical/usage analytics; no special-category health payloads.
- research: optional, separate explicit consent where required; withdrawal supported.
- model_improvement: optional and separate from research unless governance explicitly combines them lawfully.
- marketing: separate consent/preferences; health data must not be used for targeted marketing by default.

## Consent record
Each record stores: client_id, consent_type, version, status, granted_at, withdrawn_at. Never overwrite historical consent; append a new record/event when status changes.

## Client rights workflow
- View privacy information and active permissions.
- Withdraw optional consent without losing core service access where the purpose is optional.
- Request export.
- Request correction.
- Request deletion/restriction subject to applicable legal/clinical retention obligations.
- Record fulfillment and audit events.

## Retention
No blanket indefinite retention. Define a retention schedule per data class before production launch. Deletion jobs must remove or irreversibly anonymize eligible records across primary storage, derived datasets and backups according to the approved schedule.

## Research dataset rule
Production health records and research datasets are separate logical domains. Pseudonymized data is still treated as personal data. Only data meeting a documented anonymization standard may be treated as anonymous. Dataset provenance must record source fields, consent/governance basis, transformation version and date.

## Pilot gate
Before real client health data: execute schema/RLS, configure authentication, complete privacy notice and consent copy, complete DPIA/security review, test access isolation with at least two client accounts plus coach/admin, test export/deletion/withdrawal, configure backups and incident process.

This document is product/security architecture, not a substitute for legal advice or a formal GDPR/Dutch healthcare compliance review.
