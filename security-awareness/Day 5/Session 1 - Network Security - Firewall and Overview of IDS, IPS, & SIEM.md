# Network Security Fundamentals

## What is a Network?
- **Network:** A fabric of interconnected elements that are related to each other.
- **Computer network:** Connects two or more computers and devices to share resources.
- **Devices in networks:** Servers, routers, computers, printers, scanners, etc.

## Security Goals — CIA Triad
- **Confidentiality:** Prevent unauthorized data access.
  - Example: Hacker steals password from social media and accesses cloud photos.
- **Integrity:** Ensure data is not altered without authorization.
  - Example: Hacker changes government security document instructions.
- **Availability:** Ensure authorized users have timely access.
  - Example: Denial of Service attack takes down a healthcare website.

## Cyber Security Landscape
- Network Security
- Application Security
- CISO & ISOs (Security leadership)
- Security Audit & Compliance
- Endpoint Security
- Security Monitoring
- Capacity Building
- Cyber Security Policy

## Multi-Layered Security Model
- Gateway: BOGON/DNS/Access List
- Perimeter: DDoS protection, Network Firewall, IPS, UTM, Web Application Firewall
- Endpoint: Antivirus, Patch Management, Host-based Firewall
- Server: OS, Web Server, Database, Framework Hardening
- Application: Security Audits, Penetration Testing
- Data: Encryption, Digital Signatures

## Attackers — Who and Why?
- Hackers
- Hacktivists (hacker + activist)
- Cyber-terrorists
- Cyber-criminals
- Cyber-warriors
- Ethical hackers

## Network Attack Methods
- Phishing
- DoS/DDoS (Denial of Service)
- Man-in-the-Middle (MITM)
- Malware
- Ransomware
- Advanced Persistent Threats (APTs)
- Zero-Day Exploits

## Data Breaches and Phishing
- Phishing remains a top cyber threat.
- According to Verizon 2019, 32% of verified breaches involved phishing.
- 96% of social engineering attacks delivered by email.
- Phishing targets often webmail and SaaS users (34.7%).
- Phishing has expanded beyond email to SMS, social networks, and calls.
- Scams often impersonate banks, Microsoft, or other trusted organizations.

## Phishing Statistics
- Common email subject lines include: Urgent, Request, Important, Payment, Attention.
- Popular phishing email subjects (2020) include:
  - Changes to your health benefits
  - Twitter: Security alert: new or unusual login
  - Amazon: Action required
  - Zoom: Scheduled Meeting Error
  - Google Pay: Payment sent
  - Microsoft 365: Action needed
  - And others…

## Phishing vs. Malware Websites
- Since 2016, phishing sites outnumber malware sites by ~75x.
- Google registered over 2 million phishing sites in early 2021 (up 27% YoY).
- Malware sites have increased more slowly (up 32% YoY).

## How to Shield Your Organization Against Phishing Attacks
- Use SPAM email filters.
- Deploy UTM web filtering.
- Educate employees on phishing tactics.
- Instruct employees to verify sender email addresses carefully.
- Avoid opening suspicious emails or links.
- Implement email authentication protocols: DMARC, DKIM, SPF.

---

## Virus vs. Worm

| Feature           | Virus                                           | Worm                                      |
|-------------------|------------------------------------------------|-------------------------------------------|
| Definition        | Code that reproduces itself by attaching to programs/files; needs user action to spread | Code that self-replicates over network without user intervention |
| Infection Target  | Executable files, boot sectors, macros, scripts | Buffer overflows, file sharing, config errors |
| Propagation       | User-driven via storage, mails, downloads       | Network-driven; email, DNS, IP scanning   |

---

## Backdoor, Trojan Horse, Rootkits
- **Goal:** Take control of a machine through infection.
- **Backdoor:** Program placed by attacker to allow unauthorized access and spying (keylogging, screen spying).
- **Trojan:** Malicious software disguised as useful/benign.
- **Rootkits:** Like backdoors but modify OS programs to hide presence; can operate in user or kernel mode.

---

## Advanced Persistent Threats (APTs)
- **Advanced:** Adapt to defenses, develop or buy zero-day exploits, high sophistication.
- **Persistent:** Targeted, long-term attacks until objectives met, maintain ongoing access.
- **Threats:** Entities behind attacks, not just malware or exploits.

---

## Security Attack Types
- a) **Normal flow:** System operates as expected.
- b) **Interruption:** Asset becomes unavailable (attack on availability).
  - Examples: DoS, DDoS attacks.
- c) **Interception:** Unauthorized access to data (attack on confidentiality).
  - Examples: Wiretapping, illicit copying.
- d) **Modification:** Unauthorized changes to data (attack on integrity).
  - Examples: Altering files, messages.
- e) **Fabrication:** Inserting counterfeit data (attack on authenticity).
  - Examples: SQL Injection, message replay.

---

## Malware
- Malicious software such as viruses, worms, Trojans, spyware that compromise CIA.

## Phishing
- Cybercrime using deception to steal sensitive data or distribute malware.

## Denial of Service (DoS)
- Attacker prevents legitimate users from accessing network or service by flooding it with traffic.

## Man-in-the-Middle (MITM)
- Attacker intercepts communication between two parties to steal or manipulate data.

## Zero Day Exploit
- Security flaw unknown to vendor, exploited by attackers before a patch is available.

---

## Sources of Infection
- Random web surfing
- Opening email attachments
- Clicking email links
- Drive-by downloads (audio/video/PDF/documents)
- Unpatched OS and software (Adobe, MS Office)
- Shared folders, infected removable media (USBs, CDs)

---

## Network Firewall
- Controls traffic between two networks based on predefined rules.
- Packet filter inspects packets and decides to accept, drop, or reject.
- Firewall Gateway restricts access, hides internal IPs via NAT.

## Firewall Policy Outcomes
- **Accepted:** Packet permitted.
- **Dropped:** Packet blocked silently.
- **Rejected:** Packet blocked with notification.

## Firewall Rules Consider:
- Protocol (TCP/UDP)
- Source and destination IPs
- Source and destination ports
- Application payload (virus scanning, etc.)

---

## Types of Firewalls
- **Packet Filtering Firewall (Stateless):** Simple rules on packets.
- **Stateful Firewall:** Tracks connection states.
- **Application Layer Firewall:** Inspects application data; acts like proxy.

---

## Firewall Access Rule Processing System (FARPS)
- System to manage firewall rules.
- User roles: Request Initiator, Forwarding Officer, Approving Officer, Firewall Admin.
- Categories of rules:
  - Category 1: Allowed without objection (specific IPs, ports).
  - Category 2: Allowed subject to security compliance checks.

---

## Intrusion Prevention System (IPS)
- Detects and blocks attacks before they reach target.
- Types:
  - NIPS: Network-based
  - HIPS: Host-based
- Detection methods:
  - Pattern Matching (signatures)
  - Anomaly Detection
  - Threshold-based detection
- Architecture: OEM Update Server → Central Manager → Sensors

---

## Unified Threat Management (UTM)
- Combines multiple security features into one device:
  - Firewall, IDS/IPS, Antivirus, Application control, Web filtering, VPN, SIEM, etc.

---

## Centrally Managed Antivirus Solutions
- Examples: Trend Micro, McAfee, Symantec.
- Process: Collect suspicious files → Analyze → Develop signatures → Deploy updates → Enforce policies.

---

## Vulnerability Assessment
- Identifies and prioritizes security weaknesses.
- Types:
  - Network-based scans
  - Host-based scans
  - Wireless network scans
  - Application scans
  - Database scans

---

## Security Operations Teams
- **Blue Team:** Defensive; monitoring, patching, audits.
- **Red Team:** Offensive; penetration testing, phishing.
- **Purple Team:** Collaboration between Red and Blue teams.

---

## Security Monitoring
- Detect BOTNET, DoS, malware, APTs, policy violations, and other threats.

---

## Security Information and Event Management (SIEM)
- Centralized collection and analysis of security data.
- Functions:
  - Correlation of events
  - Real-time monitoring and alerts
  - Investigation tools
  - Reporting and trending
- Use cases: VPN compromise, BOTNET detection, DoS, malware, APTs, policy violations.

---

## NIST Cybersecurity Framework (CSF)
- Identify
- Protect
- Detect
- Respond
- Recover

---

## Network Security Audit
- Configuration review
- Traffic log analysis
- Vulnerability identification
- SOPs review
- Internal penetration testing
- Reporting and follow-up

---

## General Audit Findings
- Outdated OS, software, firmware
- Missing patches
- Suspicious traffic and dangerous services
- Lack of security features (antivirus, patch management)
- Use of removable media without controls
- Use of insecure protocols (Telnet, HTTP, FTP)
- Weak password, account lockout policies
- No centralized access control (AAA, Active Directory)

---

## Infrastructure Administration & Management
- Deploy appliances in high availability (HA) pairs.
- Secure physical access.
- Maintain access logs.
- Separate privileged and non-privileged accounts.
- Keep devices updated.
- Controlled policy modification procedures.

---

## Network Access Control (NAC)
- Detects unauthorized hardware connections.

## Intrusion Detection System (IDS)
- Monitors traffic for suspicious activity and alerts analysts.
