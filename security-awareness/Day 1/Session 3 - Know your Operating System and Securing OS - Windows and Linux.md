# Linux Operating System

## Historical Background
- **Unix** – Developed in the 1970s by AT&T at Bell Labs  
- **Richard Stallman** – Founded the Free Software Foundation ([fsf.org](https://www.fsf.org))  
  - Created the **GNU Project** in 1984 (GNU = *GNU's Not Unix*)  
- **Linus Torvalds** – Released the **Linux Kernel** in 1991  
  - **Linux OS** = Kernel + Applications ([kernel.org](https://www.kernel.org))  

## Virtualization
- Common tools for running Linux in virtual environments:  
  - **[VMware](https://www.vmware.com)**  
  - **[VirtualBox](https://www.virtualbox.org)**

---

## Types of Users
- **Privileged Users**  
  - *Administrator* in Windows  
  - *Root* in Linux  
- **Non-Privileged Users** – Standard users with limited access

---

## Linux Command Line Interface (CLI)
- Common commands:  
  - `date` – Displays current date and time  
  - `cal` – Displays a calendar  
  - `ls` – Lists directory contents  
  - `pwd` – Prints working directory  

---

## Multi-User Environment
- Linux supports multiple users logged in and working at the same time

---

## Shell
- Acts as an interface between the user and the kernel  
- Processes commands and returns results

---

## Syntax of a Linux Command

```bash
command [options]... [arguments]...
```

### Examples:
```bash
cal           # Current month
cal 2022      # Full calendar for the year 2022
cal 1 2022    # January 2022
ls -l         # Long listing format
```

- `[ ]` – Indicates optional components  
- `...` – Indicates multiple values allowed

---

## User Management
- Users are divided into:
  - **Users (u)** – The owner of the file
  - **Group (g)** – Members of the group the file belongs to
  - **Others (o)** – Everyone else

### Commands:
```bash
adduser jim       # Adds a new user 'jim'
userdel -r jim    # Deletes user 'jim' and their home directory
```

- Every user has a home directory (e.g., `/home/jim`)

---

## File Permissions

| Permission | Symbol | Description           |
|------------|--------|-----------------------|
| Read       | r      | View contents         |
| Write      | w      | Modify contents       |
| Execute    | x      | Run file as a program |

### Permission Breakdown (10 characters):
```bash
-rwxr-xr--   # Example file permission string
│ │  │ │ └── Others (r--)
│ │  └─┴──── Group  (r-x)
│ └───────── User   (rwx)
└─────────── File type (- for file, d for directory)
```

---

## Linux File System Structure

- Follows an **inverted tree structure**
- Root directory: `/`
- **Everything is a file**, including:
  - Devices  
  - Directories  
  - Processes  

### Common Text Editors:
- `vim` – Advanced, modal text editor  
- `nano` – Simpler, user-friendly editor
