# ISMS Requirements and ISO/IEC 27000 Family

## ISO/IEC 27001 - Journey So Far
- **1995:** BS 7799-1 was published  
- **1999:** BS 7799-2 was published  
- **2000:** ISO/IEC 17799 was published  
- **2005:** ISO/IEC 17799 became ISO 27001:2005  
- **2007:** Renamed as ISO/IEC 27002:2005  
- **2013:** Became ISO 27002:2013 and ISO 27001:2013  

## Management System Standards
- **Annexure SL:** Framework for a Generic Management System Standard (MSS)  
- **Discipline Specific Requirements:**  
  - ISO 9001  
  - ISO 14001  
  - ISO 20000  
  - ISO 22000  
  - ISO 22301  
  - ISO 27001  

## High Level Structure of ISO/IEC 27001
- **0. Introduction**  
- **1. Scope**  
- **2. Normative references**  
- **3. Terms and definitions**  
- **4. Context of the organization**  
  - 4.1 Understanding the organization and its context  
    - Determine internal and external issues relevant to ISMS outcomes  
  - 4.2 Understanding needs and expectations of interested parties  
  - 4.3 Determining the scope of the ISMS  
  - 4.4 Information Security Management System  
- **5. Leadership**  
  - 5.1 Leadership and commitment  
  - 5.2 Policy  
  - 5.3 Organizational roles, responsibilities, and authorities  
    - Formerly "Management responsibility"  
    - Ensure ISMS policy/objectives align with strategic direction  
    - Support contribution to ISMS effectiveness  
- **6. Planning**  
  - 6.1 Actions to address risks and opportunities  
    - Consider issues from 4.1 and requirements from 4.2  
    - Plan actions to:  
      - Achieve intended outcomes  
      - Prevent/reduce undesired effects  
      - Enable continual improvement  
    - Plan how to integrate, implement, and evaluate actions  
  - 6.2 Information security objectives and planning to achieve them  
    - Establish ISMS objectives at relevant functions and management levels  
    - Examples of security objectives:  
      - **Resource Protection:** Secure all system resources, define user categories and access rights  
      - **Authentication:** Verify identity of human or machine resources  
      - **Authorization:** Control access to system resources/activities  
      - **Non-repudiation:** Proof of transaction occurrence agreed by sender and receiver  
      - **Confidentiality:** Protect sensitive information from unauthorized access  
      - **Integrity:** Maintain data consistency, accuracy, and trustworthiness  
      - **Availability:** Ensure authorized access when needed  
    - Selection of Control Objectives and Controls:  
      - Review risks and identify controls to reduce risk to acceptable level  
      - Controls should be cost-effective  
    - Statement of Applicability (SoA):  
      - Document selected controls and justification  
      - Example:  
        | Control                                  | Selected | Justification                          |  
        |-----------------------------------------|----------|------------------------------------|  
        | Controls against malicious software     | Yes      | Highlighted by risk assessment       |  
        | Authentication by external connections  | Yes      | Security policy mandates authentication |  
        | Duress alarm as safeguard                | No       | Not relevant for organization        |  
- **7. Support**  
  - 7.1 Resources  
  - 7.2 Competence  
  - 7.3 Awareness  
  - 7.4 Communication  
  - 7.5 Documented information  
    - 7.5.1 General  
    - 7.5.2 Creating and updating  
    - 7.5.3 Control of documented information  
- **8. Operation**  
  - 8.1 Operational planning and control  
  - 8.2 Information security risk assessment  
  - 8.3 Information security risk treatment  
- **9. Performance evaluation**  
  - 9.1 Monitoring, measurement, analysis, and evaluation  
  - 9.2 Internal audit  
  - 9.3 Management review  
- **10. Improvement**  
  - 10.1 Non-compliance and corrective action  
  - 10.2 Continual improvement  

> All new/revised ISO MSS have this structure except discipline-specific requirements.

## PDCA Model of ISMS
- **Plan:** Establish ISMS  
- **Do:** Implement and operate ISMS  
- **Check:** Monitor and review ISMS  
- **Act:** Maintain and improve ISMS  

## Model Solution Mapping
| PDCA Phase | ISO Clauses                   |
|------------|------------------------------|
| Plan       | 4, 5, 6, 7                   |
| Do         | 8                            |
| Check      | 9                            |
| Act        | 10                           |

## Establish ISMS
- Define scope  
- Define ISMS policy  
- Perform risk management and assessment  
- Identify risk areas to manage  
- Select control objectives and controls, justify selection  
- Prepare Statement of Applicability  

## Defining Scope
- 4.1 Understanding organization and context  
- 4.2 Understanding needs and expectations of interested parties  
- 6.1 Actions to address risks and opportunities (general)  
- 4.3 Determining scope of ISMS  
- 4.4 ISMS management system  

### Example Scope
- Personnel info of staff and business process data  
- Information processing facilities (computers, printers, LAN, internet)  
- Software used for processing information  
- Storage media (discs, CDs, tapes)  

## Define Information Security Policy
- Written policy accessible to all responsible employees  
- Statement of intent by senior management  
- Simple and concise policies  
- Top-level policy (Security Policy Statement) distributed to all staff  
- Lower-level policies (Security Policy Manual) available to staff  

## Monitor and Review ISMS
- Execute monitoring controls to detect errors and security incidents  
- Review ISMS effectiveness  
- Review risks considering changes in:  
  - Occupation  
  - Technology  
  - Business objectives/processes  
  - Identified threats  
  - External events (legal, social climate, etc.)  

## Maintain and Improve ISMS
- Implement improvements  
- Take corrective and preventive actions  
- Communicate results and agree with stakeholders  
- Ensure improvements achieve intended objectives  

## ISMS Documentation
- Documented security policies and control objectives  
- ISMS scope, procedures, and controls  
- Risk assessment and management reports  
- Procedures for planning, operation, and control of IS processes  
- Required ISMS records  
- Statement of Applicability  

## Critical Success Factors
- Security policies and activities aligned with business objectives  
- Visible management support and commitment  
- Good understanding of security requirements and risk management  
- Effective communication and marketing of security to all levels  
- Comprehensive training and guidance  
- Balanced system of measurement  

## Challenges
- Determining appropriate level of security to build confidence and trust  
- Necessity for effective Information Security management  

## Control Clauses of ISO/IEC 27001:2013
- A.5: Information Security Policies  
- A.6: Organization of Information Security  
- A.7: Human Resource Security  
- A.8: Asset Management  
- A.9: Access Control  
- A.10: Cryptography  
- A.11: Physical and Environmental Security  
- A.12: Operations Security  
- A.13: Communications Security  
- A.14: System Acquisition, Development, and Maintenance  
- A.15: Supplier Relationships  
- A.16: Information Security Incident Management  
- A.17: Business Continuity Management  
- A.18: Compliance  

## Why Security Policy?
- Best security tech with poor policy is ineffective (like grass hut with steel gate)  
- Policy provides foundation and intent for management and staff  

## Organization of Information Security
- **Internal organization (A.6.1):** Establish framework for IS implementation and control  
- **Mobile devices and teleworking (A.6.2):** Secure teleworking and mobile device use  

## Human Resources Security
- Awareness of security policy essential for employee security  
- **Before employment (A7.1):** Ensure suitability and responsibility understanding  
- **During employment (A7.2):** Ensure ongoing awareness and fulfillment of security duties  

## Asset Management
- Assets require protection due to assigned value  
- **Responsibility of Assets (A8.1):** Identify assets and define protection responsibilities  
- **Information Classification (A8.2):** Appropriate protection level to prevent unauthorized disclosure/modification/removal/destruction  
- **Media Handling (A8.3):**  
  - 8.3.1 Management of removable media  
  - 8.3.2 Disposal of media  
  - 8.3.3 Physical media transfer  

## Access Control
- **Business requirement (A9.1):** Limit access to info and processing facilities  
- **User access management (A9.2):** Ensure authorized access, prevent unauthorized access  

## Cryptography
- **A10.1 Cryptographic controls:** Proper use of cryptography to protect confidentiality, authenticity, integrity  

## Physical and Environmental Security
- **Secure Areas (A11.1):** Prevent unauthorized physical access and protect assets from damage or theft  

## Operations Security
- **Operational procedures (A12.1):** Ensure secure operation of processing facilities  
- **Protection from malware (A12.2):** Protect against malware  
- **Backup (A12.3):** Protect against data loss  
- **Logging and monitoring (A12.4):** Record events and provide evidence  
- **Change management**  
- **Communication security:**  
  - Network security management (A13.1): Protect info in networks and facilities  
  - Information transfer (A13.2): Maintain security of info transfer within and outside the organization  

## Information Systems Acquisition, Development, and Maintenance
- **Security requirements (A14.1):** Integrate security across the lifecycle, including public network services  
- **Development and support (A14.2):** Embed security in development lifecycle  
- **Test data (A14.3):** Protect test data  

## Supplier Relationships
- **Information security in supplier relationships (A15.1):** Protect assets accessible to suppliers  
- **Supplier service delivery management (A15.2):** Maintain agreed security and service levels  

## Information Security Incident Management
- Formal reporting and escalation  
- Awareness for employees and third parties  
- Controls:  
  - A16.1.1 Responsibilities and procedures  
  - A16.1.2 Reporting info security events  
  - A16.1.3 Reporting security weaknesses  
  - A16.1.4 Assessment and decision on events  
  - A16.1.5 Response to events  
  - A16.1.6 Learning from incidents  
  - A16.1.7 Evidence collection  

## Business Continuity Management
- Embed info security in business continuity systems  
- Redundancy to ensure availability of processing facilities  

## Compliance with Legal and Contractual Requirements
- Operate ISMS within legal framework  
- Obtain reliable legal evidence  
- Comply with laws of other countries if data crosses borders  

### Controls
- A18.1.1 Identify applicable laws and contracts  
- A18.1.2 Intellectual property rights  
- A18.1.3 Protection of records  
- A18.1.4 Privacy and protection of personally identifiable info  
- A18.1.5 Regulation of cryptographic controls  

### Technical Compliance Review (A18.2.3)
- Regular review of info systems for compliance with policies and standards  
- Checks for correct implementation of hardware/software controls  
- Testing by authorized experts under supervision  
- Caution regarding disclosure of test results  
- Penetration tests/vulnerability assessments must be planned, documented, repeatable to avoid compromising security  

## ISO/IEC 27001:2013 Implementation, Auditing, and Certification Issues
- Documented requirements (Clause 4):  
  - Understanding organization and context (mission statement, risk registers, strategy)  
  - Understanding needs and expectations of interested parties (legislation, contracts)  
  - Determining ISMS scope (scope statement)  

## Mandatory Documentation
- Scope of ISMS (4.3)  
- Security policy and objectives (5.2, 6.2)  
- Risk assessment and treatment methodology (6.1.2)  
- Statement of Applicability (6.1.3d)  
- Risk treatment plan (6.1.3e, 6.2)  
- Risk assessment report (8.2)  
- Security roles and responsibilities (A7.1.2, A13.2.4)  
- Asset inventory (A8.1.1)  
- Access control policy (A9.1.1)  
- Operating procedures for IT management (A12.1.1)  
- Secure system engineering principles (A14.2.5)  
- Supplier security policy (A15.1.1)  
- Incident management procedure (A16.1.5)  
- Business continuity procedures (A17.1.2)  
- Statutory, regulatory, and contractual requirements (A18.1.1)  

## Mandatory Records
- Training, skills, experience, qualifications (7.2)  
- Monitoring and measurement results (9.1)  
- Internal audit program and results (9.2)  
- Management review results (9.3)  
- Corrective action results (10.1)  
- User activity logs and security event logs (A12.4.1, A12.4.3)  

## Non-Mandatory Commonly Used Documents
- Document control procedure (7.5)  
- Records management controls (7.5)  
- Internal audit procedure (9.2)  
- Corrective action procedure (10.1)  
- Bring Your Own Device (BYOD) policy (A6.2.1)  
- Mobile device and teleworking policy (A6.2.1)  
- Information classification policy (A8.2.1 - A8.2.3)  
- Password policy (A9.2.1, A9.2.2, A9.2.4, A9.3.1, A8.2.3)  
- Business impact analysis (A17.1.1)  
- Exercising and testing plan (A17.1.3)  
- Maintenance and review plan (A17.1.3)  
- Business continuity strategy (A17.2.1)  
- Disposal and destruction policy (A8.3.2)  
- Procedures for working in secure areas (A11.1.5)  
- Clear desk and clear screen policy (A11.2.9)  
- Change management policy (A12.1.2, A14.2.4)  
- Backup policy (A12.3.1)  
- Information transfer policy (A13.2.1 - A13.2.3)  
