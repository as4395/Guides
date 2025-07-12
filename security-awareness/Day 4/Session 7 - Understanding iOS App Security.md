# iOS Security and Pen-Testing Overview

## Introduction

### iOS Basics
- iOS is a mobile operating system developed by **Apple Inc.** for iPhones, iPads, and other Apple mobile devices.
- It is Apple's mobile version of the **OS X** operating system used on Macs.
- Derived from **OS C**, iOS is a layered, based operating system powering devices like iPhone, iPad, and iPod.
- iOS is the **second most popular mobile OS** after Android.
- iOS apps are developed primarily using **Objective-C** and **Swift**.
- The official IDE is **Xcode**.
- App files have `.ipa` extension.
- Apps are downloadable via the **App Store**.
- Developers can run apps on a simulator or real device.
  - Simulators run on **x64 architecture**.
  - Real devices use **ARM architecture**.
- A free developer account is required to run apps on real devices.

### Difference Between iOS and Android
| Feature          | iOS                              | Android                         |
|------------------|---------------------------------|--------------------------------|
| Source Model     | Closed-source (Apple Inc.)       | Open-source (Google/Linux Kernel) |
| Current Version  | iOS 18.5                        | Android 16                     |

### Is iOS More Secure Than Android?
- Apple’s iOS has many built-in security features and is **closed source**.
- This has led to iOS being considered **more secure** than Android.
- However, iOS is **not invulnerable** and can be hacked.

---

## iOS Application Architecture

### Layered Structure
- The iOS architecture is **layered**; communication between app and hardware is mediated by these layers.
- Each layer offers frameworks (dynamic libraries, headers, resources) for developers.

| Layer            | Description & Key Frameworks                                              |
|------------------|--------------------------------------------------------------------------|
| **Cocoa Touch**  | High-level UI and interaction frameworks: UIKit, MapKit, GameKit, PushKit, Twitter, iAd |
| **Media Layer**  | Multimedia services: Core Graphics, Core Animation, AVKit, Media Player  |
| **Core Services**| Fundamental services: Foundation, CloudKit, HealthKit, Core Data, StoreKit, Social, HomeKit |
| **Core OS**      | Low-level OS services close to hardware: Core Bluetooth, Security Services, Local Authentication, Accelerate |

- Lower layers provide base services; higher layers provide graphics and UI support.

---

## iOS Security Model

### Key Features
- Security is **layered** at hardware, OS, and app levels:
  - **Hardware/Firmware encryption**
  - **App sandboxing** prevents cross-app data access
  - **Data protection** via encryption
  - **Code signing** ensures app integrity

### Secure Boot Chain
- **Boot ROM**  
  - Hardware root of trust; cannot be updated  
  - Contains Apple root certificate  
  - Verifies the low-level bootloader signature
- **Low-Level Bootloader**  
  - Verifies iBoot firmware signatures  
  - Is the lowest updatable code
- **iBoot**  
  - Verifies iOS kernel signatures  
  - Prevents boot-level malware

### Application Sandboxing
- Each app runs in its **own sandbox**, isolating its files and data.
- Limited inter-app communication via secure APIs (e.g., URL schemes).
- Local databases are sandboxed per app to avoid conflicts.

---

## Jailbreaking

### Why Jailbreak?
- iOS restricts installing apps outside the App Store and accessing filesystem by default.
- Penetration testers need filesystem and keychain access, debugging, and runtime hooking — requiring jailbreaking.

### What is Jailbreaking?
- Privilege escalation from mobile user to root.
- Removes Apple-imposed restrictions on iOS, iPadOS, tvOS, etc.
- Exploits vulnerabilities to maintain root access and install utilities.
- Enables:
  - Full filesystem access
  - Installation of unsigned apps

### Jailbreak Types
- **Tethered:** Must connect device to computer on every reboot to re-jailbreak.
- **Untethered:** Jailbreak persists after reboot.

### Cydia
- App store for jailbroken devices.
- Manages third-party apps and tweaks via external repositories.
- Includes jailbreak tools like Electra, Unc0ver, Phoenix.

### Simulator Limitations
- Simulator cannot run ARM-only apps like iTunes.
- Limits pen-testing capabilities on simulated iOS.

---

## iOS File System Overview
- `Appname.app`: App bundle containing executable and resources.
- `Documents/`: User-generated data, accessible via file sharing.
- `Library/`: Custom app data like Application Support, Caches.
- `Tmp/`: Temporary files; not persistent between app launches.

---

## iOS Pen-Testing Process

### Common Steps
1. **Decrypt iOS apps** downloaded from App Store.
2. **Dump class information** for static analysis.
3. **Reverse engineering** and static code analysis.
4. **File system analysis**.
5. **Runtime (dynamic) analysis**.

### IPA File Structure
- Rename `.ipa` to `.zip` and unzip to explore:
  - **App binary**: Compiled executable (not human-readable).
  - **Info.plist**: App metadata (bundle ID, version, display name).
  - **Frameworks/**: Dynamic libraries.
  - **embedded.mobileprovision**: Certificates.

### Typical Testing Approach
- Obtain IPA file.
- Bypass jailbreak detection and certificate pinning.
- Inspect HTTP(S) traffic.
- Abuse app logic at runtime.
- Check local data storage (cache, cookies, plist, databases).
- Test for client bugs (SQLi, XSS).
- Monitor logs, screenshots, app backgrounding behavior.

---

## Common Vulnerabilities in iOS Apps
- Local data storage leaks.
- Weak or absent jailbreak detection.
- Excessive permissions granted.
- Runtime manipulation vulnerabilities.
- Anti-hooking and debugging bypass.
- Weak binary protection.
- Face/Touch ID bypass.
- Phishing susceptibility.
- Side-channel data leakage.
- Interprocess communication (IPC) issues.
- Broken cryptography.
- WebView vulnerabilities.
- Network security flaws.
- Application patching risks.
- Sensitive data left in memory.
- Data leakage to third parties.

---

## Open-Source Tools for iOS App Analysis

| Tool                | Purpose                            |
|---------------------|----------------------------------|
| Xcode tools (otool)  | Object file inspection            |
| Frida               | Runtime hooking and instrumentation |
| Mobilexer            | iOS app security testing         |
| MobSF                | Static and dynamic analysis scanner |
| Hopper Disassembler  | Binary disassembly                |
| iTunes, iFunBox      | Device management and file browsing |
| Cydia                | Jailbreak app store              |
| Burp Suite           | Proxy and traffic inspection     |
| Chkrain, Yalu        | Jailbreaking utilities           |
| Objection            | Runtime app hooking               |
| Clutch               | IPA decryption                   |
| Cycript              | Runtime analysis and hooking     |
| Passion Fruit        | Blackbox iOS app assessment      |
| Plist Editor         | Plist file editing               |
| Binary Cookie Reader | Cookie extraction                |
| SSL Killswitch       | SSL pinning bypass               |
| iOS-app-signer       | IPA signing and packaging        |
| Darwin CC tools      | Mach-O auditing tools (nm, strip)|
| grapefruit           | Runtime instrumentation          |

---

## Protection of User Data and Transmission

### How Apple Protects User Data

#### Secure Data Storage
- **App Sandbox:** Isolates app data and restricts access.
- **Data Protection API:** Encrypts files on disk using hardware keys.
- **Keychain:** Secure storage for passwords, keys, and certificates.

#### Secure Data Transmission
- **App Transport Security (ATS):** Enforces HTTPS connections.
- **TLS Pinning:** Prevents man-in-the-middle attacks by pinning server certificates.
- **End-to-End Encryption:** Protects data confidentiality in transit and storage.
