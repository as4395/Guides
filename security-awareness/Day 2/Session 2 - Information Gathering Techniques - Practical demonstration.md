# **Information Gathering Overview**

---

## **Objectives**
- Understanding Information Gathering Concepts
- Understanding Information Gathering through Search Engines and Advanced Google Hacking Techniques
- Understanding Information Gathering through Web Services and Social Networking Sites
- Understanding Website Information Gathering and Email Information Gathering
- Understanding WHOIS, DNS, and Network Information Gathering
- Understanding Information Gathering through Social Engineering
- Understanding Different Information Gathering Tools and Countermeasures

---

## 1) **Information Gathering Concepts**

### What is Information Gathering (Footprinting)?
- **Footprinting** is the first step in any attack, where an attacker collects information about a target network to identify potential ways to intrude.
  - **Passive Fingerprinting**: Collecting information without direct interaction.
  - **Active Fingerprinting**: Gathering information with direct interaction.

### Types of Information Gathered in Footprinting:
1. **Organization Information**:  
   - Employee details, telephone numbers, location, web technologies.
2. **Network Information**:  
   - Domain, sub-domains, network blocks, IP addresses, WHOIS records, DNS information.
3. **System Information**:  
   - OS, web server details, users, and passwords.

### Objectives of Fingerprinting:
- Knowledge of security posture
- Focus area reduction
- Identification of vulnerabilities
- Drawing of a network map

---

## 2) **Information Gathering Methodology**

### Footprinting through Search Engines
- **Search Engines**: Attackers use search engines (Google, Bing, Yahoo, etc.) to gather information about a target, including:
  - Employed technologies, employee details, login pages, intranet portals.
  
- **Advanced Google Hacking Techniques**: Google search operators help attackers extract sensitive information.
    - Examples of Google Operators:
      - `[cache:]`, `[link:]`, `[related:]`, `[site:]`, `[inurl:]`
    - **Google Hacking Database (GHDB)**: A source for querying sensitive information via Google Dorks.

### Popular Search Operators for Google Hacking:
- **VoIP and VPN Footprinting**: 
  - Example Google Dorks for VoIP and VPN fingerprinting:
    - `intitle: "Login Page" intext: "Phone Adapter Configuration Utility"`
    - `filetype:pcf vpn OR Group`
  
### Advanced Search Techniques:
- **Google Advanced Search & Image Search**: Refines searches to find detailed info.
- **Reverse Image Search**: Tools like Google Image and TinEye allow attackers to track the original source of images.
- **Video Search Engines**: Analyze content from YouTube and Google Videos for hidden info.
  
### Meta Search Engines:
- Search engines like Startpage and MetaGer aggregate results from multiple sources.
  
### IoT Search Engines:
- Tools like **Shodan**, **Censys**, and **Thingful** help attackers find IoT devices and exposed services.

---

## 3) **Finding a Company’s Top-Level Domain (TLDs) and Sub-domains**
- **Sub-domains** reveal details about departments and services.
  - Tools: **Sublist3r** (Python script), **Netcraft**.

### Geographical Location of the Target:
- Tools like **Google Earth** and **Google Maps** help attackers locate physical locations and potential weak spots.

### People Search on Social Networking Sites:
- **Social Networking Sites** (Facebook, LinkedIn, Twitter, etc.) reveal personal details for social engineering.
- **People Search Services** (Intelius, Pipl, BeenVerified) provide names, addresses, and contact details.

---

## 4) **Gathering Information from Social Networking Sites**

### LinkedIn Information Gathering
- Attackers use the **Harvester** tool to enumerate LinkedIn and find employees of a target company along with their job titles. This information can be used for social engineering.

### Financial Services:
- Tools like **Google Finance**, **MSN Money**, and **Yahoo! Finance** provide company profiles, market value, competitor details, and more. Attackers can use this data for service flooding or phishing attacks.

### Monitoring Targets Using Alerts:
- Tools like **Google Alerts** help attackers track mentions of their target across the web.

### Footprinting through Job Sites:
- Job postings provide insights into the company’s infrastructure (hardware, software, and employee roles). Attackers look for vulnerabilities through these job descriptions.

---

## 5) **Information Gathering Tools**

### Deep and Dark Web Footprinting
- **Deep Web**: Unindexed web content that can only be accessed through specific search engines like **Tor Browser**.
- **Dark Web**: A subset of the deep web, accessed through anonymity networks like **TOR**, **Freenet**, **I2P**.
  - Attackers use these tools to gather credentials, medical records, SSNs, and other sensitive information.
  
### Determining the Operating System:
- **SHODAN** and **Censys** are search engines that allow attackers to discover exposed devices and servers.

---

## 6) **VoIP and VPN Footprinting**

### SHODAN for VoIP and VPN Footprinting:
- Attackers use **SHODAN** to find exposed VoIP devices, routers, and VPNs that could be vulnerable.
  - Examples of queries for **VoIP** and **VPN** systems using SHODAN.

---

## 7) **Competitive Intelligence Gathering**

### Sources of Competitive Intelligence:
- Company websites, job ads, press releases, patents, trademarks, annual reports, social engineering, etc.

---

## 8) **Information Gathering from Web Services**

### Business Profile Sites:
- Attackers gather business information like contact details, partners, and services from online business profiles.

### Social Engineering via Social Networking Sites:
- Attackers use fake profiles to manipulate employees into revealing sensitive information.

### Location-based Search on Social Media:
- Tools like **Followerwonk**, **Hootsuite**, and **Sysomos** help gather geolocation data from social media platforms.

---

## 9) **Website Information Gathering**

### Website Footprinting:
- Tools like **Burp Suite**, **Zaproxy**, and **Wappalyzer** help attackers gather information about the technologies, operating systems, and server details of a target website.

### Website Footprinting with Web Spiders:
- Tools like **ParseHub** and **Web Data Extractor** automatically gather information from the target website.

### Extracting Metadata from Public Documents:
- **Metagoofil** and **Exiftool** help extract hidden metadata from public documents (PDFs, DOCX, etc.) that might reveal sensitive information.

### Monitoring Website Updates:
- Tools like **VisualPing** help track changes to the target website.

### Website Link Extraction:
- Extracting links, subdirectories, and technologies used on the website with tools like **Netpeak Spider** and **Octoparse**.

---

## 10) **Information Gathering Countermeasures**

- **Countermeasures** include using strong encryption, limiting public exposure, restricting access to sensitive data, and regularly monitoring your web infrastructure for vulnerabilities.
