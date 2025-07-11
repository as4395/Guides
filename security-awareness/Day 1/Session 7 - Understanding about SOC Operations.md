# **Security Operations Center (SOC)**

## **What is a SOC?**
- A **SOC** is a centralized unit that deals with security issues on an organizational level.
- The SOC consolidates under one organization the functions of: incident monitoring, detection, response, coordination, management of the organization's security products, network devices, end-user devices and systems, computer network defense tools engineering, operations, and maintenance.
  - The **Security Defense Center (SDC)**
  - **Threat Defense Center**
  - **Security Analytics Center (SAC)**
  - **Infrastructure Protection Center (IPC)**
  - **Network Security Operations Center (NSCOC)**
  - **Security Intelligence and Operations Center (SIOC)**
  - **Security Intelligence Center**

---

## **Devices:**
- **Mail/Web**
- **Servers**
- **Next-Gen Firewalls**
- **WAF**
- **Database**
- **Router**
- **Firewall**
- **IPS**
- **Web Proxy**
- **Honeypot**
- **Access Control**
- **User Activity**
- **OS Logs**
- **IDS**
- **Applications**
- **Antivirus**
- **Packet Capture**
- **VPN**

---

## **SOC (Security Operations Center)**

### **Monitor, Assess, Defend**
- **SIEM (Security Information & Event Management)**
    - Supports real-time threat detection and security incident response through the real-time collection and historical analysis of security events from a wide variety of event and contextual data sources. It also supports compliance reporting and incident investigation through the analysis of historical data from these sources.
    - **SIEM != Centralized log collection**
    - Log enrichment (e.g., WhoIS, ADN)
    - **Ticketing/case management, prioritization**
    - **Integration of IoCs** from cyber intelligence feeds

#### **Example SIEM Rules**
- **Repent-Attack Login Source**
    - **Goal**: Early warning for brute force attacks, password guessing, and misconfigured applications
    - **Trigger**: Alert on 3 or more failed logins in 1 minute from a single host
    - **Event Sources**: Active directory, Syslog, Switches, Routers, Monitored Applications
- **Repeat Attack-Firewall**
    - **Goal**: Early warning for scans, worm propagation, etc.
    - **Trigger**: Alert on 15 or more Firewall Drop/Reject/Deny Events from a single IP address in one minute.
    - **Event Sources**: Firewalls, Routers, Switches
- **Repeat Attack-Foreign**
    - **Goal**: Identify remote attackers
    - **Trigger**: Alert on 10 or more failed events from a single IP address that is not part of the known internal network
    - **Event Sources**: Firewall, NIPS, Anti-Virus, HIPS, Failed Login Events
- **Virus Detection Removal**
    - **Goal**: Alert when a virus, spyware, or other malware is detected on a host.
    - **Trigger**: Alert when a single host sees an identifiable piece of malware.
    - **Event Sources**: Anti-Virus, HIPS, Network/System Behavioral Anomaly Detectors
- **Aggregate & Correlate**
    - **Alerts**
    - **Reports**
    - **Advisories**

### **SOC Purpose**
- **Increase detection abilities**
    - *M-trends: median dwell time of 56 days*
- **Increase response capability**
    - *Prevent adversary success*
- **Reduced service disruption from security issues**
    - *DDoS attacks*
- **Reduced impact from security compromise**
    - *Ponemon: $3.86 million*
- **Enhance correlation potential**
- **Allow coordinated central security management**

---

## **SOAR (Security Orchestration, Automation, and Response)**

- Allows an organization to collect data about security threats from multiple sources and respond to low-level security incidents without human assistance.
- **3 Capabilities:**
    1. **Threat and vulnerability management** (Orchestration)
    2. **Security operations automation** (Automation)
    3. **Security incident response** (Response)
- Higher **analyst productivity**, faster response time

---

## **National/State SOC**
- Facilitates coordination activities between multiple subordinate SOCs
- Does not have active or comprehensive visibility down to the end host
- Serves as a distribution hub for **cyber intelligence**, best practices, and training
- Provides **situational awareness** across cyberspace
- Coordination with other national SOCs

---

## **Types of SOC**

- **Outsourcing the SOC**
    - Initial setup
    - Leverage **MSSP** (Managed Security Service Providers)
    - **OPEX > CAPEX**
    - Lack of skilled staff in-house, outside experts

  **Challenges:**
    - No detailed analysis
    - Lack of understanding of business concerns & infrastructure
    - Significant coordination with MSSP required
    - Data stored and processed outside

- **In-house SOC**
    - Dedicated staff
    - Good understanding of business concerns and infrastructure
    - Data stored and processed inside
    - Greater control over security and compliance

  **Challenges:**
    - Recruitment of skills and training
    - Increased cost
    - Gradual rise in SOC maturity

- **Hybrid SOC**
    - Leverage both in-house and outsourced SOC
    - Build up internal staff skills gradually
    - Second opinion/backup available

---

## **Building Blocks of SOC**

### **People**
- **Analyst/Incident Responders**
    - **Tier 1**: Real-time monitoring and triage
    - **Tier 2**: Incident analysis, coordination and response, forensic and malware analysis
- **Trending & Intel**
    - **Cyber-news**: Collection, analysis, distribution, creation, trending
- **SOC System Admins**
    - Sensor tuning and maintenance, custom signature collection, scripting, and automation
- **SOC Engineering**
    - Tool engineering and deployment, scripting, and automation
- **SOC Manager**

---

## **Rainbow Teams**

### **Red Team**
- Offensive Security
- Penetration Testing
- Exploiting Vulnerabilities
- Social Engineering

### **Blue Team**
- Defensive Security
- Infrastructure protection
- Incident Response
- Damage Control
- Threat Hunting

### **Yellow Team**
- Software Builders
- Application Developers
- System Architects
- System O&M

---

## **Incident Response**

### **Threat Hunting**
- **Left of Hack**
    - **Recon**: Scanning
    - **Weaponize**: Creating a lure document
    - **Deliver**: Phishing
- **Middle of Hack**
    - **Exploit**: Malware execution
- **Right of Hack**
    - **Control**: Additional malware download
    - **Execute**: Lateral movement, Data exfiltration
    - **Maintain**: Hidden backdoor, C2
- **Proactive, iterative, and human-centric identification of cyber threats internal to an IT network that have evaded the existing security controls**
- **Assumption of compromise**
- **Adversary detection from the delivery phase onwards**

---

## **Process**
- Spell out roles and responsibilities, as well as monitoring procedures.
- Lay out what steps are to be taken in the event of an alert of breach, including escalation procedures, reporting procedures, and breach response procedures:
    - **Business Processes**
    - **Technology Processes**
    - **Operational Processes**
    - **Analytical Processes**

---

## **Technology**
- **Firewall** (Layer 3/4 filtering, inbound/outbound filtering, geo-IP filtering)
- **IDS** (Monitoring interfaces, signature-based, anomaly-based detection)
- **IPS** (Preventive control, real-time packet inspection, signature-based, anomaly-based, policy-prevention based)
- **Anti-spyware**
- **Rogue Host detection**
- **Policy Auditor**
- **Asset Management**
- **Remote Forensics**
- **Application whitelisting**
- **Patch Management**
- **Baseline Monitoring**
- **Data Loss Prevention**
- **SIEM**
- **Flow Monitoring**
- **Packet Capture**
- **Next-Gen Firewall** (Layer 7 aware, user identification)
- **Web Proxy** (Choke point, C2 traffic detection, policy violations, web content filtering)
- **Automated Malware Analysis** (Open/execute suspicious files to determine endpoint impact)
- **Honeypot**
- **Vulnerability Scanner**, etc.
- **Web Application Firewall** (Protect custom web apps, SQL injections, Cross-site scripting)
- **Deception devices** (trap for adversaries, honeypots/honey-nets, Threat intel)

---
