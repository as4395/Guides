# Forensics & Incident Analysis

---

## 1. Incident Fundamentals

### What is an Event?
- Any observable occurrence in a system or network.

### What is a Computer Security Incident?
- Per **NIST**: A violation or imminent threat of violation of computer security policies, acceptable use policies, or standard security practices.
- Includes adversary incidents (e.g., website defacement, unauthorized database access).

---

## 2. Adverse Events Considered Incidents
- Website defacement
- Denial of Service (DoS) or Distributed Denial of Service (DDoS)
- Unauthorized access/modification of data, networks, systems, or services
- Policy/process/legal violations (e.g., IT Act, Aadhaar Act)
- Loss/theft of data-storing equipment
- Social engineering (e.g., phishing, spoofing, spam)
- Advanced Persistent Threats (APT)
- Ransomware infections
- Malware/Trojan/worm outbreaks
- Data exfiltration

---

## 3. Forensics vs Incident Response

| Category            | Incident Response              | Forensics                          |
|---------------------|-------------------------------|------------------------------------|
| **Goal**           | Stop the intruder              | Reconstruct the event              |
| **Time Pressure**  | High                           | Lower                              |
| **Approach**       | Rapid action                   | Detailed, methodical examination   |
| **Asset Handling** | May sacrifice forensic quality | Must be forensically sound         |

---

## 4. Incident Handling Methodology  
*(NIST Incident Handling Framework)*

### Phases:
1. **Preparation**
2. **Detection & Analysis**
3. **Containment**
4. **Eradication & Recovery**
5. **Post-Incident Activity (Lessons Learned)**

> **Feedback Loops:**
> - Post-Incident → Preparation
> - Detection & Analysis ↔ Containment, Eradication & Recovery

---

## 5. Signs of an Incident

### Common Indicators:
- Suspicious file names
- Abnormal traffic (DDoS)
- Antivirus alerts
- Vulnerability scanner detected in logs
- Public exploit disclosure
- Threat claims from known actors

> **Key Challenge**: Accurately identifying incidents amidst high-volume signs  
> **Solution**: Automated tools + expert manual analysis

---

## 6. Incident Lifecycle

### A. Containment
- Prevent escalation and limit damage
- Incident-specific strategies (e.g., malware vs DDoS)

### B. Eradication
- Remove malware, disable compromised accounts
- Fix exploited vulnerabilities

### C. Recovery
- System restoration and hardening
  - Firewall rules
  - Antivirus scanning
  - System reinstallation
  - Patch management

### D. Post-Incident Activity
- Host "Lessons Learned" meeting
- Evaluate:
  - Timeline of events
  - Performance of team and procedures
  - Missing info/tools
  - Preventative actions for future incidents

---

## 7. Digital Forensics

### What is Computer Forensics?
- Combines law and computer science to collect/analyze digital evidence admissible in court.
- Goal: Identify, preserve, and analyze digital evidence while maintaining its integrity.

---

## 8. Cyber Forensic Investigation Process

1. **Identification** – Initial assessment
2. **Seizure** – Secure and preserve evidence
3. **Acquisition** – Forensic imaging
4. **Analysis** – Evidence examination
5. **Documentation** – Report generation

---

## 9. Digital Investigation Framework

### Phases:
1. **Prepare** – Legal readiness, tools, reconnaissance
2. **Respond** – Initial evidence handling
3. **Acquire/Verify** – Imaging, chain-of-custody
4. **Analyze** – System and evidence analysis
5. **Report** – Findings and testimony
6. **Archive** – Secure preservation for future access

---

## 10. Evidence Preservation

### Chain of Custody
- Evidence must not be altered
- Full documentation (logs, labels, storage)
- Digital integrity: hashes (e.g., MD5, SHA-1, SHA-256)

---

## 11. Volatile vs Non-Volatile Evidence

| Type        | Characteristics                                     |
|-------------|------------------------------------------------------|
| Volatile    | Lost if power off; RAM, processes, credentials      |
| Non-volatile| Survives reboot; HDDs, SSDs, optical media          |

---

## 12. Acquisition Considerations

- **Write Blockers** (hardware/software): Prevent modifications
- **Logical Copy**: Files/folders only
- **Physical Copy**: Full disk (including deleted/slack space)
- **Analysis on Originals**: Forbidden – always use forensic image

---

## 13. Toolkits

### Commercial:
- EnCase, FTK, Cellebrite, Oxygen, ProDiscover, X-Ways, F-Response

### Freeware/Open Source:
- Autopsy + Sleuth Kit, Helix, TCT, Knoppix-STD, FTK Imager, TrueBack

---

## 14. Memory & Disk Imaging Tools

- **Windows**: FTK Imager, win32dd, mdd, Helix
- **Linux**: LiME, fmem

---

## 15. Analysis Goals

- Confirm/refute suspicious activity
- Timeline reconstruction using MAC times
- Tool examples: Volatility, OS tools, disk/file system forensics
- Search for known artifacts, application data, browser history, logs

---

## 16. Anti-Forensics Techniques

- In-memory only (diskless PCs)
- Wiping tools
- Encryption (TrueCrypt, BitLocker, PGP, FileVault)
- Steganography
- Virtual machines

---

## 17. Reporting

- Clear, concise communication
- Tailored to audience (legal, tech, management)
- Timeline and narrative-driven
- Deliverable: Report and/or oral briefing

---

## 18. Archival Requirements

- Long-term case preservation
- Update-compatible with tools and infrastructure
- Secure, logged storage
- Custodian responsibilities well-defined

---

## 19. Key Terminology

| Term                 | Definition                                                                 |
|----------------------|----------------------------------------------------------------------------|
| Activity             | Any system event potentially relevant to security                          |
| Artifact             | Residue of an attack; assume malicious until proven otherwise              |
| Attack               | Attempt to violate a security policy                                       |
| Event                | Observable occurrence relevant to system/network security                  |
| Incident             | A security event violating policy or indicating compromise                 |
| Probe                | Single information-gathering or attack attempt                             |
| Scan                 | Series of probes in a pattern                                               |
| Intrusion            | Unauthorized access to systems/data                                        |
| Vulnerability        | Design/implementation flaw in a system                                     |
| Constituency         | Defined user base of a CSIRT                                               |
| Incident Handling    | Reporting, analyzing, responding to security incidents                     |
| Incident Report      | Record of incident sent to CSIRT or response team                          |
| Incident Reporter    | Entity reporting a potential incident                                      |
| Vulnerability Handling| The process of responding to discovered system flaws                      |

---
