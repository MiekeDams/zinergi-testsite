# Zinergi Backend & Accounts v0.1

Status: foundation for pilot migration. This does not yet store real health data remotely.

## Roles
- client: access only own profile, care path, plans, check-ins, evaluations and coach actions.
- coach: access assigned clients and create/review care actions and plans.
- admin: manage users, assignments and operational configuration.

## Core entities
- users: id, email, role, language, status, created_at
- client_profiles: user_id, display_name, life_phase, goals, preferences, updated_at
- coach_clients: coach_id, client_id, status, assigned_at
- care_paths: id, client_id, path_type, phase, status, started_at, reviewed_at
- plans: id, client_id, plan_type, version, status, payload, created_by, created_at
- daily_checkins: id, client_id, checkin_date, seed, core, pulse, payload
- weekly_reviews: id, client_id, week_start, payload
- coach_actions: id, coach_id, client_id, target, title, body, status, due_at, completed_at
- evaluations: id, client_id, care_path_id, period_weeks, outcome, decision, payload, created_at
- consent_records: id, client_id, consent_type, version, status, granted_at, withdrawn_at
- audit_events: id, actor_id, subject_id, event_type, entity_type, entity_id, occurred_at

## Security requirements before pilot
1. Managed authentication with verified email and password reset.
2. Server-side authorization / row-level access control. Never trust the role sent by the browser.
3. TLS in transit and encryption at rest.
4. No health data in analytics, URLs or application logs.
5. Audit logging for coach/admin access and material changes.
6. Backups plus tested restore procedure.
7. Separate development/test and production environments.
8. Data export and deletion workflows.
9. Explicit consent/version records before optional secondary data uses.
10. Least-privilege service credentials; no secrets committed to this repository.

## Migration rule
Existing localStorage keys remain the temporary demo source. `zinergi-data-v01.js` provides a repository interface. UI modules should progressively use this interface rather than reading localStorage directly. When a production backend is selected, replace the remote adapter without rewriting the UI.

## Pilot gate
Do not onboard real clients with special-category health data into the current localStorage prototype. The production backend, access policies, consent flow, privacy documentation and security checks must be completed first.
