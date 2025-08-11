# Installing TailsOS on USB

---

## 1. Overview of TailsOS

**TailsOS** is a Debian-based operating system focused on privacy, security, and anonymity. It’s designed to be used from a USB flash drive, without leaving traces on the device it’s run on.

---

### Key Features

- **Live Operating System**: Tails runs directly from a USB stick and no installation on your internal hard drive is required.
- **Amnesic**: By default, Tails forgets everything when shut down. All files and activities are stored in memory (RAM), which is wiped on power-off.
- **Tor Integration**: All internet traffic is routed through the Tor network by default, using onion routing to help maintain anonymity.
- **Persistent Storage**: You can optionally set up an encrypted partition to save certain files, such as:
  - Documents
  - Browser bookmarks
  - Wi-Fi passwords

  You choose whether to unlock this Persistent Storage when booting Tails.

- **Recommended by**:  
  - The **Tor Project**  
  - The **Electronic Frontier Foundation (EFF)**
 
---

### Use Cases

Tails is commonly used by:
- Whistleblowers
- Journalists
- Activists
- Developers and privacy advocates

Examples of compartmentalized use:
- Managing **PGP master keys** in Tails and transferring subkeys to a **YubiKey** for secure signing.
- Using a **read-only, offline Raspberry Pi** to generate encrypted paper backups.

---

### System Requirements

- A USB stick (8 GB minimum)
- 64-bit x86-64 IBM PC-compatible processor
- At least **2 GB RAM**
- Most computers less than 10 years old
- Older Intel-based Macs (Apple Silicon Macs are not supported)
- **Note**: Tails does **not work** on:
  - Newer Macs with Apple (M1/M2) chips
  - Smartphones or tablets
  - Raspberry Pi devices
  - Most systems with Nvidia or AMD Radeon GPUs

---

### Limitations

- Tails can’t protect against surveillance **if the host system is compromised** (e.g., malware, firmware attacks).
- It doesn’t protect against identifying that you’re using **Tor or Tails**.
- Skilled, determined adversaries may still bypass some protections.
- Do **not** install Tails from an infected computer.

---

## 2. Installing Tails from macOS

---

### Step 1: Install Prerequisites

Make sure [Homebrew](https://brew.sh) is installed.

```bash
brew --version
brew upgrade
brew analytics off
brew install gnupg
gpg --version
```

---

### Step 2: Download Tails

Download the `.img` and `.img.sig` files from the official website:
[https://tails.net/install/download/index.en.html](https://tails.net/install/download/index.en.html)

Set the release version (replace `6.18` with the latest version):
```sh
TAILS_RELEASE_SEMVER=6.18
```

Download the image signature:
```sh
curl -o ~/Downloads/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig \
https://tails.boum.org/torrents/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig
```

---

### Step 3: Import the Tails signing key (only needed once):

```sh
curl https://tails.boum.org/tails-signing.key | gpg --import
```

---

### Step 4: Verify the downloaded image:

```sh
gpg --verify ~/Downloads/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig
```

> ⚠️ Do not proceed if the verification fails.

---

### Step 5: Flash Tails to USB

**1.** Plug in the USB stick
**2.** Identify your USB drive:
   
```sh
diskutil list
```

**3.** Unmount the USB drive 
```sh
sudo diskutil unmount /dev/diskn
# or
sudo diskutil unmountDisk /dev/diskn
```

**4.** Flash the Tails image to the USB drive (replace `n` with the correct number):
```sh
sudo dd bs=1m if=$HOME/Downloads/tails-amd64-6.18.img of=/dev/rdiskn
```

**5.** Unmount the USB drive after writing:
```sh
sudo diskutil unmountDisk /dev/diskn
```

---

### Step 6. Boot into Tails on Mac:

**1.** Insert USB stick.

**2.** Restart your Mac and immediately hold `Option`.

**3.** Select **EFI Boot** and press `Enter`.


Once Tails boots:

- Choose your **language**, **keyboard**, and **region** settings.
- (Optional) Set an **administrative password** in **Additional Settings**.
- Click **Start Tails**.
- MAC address spoofing is enabled by default.

---

## 3. Installing Tails from Windows

---

### Step 1: Download Tails

**1.** Go to: [https://tails.net/install/download/index.en.html](https://tails.net/install/download/index.en.html)

**2.** Download the **Tails USB image file**.

**3.** Save it to your **Downloads** folder or another accessible location.

---

### Step 2: Verify the Image

- On the download page, click **“Select download to verify”**.
- Choose the `.img` file you downloaded.
- Verify the file using the provided tool.

---

### Step 3: Download and Launch Rufus

**1.** Download [Rufus](https://rufus.ie/).

**2.** Save it to your **Downloads** folder.

**3.** Double-click the file to launch it.

**4.** Approve the security warning and system permissions:
- Click **Allow** if prompted:
> *“Do you want to allow this app to make changes to your device?”*
- In the update policy dialog, click **No**.

---

### Step 4: Create the Bootable USB

**1.** In Rufus:
- Select the **Tails** `.img` file as the ISO.
- Insert your USB stick.
- Rufus will detect it.
- ⚠️ **Warning**: All data on the USB will be erased. Back up anything important first.

**2.** Click **START**.

**3.** Confirm the data loss warning by clicking **OK**.

**4.** Once complete, click **CLOSE**.

---

### Step 5: Boot into Tails

**1.** Restart your PC.

**2.** While holding **Shift**, click **Restart** from the Windows menu.

**3.** On reboot:
- Click **Use a device**
- Choose your **USB drive**

Your PC will boot into the Tails welcome screen.

---

### Step 6: First-Time Tails Setup

**1.** Choose:
- **Language**
- **Keyboard Layout**
- **Region Format**

**2.** Enable **Persistent Storage** (optional):

- Click **Create Persistent Storage**
- Review info, then click **Continue**
- Enter a strong **passphrase**, then confirm it
- Tails will confirm storage creation and allow enabling:
  - Network Connections
  - Welcome Screen
  - Other app settings

**3.** Close the Persistent Storage window.

**4.** Set up your **Wi-Fi** or **Ethernet** connection:

- **Ethernet** is preferred for anonymity and stability.
- Tails will connect to **Tor** automatically.

**5.** You can optionally configure a Tor Bridge if you suspect your network is monitoring or blocking Tor traffic.

--- 
