# **IP Packets and Network Protocols Overview**

---

## **IP Packets**
- **Source and Destination Addresses**  
- **Protocol Number**  
  - `1 = ICMP`, `6 = TCP`, `17 = UDP`
- **Various Options**  
  - For example, to control fragmentation.
- **Time to Live (TTL)**  
  - Prevents routing loops.

---

## **IP Datagram**
### Field | Purpose
- **Vers**: IP version number.
- **Len**: Length of the IP header (4-octet units).
- **TOS**: Type of Service.
- **T. Length**: Length of the entire datagram (packets).
- **Ident**: IP datagram ID (for fragmentation/reassembly).
- **Flags**: Don’t/More fragments.
- **Frag Off**: Fragment Offset.
- **TTL**: Time to Live (Max # of hops).
- **Protocol**: Higher level protocol (`1 = ICMP`, `6 = TCP`, `17 = UDP`).
- **Checksum**: Checksum for the IP header.
- **Source IA**: Originator's Internet Address.
- **Dept IA**: Final Destination Internet Address.
- **Option**: Source route, time stamp, etc.
- **Data**: Higher-level protocol.

---

## **IP Routing**
- **Source**:
  - Application  
  - Transport  
  - Network  
  - Link
- **Router**:
  - Network  
  - Link
- **Destination**:
  - Application  
  - Transport  
  - Network  
  - Link
- **Routing Table**:
  - Destination IP address
  - IP address of a next-hop router
  - Flags
  - Network interface specification

---

## **UDP (User Datagram Protocol)**
- **Thin Layer on Top of IP**
  - Adds packet length and checksum (to guard against corrupted packets).
- **Source and Destination Ports**  
  - Used to associate a packet with a specific application at each end.
- **Still Unreliable**  
  - Duplication, loss, or out-of-order delivery are possible.
- **Typical Applications of UDP**:
  - Where packet loss, etc., is better handled by the application than the network stack.
  - Where the overhead of setting up a connection isn't wanted.
  - **Examples**:  
    - VOIP  
    - NFS (Network File System)  
    - Most games

---

## **TCP (Transmission Control Protocol)**
- **Reliable, Full-Duplex, Connection-Oriented, Stream Delivery**  
  - The interface presented to the application doesn’t require data in individual packets.
  - Data is guaranteed to arrive, and in the correct order without duplication.
  - If errors are detected, the connection is dropped.
  - Imposes significant overhead.
  
### **TCP Implementation**
- Connections are established using a three-way handshake.
- Data is divided into packets by the operating system.
- Packets are numbered, and received packets are acknowledged.
- Connections are explicitly closed (or may terminate abnormally).

### **TCP Packets**
- **Source + Destination Ports**
- **Sequence Number**
- **Acknowledgement Number**
- **Checksum**
- **Various Options**

### **TCP Segment**
#### Field | Purpose
- **Source Port**: Identifies the originating application.
- **Destination Port**: Identifies the destination application.
- **Sequence Number**: Sequence number of the first octet in the segment.
- **Acknowledgement #**: Sequence number of the next octet (if ACK flag set).
- **Len**: Length of the TCP header in 4-octet units.
- **Flags**: TCP flags: `SYN`, `FIN`, `RST`, `PSH`, `ACK`, `URG`.
- **Window**: Number of octets from the ACK that the sender will accept.
- **Checksum**: Checksum of IP pseudo-header + TCP header + data.
- **Urgent Pointer**: Pointer to the end of "urgent data."
- **Options**: Special TCP options such as MSS and Windows Scale.

---

## **IPv6**
- **128-bit Addresses**
  - Makes it feasible to be very wasteful with address allocations.
- **Other New Features**:
  - Built-in auto-configuration, security options.
- **Not in Full Production Use Yet**.

---

## **ARP (Address Resolution Protocol)**
- **ARP provides mapping**  
  - 32-bit IP address ↔ 48-bit MAC address  
  - Example: `128.97.89.153 ↔ 00-C0-4F-48-47-93`
- **ARP Cache**  
  - Maintains recent mappings from IP addresses to MAC addresses.

### **ARP Protocol**
1. **ARP Request**: Broadcast on Ethernet.
2. **ARP Reply**: Destination host responds with MAC address.

---

## **Ethernet**
- **Computer ↔ Computer Communication on the Same Network**
- Each device has a unique **MAC Address** (48-bit).  
  - Example: `00-C0-4F-48-47-93`.
  
### **Ethernet Packet Format**:
- Preamble, Dest. Address, Source Address, Type, Data, CRC.
- Format: `8 bytes, 6 bytes, 6 bytes, 2 bytes, 64-1500 bytes, 4 bytes`.

---

## **DHCP (Dynamic Host Configuration Protocol)**
- **Used to Tell a Computer What IP Address to Use**
  - Device broadcasts a request from IP `0.0.0.0`.
  - If it had an IP address before, it asks for the same one.
  - Server on the local network responds with the IP address or instructs to go away.
  - **Lease Time**: Tells how long the IP will be valid.
  - Device requests lease renewal after 3/4 of the term.

---

## **Internet Traffic Monitoring and Analysis: Wireshark Tutorial**

### **What is Wireshark?**
- **De-Facto Network Protocol Analyzer**
  - Open-Source (GNU Public License).
  - Multi-platform (Windows, Linux, MacOS, etc.).
  - Easily extensible with a large development group.

### **Wireshark Features**
- Deep inspection of thousands of protocols.
- Live capture and offline analysis.
- Standard three-pane packet browser.
- Rich VoIP analysis.
- Live data capture from various interfaces (Ethernet, Bluetooth, USB, etc.).
- Coloring rules can be applied to the packet list for quick analysis.
- Output can be exported to XML/CSV.

### **Wireshark Capabilities**
- Capture network traffic.
- Decode packet protocols using dissectors.
- Define filters for capturing and displaying traffic.
- Watch smart statistics.
- Analyze network problems interactively.

### **Who Uses Wireshark?**
- **Network Admins**: Troubleshoot network security problems.
- **Network Security Engineers**: Examine security issues.
- **Developers**: Debug protocol implementations.
- **Users**: Learn about network protocol internals.
