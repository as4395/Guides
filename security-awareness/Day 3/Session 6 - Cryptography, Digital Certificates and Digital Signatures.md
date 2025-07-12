# Public Key Infrastructure (Digital Signatures)

---

## Characteristics of Hand Signature

- A hand signature on a document is:
  - A unique pattern dependent on some secret known only to the signer  
  - Independent of the content of the message being signed  

---

## Attacks on Handwritten Signatures

- **Attacks on Integrity**
  - Content alteration or corruption  
- **Attacks on Identity**
  - Impersonation  
- **How is identity verified?**
  - Through trusted verification mechanisms  

---

## Basic Elements of Trust

- **Privacy (Confidentiality):** Ensuring that only authorized persons read the data/message/document  
- **Authenticity:** Ensuring that the data/message/document originated from the claimed signer/sender  
- **Integrity:** Ensuring that the data/message/document is unaltered by any unauthorized person  
- **Non-Repudiation:** Ensuring that one cannot deny their signature or origination of a message  

---

## What is a Digital Signature?

- A number (fingerprint) dependent on:
  - A secret known only to the signer  
  - The content of the message being signed  
- Digital signatures can be:
  - Verified for **Authenticity**  
  - Verified for **Integrity**  
  - Verified for **Non-Repudiation**  

---

## Creating Digital Signature

- Every individual is given a pair of keys:
  - **Public key:** known to everyone  
  - **Private key:** known only to the owner  
- To digitally sign an electronic document:
  - The signer uses his/her **private key**  
- To verify a digital signature:
  - The verifier uses the signer's **public key**  

---

## Digital Signatures - Recap

- Establishes:
  - Identity and authenticity of the signer  
  - Integrity of the document  
  - Non-repudiation (inability to deny being signed) to a certain extent  
- General conventions:
  - **Signing:** Private key of the signer  
  - **Verification:** Public key of the signer  

---

## Hash Function

- A cryptographic mechanism that operates as a one-way function  
  - Creates a digital representation or "fingerprint" (Message Digest)  
  - Fixed size output  
  - Any change to the message produces a different digest  
- Example algorithms: MD5, SHA  

---

## Digital Certificate Signature (DSC)

- An electronic document used to prove ownership of a public key  
- Includes:
  - Information about the owner's identity  
  - Information about the key  
  - The digital signature of an entity that has verified the certificate's contents  

---

## Certifying Authority (CA)

- An entity that issues Digital Signature Certificates (DSC)  
- Trusted third party, core component of Public Key Infrastructure (PKI)  

### Responsibilities of CA

- Verify credentials of the person requesting the certificate (done by Registration Authority - RA)  
- Issue certificates  
- Review certificates  
- Generate and upload Certification Revocation List (CRL)  

---

## Hierarchical Trust Model

- For a digital signature to have legal validity (e.g., in India), trust must derive from the **Root CA certificate**

---

## Certificate Issuance Process

1. User makes online payment to the Registration Authority (RA)  
2. RA verifies applicant and issues a **crypto token**  
3. The token creates a key pair (private and public key)  
4. Private key is stored securely in a private key store  
5. Public key and other identity info are used for the Certificate Signing Request (CSR)  
6. CSR is submitted to the Certificate Authority (CA), which issues the digital signature certificate  

---

## Crypto Token

- Contains a cryptographic co-processor with a USB interface  
- The key is generated inside the token and never leaves it  
- Highly secure, portable, machine-independent  
- FIPS 140-2 compliant and tamper-resistant  

---

## Certificate Classes

### Define the level of assurance for a digital certificate

1. **Class 1 Certificate**  
   - Issued to individuals  
   - Assurance: Confirms user's name and email address  
   - Usage: Signing personal emails, encrypting digital emails, SSL secure communication  

2. **Class 2 Certificate**  
   - Issued for business personnel and private individuals  
   - Assurance: Validates submitted details including photograph and documentary proof  
   - Usage: Digital signing, code signing, VPN authentication, web form signing, smart card logon, single sign-on, e-procurement/governance  

3. **Class 3 Certificate**  
   - Issued to individuals and organizations  
   - Assurance: Highest level; proves organization existence and authorized representation  
   - Usage: Official digital signing and encryption based on official capacity  

---

## Types of Certificates

- **Signing Certificate (DSC):** For signing electronic documents  
- **Encryption Certificate:** For encryption purposes  
- **SSL Certificate:** Issued to domain names for securing web/email servers  

---

## Certification Revocation List (CRL)

- A list of serial numbers of revoked certificates  
- Reasons for revocation:
  - Key compromise reported by users  
  - Discovery of false information during certificate issuance  
- Maintained by Certificate Authorities (CAs)  
- Usually updated twice a day based on CA policy  
- Automated access via **Online Certificate Status Protocol (OCSP)**  

---

## Dimensions of PKI

- Technology  
- Policy  
- Standards  
- Implementation  

---

## What is PKI?

- Public Key Infrastructure (PKI) is an ecosystem comprising:  

  - **Algorithms and Protocols**  
    - Role players: Cryptographers, researchers  

  - **Implementation & Standards**  
    - Role players: Application developers, standards organizations  

  - **Policy & Law**  
    - Role players: Regulatory bodies, law enforcement  

  - **Applications**  
    - Role players: Users and systems  

---

## Summary

- PKI combines technology, policy, and implementation to provide security  
- Digital signatures provide:
  - Authenticity  
  - Integrity  
  - Non-repudiation for electronic documents and transactions  
- Asymmetric key cryptography enables confidentiality  

### General Conventions

| Operation    | Key Used                 |
|--------------|-------------------------|
| Signing      | Private key of the signer |
| Verification | Public key of the signer  |
| Encryption   | Public key of the receiver|
| Decryption   | Private key of the receiver|
