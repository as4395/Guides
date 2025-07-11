# **Introduction to TCP/IP Networking**

## **TCP/IP Protocol Family**
- **IP: Internet Protocol**
    - **UDP: User Datagram Protocol**
        - RTP, Traceroute
    - **TCP: Transmission Control Protocol**
        - HTTP, FTP, SSH

---

## **What is the Internet?**
- A set of *interconnected networks*
- The **Internet** is the most famous example
- Networks can be completely different:
    - Ethernet, ATM, Modem, etc.
    - **TCP/IP** is what links them
- **Routers** are devices on multiple networks that pass traffic between them
- Individual networks pass traffic from one router or endpoint to another
- **TCP/IP** hides the details as much as possible

---

## **The OSI Model**
- **Layer 7**: Application
- **Layer 6**: Presentation
- **Layer 5**: Session
- **Layer 4**: Transport
- **Layer 3**: Network
- **Layer 2**: Data link
- **Layer 1**: Physical

---

### **Summary of OSI Layers**
- **Layer 7: Application**
    - To allow access to network resources
- **Layer 6: Presentation**
    - To translate, encrypt, and compress data
- **Layer 5: Session**
    - To establish, manage, and terminate sessions
- **Layer 4: Transport**
    - To provide reliable process-to-process message delivery and error recovery
- **Layer 3: Network**
    - To move packets from source to destination; to provide inter-networking
- **Layer 2: Data link**
    - To organize bits into frames; to provide hop-to-hop delivery
- **Layer 1: Physical**
    - To transmit bits over a medium; to provide mechanical and electrical specifications

---

## **OSI Model vs TCP/IP Hierarchy**

| **OSI Layer** | **TCP/IP Hierarchy** | **Protocols** |
| --- | --- | --- |
| 7th Application Layer | Application Layer | HTTP, SMTP, POP3, FTP |
| 6th Presentation Layer | Application Layer | HTTP, SMTP, POP3, FTP |
| 5th Session Layer | Application Layer | HTTP, SMTP, POP3, FTP |
| 4th Transport Layer | Transport Layer | TCP, UDP |
| 3rd Network Layer | Network Layer | IP, ICMP |
| 2nd Link Layer | Link Layer | ARP, RARP, Ethernet, PPP |
| 1st Physical Layer | Link Layer | ARP, RARP, Ethernet, PPP |

**Link Layer**: Includes device driver and network interface card  
**Transport Layer**: Provides a reliable flow of data between two hosts  
**Network Layer**: Handles the movement of packets (i.e., Routing)  
**Link Layer**: Includes device driver and network interface card

---

## **OSI Layer to TCP/IP Layer Mapping**

| **OSI Layer** | **Purpose** | **TCP/IP Layer** | **Protocol** | **Packet Data Unit** | **Address** | **Device** |
| --- | --- | --- | --- | --- | --- | --- |
| Application | Interface (API) | Application | HTTP, SMTP, etc. | Message | - | - |
| Presentation | Formatting, Encryption, Compression | Application | HTTP, SMTP, etc. | Message | - | - |
| Session | Authentication, Authorization | Application | HTTP, SMTP, etc. | Message | - | Gateway |
| Transport | Reliability | Transport | TCP, UDP | Segment (TCP), Datagram (UDP) | Port | Firewall |
| Network | Addressing, Routing | Internet | IP, ICMP | Packet | IP Address | Router |
| Data Link | Logical Link Control, Media Access Control | Link | Ethernet, Wi-Fi, PPP, etc. | Frame | MAC Address | Switch, Bridge, Access Point |
| Physical | Transmission | Link | CAT-5, RJ-45, etc. | Bit | - | Hub, NIC, Cable, Wireless |

---

## **Packet Encapsulation**
- The data is sent **down** the protocol stack.
- Each layer adds to the data by prepending **headers**.

---

## **IP Datagram**

- **0-4**: Vers (IP version number)
- **4-8**: Len (Length of IP header)
- **8-16**: TOS (Type of Service)
- **16-31**: Total Length (Length of entire datagram)
- **16-19**: Flags (Don't/More fragments)
- **19-31**: Fragment Offset
- **0-8**: TTL (Time to Live - Max # of hops)
- **8-16**: Protocol (Higher level protocol)
- **16-31**: Header Checksum
- **0-31**: Source Internet Address
- **0-31**: Destination Address
- **0-24**: Options (Source route, time stamp, etc.)
- **24-31**: Padding
- **0-31**: Data (Higher-level protocol data)

---

### **Field Purpose**

| **Field**       | **Purpose**                                              |
| --------------- | -------------------------------------------------------- |
| **Vers**        | IP version number                                        |
| **Len**         | Length of IP header                                      |
| **TOS**         | Type of Service                                          |
| **T. Length**   | Length of entire datagram (octets)                       |
| **Ident.**      | IP datagram ID (for fragmentation/reassembly)           |
| **Flags**       | Don't/More fragments                                     |
| **Frag Off**    | Fragment Offset                                          |
| **TTL**         | Time to Live - Max # of hops                             |
| **Protocol**    | Higher level protocol (1 = ICMP, 6 = TCP, 17 = UDP)      |
| **Checksum**    | Checksum for the IP header                               |
| **Source IA**   | Originator's IP address                                  |
| **Dest. IA**    | Final Destination Internet Address                       |
| **Options**     | Source route, time stamp, etc.                           |
| **Data**        | Higher-level protocol data                               |

---

### **Key Fields to Remember**
- **IP Address**: Both Source and Destination
- **TTL**: Time to Live - Max number of hops
- **Protocol #**: Identifies the higher-level protocol (e.g., 6 = TCP, 17 = UDP)

---
