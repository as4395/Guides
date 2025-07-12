# Cloud Computing – Overview, Models, and Security

---

## What is Cloud?

Cloud Computing is the **on-demand delivery** of shared computing resources—such as servers, storage, databases, networking, software, and analytics—over the Internet ("the cloud"). These resources are scalable, elastic, and provided as a service.

### Key Characteristics:
- **On-demand Self-Service** – Users can provision computing capabilities automatically.
- **Broad Network Access** – Accessible via workstations, laptops, tablets, mobile phones.
- **Resource Pooling** – Multi-tenant model with dynamically assigned resources.
- **Rapid Elasticity** – Ability to quickly scale up or down.
- **Measured Service** – Resource usage is monitored, controlled, and reported.

---

## Cloud Deployment Models

| Deployment Model | Description | Example |
|------------------|-------------|---------|
| **Public Cloud** | Cloud infrastructure is made available to the general public and owned by a third-party provider. | AWS, Azure, Google Cloud |
| **Private Cloud** | Exclusive use by a single organization, managed internally or by a third party. Can be on-premise or hosted. | VMware vSphere Private Cloud |
| **Hybrid Cloud** | Combination of two or more distinct cloud infrastructures. | Enterprise with AWS + Private Data Center |
| **Community Cloud** | Shared by organizations with similar requirements (e.g., compliance, mission). | Healthcare or Government Consortiums |

---

## Cloud Service Categories

### 1. **Infrastructure as a Service (IaaS)**
- Provides virtualized computing resources over the internet.
- Example: AWS EC2, Azure VMs

### 2. **Platform as a Service (PaaS)**
- Provides a platform allowing customers to develop, run, and manage applications.
- Example: Google App Engine, Heroku

### 3. **Software as a Service (SaaS)**
- Delivers software over the internet on a subscription basis.
- Example: Google Workspace, Salesforce

---

## Shared Responsibility Model

This model defines **security ownership** between the Cloud Service Provider (CSP) and the Customer.

### 1. **Traditional IT (On-Premises)**
- All responsibilities fall on the organization: hardware, OS, runtime, applications, etc.

### 2. **Infrastructure as a Service (IaaS)**
- **Customer manages:** Applications, Data, Runtime, Middleware
- **Provider manages:** OS, Virtualization, Networking, Physical Infrastructure

### 3. **Platform as a Service (PaaS)**
- **Customer manages:** Applications, Data
- **Provider manages:** Runtime, Middleware, OS, Infrastructure

### 4. **Software as a Service (SaaS)**
- **Provider manages everything** including applications and data.
- **Customer is responsible** for identity, access, and usage policies.

### Responsibility Matrix

| Component                   | On-Premises | IaaS     | PaaS     | SaaS     |
|----------------------------|-------------|----------|----------|----------|
| Data Governance            | Customer    | Customer | Customer | Customer |
| Client Access Endpoints    | Customer    | Customer | Customer | Customer |
| Identity & Access Mgmt     | Customer    | Customer | Customer | Customer |
| Application Security       | Customer    | Customer | Shared   | Provider |
| Network Security           | Customer    | Customer | Shared   | Provider |
| Operating System Security  | Customer    | Customer | Provider | Provider |
| Physical Security          | Customer    | Provider | Provider | Provider |

---

## Best Practices – Cloud Security

### 1. **Perform Due Diligence**
- Conduct throughout all stages:
  - Planning
  - Development and Deployment
  - Operations
  - Decommissioning
- Develop a multi-cloud provider strategy to reduce dependency on one vendor.

### 2. **Managing Access**
- Use strong authentication mechanisms (MFA, identity federation).
- Assign least-privilege access rights.
- Enforce strict access policies for resources and APIs.

### 3. **Protect Data**
- Encrypt data at rest and in transit.
- Use secure key management practices.
- Ensure backup and disaster recovery plans are in place.
- Secure data disposal to prevent leakage of deleted data.

### 4. **Monitor and Defend**
- Continuously monitor both cloud and on-premises resources.
- Correlate logs from different environments for centralized threat detection.
- Work closely with CSPs for security incident handling and response coordination.

---

## Summary

Cloud computing offers flexibility and cost efficiency but requires shared diligence in securing data, applications, and infrastructure. Understanding deployment models, service categories, and the shared responsibility model is essential for building secure cloud environments.

