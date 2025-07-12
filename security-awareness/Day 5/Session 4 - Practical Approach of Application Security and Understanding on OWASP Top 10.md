# OWASP Top 10 – Web Application Security Risks

---

## Overview

- The **OWASP Top 10** is an industry-recognized standard document for web application security, representing the most critical risks facing modern web applications.
- The goal is to raise awareness and provide actionable insight for developers, architects, testers, and security professionals.
- Interactive Practice Platform: [OWASP Juice Shop](https://juice-shop.herokuapp.com)

---

## OWASP Top 10 (2017)

1. **A01:2017 – Injection**
2. **A02:2017 – Broken Authentication**
3. **A03:2017 – Sensitive Data Exposure**
4. **A04:2017 – XML External Entities (XXE)**
5. **A05:2017 – Broken Access Control**
6. **A06:2017 – Security Misconfiguration**
7. **A07:2017 – Cross-Site Scripting (XSS)**
8. **A08:2017 – Insecure Deserialization**
9. **A09:2017 – Using Components with Known Vulnerabilities**
10. **A10:2017 – Insufficient Logging & Monitoring**

---

## OWASP Top 10 (2021)

### A01:2021 – Broken Access Control
- **Summary:** Unauthorized access due to missing or ineffective access control mechanisms.
- **Examples:**
  - URL manipulation, API modification, privilege escalation.
- **Prevention:**
  - Enforce all access control checks on the server.
  - Implement "deny by default" access control.
  - Do not hardcode roles.
  - Invalidate session tokens post logout.

---

### A02:2021 – Cryptographic Failures
- **Summary:** Failures in encrypting sensitive data in storage or transit.
- **Examples:**
  - Plaintext transmission, deprecated crypto, hardcoded keys.
- **Prevention:**
  - Use TLS everywhere.
  - Follow strong hashing practices: bcrypt, Argon2, PBKDF2.
  - Store only necessary sensitive data.

---

### A03:2021 – Injection
- **Summary:** Unsanitized input causes execution of unintended commands or queries.
- **Examples:**
  - SQL Injection, XSS, command injection.
- **Prevention:**
  - Use parameterized queries and ORM tools.
  - Apply strict server-side input validation.
  - Escape special characters contextually.

---

### A04:2021 – Insecure Design
- **Summary:** Flaws in architecture and design that compromise security.
- **Examples:**
  - Lack of secure defaults, unsafe APIs, excessive privileges.
- **Prevention:**
  - Apply secure design patterns.
  - Perform threat modeling and code reviews.

---

### A05:2021 – Security Misconfiguration
- **Summary:** Incorrect settings or lack of hardening.
- **Examples:**
  - Default credentials, overly verbose error messages, open cloud storage.
- **Prevention:**
  - Disable unused services/features.
  - Apply security patches regularly.
  - Automate configuration management.

---

### A06:2021 – Vulnerable and Outdated Components
- **Summary:** Use of software with known vulnerabilities.
- **Examples:**
  - Unpatched libraries, unsupported frameworks.
- **Prevention:**
  - Inventory and track components.
  - Remove unused dependencies.
  - Use signed packages and secure sources.

---

### A07:2021 – Identification and Authentication Failures
- **Summary:** Weak authentication mechanisms.
- **Examples:**
  - Weak/default passwords, exposed session IDs.
- **Prevention:**
  - Enforce MFA.
  - Use secure password storage (e.g., bcrypt).
  - Harden forgotten password flows.
  - Invalidate sessions on logout.

---

### A08:2021 – Software and Data Integrity Failures
- **Summary:** Assumptions made on software/data integrity without verification.
- **Examples:**
  - Unverified software updates, CI/CD pipeline flaws.
- **Prevention:**
  - Use digital signatures for code and config.
  - Validate dependencies and container images.
  - Secure CI/CD processes with segregation and access control.

---

### A09:2021 – Security Logging and Monitoring Failures
- **Summary:** Lack of visibility into system activity and threats.
- **Examples:**
  - Missing audit trails, no alerting, local-only logging.
- **Prevention:**
  - Log authentication failures and sensitive events.
  - Use centralized log management.
  - Monitor with alerting thresholds and incident response procedures.

---

### A10:2021 – Server-Side Request Forgery (SSRF)
- **Summary:** Application can be tricked into making unauthorized backend requests.
- **Examples:**
  - Accessing internal services by user-manipulated URLs.
- **Prevention:**
  - Sanitize and validate all URLs.
  - Use allow-lists for internal resource access.
  - Segregate internal resources from application servers.

---

## Related Resources

- [OWASP Official Website](https://owasp.org)
- [OWASP Juice Shop](https://juice-shop.herokuapp.com) – Vulnerable application for training
- [OWASP ZAP](https://www.zaproxy.org/) – Open-source DAST scanner
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

---

## Summary Table – 2021 vs 2017 Comparison

| 2021 Risk                             | 2017 Equivalent or Related Risk         |
|--------------------------------------|-----------------------------------------|
| A01: Broken Access Control           | A05: Broken Access Control              |
| A02: Cryptographic Failures          | A03: Sensitive Data Exposure            |
| A03: Injection                       | A01: Injection                          |
| A04: Insecure Design                 | *(New in 2021)*                         |
| A05: Security Misconfiguration       | A06: Security Misconfiguration          |
| A06: Vulnerable/Outdated Components  | A09: Using Known Vulnerable Components  |
| A07: ID and Auth Failures            | A02: Broken Authentication              |
| A08: Integrity Failures              | A08: Insecure Deserialization (partial) |
| A09: Logging/Monitoring Failures     | A10: Insufficient Logging & Monitoring  |
| A10: Server-Side Request Forgery     | *(New in 2021)*                         |

---
