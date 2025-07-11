# **Harden Windows 10: Close the Doors and Check the Locks**

## **Specifics of System Hardening**

1. **Disable Windows 10 Automatic Login**
    - Prevent automatic login to avoid unauthorized access.
  
2. **Set a Password for Your Screensaver**
    - Set up a password prompt when your screensaver activates.
  
3. **Turn On Your Firewall**
    - Ensure Windows Defender Firewall is active to block unwanted connections.

4. **Disable Remote Access**
    - Disable remote desktop and other remote access protocols unless needed.

5. **Enable/Install Antivirus Protection Tools**
    - Use Windows Defender or install third-party antivirus software for protection.

6. **Enable Auto-Updates for Your Operating System**
    - Ensure your system regularly receives the latest security patches.

7. **Set Up File Backups**
    - Regularly back up your files to protect data in case of failure or attacks.

8. **Turn On Encryption**
    - Enable **BitLocker** or use third-party tools to encrypt your drives.

9. **Set Up User Accounts**
    - Manage user accounts, use **standard accounts** instead of **admin accounts**.

10. **Set Up a Password Manager**
    - Use a trusted password manager to securely store and generate complex passwords.

---

## **Upgrades and Patches**

- **Keep Current with Microsoft Upgrades and Patches**
- **Keep Current with Application Upgrades and Patches**
- **Keep Current with Antivirus Signatures**

---

## **Windows Security Auditing Tools**

### **What is Windows Security Auditing?**
Windows security auditing is a built-in Windows feature that monitors user activity and system events. It helps maintain security, perform forensic analysis, troubleshoot, and investigate incidents.

### **Basic Security Audit Policies**
These policies allow you to monitor and log important events related to account management, logon attempts, system changes, and more.

- **Audit Account Logon Events**
- **Audit Account Management**
- **Audit Directory Services Access**
- **Audit Logon Events**
- **Audit Object Access**
- **Audit Policy Change**
- **Audit Privilege Use**
- **Audit Process Tracking**
- **Audit System Events**

---

### **Creating a Basic Audit Policy for an Event Category**
1. Open the **Local Security Policy** snap-in (`secpol.msc`).
2. Click **Local Policies** > **Audit Policy**.
3. Double-click the event category you want to change.
4. To audit successful attempts, select the **Success** check box.
5. To audit unsuccessful attempts, select the **Failure** check box.
6. Click **OK** to apply the changes.

---

## **Event IDs for Auditing Logon Events**

- **4624** - A user successfully logged on to a computer.
- **4625** - Logon failure: bad username or password.
- **4634** - The logoff process was completed.
- **4647** - A user initiated the logoff process.
- **4648** - A user successfully logged on using explicit credentials.
- **4779** - A user disconnected a terminal session without logging off.

---

## **Audit File Access Events**

- **4656** - A handle to an object was requested.
- **4658** - The handle to an object was closed.
- **4660** - An object was deleted.
- **4663** - An attempt was made to access an object.
- **4685** - The state of a transaction changed.
- **4985** - The state of a transaction changed.

---

## **Audit Account Management**

Tracks events related to user account and group management, including creation, modification, deletion, and password changes.

- **4720** - A user account was created.
- **4723** - A user password was changed.
- **4724** - A user password was set.
- **4726** - A user account was deleted.

---

## **Audit Object Access**

- **560** - Access granted to an existing object.
- **562** - A handle to an object was closed.
- **563** - An attempt was made to open an object with the intent to delete.
- **564** - A protected object was deleted.
- **565** - Access granted to an already existing object type.

---

## **Audit Policy Changes**

- **608** - A user right was assigned.
- **609** - A user right was removed.
- **612** - An audit policy was changed.
- **618** - Encrypted Data Recovery policy changed.
- **620** - A trust relationship with another domain was modified.
- **621** - System access was granted to an account.
- **622** - System access was removed from an account.
- **623** - Per-user, the auditing policy was set.
- **625** - Per-user audit policy was refreshed.

---

## **Audit Privilege Use**

Monitors privileged operations that users can perform on objects.

- **576** - Specified privileges were added to a user's access tokens.
- **577** - A user attempted to perform a privileged system service operation.
- **578** - Privileges were used on an already open handle to a protected object.

---

## **Audit Process Tracking**

- **592** - A new process was created.
- **593** - A process exited.
- **594** - A handle to an object was duplicated.
- **595** - Indirect access to an object was obtained.
- **596** - A data protection master key was backed up.
- **597** - A data protection master key was recovered.
- **598** - Auditable data was protected.
- **599** - Auditable data was unprotected.
- **600** - A process was assigned a primary token.
- **601** - A user attempted to install a service.
- **602** - A scheduler job was created.

---

## **Registry Keys to Monitor**

### **Search Assistant**
- **HKCU \Software\Microsoft\Search Assistant\ACMru**
  - Contains recent search terms, including file names, phrases, and computer names.

### **System Boot**
- **HKLM \SYSTEM\CurrentControlSet\Services\**
  - Contains a list of Windows services, their startup configuration, and executable paths.

---

## **Autoruns & Process Monitoring**

### **Autoruns**
- Monitor and control programs that run at startup. Ensure there are no unwanted processes running.

### **Process Monitoring**
- Track system processes and their activity in real-time. Key tools include:
  - **Procmon**
  - **SMAC**
  - **RogueChecker**
  - **XARP**

---

### **Audit Tools**

- **Procmon**: Real-time file system, registry, and process monitoring.
- **SMAC**: Tool for monitoring system activity.
- **RogueChecker**: Detects rogue network devices.
- **XARP**: Monitors ARP caches and can detect ARP poisoning.
