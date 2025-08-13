# How to Stay Anonymous Online

**Scope:** Preventing leaks from habits, behavior, or technical actions.

Anonymity and privacy are related, but distinct. 

**Anonymity** is the state of not having your identity linked to actions. 
**Privacy** is controlling who has access to your information and how your information is used. 

---

## Layer 1 - Hardware

- Use a dedicated computer or laptop for private activities.  
- Acquire hardware anonymously via prepaid debit cards or privacy-oriented cryptocurrencies like Monero.  
- Physically secure devices in a fireproof safe when not in use.  
- Enable **Full Disk Encryption (FDE)** to prevent unauthorized physical access. Use the highest encryption bit length possible.  
- Consider a **live ephemeral OS** such as **Whonix** or **Tails** installed on a wiped USB drive.  
- Windows and macOS are privacy-compromised by default. If using them, disable default telemetry settings and, for Windows, use tools such as **W10Privacy** for greater control.  

> FDE protects against physical access but does not protect online activity. An ephemeral OS prevents persistent leaks on your device.

---

## Layer 2 - Network

### Local Network (LAN)
- Randomize your **MAC address** using OS tools, scripts, or live OS features.  
- Randomize your device hostname to avoid linking it to your real identity.  
- Harden routers: segment networks for guests or IoT devices.  
- Consider replacing ISP firmware with **pfSense** for firewall and traffic control.  
- Optional: use a **TorBox** (Raspberry Pi Tor router) to route all connected devices through Tor.

### Internet (WAN)
- Avoid your default ISP DNS. Use **Tor DNS**, **Quad9 (9.9.9.9)**, or other privacy-focused resolvers temporarily.  
- IP anonymization options:  
  - **Proxies**: intermediate servers that relay requests (e.g., **ProxyChains**).  
  - **VPNs**: an encrypted tunnel between the device and the VPN server. Trust is required; logs may exist.  
  - **Tor**: multi-node network with encryption at each hop (entry, intermediate, exit). Traffic is obfuscated between nodes.  

> VPNs do not make you anonymous. They shift the trust to the provider. Tor provides strong anonymity if configured properly, but must be combined with strict operational security.

- Use a **VPS** for isolated online sessions if needed.  
- Disable JavaScript and third-party cookies to reduce tracking.  

---

## Layer 3 - Communication & Transactions

### Messaging
- Use **end-to-end encrypted (E2E)** services.  
- Recommended: **Signal** (centralized, open-source), **Wire**, **Threema** (alternative options).  
- Federated or peer-to-peer solutions: **Element**, **Briar**, **Yami** for stronger decentralization.  
- Avoid SMS or any non-encrypted communication.

### Email
- Permanent privacy-focused emails: **ProtonMail**, **Tutanota**, **Mailfence**. Sign up over Tor using a new identity for each account.  
- Temporary throwaway emails: **[tempmail.org](https://temp-mail.org/)**, **[tempmailo.com](https://tempmailo.com/)**, **[guerrillamail.com](https://www.guerrillamail.com/)**.  
- Decentralize emails to prevent one breach compromising multiple accounts.  

### Passwords
- Use offline password managers: **KeePassXC**, **GNU Pass**.  
- Avoid cloud-based managers unless signing up anonymously with Tor and a burner email.  
- Always use strong, unique passwords for each account.

### Threat Model Considerations
- Identify who you are protecting yourself from (hackers, corporations, governments).  
- Government threat model: avoid biometrics (fingerprints, face, iris), use hardware 2FA like **YubiKey**.  
- Destroy hardware keys if compromised to prevent account access.  

---

## Layer 4 - Operational Security (OPSEC)

- OPSEC protects against revealing sensitive information via behavior, habits, or online identity.  
- Use **sock puppets** for all online interactions.  
- Minimize posts or personal information online.  
- Consider writing style fingerprints: avoid consistent spelling quirks that could identify you.  
- Limit location sharing, GPS tagging, or social media posts.  

---

## Browser Security

### Browsers
- **GNU IceCat**: maximum privacy, limited JavaScript support. Use **mpv** with **youtube-dl** to play YouTube without browser tracking.  
- **Firefox**: user-friendly with strong security.  
  - Enable strict tracking protection.  
  - Disable cookies, history, autofill, WebRTC, geolocation, and fingerprinting.  
  - Import **ghacks-user.js** for hardened settings.  

### Extensions
- **uBlock Origin**: granular ad/script blocking, disable third-party scripts.  
- **Decentraleyes**: local emulation of CDNs, faster page load, privacy protection.  

### Profiles & Separation
- Create separate browser profiles for different purposes.  
- Avoid mixing personal and anonymous activities.  
- Optionally combine profiles with dedicated VPN servers to prevent cross-linking.  

---

## VPN and Tor Integration

- Use **Mullvad**: no logs, anonymous signup, Monero/cash payments.  
- Sign up via Tor; avoid logging into clearnet accounts while connected.  
- Tor: block JavaScript and never log into personal accounts.  
- Promote Tor usage to increase network anonymity.
- Use [dnsleaktest.com](https://www.dnsleaktest.com/) and [browserleaks.com](https://browserleaks.com/) to assess your web browser's security and privacy. 

> Combining VPN with browser profiles adds layers of obfuscation; do use a VPN over Tor, connect to Tor first.

---

## Online Services & Social Media

- Avoid services that track heavily: Google, Facebook, X (Twitter).  
- For social media accounts requiring phone verification, use temporary phone numbers.  
- Do not log into clearnet accounts while using Tor or during a VPN session.  
- One slip-up can expose all activity across VPN, Tor, and browser profiles.  

---

## Mindset

- Your personal data is valuable; corporations, governments, and hackers profit from it.  
- Decentralize accounts and compartmentalize identities.  
- Avoid free services monetizing your activity; if it’s free, you are the product.  
- Maintain constant discipline. Privacy is **ongoing**, not a single setup.
  
