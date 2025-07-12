# What is a Cyber Incident?

- **Incident = Adverse event**
- **NCSC Definition**: A breach of a system's security policy to affect its integrity or availability and/or the unauthorized access or attempted access to a system or systems, in line with the Computer Misuse Act (1990)
- **CERT-In Definition**: Any real or suspected adverse event likely to cause harm to critical functions/services across the public and private sectors by impairing the confidentiality, integrity, or availability of electronic systems, services, or networks — including unauthorized access, denial of service, data changes without authorization, threats to public safety, undermining confidence, and national security degradation

## Examples of Cyber Incidents
- DoS / DDoS attacks  
- Unauthorized access or hacking (websites, databases, AD servers)  
- Defacement of public websites  
- Worm infections  
- Network scanning or probing  
- Malware attacks / APTs  
- Ransomware attacks  
- Data breaches  
- Insider threats (data exfiltration/loss)

---

## Incident Happens!

- Despite defenses, attacks occur (even the best systems are not invulnerable)
- Attack vectors may include: botnets, exploit kits, 0-day exploits, APTs
- Consequences may impact:
  - Your organization  
  - Your customers  
  - Your nation’s critical infrastructure
- Example: Phishing leading to financial fraud or spear phishing

---

## Learning from Incidents

Questions to answer:
- How do we handle the incident?
- What is the impact?
- Who should be contacted?
- What are the priorities?
- How should we respond?
- Who is responsible for what?

Action Steps:
- **Frame the Problem**:
  - Follow proper procedures for incident response
  - Limit damage and recovery time
  - Prevent recurrence
  - Establish a CSIRT/CERT team

---

## Incident Handling / Incident Response

An organized process to defend and recover from security incidents. It includes **all phases before, during, and after** an incident occurs on a host, network, or site.

### Incident Handling Process

#### 1. Preparation
- **Security Controls**: Host and network-based
- **Risk Assessment**:
  - System and asset inventory
  - Identification of high-value assets
  - Critical path vulnerability analysis
- **Awareness and Training**:
  - Security policies and acceptable use
  - Incident reporting protocols

#### 2. Detection and Analysis
- **Goal**: Accurate and timely detection
- **Approach**: Manual + Automated data analysis
- **Data Sources**: Events, logs, human reports
- **Detection Methods**:
  - Signature-based
  - Anomaly-based
  - Hybrid
- **Incident Reporting Channels**:
  - Telephone, Email, SMS  
  - IDS/IPS alerts, SIEM logs

#### 3. Containment
- **Purpose**: Limit damage, preserve forensic evidence
- **Strategy Definition**: Choose tools and tactics based on strategy
- **Perimeter Strategies**:
  - Block outbound/inbound communication
  - IDS/IPS rules, WAF policies
  - DNS null routing, backup link failover
- **Internal Network Strategies**:
  - VLAN/Router segmentation
  - Port/IP/MAC filtering, ACLs
- **Endpoint Strategies**:
  - Disconnect or shut down affected systems
  - Desktop firewall rules
- **Types of Containment**:
  - Short-term containment
  - Long-term containment
- **System Backup**:
  - Disk imaging (e.g., FTK)

#### 4. Eradication and Recovery
- **Eradication Activities**:
  - Malware removal
  - Root cause identification
  - Prevent recurrence
- **Actions**:
  - System re-imaging
  - Disabling compromised accounts
  - Patching
  - Malware disarmament
  - Best practices implementation

#### 5. Post-Incident Activity (Lessons Learned)
- Conduct **Post-Incident Review (PIR)**
- Identify improvements
- Share threat intel with:
  - CERTs, National CERTs
- Prepare advisories and alerts
- Inform future incident response planning

---

## Compromised Email Header Analysis

### Observation
- Who should be notified?
- What is your action plan?
- Can you detect if it’s a phishing email?
- What’s the communication strategy?
- What if a user clicked the link?
- Is a file being dropped?

### Analysis
- Email Header Inspection  
- URL analysis  
- Malware behavior  
- Credential theft detection  
- Check for compromise indicators (e.g., getkavach.com)

### Best Practices
- Identify & educate affected users  
- Isolate/suspend infected systems  
- Escalate reports  
- Publish alerts/advisories  
- Conduct awareness sessions  

---

## Incident Response Tools

### Open Source Malware/File/URL Analysis Tools
- [Hybrid Analysis](https://hybrid-analysis.com)  
- [Cuckoo Sandbox](http://cuckoosandbox.org/)  
- [VirusTotal](https://virustotal.org/gui/)  

### Spam & Email Header Analysis
- [MX Toolbox](https://mxtoolbox.com/)

### Web Defacement Reporting
- [Zone-H](http://www.zone-h.com/?hz=1)

### Whois and Passive DNS
- [CentralOps](https://centralops.net/co/)  
- [WhoIS DomainTools](https://whois.domaintools.com/)  
- Passive DNS tools  

### System Tools
- **Autoruns**, **netstat**

### Disk Imaging Tools
- AccessData FTK Imager  
- Other forensic imaging tools

### Artifact Analysis
- Autopsy

### Memory Forensics
- Volatility  
- KnTList  
- Evolve  
- VolDiff

### Incident Response Platforms
- Belka Evidence  
- CIRTkirt  
- CyberTriage  
- Digital Forensics Framework

### Malware Analysis Tools
- Sandboxes  
- VMs  
- Sysinternals  
- Hex editors

### Network Forensics
- Wireshark  
- NetworkMiner  
- Nmap  
- Nessus

> Full tool list: [https://gbhackers.com/cyber-incident-response-tools/](https://gbhackers.com/cyber-incident-response-tools/)
