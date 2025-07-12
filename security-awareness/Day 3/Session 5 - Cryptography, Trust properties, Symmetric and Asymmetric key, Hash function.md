# Cryptography and Public Key Infrastructure (PKI)

---

## What is Cryptography?

Cryptography is the **study and practice of securing communication** through techniques such as hiding, encrypting, or secret writing. It leverages mathematical and logical principles to ensure the **confidentiality, integrity, and authenticity** of information.

---

## Core Concepts

- **Plaintext**: The original, readable message to be sent.
- **Encryption**: The process of converting plaintext into an unreadable format (ciphertext).
- **Decryption**: The process of converting ciphertext back into plaintext.
- **Ciphertext**: The encrypted, unreadable version of the plaintext.
- **Key**: A unique value (e.g., bit pattern or alphabetic sequence) used in conjunction with an encryption algorithm to encrypt or decrypt data.

> 🔐 **Encryption and decryption are inverse processes** and typically require the correct key to be reversed.

---

## Types of Cryptographic Systems

### 1. Symmetric Key Cryptography

- Same key is used for both **encryption and decryption**
- The key must be **shared securely** between sender and receiver
- **Fast and efficient**, especially for large volumes of data
- Commonly used for bulk data encryption

#### Advantages:
- Speed and simplicity

#### Challenges:
- Secure key exchange (e.g., Jai and Veeru need a private channel)
- **Key compromise** leads to loss of confidentiality
- **Scalability** is difficult with a large number of users

#### Achieves:
- Confidentiality
- Integrity
- Authentication (in certain modes)

---

### 2. Asymmetric Key Cryptography (Public Key Cryptography)

- Uses a **key pair**:
  - **Public Key**: Used for encryption; shared openly
  - **Private Key**: Used for decryption; kept secret
- Knowing the public key does **not** reveal the private key
- Often used to **secure symmetric key exchange**

#### Characteristics:
- Public key can be distributed in public directories
- Private key remains with the owner

#### Advantages:
- Solves key exchange problem
- Enables digital signatures

#### Disadvantages:
- Computationally intensive and **slow**
- Not efficient for bulk data encryption

#### Misconceptions:
- Does **not** replace symmetric cryptography
- Not inherently “more secure,” just solves different problems

---

## Classical Ciphers

### Substitution Cipher

- Each letter or character in the plaintext is replaced by another
- Simple and easily broken in modern times

### Caesar Cipher

- A type of substitution cipher
- Each character in the plaintext is **shifted by a fixed number (`k`)** in the alphabet

Example (k=3):  
- A → D  
- B → E  
- Z → C

---

## Hash Functions

A **hash function** is a **one-way cryptographic function** that generates a fixed-size hash (message digest) from variable-length input data.

### Key Characteristics:

- **Deterministic**: Same input always gives the same output
- **Fixed Output Length**: Regardless of input size
- **Avalanche Effect**: Small change in input yields drastically different output
- **Collision Resistance**: Hard to find two inputs that generate the same hash

### Examples:

- **MD5** – Legacy, weak against collisions
- **SHA-1** – Obsolete, vulnerable to attacks
- **SHA-2 family (SHA-256, SHA-512)** – Industry standard
- **SHA-3** – Newer, alternative construction

> ✅ Hashes are fundamental to **digital signatures**, **integrity checks**, and **password storage**

---

## Summary: Key Roles in Cryptography

| Component       | Purpose                                                  |
|----------------|-----------------------------------------------------------|
| Plaintext       | Original message                                          |
| Ciphertext      | Encrypted message                                         |
| Encryption      | Transforms plaintext to ciphertext                        |
| Decryption      | Reverses ciphertext to plaintext                          |
| Symmetric Key   | Single key used for encryption/decryption                 |
| Public Key      | Used to encrypt data (shared)                             |
| Private Key     | Used to decrypt data (kept secret)                        |
| Hash Function   | One-way function for integrity checks                     |

---

## Final Notes

- **Symmetric encryption** is fast and efficient for bulk encryption.
- **Asymmetric encryption** is ideal for secure key exchange and digital signatures.
- **Hash functions** are essential for verifying integrity and securing authentication mechanisms.
