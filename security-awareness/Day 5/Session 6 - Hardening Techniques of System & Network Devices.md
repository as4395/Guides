# Network Vulnerability Assessment – Tools, Standards & Server Hardening

---

## What is Network Vulnerability Assessment?

Network Vulnerability Assessment is the process of:
- Identifying security vulnerabilities across networks, devices, servers, and systems.
- Quantifying and analyzing those vulnerabilities.
- Remediating them based on predefined risk categories.

> It is a critical component in meeting industry standards and compliance mandates.

---

## Primary Mission of Information Security

The goal of an information security program is to **preserve the integrity and security of systems and their contents** by:

- Protecting the organization's ability to function
- Enabling safe operation of applications
- Safeguarding sensitive and business-critical data
- Securing technology assets from unauthorized access or modification

---

## Vulnerability Scanning Tools

| Tool | Description |
|------|-------------|
| **Nessus Professional** | A powerful vulnerability scanner that detects missing security patches, performs compliance checks, and offers over 149,000 plugins with low false positives. |
| **Nexpose** | A vulnerability management tool by Rapid7 that dynamically collects and analyzes risk posture. |
| **OpenVAS** | Free, full-featured vulnerability scanner developed by Greenbone Networks under the GNU GPL. |
| **Belarc Advisor** | Builds a detailed inventory of software, hardware, missing updates, and AV status. Free for personal use. For enterprises, use **BelManage**. |
| **Microsoft Baseline Security Analyzer (MBSA)** | Tool to assess missing patches and common security misconfigurations in Microsoft environments. |

---

## CIS-CAT: Configuration Assessment Tool

The **CIS-CAT (Center for Internet Security Configuration Assessment Tool)** helps in:

- Evaluating system configuration compliance with CIS Benchmarks
- Available in two versions:
  - **CIS-CAT Lite** (Free)
  - **CIS-CAT Pro** (Commercial)
- Generates reports in HTML, CSV, JSON, and TXT formats
- Supports GUI and CLI
- Requires Java Runtime Environment (JRE)

---

## Security Standards and Guidelines

| Standard | Description |
|----------|-------------|
| **CIS Benchmarks** | Secure configuration guidelines maintained by the Center for Internet Security. |
| **STIG** | Security Technical Implementation Guides developed by the U.S. DoD for hardened configurations. |
| **NIST** | National Institute of Standards and Technology cybersecurity frameworks (e.g., NIST SP 800-53). |
| **PCI DSS** | Standards for protecting cardholder data and securing payment environments. |

---

## Desktop & Server Security Checklist (Windows)

> This checklist supports monitoring, hardening, and remediation of server and desktop systems, particularly in enterprise and contact center environments.

### System Requirements
- **CPU:** 1.4 GHz 64-bit processor  
- **RAM:** 512 MB minimum  
- **Disk:** 32 GB  
- **Network:** Gigabit Ethernet  
- **Optical:** DVD (if installing via disc)  
- **Display:** SVGA 1024×768 or higher  
- **Input:** Keyboard/Mouse  
- **Internet:** Optional broadband access

---

## Server Configuration Best Practices

- Server provides only one primary service.
- Minimal OS installation without bloatware.
- Regular vulnerability scanning via CIS-CAT; remediation applied.
- Protected by **host-based firewall** and **network-level firewall**.
- **Whitelist-based firewall rules** enforced.
- Group-based firewall policies preferred.
- Remote admin secured via encrypted protocols (e.g., SSH, RDP with NLA).
- Built-in privileged accounts (e.g., `root`, `Administrator`) cannot access remotely.
- Firewall configs are **versioned and backed up**.

---

## Hardening Administrator Devices

All devices used for system administration must:

- Use password-protected logins with authorization
- Have **whole-disk encryption** (required for mobile devices; recommended for desktops)
- Run anti-malware software with current definitions
- Use separate **local admin and user accounts**
- Maintain an up-to-date VPN client
- Apply regular OS and software updates
- Use approved OS images installed by the sysadmin

---

## Server Software Practices

- Only essential services and software are installed.
- Extra services from the OS are disabled or removed.
- Development tools (e.g., compilers) removed post-deployment.
- NTP servers configured appropriately:
  - **Windows Servers (UBAD):** Use domain controllers.
  - **Others:** Use `tick.acsu.buffalo.edu` and/or `tock.acsu.buffalo.edu`.
- Patching is performed **monthly** or in sync with release schedules.
  - Use automated patch management if possible.
- **Acceptable encryption standards** only (e.g., AES-256).
- Private keys are only accessible by the owner or authorized ops group.
- Server data is **backed up securely to another system**.

---

## Server Security Monitoring & Protection

- Windows servers run intrusion detection/prevention software approved by InfoSec.
- **Centralized logging** is enabled and monitored.
- Logs are replicated to another system (not kept only locally).
- Security events are reported to the **Information Security Office**.
- Audit trails are retained for **forensic analysis**.
- Vulnerability scans are conducted **weekly** and issues are remediated promptly.

---

## Summary

Vulnerability assessments and server hardening are essential to protect modern infrastructure. By utilizing reliable tools (e.g., Nessus, OpenVAS, CIS-CAT) and following industry guidelines (e.g., CIS, NIST, STIG), organizations can reduce their attack surface, maintain compliance, and respond proactively to threats.
