# Next Stages - Portfolio

## Current status

- Date: 2026-02-13
- Scope started: Contact form Phase 1
- Goal: real submission flow from `Send message` with clear UX states

## Presentation readiness snapshot

- [x] UI and storytelling are strong enough for interviews
- [x] Bilingual content and section structure are solid
- [x] GitHub Pages CI/CD is configured and deployable
- [ ] Project links should point to real, separate demos/repos per project
- [ ] Contact form should send to a real endpoint (not mailto only)
- [ ] SEO/social metadata (Open Graph/Twitter) should be completed

## Send message - Phase 1 (recommended)

### Objective

Ship a production-usable contact flow without changing hosting.

### Technical approach

- Frontend `POST` submission from React form
- Form endpoint handled by Formspree
- Lightweight client validation
- UX states: idle, loading, success, error
- Basic anti-spam: honeypot field

### Checklist

- [x] Replace `mailto` submit behavior with async `fetch` submit
- [x] Add loading state and disable submit while sending
- [x] Add client-side validation for required fields and email format
- [x] Add anti-spam honeypot input
- [x] Add success and error feedback messages in EN/ES
- [x] Configure `VITE_FORMSPREE_ENDPOINT` in deployment environment
- [ ] Run final production test against live endpoint

### Environment variable

Use this variable in local and production environments:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Validation criteria (Definition of Done)

- Form sends without opening email client
- User sees explicit success confirmation
- User sees a clear error message if the request fails
- Duplicate fast-click submissions are prevented
- Spam bot basic trap is active
