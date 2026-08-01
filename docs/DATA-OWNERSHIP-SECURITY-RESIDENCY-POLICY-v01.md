# Zinergi Data Ownership, Security & Residency Policy v0.1

Status: architecture requirement / pilot gate

## 1. Data control and portability
Zinergi must retain control over all business, client and platform data processed for the Zinergi service. Managed infrastructure providers are service providers/processors, not a reason for vendor lock-in.

Hard requirements:
- Data model uses portable PostgreSQL-compatible structures wherever practical.
- Zinergi must be able to produce a complete usable export of database data, document metadata and private stored files, subject to privacy/retention rules.
- Schema/migrations are version-controlled in the Zinergi repository.
- A documented migration/exit procedure must exist before production scale-up.
- No critical business logic may depend solely on undocumented provider-specific behavior.

Note: ownership/control of Zinergi/customer data is distinct from ownership of the physical cloud servers, which remain infrastructure operated by the hosting provider.

## 2. EU data residency
Production must use an approved EU hosting region. Preferred current target: Frankfurt / eu-central-1, subject to final DPA, subprocessors and legal/privacy review at production setup.

Do not create production databases, replicas, backups or analytics destinations outside the approved geographic scope without a documented privacy/security review.

## 3. Contractual/privacy requirements before real health data
- Current Supabase DPA reviewed and accepted for the Zinergi legal entity.
- Subprocessor list reviewed.
- Roles under GDPR documented (controller/processor as applicable).
- International transfer mechanism/subprocessor transfers reviewed where applicable.
- DPIA completed/reviewed because the platform is intended to process health-related data at scale.
- Retention and deletion schedule documented.
- Privacy notice reflects actual architecture and vendors.

## 4. Encryption and transport
- HTTPS/TLS only for application traffic.
- SSL enforcement enabled for database connections where supported.
- Data encrypted at rest by managed infrastructure.
- Consider application-layer/field-level encryption for selected especially sensitive fields after threat-model review.
- Backups and exported copies must be encrypted and access-controlled.

## 5. Identity and access
- Supabase Auth (or approved equivalent) for end-user identity.
- MFA mandatory for Zinergi administrators and coaches before production; strongly consider step-up authentication for sensitive admin operations.
- Least privilege for project/team access.
- Separate development, staging/pilot and production environments with separate credentials and databases.
- Production access restricted to named authorized personnel.
- Role/entitlement decisions are server/database enforced, never trusted from localStorage or client-editable fields.

## 6. Row Level Security — default deny
All client/health/message/document metadata tables exposed through an API must use RLS and explicit policies.

Mandatory adversarial tests:
- Client A cannot read/write Client B data.
- Guessing/changing UUIDs does not bypass authorization.
- Coach can access only explicitly assigned clients and permitted resources.
- Removing a coach-client assignment immediately removes access.
- Admin privilege cannot be self-assigned from the browser.
- Anonymous access returns no protected health data.
- Bulk/list/search endpoints obey the same authorization rules.

## 7. Keys and secrets
- Publishable browser key may be present client-side only when protected resources are secured by Auth + RLS.
- Service-role keys, database passwords, signing secrets and privileged credentials are NEVER stored in frontend code, localStorage, public repository content or public build variables.
- Privileged secrets live only in an approved encrypted secret store/server environment.
- Maintain an inventory: secret name, purpose, owner, environment, creation/rotation date.
- Document emergency revocation/rotation.
- Rotate secrets after suspected exposure and according to the adopted security schedule.

## 8. Private document storage
Health/lab/client documents must use private storage only.
- No public bucket for health documents.
- Access policies mirror client ownership and coach assignments.
- Short-lived signed access only after authorization where needed.
- File type/size validation and malware scanning strategy before broad production use.
- Storage access included in audit/security testing.

## 9. Logging, audit and monitoring
- Audit sensitive admin actions, assignment changes, privacy actions and relevant record changes.
- Audit record: actor, action, resource, timestamp, result; avoid copying sensitive clinical content into logs unnecessarily.
- Authentication/security events monitored.
- Alerts defined for suspicious or repeated unauthorized activity where supported.
- Connection/access logging enabled where required by the adopted compliance/security standard.
- Logs protected against ordinary user modification and given an explicit retention period.

## 10. Backup, restore and independent portability
- Managed backups enabled at an appropriate production tier.
- Point-in-time recovery considered/required based on final production risk assessment.
- Restore procedure documented and tested before real pilot data is relied upon.
- Periodic encrypted portable export/backup strategy established so provider failure/account loss does not eliminate Zinergi's recovery path.
- Recovery objectives (RPO/RTO) documented before production launch.

## 11. Security validation
Before real client health data:
- Supabase Security Advisor findings reviewed/resolved.
- RLS automated/adversarial test suite passes.
- Secrets scan of repository/build artifacts passes.
- Dependency/security review passes.
- Authentication/session tests pass.
- Private storage isolation tests pass.
- Backup restore exercise passes.
- Incident response tabletop completed.

Before material scale-up:
- Independent security review / penetration test.
- Remediation of critical/high findings before GO.

## 12. Scalability without weakening authorization
Architecture must support multiple specialisms per coach and 500+ clients per coach/practice without broadening data permissions. Use indexed assignment/entitlement tables, pagination and server-side filtering. Performance shortcuts must never replace per-resource authorization.

## 13. Vendor exit test
At least before large-scale production, demonstrate that Zinergi can:
1. Export PostgreSQL schema/migrations and data in a usable form.
2. Export private stored files and metadata under authorized administrative control.
3. Restore/migrate a representative test dataset to another PostgreSQL-compatible environment.
4. Reconstruct user-to-client/coach relationships without relying on undocumented local browser state.
5. Verify record counts/integrity after migration.

## 14. Pilot GO / NO-GO
NO-GO for real client health data until all of the following are evidenced:
- EU production region approved.
- DPA/privacy/DPIA review completed.
- Authentication and MFA requirements configured.
- RLS/default-deny policies tested adversarially.
- Secrets and privileged keys secured.
- Private storage tested.
- Logging/monitoring baseline configured.
- Backup + successful restore test completed.
- Incident procedure documented.
- End-to-end fictitious-user security test passed.

Certificates/compliance attestations from a hosting provider support due diligence, but do not make Zinergi automatically compliant or secure; Zinergi remains responsible for its application architecture, access controls, data and security configuration.
