
## Security Mechanisms at Networking Layers

- **Application Layer:**
  - Application-specific security measures.
  - Examples: S/MIME for email encryption, DNSSEC for secure DNS queries.

- **Transport Layer:**
  - Protects data in a communication session.
  - Common protocols: TLS and SSL for HTTP and FTP protection.

- **Network Layer:**
  - Applies to all applications without modification.
  - Example: IPsec for secure network communication.
  - Provides less flexibility than application-layer security.

## Domain Controller & Active Directory Services (ADS)
- Centralized logical data repository synchronized across domain controllers.

## Network Security Devices
- **Routers:** Connect different networks, operate at Layer 3, direct traffic paths.
- **Firewalls:** Control access between networks.
- **Intrusion Detection System (IDS):** Monitors systems for malicious activity; reports alerts.
- **Intrusion Prevention System (IPS):** Actively blocks detected attacks using threat intelligence.

## Network Security Attacks
- **Denial of Service (DoS):**
  - Overloads services to make them unusable.
  - Types: SYN flooding, SMURF, Distributed DoS (DDoS).

## Authentication
- **One-factor:** Something the user knows (e.g., password).
- **Two-factor:** Something the user has (e.g., token) plus one-factor.
- **Three-factor:** Adds something the user is (biometrics).
- **Remote authentication:** Uses RADIUS or TACACS+ protocols for scalable centralized authentication (AAA model).

## Network Control
- Networks must be managed and controlled to protect systems and applications.
- Responsibilities should be separated from computer operations.
- Controls include:
  - Managing remote equipment.
  - Safeguarding data confidentiality and integrity over public networks.
  - Remote control and monitoring of network devices.
  - Restricting routing and access to authorized users.
  - Encrypting transmitted data.

- Service level agreements (SLAs) should specify:
  - Security features such as authentication and encryption.
  - Access restrictions.
  - Monitoring and auditing capabilities.

- Network segmentation:
  - Networks divided into security domains based on trust levels or organizational units.
  - Controlled access between domains using gateways (firewalls, filtering routers).

- **VPN usage:** Secure encrypted access to internal business networks remotely.

## Information Transfer (A13.2)
- Risks exist when transferring info/software to external parties.
- Controls and policies include:
  - Formal transfer policies complying with legislation.
  - Protection of physical media in transit.
  - Agreements covering management responsibilities, traceability, technical standards, and incident liabilities.
  - Electronic messaging protection against unauthorized access/modification, legal proof, policy compliance.
  - Use of cryptographic techniques (e.g., VPN) to protect confidentiality, integrity, and authenticity.

## Network Monitoring
- IDS monitors threats from outside.
- Network monitoring systems check for overloads, bandwidth use, and failures.
- Techniques:
  - Network tomography: Health monitoring using probes.
  - Route analytics: Monitoring routing posture.
- Network Monitoring Systems (NMS) provide:
  - Discovery, Mapping, Monitoring, Alerts, Reporting.
- Security Information and Event Management (SIEM) aggregates logs for threat detection.
- Popular SIEM tools: SolarWinds Security Event Manager, McAfee Enterprise Security Manager.

## Confidentiality of Nondisclosure Agreements
- Regularly reviewed confidentiality agreements protect sensitive info.
- Agreements cover:
  - Ownership and protection of trade secrets and intellectual property.
  - Audit and monitoring rights.
  - Procedures for unauthorized disclosure.
  - Terms for return or destruction of information.
  - Actions upon breach.

## Technical Vulnerability Analysis
- Regular vulnerability scans (e.g., Nessus).
- Patch management of network OS and applications.
- Penetration testing to identify exploitable weaknesses.

## Business Continuity Planning (BCP)
- Maintain network security during disasters.
- Regular backups and restoration plans.
- Redundancy in devices, ISPs, power supply.

## Endpoint Security
- Protects remote devices accessing critical data.
- Uses multi-layered security software: antivirus, firewalls, sandboxing, etc.

## Data Loss Prevention (DLP)
- Prevents internal data leakage by restricting access and blocking data transfer (uploading, printing, forwarding).

## Network Time Protocol (NTP)
- Synchronizes clocks across networked systems.
- Uses precise atomic/GPS clocks via primary time servers.
