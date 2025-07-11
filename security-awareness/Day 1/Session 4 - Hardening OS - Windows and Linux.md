# Hardening & Auditing Linux

## Is Linux Secure?  
  - Nothing is perfectly secure  
  - Security is a series of trade-offs  
    - **Convenience vs Security**  
      - No passwords = easy to use, not secure  
      - System powered off = secure, not usable  
  - Linux is only as secure as we make it  

## What Makes Linux Secure?  
  - Linux is a **multiuser system**  
  - The superuser is the **root account**  
    - `root` is all-powerful  
    - Required for installing software, configuring networking, managing users  
  - All other accounts are **normal users**  
    - Can be assigned to humans or services  

## Security Guidelines  
  - Minimize software and services  
  - Run services on separate systems  
  - Encrypt data transmissions  
  - Avoid shared accounts  
  - Avoid direct root logins  
  - Maintain user accounts  
  - Use multifactor authentication  
  - Apply the **Principle of Least Privilege**  
  - Monitor system activity  
  - Use a firewall  
  - Encrypt your data  

## Physical Security is Linux Security  
  - Physical access = major threat  
  - **Single user mode** allows unrestricted access  
  - Only allow physical access when necessary  
  - Keep your system away from attackers  

## Gaining Access to a Linux System  
  - Single user mode  
  - Power resets  

---

# Centralized Software Management

## Secure the Bootloader  
  - **GRUB**  
  - **NTDLR**  
  - `grub2-setpassword`  
  - `grub2-mkconfig -o /boot/grub2/grub.cfg`  
  - `reboot`  

---

# Disk Encryption

## Unencrypted / Plaintext Example  
  - C-DAC, Thiruvananthapuram  

## Encrypted / Ciphertext Example  
  - `glt8vym6uYOS9hFVuIyyFcW1nsR4QIaudRd9I9ih0ZU=`  

## Disk Encryption for Linux  
  - **dm-crypt** – Device-mapper crypt  
    - Transparent disk encryption  
    - Creates a device in `/dev/mapper`  
    - Manage with `cryptsetup`  

```bash
Filesystem: EXT4
<-->
Virtual Block Device: /dev/mapper/home
<-->
Encryption/Decryption: dm-crypt
<-->
Physical Block Device: /dev/sda2
```

---

## LUKS – Linux Unified Key Setup  
  - Front-end for `dm-crypt`  
  - Supports multiple passphrases  
  - Portable: stores setup info in partition header  
  - Ideal for removable media  

### Converting a Device to LUKS  
```bash
# Backup data on /dev/sda3 (e.g., /home)

shred or dd if=/dev/urandom of=/dev/sda3      # Wipe
cryptsetup luksFormat /dev/sda3
cryptsetup luksOpen /dev/sda3 home
mkfs -t ext4 /dev/mapper/home
mount /dev/mapper/home     # Restore backup
```

---

## LUKS Encryption Example  
```bash
grub2-setpassword
grub2-mkconfig -o /boot/grub2/grub.cfg
reboot

yum install cryptsetup
fdisk -l
shred -v -n 10 /dev/sdb
cryptsetup luksFormat /dev/sdb
cryptsetup luksOpen /dev/sdb opt
ls -l /dev/mapper/cdac
mkfs -t ext4 /dev/mapper/cdac
mount /cdac
vi /etc/fstab
```

---

# Linux Account Security  
  - Easier to attack from the inside  
  - Privilege escalation attacks are serious threats  
  - Keep unauthorized users out  
  - Secure all user accounts  

---

# PAM – Pluggable Authentication Modules

## Authentication Flow  
```bash
login → PAM → /etc/passwd + /etc/shadow
login → PAM → biometric device (e.g. fingerprint)
```

## PAM Configuration Files  
  - Located in:  
    - `/etc/pam.d`  
    - `/etc/pam.d/login`  
    - `/etc/pam.d/sshd`  

### Format:  
```text
module_interface   control_flag   module_name   module_args
```

## PAM Module Interfaces  
  - `auth` – Authenticates users  
  - `account` – Verifies access  
  - `password` – Handles password changes  
  - `session` – Manages sessions  

## PAM Control Flags  
  - `required` – Must succeed for overall success  
  - `requisite` – Like required, but stops on failure  
  - `sufficient` – Succeeds if no required module failed  
  - `optional` – Used if no other modules of that type exist  
  - `include` – Includes another config  
  - `complex` – `attribute=value` flags  

## PAM Configuration Example  
```pam
#%PAM-1.0
auth     required     pam_securetty.so
auth     required     pam_unix.so nullok
auth     required     pam_nologin.so
account  required     pam_unix.so
password required     pam_pwquality.so retry=3
password required     pam_unix.so shadow nullok use_authtok
session  required     pam_unix.so
```

---

# Monitoring Authentication Logs  
  - `/var/log/messages`  
  - `/var/log/syslog`  
  - `/var/log/secure`  
  - `/var/log/auth.log`  

---

# Rootkits

## What Are Rootkits?  
  - Software used to gain/maintain root access secretly  
  - Hide from system admins and antivirus  
  - **User space rootkits** replace common tools: `ls`, `ps`, `netstat`, etc.  
  - **Kernel space rootkits** modify OS core (using LKMs)  
    - Access via `/dev/kmem`, `/dev/mem`

## Rootkit Detection  
  - Kernel rootkits must be running to hide  
  - Halt the system and inspect storage using trusted OS  
  - Use **bootable media**  
  - **File integrity checkers**: AIDE, Tripwire, OSSEC  
  - Watch for:  
    - High CPU/network usage without visible cause  
    - Suspicious processes  

---

# chkrootkit  
  - Shell script to scan for rootkits  
  - Detects:  
    - Modified binaries  
    - Promiscuous network interfaces  
    - Missing logs (utmp, lastlog)  
    - Loadable Kernel Module trojans  
  - Can run interactively or scheduled  
  - [https://www.chkrootkit.org](https://www.chkrootkit.org)  

---

# OSSEC  
  - [https://ossec.github.io/](https://ossec.github.io/)  
  - Host-based Intrusion Detection System (HIDS)  
  - Offers:  
    - Log analysis  
    - File integrity monitoring  
    - Real-time alerting  

## OSSEC Rootcheck  
  - Searches for rootkit-associated filenames  
  - Signature-based detection  
  - Queries system & compares output:  
    - Ex: `netstat` output vs `bind()` results  

---

# Rootkit Removal  
  - Backup compromised data  
  - Reinstall OS from **trusted media**  
  - Avoid trying to repair on-the-fly  
  - Learn from the breach to prevent next time  

---

# Rootkit Prevention  
  - Apply best practices:  
    - Physical security  
    - Account security  
    - Network security  
  - Use file integrity monitoring:  
    - AIDE  
    - Tripwire  
    - OSSEC  
  - Keep systems patched and updated  
