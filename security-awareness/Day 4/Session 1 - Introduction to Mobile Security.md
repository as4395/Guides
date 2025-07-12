# Android Permission Overview

---

## Permissions

### App Permissions Example: Facebook

- **Your messages**  
  - NEW! Read your text messages (SMS or MMS)  
- **Your personal information**  
  - NEW! Add or modify calendar events and send emails to guests without the host's knowledge  
  - Read calendar events plus confidential information  
  - Read your own contact card  
- **Network communication**  
  - NEW! Connect and disconnect from Wi-Fi  
  - Full Network Access  
- **Default**  
  - Com.sec.android.provider.badge permission  
- **Options:** SKIP / AGREE  

---

### Normal Permissions

- Access data or resources outside the app's sandbox with very little risk to privacy or other apps  
- Examples: Permission to set the time zone, access the internet  
- Automatically granted at install time by the system  
- Cannot be revoked  

---

### Dangerous Permissions

- Access to private user data or resources that could affect user's stored data or other apps  
- Example: Permission to read contacts  
- User must explicitly grant permission at runtime  
- Can be revoked by the user  

---

### Special Permissions

- Cover particularly sensitive areas  
- Example: *WRITE_SETTINGS*  
- System shows a detailed management screen to the user  
- Must be enabled manually in Settings  
- Can be revoked  

---

### Permission Best Practices

- Always check permissions before installing an app  
- Deny additional permission requests during app usage unless absolutely necessary  
- **Red Flag:** Web browser requesting access to camera or microphone  
- Regularly review app permissions in phone Settings  

---

### Things to Keep in Mind

- Use Anti-Virus software  
- Do not install apps from untrusted sources  
- Avoid clicking links in SMS from unverified sources  
- Check which apps have access to location and contacts  
- Avoid apps like ~~UC Browser~~, ~~CamScanner~~ due to privacy concerns  

---

### Truecaller Concerns

- Researcher found data leak affecting 300 million Truecaller users  
- Smishing (SMS phishing) campaigns linked to the app  
- Phishing pages, Android app misuse, and website data dumps reported  

---

### Android Application Analysis (Malicious Behavior)

- Requests permission to become default SMS app  
- Sent to user after capturing banking details  
- Snoops on OTPs by reading and forwarding all SMS messages to attacker’s number  
- Messages do not appear in the legitimate messaging app  

---

## SMS Commands

| Command Name                        | Command Text                |
|-----------------------------------|-----------------------------|
| DEACTIVATE_COMMAND                 | "DACT ALL CMD"              |
| DIAL                              | "DIAL"                     |
| ONLY_BLOCK_SMS                    | "ONLY BLOCK SMS"            |
| RELEASE_BLOCK_SMS                 | "RELEASE BLOCK SMS"         |
| SEND_CUSTOM_SMS_COMMAND           | "SEND CSMS"                 |
| START_BLOCK_FORWARD_SMS           | "BK ALL TXT FWD"            |
| START_BLOCK_FORWARD_SMS_WITH_FILTER_KEYWORD | "BK ALL TXT FWD WITH KEYWORDS" |
| START_FORWARD_CALL                | "CL PWD"                   |
| START_FORWARD_SMS                 | (Not specified)             |
