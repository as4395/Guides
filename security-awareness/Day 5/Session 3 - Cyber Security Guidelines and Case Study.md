# Cyber Security Guidelines & Case Studies

---

## 1. Recent Security Threats

### A. DragonForce
- A well-known hacktivist collective linked to several defacements and data breaches.
- Targeted government and private sectors using ideological or political motivations.

### B. OpsPatuk
- Coordinated cyber operation, often associated with politically motivated attacks.
- Involved in website defacement, denial of service attacks, and data dumps.

---

## 2. Common Attack Vectors

### A. Phishing
- Social engineering technique used to trick users into divulging credentials or downloading malware.
- Often disguised as trusted communications (emails, websites, login portals).

### B. Targeted Attacks
- Also known as Advanced Persistent Threats (APTs).
- Customized and sustained attacks designed for specific victims (e.g., spear-phishing, watering hole attacks).

---

## 3. Key Mitigation Measures

- **Host-Based Intrusion Prevention System (HIPS)**  
  - Provides host-level Deep Packet Inspection (DPI), virtual patching, and file integrity monitoring.

- **Web Application Firewall (WAF)**  
  - Protects web applications by filtering and monitoring HTTP traffic.

- **SSL/TLS Offloading**
  - SSL/TLS certificates should be offloaded before traffic reaches the Network IPS to allow inspection of encrypted traffic.

- **Host-Level Vulnerability Assessment**
  - Regular scanning of individual hosts for known vulnerabilities.

- **Host-Level Firewall**
  - Helps restrict lateral movement of threats within the internal network.

- **Security Audits**
  - Regular platform and application audits to detect misconfigurations and weaknesses.

- **Log Analysis & Backup**
  - Routine log reviews and maintaining offline/offsite backups for resilience and recovery.

---

## 4. Cyber Security Guidelines for Government Employees

- **Guidelines Document**:  
  [Cyber Security Guidelines – Government Employees v1.4 (PDF)](https://nia.nic.in/pdf/Cyber_Security_Guidelines_Government_Employees_Version_1.4.pdf)

- **Media Coverage**:  
  [Indian government issues confidential infosec guidance to staff – who leak it (The Register)](https://www.theregister.com/2022/06/20/indian_government_infosec_guidance_leaks/)

- **DNS Recommendation**:  
  Use secure DNS: `1.10.10.10` and `2409::1`

---

## 5. How a Simple Search Can Lead to a Cyber Attack

### A. Google Dorking Example
- Searching for `"resume and cover letter" + filetype:pdf` can lead to:
  - Sensitive personal documents exposed online
  - Trojanized PDFs embedded with malware

### B. SEO Poisoning Attacks

#### Modus Operandi:
1. A user searches for common terms using a search engine.
2. Malicious actors use compromised websites with SEO-optimized malicious files (PDF, DOC, PPT, etc.).
3. These files appear at the top of search results.
4. User clicks the poisoned link and is prompted to download a document.
5. The "download" button triggers several HTTP redirects.
6. A malicious payload (typically 70–134 MB) is downloaded and executed.

#### Targets:
- High-interest topics (e.g., job applications, government forms)
- Trojanized file downloads from popular-looking sources

---

## 6. Trojanized Documents

- **What are they?**
  - PDFs, DOCs, or PPTs containing embedded malware.
  - Trigger payload delivery upon opening or interacting with content.

- **Why are they dangerous?**
  - Appear benign
  - Easily distributed via SEO manipulation, phishing, or email campaigns

---

## 7. Malicious Browser Extensions

- **Behavior:**
  - Inject advertisements
  - Redirect user traffic
  - Monitor browsing activity

- **Example:**
  - URL: `https://google.com/?gws_rd=ssi` used as a fake redirect

---

## 8. Best Practices

- Enable automatic updates for OS and software
- Use reputable antivirus and antimalware tools
- Educate users on phishing and social engineering
- Regularly audit browser extensions and remove unverified ones
- Avoid downloading documents from unfamiliar websites
- Use DNS filtering for content control
- Maintain robust email filtering and sandboxing
- Perform frequent backups and store them offline


