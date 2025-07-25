// user.js - Custom Firefox Configuration for Enhanced Privacy, Security, and Anonymity

// -----------------------------------------------------------------------------------
// HOW TO INSTALL THIS USER.JS:
// -----------------------------------------------------------------------------------
// This 'user.js' file customizes Firefox for enhanced privacy and security.
// Follow these steps to apply its settings to your Firefox profile.

// 1. Locate Your Firefox Profile Directory:
//    a. Open Firefox.
//    b. In the address bar, type `about:profiles` and press Enter.
//    c. Under the "Default Profile" section, find the "Root Directory" and click
//       the "Open Folder" button (or "Show in Finder" on macOS, "Open Directory" on Linux).
//       This will open the folder where your Firefox profile data is stored.
//       Keep this folder open.

// 2. Download the 'user.js' File:
//    The most reliable way to get this file is by downloading it directly into your
//    Firefox profile's root directory using a terminal or command prompt.

//    a. Open your terminal (Linux/macOS) or Command Prompt/PowerShell (Windows).
//    b. Navigate to your Firefox profile's root directory. Replace `YOUR_PROFILE_PATH`
//       with the path you found in Step 1c.
//       - macOS Example: `cd "/Users/yourusername/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release"`
//       - Linux Example: `cd ~/.mozilla/firefox/xxxxxxxx.default-release/`
//       - Windows Example (Command Prompt): `cd C:\Users\yourusername\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default-release\`
//         (Note: Paths vary; use the exact path from `about:profiles`)

//    c. Execute the following command to download this specific user.js file:
//       `curl --fail --remote-name https://github.com/as4395/Guides/blob/main/explore-guides/how-to-configure-firefox-for-privacy-and-security/user.js`
//       This command will download the file directly into your current directory.

// 3. Restart Firefox:
//    - Fully close all Firefox windows.
//    - Re-open Firefox. The settings from `user.js` will now be applied.

// 4. Verify Settings (Optional but Recommended):
//    - In Firefox, type `about:config` in the address bar and press Enter.
//    - Accept the warning.
//    - In the search bar, look up a few preferences mentioned in this file (e.g., `privacy.resistFingerprinting`, `network.trr.mode`).
//    - Their values should appear bolded, and their "Status" column should indicate "user set" (or "modified").


// -----------------------------------------------------------------------------------
// DISCLAIMER:
// This configuration aims for extreme privacy and security. It will likely break
// functionality on some websites. Review each setting and uncomment/adjust as needed.
// -----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// Core Privacy & Telemetry Minimization
// Disable all forms of data collection, reporting, and "phoning home".
// ----------------------------------------------------------------------------
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("breakpad.reportURL", ""); // Disable crash reports sending

// Corrected: Safe Browse preferences (original typo corrected from "safeBrowse" to "safeBrowse")
// WARNING: Disabling these reduces protection against phishing and malware.
// Trade-off: Prevents Firefox from querying Google's Safe Browse service.
user_pref("browser.safeBrowse.enabled", false); // PRIVACY/SECURITY: Disables Google Safe Browse lookups
user_pref("browser.safeBrowse.malware.enabled", false); // PRIVACY/SECURITY: Disables malware protection
user_pref("browser.safeBrowse.downloads.enabled", false); // PRIVACY/SECURITY: Disables download protection
user_pref("browser.safeBrowse.downloads.remote.enabled", false); // PRIVACY/SECURITY: Disables remote download checks
user_pref("browser.safeBrowse.phishing.enabled", false); // PRIVACY/SECURITY: Disables phishing protection

user_pref("browser.search.suggest.enabled", false); // PRIVACY: Prevents sending typing to search engine
user_pref("browser.urlbar.suggest.searches", false); // PRIVACY: Prevents sending urlbar typing to search engine
user_pref("browser.urlbar.placeholderName", "DuckDuckGo"); // Or your preferred privacy-respecting engine
user_pref("browser.topsites.contile.enabled", false); // PRIVACY: Disable pre-rendering of top sites on new tab page
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // PRIVACY: Disable telemetry for new tab page feeds
user_pref("browser.newtabpage.activity-stream.telemetry", false); // PRIVACY: Disable telemetry for new tab page
user_pref("browser.urlbar.suggest.openhistory", false); // PRIVACY: Disable history suggestions in URL bar
user_pref("identity.fxaccounts.enabled", false); // PRIVACY: Disable Firefox Accounts integration (prevents cloud sync)
user_pref("signon.rememberSignons", false); // SECURITY: Prevent saving login credentials

// ----------------------------------------------------------------------------
// Fingerprinting Resistance & Identity Hiding
// Reduce unique identifiers that websites can use to track you. This can
// sometimes impact site functionality or visual appearance.
// ----------------------------------------------------------------------------
user_pref("privacy.resistFingerprinting", true); // CORE PRIVACY: Essential for anti-fingerprinting. Enables most RFP features.
user_pref("privacy.resistFingerprinting.letterboxing", true); // PRIVACY: Adds whitespace to prevent window size fingerprinting
user_pref("privacy.resistFingerprinting.autoDeclineDOHecho", true); // PRIVACY: Helps resist fingerprinting through DoH echoes
user_pref("privacy.spoof_english", 2); // PRIVACY: Spoofs browser locale to English to reduce language fingerprinting
user_pref("webgl.disabled", true); // PRIVACY: Disable WebGL for canvas fingerprinting (stronger, may break some sites)
user_pref("dom.webnotifications.enabled", false); // PRIVACY: Disable push notifications (can be used for tracking)
user_pref("media.peerconnection.enabled", false); // PRIVACY: Disable WebRTC entirely (strongest IP leak protection, but breaks video calls)
// Alternative for WebRTC (less strict, allows video calls but aims to prevent IP leaks) for when media.peerconnection.enabled is false causes breakage:
// user_pref("media.peerconnection.ice.default_address_only", true);
// user_pref("media.peerconnection.ice.no_host", true);
// user_pref("media.peerconnection.ice.relay_only", true);
user_pref("dom.event.clipboardevents.enabled", false); // PRIVACY: Prevent sites reading/modifying clipboard content
user_pref("font.blacklist.enabled", true); // PRIVACY: Helps limit font fingerprinting by blacklisting common fonts
user_pref("network.http.referer.XOriginPolicy", 2); // PRIVACY: Strict referrer policy (send origin only for same-site, no referrer for cross-site)
user_pref("network.http.referer.trimmingPolicy", 2); // PRIVACY: Even stricter referrer policy (trim path and query for cross-site)
user_pref("browser.cache.disk.enable", false); // PRIVACY/PERFORMANCE: Disable disk cache (reduces local data storage, can impact performance)
user_pref("browser.cache.memory.enable", false); // PRIVACY/PERFORMANCE: Disable memory cache (reduces local data, can impact performance)
user_pref("browser.sessionstore.privacy_level", 2); // PRIVACY: Don't remember form data across sessions
user_pref("network.cookie.cookieBehavior", 1); // PRIVACY: Block all third-party cookies
user_pref("network.cookie.thirdparty.sessionOnly", true); // PRIVACY: Ensure 3rd-party session cookies are ephemeral (even if allowed by other rules)
user_pref("dom.battery.enabled", false); // PRIVACY: Disable battery API (fingerprinting vector)
user_pref("device.sensors.enabled", false); // PRIVACY: Disable device sensors (e.g., gyroscope, accelerometer - fingerprinting vector)
user_pref("geo.enabled", false); // PRIVACY: Disable geolocation
user_pref("media.eme.enabled", false); // PRIVACY: Disable DRM (Encrypted Media Extensions / Content Decryption Modules)
user_pref("pdfjs.enableWebGL", false); // PRIVACY: Disable WebGL in Firefox's built-in PDF viewer

// Additions for further fingerprinting resistance/data reduction:
user_pref("dom.storage.enabled", false); // PRIVACY: Disable DOM storage (localStorage, sessionStorage). WARNING: Breaks many sites.
user_pref("webgl.enable-webgl2", false); // PRIVACY: Disable WebGL2 in addition to WebGL1
user_pref("media.navigator.enabled", false); // PRIVACY: Disable access to camera/microphone
user_pref("media.webrtc.legacyGlobalIndicator", false); // PRIVACY: Disable global indicator for WebRTC
user_pref("gfx.downloadable_fonts.enabled", false); // PRIVACY: Disable downloadable fonts (fingerprinting vector)
user_pref("image.animation_mode", "none"); // PRIVACY: Disable all animated images (GIFs). Reduces fingerprinting.

// ----------------------------------------------------------------------------
// Network Activity & Connection Control
// Reduce unsolicited connections and data leakage during Browse.
// ----------------------------------------------------------------------------
user_pref("network.prefetch-next", false); // PRIVACY/PERFORMANCE: Disable link prefetching
user_pref("network.dns.disablePrefetch", true); // PRIVACY/PERFORMANCE: Disable DNS prefetching
user_pref("network.http.speculative-parallel-limit", 0); // PRIVACY/PERFORMANCE: Disable speculative connections
user_pref("network.connectivity-service.enabled", false); // PRIVACY: Disable connectivity checks
user_pref("network.captive-portal-service.enabled", false); // PRIVACY: Disable captive portal detection
user_pref("beacon.enabled", false); // PRIVACY: Disable beacon API (used for analytics/tracking)
user_pref("browser.send_pings", false); // PRIVACY: Disable hyperlink auditing (ping attribute)
user_pref("browser.backspace_action", 2); // UI/SECURITY: Disable Backspace key for navigation (prevents accidental data loss/navigation)

// Additional network/connection settings:
user_pref("network.standard-headers.enabled", true); // SECURITY: (Generally default true) Ensure standard headers are sent for security
user_pref("network.websocket.enabled", false); // PRIVACY: Disable WebSockets. WARNING: Breaks many modern sites. Consider only if truly necessary.

// ----------------------------------------------------------------------------
// DNS over HTTPS (DoH) Configuration - Mullvad
// Encrypt DNS queries to prevent snooping.
// NOTE: These settings force Firefox to use Mullvad's DoH. Ensure this is
// compatible with your VPN or system-wide DNS setup.
// ----------------------------------------------------------------------------
user_pref("network.trr.custom_uri", "https://doh.mullvad.net/dns-query"); // PRIVACY/SECURITY: Mullvad DoH server
user_pref("network.trr.mode", 3); // PRIVACY/SECURITY: Force use of DoH (mode 3 = "Only TRR")
user_pref("network.trr.uri", "https://doh.mullvad.net/dns-query"); // Redundant with custom_uri, but good to include for clarity

// ----------------------------------------------------------------------------
// SOCKS5 Proxy Configuration - Mullvad
// Route Firefox traffic through a SOCKS5 proxy. This *requires* the Mullvad
// app to be running and providing the proxy at the specified address.
// NOTE: Set network.proxy.type to 1 to enable.
// ----------------------------------------------------------------------------
user_pref("network.proxy.socks", "10.64.0.1"); // SECURITY/PRIVACY: Mullvad SOCKS5 proxy address
user_pref("network.proxy.socks_port", 1080); // SECURITY/PRIVACY: Mullvad SOCKS5 proxy port
user_pref("network.proxy.type", 0); // IMPORTANT: SET THIS TO `1` TO ENABLE SOCKS5 PROXY. Current value `0` disables it.
user_pref("network.proxy.socks_remote_dns", true); // PRIVACY/SECURITY: Ensure DNS lookups also go through the SOCKS proxy

// ----------------------------------------------------------------------------
// Enhanced Security & Browser Hardening
// Strengthen core browser defenses.
// ----------------------------------------------------------------------------
user_pref("security.pki.sha1_enforcement_level", 1); // SECURITY: Stronger SHA-1 enforcement
user_pref("security.cert_pinning.enforcing_strict", true); // SECURITY: Certificate pinning (reduces risk of forged certs)
user_pref("security.tls.enable_0rtt_data", false); // SECURITY: Disable TLS 0-RTT (potential replay attacks)
user_pref("security.remote_settings.enabled", false); // SECURITY/PRIVACY: Disable remote settings updates (prevents Mozilla changing configs remotely)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // SECURITY: Treat unsafe SSL renegotiation as broken
user_pref("xpinstall.signatures.required", true); // SECURITY: Enforce extension signing (should be default and critical)
user_pref("browser.download.panel.autohide", true); // UI/SECURITY: Auto-hide download panel
user_pref("browser.download.forbid_open_async_handlers", true); // SECURITY: Prevent auto-opening dangerous downloaded files
user_pref("browser.contentblocking.category", "strict"); // PRIVACY/SECURITY: Enable strict content blocking (Enhanced Tracking Protection)
user_pref("security.ssl.disable_session_identifiers", true); // SECURITY/PRIVACY: Disable SSL session identifiers (reduces potential for tracking)

// Additional security hardening:
user_pref("security.mixed_content.block_active_content", true); // SECURITY: Block active mixed content (scripts, iframes)
user_pref("security.mixed_content.block_display_content", true); // SECURITY: Block display mixed content (images, audio, video)
user_pref("security.tls.version.min", 3); // SECURITY: Set minimum TLS version to 1.2 (3 = TLS 1.2). Ensures strong encryption.
user_pref("dom.security.https_only_mode", true); // SECURITY: Enable HTTPS-Only Mode for all windows
user_pref("browser.fixup.alternate.enabled", false); // SECURITY/PRIVACY: Disable URL autofixup for unknown domains (prevents DNS queries for typos)

// ----------------------------------------------------------------------------
// User Interface & Convenience Adjustments
// These often have privacy benefits by reducing data processing/storage or unique identifiers.
// ----------------------------------------------------------------------------
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // PRIVACY/PERFORMANCE: Disable Top Stories feed
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // PRIVACY/PERFORMANCE: Disable Top Sites feed
user_pref("browser.newtabpage.activity-stream.showWeather", false); // PRIVACY: Disable weather widget on new tab page
user_pref("browser.pagethumbnails.capturing_disabled", true); // PRIVACY: Disable capturing page thumbnails (reduces local data/processing)
user_pref("browser.tabs.hoverPreview.enabled", false); // UI/PERFORMANCE: Disable tab hover previews
user_pref("browser.tabs.hoverPreview.showThumbnails", false); // UI/PERFORMANCE: Disable thumbnails in tab hover previews
user_pref("browser.tabs.warnOnClose", true); // UI: Warns when closing multiple tabs (preference, not direct privacy/security)
user_pref("browser.urlbar.oneOffSearches", false); // UI/PRIVACY: Disable one-off search buttons in URL bar
user_pref("browser.urlbar.shortcuts.bookmarks", false); // UI/PRIVACY: Disable bookmark shortcuts in URL bar
user_pref("browser.urlbar.shortcuts.history", false); // UI/PRIVACY: Disable history shortcuts in URL bar
user_pref("browser.urlbar.shortcuts.tabs", false); // UI/PRIVACY: Disable tab shortcuts in URL bar
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // UI/PRIVACY: Prioritize history over search suggestions
user_pref("browser.urlbar.suggest.engines", false); // UI/PRIVACY: Disable search engine suggestions in URL bar
user_pref("browser.urlbar.suggest.openpage", false); // UI/PRIVACY: Disable "open page" suggestions in URL bar
user_pref("browser.urlbar.suggest.recentsearches", false); // UI/PRIVACY: Disable recent search suggestions
user_pref("browser.urlbar.suggest.topsites", false); // UI/PRIVACY: Disable top site suggestions
user_pref("browser.warnOnQuitShortcut", true); // UI: Warns on quit shortcut (preference, not direct privacy/security)
user_pref("extensions.formautofill.addresses.enabled", false); // PRIVACY: Disable address autofill
user_pref("extensions.formautofill.creditCards.enabled", false); // PRIVACY/SECURITY: Disable credit card autofill
user_pref("extensions.pocket.enabled", false); // PRIVACY: Disable Pocket integration
user_pref("places.history.enabled", false); // PRIVACY: Disable browser history saving (significant impact, be aware)
