<!--
Title: Configure macOS for Privacy and Security
Description: Harden macOS with focused system settings, optional tools, and persistent hostname/MAC spoofing.
Author: Abhiram S
Contributors: Abhiram S
Publication date: 2025-07-07T00:00:00.000Z
Listed: true
-->

# Configure macOS for Privacy and Security

This guide walks through configuring macOS for better privacy, stronger local security, and optional tools like battery charge limiting and system spoofing.

---

## 1. Privacy & Security Settings

### Location Services

- Go to **Settings > Privacy & Security > Location Services**
  - Disable Location Services completely
  - Only enable per-app access if needed

---

### Analytics & Improvements

Go to **Settings > Privacy & Security > Analytics & Improvements** and turn off:

- Share Mac Analytics
- Improve Siri & Dictation
- Share with App Developers

> Siri sends your voice to Apple’s servers. These settings reduce data collection.

---

### FileVault

- Navigate to **Settings > Privacy & Security > FileVault**
- Enable FileVault and enter your system password

> This encrypts your drive and protects your data at rest.

---

### Lockdown Mode

- Only enable if you are being specifically targeted by advanced threats

> Lockdown Mode restricts some system functionality for increased security, but is unnecessary for most users.

---

### Passwords and Keychain

- Go to **Settings > Passwords**
  - Unlock with Touch ID or your password
  - Click **Password Options** and disable iCloud Keychain

> Prevents Apple from syncing passwords and passkeys across devices.

---

### Lock Screen Behavior

Go to **Settings > Lock Screen**:

- Set **Require password after screen saver or display is off** to **Immediately**
- Disable **Show user name and photo**
- Remove guest user if not needed

---

### Software Updates

Go to **Settings > General > Software Update**:

- Set **Automatically** to only install **Security Responses & System Files**

> This applies security patches without full version upgrades.

---

## 2. Battery Management (for Apple Silicon)

### Install `batt`

```bash
bash <(curl -fsSL https://github.com/charlie0129/batt/raw/master/hack/install.sh)
```

To view battery status:

```bash
sudo batt status
```

To set a charging limit (example: 75%):

```bash
sudo batt limit 75
```

Disable Optimized Battery Charging:

- Go to **Settings > Battery > Battery Health**
- Turn **Optimized Battery Charging** off

> Prevents overcharging and reduces battery wear.

---

## 3. Hostname & MAC Address Spoofing on Boot

This configuration will randomize your device’s hostname and MAC address on every reboot. Based on [this guide](https://github.com/sunknudsen/guides/tree/main/archive/how-to-spoof-mac-address-and-hostname-automatically-at-boot-on-macos).

### Step 1: Create `/usr/local/sbin`

```bash
sudo mkdir -p /usr/local/sbin
sudo chown ${USER}:admin /usr/local/sbin
```

### Step 2: Add to PATH

```bash
echo 'export PATH=$PATH:/usr/local/sbin' >> ~/.zshrc
source ~/.zshrc
```

### Step 3: Download Name List

```bash
curl --fail --output /usr/local/sbin/first-names.txt https://raw.githubusercontent.com/sunknudsen/privacy-guides/main/archive/how-to-spoof-mac-address-and-hostname-automatically-at-boot-on-macos/first-names.txt
```

### Step 4: Create `spoof.sh`

```bash
cat << "EOF" > /usr/local/sbin/spoof.sh
#! /bin/sh

set -e
set -o pipefail

export LC_CTYPE=C
basedir=$(dirname "$0")

first_name=$(sed "$(jot -r 1 1 2048)q;d" $basedir/first-names.txt | sed 's/[^a-zA-Z]//g')
model_name=$(system_profiler SPHardwareDataType | awk '/Model Name/ {$1=$2=""; print $0}' | sed 's/^[ ]*//')
computer_name="$first_name’s $model_name"
host_name=$(echo "$computer_name" | sed "s/’//g" | sed "s/ /-/g")

sudo scutil --set ComputerName "$computer_name"
sudo scutil --set LocalHostName "$host_name"
sudo scutil --set HostName "$host_name"
printf "%s\n" "Spoofed hostname to $host_name"

mac_address_prefix=$(networksetup -listallhardwareports | awk -v RS= '/en0/{print $NF}' | head -c 8)
mac_address_suffix=$(openssl rand -hex 3 | sed 's/\(..\)/\1:/g; s/.$//')
mac_address=$(echo "$mac_address_prefix:$mac_address_suffix" | awk '{print tolower($0)}')

networksetup -setairportpower en0 on
sudo /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport --disassociate
sudo ifconfig en0 ether "$mac_address"

printf "%s\n" "Spoofed MAC address to $mac_address"
EOF
```

Make executable:

```bash
chmod +x /usr/local/sbin/spoof.sh
```

### Step 5: Add Launch Daemon

```bash
cat << "EOF" | sudo tee /Library/LaunchDaemons/local.spoof.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>local.spoof</string>
    <key>ProgramArguments</key>
    <array>
      <string>/usr/local/sbin/spoof.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
  </dict>
</plist>
EOF
```

### Step 6: Disable Wi-Fi on Logout

```bash
cat << "EOF" > /usr/local/sbin/spoof-hook.sh
#! /bin/sh
networksetup -setairportpower en0 off
EOF

chmod +x /usr/local/sbin/spoof-hook.sh
sudo defaults write com.apple.loginwindow LogoutHook "/usr/local/sbin/spoof-hook.sh"
```

### Step 7: Reboot and Verify

Check spoofed hostname:

```bash
scutil --get HostName
```

Check MAC address:

```bash
ifconfig en0 | grep ether | awk '{print $2}'
```

---

macOS is now configured for privacy-focused usage and optionally set up for better battery and spoofing behaviors.
