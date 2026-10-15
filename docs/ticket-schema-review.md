# Hillman Robotics Ticket table review

Completed October 9, 2026 against the live Hillman Robotics developer environment. Solution: `HillmanRobotics`. Table: `new_ticket`; entity set: `new_tickets`. The existing `new_` publisher prefix was retained.

## Changes applied and published

| Column | Before | After |
|---|---|---|
| Title (`new_title`) | Optional, 850 characters | Business required, 150 characters; remains primary name |
| Description (`new_description`) | Business required, 100 characters | Business required, 4,000 characters |
| Ticket Number (`new_ticketnumber`) | Plain text | Autonumber: `HR-{SEQNUM:5}` |
| Priority (`new_priority`) | Low / Medium / High; default Medium | Normal / High; default Normal |

Removed empty duplicate/custom columns `new_title_1`, `new_priority_1`, `new_status`, and `new_createdon`. The table contained zero records before the changes. Dependency checks identified references only in the generated Information main form and Active Tickets view. Those references were updated and published, and a second dependency check returned zero dependencies before each column was deleted.

The main form and Active Tickets view now use the retained columns. The form's Created On field uses the built-in `createdon` column and is read-only; Ticket Number is also read-only on the form. Built-in Status, Status Reason, Owner, Created On, and Modified On remain intact.

## Verified retained configuration

- User/team-owned table; primary name `new_title`.
- Category: VPN, Account, Hardware, Software, Other; business required.
- Impact: Single user, Multiple users; business required.
- Ticket Status: New, In Progress, Resolved; default New.
- Intake Channel: App, Agent; default App.
- Routed: Boolean; default false.
- Assigned Team: text, 100 characters.
- Resolved On: optional date/time.

Category and Impact retain the existing form defaults (VPN and Single user). If intake must force an explicit selection, clear those defaults in a later change.

## Choice values for future flows

| Column | Label | Value |
|---|---|---|
| Category | VPN | 100000000 |
| Category | Account | 100000001 |
| Category | Hardware | 100000002 |
| Category | Software | 100000003 |
| Category | Other | 100000004 |
| Impact | Single user | 100000000 |
| Impact | Multiple users | 100000001 |
| Priority | Normal | 100000000 |
| Priority | High | 100000002 |
| Ticket Status | New | 100000000 |
| Ticket Status | In Progress | 100000001 |
| Ticket Status | Resolved | 100000002 |
| Intake Channel | App | 100000000 |
| Intake Channel | Agent | 100000001 |

Priority High is **100000002**, not 100000001. Use the actual choice value or designer selector in automation.

## Verification results

- Published metadata: required levels, limits, choice labels/defaults, autonumber format, ownership, and primary name verified.
- Form/view definitions: no references to deleted columns remained.
- Two temporary synthetic records created with distinct automatically generated numbers: `HR-01001` and `HR-01002`.
- Description: exactly 4,000 characters saved; 4,050 characters rejected by Dataverse.
- Title: exactly 150 characters saved; 151 characters rejected by Dataverse.
- Both temporary records deleted; final table count verified as zero.

Choice defaults were verified in metadata; API test records supplied choice values explicitly. Business-required metadata is an application-level requirement and should also be checked through the app's form. These API checks do not claim that the full technician app, routing flow, or agent has been tested.

The existing autonumber seed was retained. Validation attempts consumed sequence values, so future ticket numbering need not begin at 00001 or be gap-free.

## Backups and evidence

Before and after unmanaged solution exports and raw metadata snapshots are in the gitignored `private/` directory. They may contain environment identifiers and should not be published without review. The exports back up solution configuration, not business records; this table was empty before review.

Refresh the Ticket Columns page before taking the replacement schema screenshot. Existing screenshots document the earlier configuration.
