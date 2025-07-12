# Mobile Security

## Introduction
- In recent years, smartphone usage has transitioned from being primarily for professional access to fulfilling essential personal needs.
- Smartphones have become indispensable for daily activities such as communication, web browsing, payments, and gaming.
- Mobile devices have fundamentally transformed how people interact with technology and each other.

## Current State of Mobile Security in India
- India has experienced an over **845% increase** in mobile cyber attacks since October 2020, coinciding with widespread work-from-home adoption due to the COVID-19 pandemic.
- Approximately **4 in 10 smartphones** were found vulnerable to cyber attacks.
- In 2022, India witnessed around **18 million cyberattacks** targeting mobile devices.

## Recent Attacks

### S.O.V.A. Android Banking Trojan
- Utilizes a cookie-stealing mechanism.
- Workflow:
  - Command & Control (C2) server sends `stealer` command.
  - Infected Android device opens a WebView window displaying the targeted login page (e.g., PayPal.com).
  - Steals cookies from the session and sends them back to the attacker.
- Infected URLs used include phishing links such as:
  - `"2 Months of Netflix Premium Free due to Quarantine"` with links like `https://bit[.]ly/3bDmzUw`.
- Malware requests permissions like 'Overlay', 'Battery Optimization ignore', and 'Notification'.
- Fake Netflix apps (e.g., FlixOnline) used as delivery vectors.

### JiFake
- First known malicious use of a QR code to distribute malware.
- Scanning the QR code redirects victims to a malicious URL.
- Installs malware that subscribes victims to premium SMS services without consent, resulting in unauthorized charges.

### Hermit Spyware Attack
- New, highly invasive spyware developed by Italian vendor RCS Lab.
- Used by government agencies to target iOS and Android devices, primarily in Italy and Kazakhstan.
- Designed to seize full control of targeted mobile devices.

## Mobile-Based Social Engineering Attacks

- **Hidden Apps:** Malicious apps disguised or hidden from the user.
- **Mobile Phishing:** Deceptive messages or websites tricking users into revealing sensitive info.
  - Example of human brain’s pattern recognition used in phishing text:
    > "If you Can Raed Tihs, You Msut Be Raelly Smrat"  
    > Humans can read jumbled words if first and last letters are correct.
- **Fake Mobile and Security Apps:** Apps falsely claiming to offer security or free services but actually malicious.
- **Malicious Apps and Spyware:** Apps designed to steal data or monitor activity.
- **Malvertising:** Embedding malware in online advertisements.
  - Campaign examples: KS Clean, RoughTed, Angler Exploit Kit.
- **IoT Threats:** Vulnerabilities in connected devices.
- **Wi-Fi Threats:** Risks from unsecured or rogue Wi-Fi networks.
- **Data Leaks:** Exposure of private data due to insecure apps or services.
- **Poor Password Security and Outdated Devices:** Common causes of compromise.

## Security Tips

### How to Avoid Attacks at the App Level
1. Verify security measures early and regularly.
2. Use parameterized queries to avoid injection attacks.
3. Encode data properly to prevent exploitation.
4. Validate all user inputs rigorously.
5. Implement strong identity and authentication controls.
6. Use cryptographically secure methods for data storage and transmission.
7. Enable logging and intrusion detection systems.
8. Leverage security frameworks and trusted libraries.
9. Monitor error and exception handling for leaks.
10. Carefully handle intents and inter-app communications.

### How to Avoid Attacks at the Device Level
1. Keep antivirus and security software updated.
2. Use two-factor authentication (2FA) for financial and sensitive apps.
3. Avoid running your phone in rooted or jailbroken state.
4. Regularly update the mobile OS and firmware.
5. Never leave your device unsecured in public places.
6. Avoid sharing personal info such as names of schools, pets, or birthplaces publicly.

## M-Kavach 2 (Mobile Device Security Solution)

- **Overview:**  
  M-Kavach 2 is a comprehensive security solution focused on Android devices, addressing emerging mobile threats by detecting security misconfigurations and malicious apps.

- **Key Features:**
  - Threat Analyzer
  - App Statistics
  - Detection of Hidden/Banned Apps
  - Adware Scanner
  - Security Advisor
  - App Locker

- **User Adoption:**
  - Over **27,000 downloads** on Google Play Store with a user rating of **4.0/5.0**  
    [Google Play Store Link](https://play.google.com/store/apps/details?id=org.cdac.updatemkavach)
  - Over **1,300 downloads** on Mobile Seva Appstore with a rating of **4.0/5.0**  
    [Mobile Seva Appstore Link](https://apps.mgov.gov.in/app-info/1538)
