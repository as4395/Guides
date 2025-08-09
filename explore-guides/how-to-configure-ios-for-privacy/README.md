# iOS Privacy Guide

### Step 1: Disable Wi-Fi when not at home
- Go to **Settings > Wi-Fi**.
- Ensure Wi-Fi is turned off when you’re not home. Wi-Fi can be used to track your movements and interactions.

### Step 2: Disable Bluetooth when not in use
- Go to **Settings > Bluetooth**.
- Disable Bluetooth unless absolutely needed. For example, I enable Bluetooth to configure my BOSE noise-cancelling headphones and turn it off afterward.
- During the COVID-19 pandemic, governments considered using Bluetooth Low Energy (BLE) for proximity tracking, so it’s better to keep it off when you’re not using it.

### Step 3: Disable Wi-Fi Calling and Calls on Other Devices
- Go to **Settings > Cellular**.
- Disable **Wi-Fi Calling** and **Calls on Other Devices**.
- This ensures your phone remains compartmentalized from other devices like your Mac, maintaining better privacy and security.

### Step 4: Lock Screen Preview Settings
- Go to **Settings > Notifications**.
- By default, **Show Previews** is set to *Always*. This means if your phone is locked and someone sends you a text, a preview of the message will appear.
- This is a security risk, especially with sensitive accounts like banking or 2FA codes. Set **Show Previews** to *When Unlocked* to prevent unauthorized access to sensitive information.

### Step 5: Disable Siri Suggestions
- Go to **Settings > Notifications > Siri Suggestions**.
- Disable all Siri Suggestions to reduce unnecessary data collection and tracking. Siri is deeply integrated into iOS, so it requires multiple steps to limit its functionality.

### Step 6: Avoid Using Screen Time
- Go to **Settings > Screen Time**.
- It’s recommended not to enable Screen Time, as it tracks your app usage and activity. Your digital habits should remain private, and Screen Time essentially logs everything you do on your phone.

### Step 7: Change Device Name
- Go to **Settings > General > About > Name**.
- The default name is “[Your Name] iPhone,” which can be changed to something more anonymous, like just “iPhone.” This ensures that your device isn’t easily identifiable.

### Step 8: Disable Automatic Software Updates
- Go to **Settings > General > Software Updates**.
- Disable **Automatic Updates**. You want to manually review and approve updates. Some updates may contain privacy-invading features, and once updated, it’s hard to undo the changes.

### Step 9: Disable Handoff Between Devices
- Go to **Settings > General > Handoff**.
- Disable Handoff to prevent your iPhone from sharing information with your Mac or other Apple devices.

### Step 10: Disable Background App Refresh
- Go to **Settings > General > Background App Refresh**.
- Background App Refresh allows apps like Facebook to fetch data in the background, which can be used to track you. Disable this feature for all apps except those you explicitly need to update in the background (e.g., Transit for real-time public transit data).

### Step 11: Limit Siri Access
- Go to **Settings > Siri & Search**.
- Disable **Listen for “Hey Siri”**, **Press Home for Siri**, **Suggestions in Search**, **Suggestions in Look Up**, and **Suggestions in Lock Screen**.
- For each app, disable **Siri Suggestions** and **Show App in Search** to prevent Siri from collecting unnecessary data.

### Step 12: Configure Touch ID & Passcode
- Go to **Settings > Touch ID & Passcode**.
- Ensure **Touch ID** is only used to unlock your phone and not for sensitive apps like banking or password managers. This can prevent unauthorized access if someone gains access to your fingerprint.
  
### Step 13: Use a Strong Passcode
- Go to **Settings > Touch ID & Passcode > Turn Passcode On**.
- Select a **Custom Alphanumeric Code** between 12-14 characters. Avoid using personal information like your name or birthdate.
- Ensure the passcode is not reused for other important services like your password manager or two-factor authentication app.

### Step 14: Enable Multiple Fingerprints for Touch ID
- Go to **Settings > Touch ID & Passcode**.
- Enable **iPhone Unlock** for at least two fingerprints—one for your dominant hand and another for your non-dominant hand.
- Disable **Apple Pay** and **Password AutoFill** to prevent your fingerprint from being used for these services.

### Step 15: Restrict Lock Screen Access
- Go to **Settings > Touch ID & Passcode**.
- Set **Require Passcode** to *Immediately* and disable all options under **Allow Access When Locked**:
  - Today View
  - Notification Center
  - Control Center
  - Reply with Message
  - Home Control
  - Wallet
  - Return Missed Calls
  - USB Accessories

### Step 16: Enable Data Erasure After Failed Passcode Attempts
- Enable **Erase Data** to wipe your phone after 10 failed passcode attempts. Be cautious, but this is a good security measure in case your phone gets lost or stolen.

### Step 17: Disable Location Services
- Go to **Settings > Privacy**.
- **Location Services** should be disabled by default, but ensure it’s turned off unless you need it for specific apps like Google Maps.
- Disable **Location Services** for your **Camera** by going to **Settings > Privacy > Location Services > Camera**, and select **Never** to prevent your photos from being tagged with location data.
  
#### System Services
- In **Location Services > System Services**, disable all options to stop automatic time zone detection and prevent your phone from tracking your location in the background.
  
#### Significant Locations
- Disable **Significant Locations**, which logs places you frequently visit (like home or office). To do so, go to **Settings > Privacy > Location Services > System Services > Significant Locations**.

#### Product Improvements
- Disable **iPhone Analytics**, **Popular Near Me**, and **Routing & Traffic** under **Settings > Privacy > Location Services > System Services**. Enable **Status Bar Icon** to see when apps are accessing your location.

### Step 18: Manage App Permissions
- Go to **Settings > Privacy**.
- For each app, review and disable access to sensitive data like **Contacts**, **Microphone**, **Calendar**, etc. For example, Signal may need access to your contacts, but apps like Google Maps shouldn’t have access to your microphone.
  
### Step 19: Disable Analytics & Advertising Tracking
- In **Settings > Privacy > Analytics**, disable **iPhone Analytics**.
- Under **Settings > Privacy > Advertising**, enable **Limit Ad Tracking** to reduce data collection about your activities. Reset your **Advertising Identifier** to reset the unique ID used by advertisers.

### Step 20: Disable Automatic App Updates
- Go to **Settings > iTunes & App Store**.
- Disable **App Updates** to prevent apps from updating automatically. This ensures you have control over what gets updated.
  
#### Disable In-App Ratings & Reviews
- Disable **In-App Ratings & Reviews** to prevent apps from asking you for ratings or reviews during use.

### Step 21: Use an External Password Manager
- Go to **Settings > Passwords & Accounts**.
- Avoid using iOS’s built-in password manager. Instead, use a third-party password manager like Bitwarden to securely store your passwords.
- If you have passwords stored in iOS’s native password manager, delete them after transferring them to a more secure vault, and disable **Autofill Passwords**.

### Step 22: Disable iCloud Backups
- Go to **Settings > [Your Name] > iCloud**.
- Disable **iCloud Backup** to prevent your phone’s data from being automatically uploaded to iCloud. Instead, perform manual backups using iTunes via a USB connection to maintain more control over your data.

### Step 23: Mask Caller ID
- Go to **Settings > Phone**.
- If you want to make calls without revealing your number, enable **Hide My Caller ID**.

### Step 24: Manage Message Retention
- Go to **Settings > Messages**.
- Set **Keep Messages** to **30 Days** to minimize the amount of message data stored on your device. This reduces the risk if someone gains access to your phone and tries to decrypt it or force you to unlock it.
