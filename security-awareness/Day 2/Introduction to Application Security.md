# Multi-layered Security

- Gateway  
  - BOGON  
  - DNS Access List  

- Perimeter  
  - DDoS  
  - NW  
  - FW  
  - IPS  
  - UTM  
  - App FW  

- Endpoint  
  - Antivirus  
  - Patch Mgmt  
  - Host Firewall  

- Server  
  - Hardening OS  
  - Web Server  
  - DB Framework  

- Applications  
  - Security Audits  
  - Pen Tests  

- Data  
  - Encryption  
  - Digital Signature  

- Defenses at the network and perimeter may not protect against application-layer attacks  

---

### What is a web app?

- Application software that runs on a web server  
- Accessed by the user through a web browser with an active internet connection  

---

### What is Application Security?

- **Root Cause - Insecure Applications**  
  - Insecure Design  
  - Insecure Coding  
  - No policy/guidelines for building security in SDLC  
  - Insecure infrastructure  
    - Unpatched OS / Web servers  
    - Lack of hardening/version controls  
  - Changing Technology  

- **SAST**  
  - Developer's approach  
  - Examines code statically in a non-runtime environment  
  - Finds vulnerabilities earlier in the SDLC  
  - Less expensive to fix  
  - Detects XSS, SQLi, buffer overflows  
    - White Box Testing (Integrated in SDLC)  
    - SCA / Code Review  

- **DAST**  
  - Hacker's approach  
  - Examines the app dynamically in a runtime environment  
  - Finds vulnerabilities later in the SDLC  
  - More expensive to fix  
  - Checks available inputs and outputs prone to vulnerabilities  
    - Black Box Testing - Automated  
    - Black Box Testing - Manual (Safe for Hosting)  
    - Third Party Audit (Compliance Check)  

- **SAST and DAST are complementary**  
- WAF  
- Pen Testing & Infrastructure Testing  

---

### SSDLC - Secure Software Development Lifecycle

1. Secure Design  
2. Secure Coding  
3. Security Testing (Penetration Testing)  
4. Security Reviews (Penetration Testing)  

---

### Data/Input Validation: Golden Rule

- Must occur on a trusted system  
- Centralized input validation routine  
- Validate all user-modifiable input (headers, input fields, hidden fields, drop-downs)  
- Enforce proper length, type checks  
- Ensure well-formed data, only known-good characters  
- **Validation must occur server-side**  
- Golden Rule: All external input must be validated  

---

### CVE

- [Apache Struts 2.3.14 CVE List](https://www.cvedetails.com/vulnerability-list/vendor_id-45/product_id-6117/version_id-503020/Apache-Struts-2.3.14.html)  
- [Exploit DB Example](https://exploit-db.com/exploits/44556)  

---

### Sensitive Data Exposure (Prevention)

- Encrypt all sensitive data (at rest and in transit)  
- Do not request or store unnecessary data  
- Discard data when no longer needed  
- Use SHA256 / SHA512 for hashing  
- Disable autocomplete  
- Disable auto-caching  

---

### Vulnerable Known Component

- May include OS, Application Server, DBMS, third-party libraries, runtime environment  
- Vulnerabilities may exist in nested dependencies  

---

### Common Risks to Web Applications

- SQL Injection  
- Malicious File Execution  
- Information Leakage  
- Improper Error Handling  
- Broken Authentication / Session Management  
- Insecure Cryptographic Storage  
- Insecure Communications  
- Failure to Restrict URL Access  
- XSS  
- Insecure Direct Object Reference  
- CSRF  
- Webshell  

---

### Automation

- **SAST**: Micro Focus Fortify, AppScan Source  
- **DAST**: AppScan Scanner, ZAP Proxy, Iron Wasp, Burp Suite  
- **WAF**: F5, Barracuda, ModSecurity  

---

### Before Hosting (Getting Open to the Public)

- Remove test data from production  
- Change all provided credentials used during audit  
- Avoid unaudited modules/dynamic pages  
- No changes on hardened server settings  
  - If required, VA (Vulnerability Assessment) is mandatory  

---

### Penetration Testing

- Typically post-hosting  
- Detects unresolved application vulnerabilities  
- Checks server compliance across OS/Web/App/DB  
- Identifies architectural and configuration flaws  
- Check for compatible version control environment  

---

### Web Application Firewall

- Protects against web-layer attacks  
- Complements SAST/DAST  

---

## OWASP Top 10 - 2021

### A01 - Broken Access Control

- **Scenario 1**: SQL access without account validation:  
  ```java
  pstmt.setString(1, request.getParameter("acct"));  
  ResultSet results = pstmt.executeQuery();
  ```
  - Example:  
    - `https://example.com/app/accountInfo?acct=notmyacct`  

- **Scenario 2**: Unauthenticated access to admin routes  
  - `https://example.com/app/getappInfo`  
  - `https://example.com/app/admin_getapInfo`  

---

### A02 - Cryptographic Failures

- **Scenario 1**: DB encryption auto-decrypts, allows SQLi to reveal plaintext  
- **Scenario 2**: No TLS, attacker hijacks session cookie  
- **Scenario 3**: Unsalted hashes cracked via rainbow tables or GPUs  

---

### A03 - Injection  
- Includes SQLi, LDAPi, etc.

---

### A04 - Insecure Design

- No SSDLC, secure patterns, or paved road components  

---

### A05 - Security Misconfiguration

- **Scenario 1**: Default sample apps not removed  
- **Scenario 2**: Directory listing enabled  
- **Scenario 3**: Verbose error messages (e.g., stack traces)  
- **Scenario 4**: Cloud default sharing permissions  

---

### A06 - Vulnerable and Outdated Components

- **Scenario 1**: CVE-2017-5638 in Struts 2  
- Unpatched IoT devices  
- Shodan used to discover exposed/vulnerable systems  
- **Prevention**:  
  - Patch management  
  - Use trusted sources  
  - Monitor deprecated/unmaintained components  
  - Maintain component inventory  

---

### A07 - Identification and Authentication Failures

- **Scenario 1**: Credential stuffing  
- **Scenario 2**: Password-only auth (no MFA)  
- **Scenario 3**: No session timeout  

- **Prevention**:  
  - MFA  
  - High-entropy session IDs  
  - Rate limiting login failures  
  - Uniform responses to avoid enumeration  

---

### A08 - Software and Data Integrity Failures

- **Scenario 1**: Unsigned firmware updates  
- **Scenario 2**: SolarWinds malicious update  
- **Scenario 3**: Insecure deserialization in microservices  

---

### A09 - Security Logging and Monitoring Failures

- **Scenario 1**: 3.5M records breached, undetected for years  
- **Scenario 2**: 10 years of airline customer data exposed  
- **Scenario 3**: GDPR breach due to vulnerable payment app  

- **Prevention**:  
  - Log input failures and access events  
  - Use structured, consumable log formats  
  - Secure logs against injection  
  - Use append-only storage for audit trails  

---

### A10 - Server-Side Request Forgery (SSRF)

- **Scenario 1**: Port scan internal servers – If the network architecture lacks segmentation, attackers can map internal networks by analyzing connection results or the time it takes to connect or reject SSRF payloads.  
- **Scenario 2**: Sensitive data exposure – Attackers can access local files or internal services to gain sensitive information, such as `file:///etc/passwd` or `http://localhost:28017`.  
- **Scenario 3**: Access cloud metadata storage – Most cloud providers offer metadata endpoints (e.g., `http://169.254.169.254/`), which attackers can query to harvest sensitive information.  
- **Scenario 4**: Compromise internal services – Attackers may abuse internal services to escalate attacks, including Remote Code Execution (RCE) or Denial of Service (DoS).  

- SSRF flaws occur when a web application fetches a remote resource using a user-supplied URL without proper validation. This enables attackers to craft requests to unintended internal destinations, even if protected by firewalls, VPNs, or network ACLs.  
- As modern web applications expose more fetch capabilities, SSRF risk continues to rise—especially in complex, cloud-based architectures.
