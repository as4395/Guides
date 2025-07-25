// user.js - Custom Firefox Configuration for Enhanced Privacy, Security, and Anonymity

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
user_pref("browser.safeBrowse.enabled", false); // Disable Google Safe Browse lookups (trade-off: local protection)
user_pref("browser.safeBrowse.malware.enabled", false); // As above
user_pref("browser.safeBrowse.downloads.enabled", false); // As above
user_pref("browser.safeBrowse.downloads.remote.enabled", false); // As above
user_pref("browser.safeBrowse.phishing.enabled", false); // As above
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo"); // Or your preferred privacy-respecting engine
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.urlbar.suggest.openhistory", false); // Disable history suggestions

// ----------------------------------------------------------------------------
// Fingerprinting Resistance & Identity Hiding
// Reduce unique identifiers that websites can use to track you. This can
// sometimes impact site functionality or visual appearance.
// ----------------------------------------------------------------------------
user_pref("privacy.resistFingerprinting", true); // Core anti-fingerprinting
user_pref("privacy.resistFingerprinting.autoDeclineDOHecho", true); // DoH privacy
user_pref("webgl.disabled", true); // Disable WebGL for canvas fingerprinting
user_pref("dom.webnotifications.enabled", false); // Disable push notifications
user_pref("media.peerconnection.enabled", false); // Disable WebRTC entirely (strongest IP leak protection, but breaks video calls)
// Alternative for WebRTC (less strict, allows video calls but aims to prevent IP leaks):
// user_pref("media.peerconnection.ice.default_address_only", true);
// user_pref("media.peerconnection.ice.no_host", true);
// user_pref("media.peerconnection.ice.relay_only", true);
user_pref("dom.event.clipboardevents.enabled", false); // Prevent sites reading/modifying clipboard
user_pref("font.blacklist.enabled", true); // Helps limit font fingerprinting
user_pref("network.http.referer.XOriginPolicy", 2); // Strict referrer policy
user_pref("network.http.referer.trimmingPolicy", 2); // Even stricter referrer policy
user_pref("browser.cache.disk.enable", false); // Disable disk cache (can affect performance)
user_pref("browser.cache.memory.enable", false); // Disable memory cache (can affect performance)
user_pref("browser.sessionstore.privacy_level", 2); // Don't remember form data across sessions
user_pref("network.cookie.cookieBehavior", 1); // Block all third-party cookies
user_pref("network.cookie.thirdparty.sessionOnly", true); // Ensure 3rd-party session cookies are ephemeral
user_pref("dom.battery.enabled", false); // Disable battery API (fingerprinting vector)
user_pref("device.sensors.enabled", false); // Disable device sensors (e.g., gyroscope)
user_pref("geo.enabled", false); // Disable geolocation
user_pref("media.eme.enabled", false); // Disable DRM (EME/CDM)
user_pref("pdfjs.enableWebGL", false); // Disable WebGL in PDF.js

// ----------------------------------------------------------------------------
// Network Activity & Connection Control
// Reduce unsolicited connections and data leakage during Browse.
// ----------------------------------------------------------------------------
user_pref("network.prefetch-next", false); // Disable link prefetching
user_pref("network.dns.disablePrefetch", true); // Disable DNS prefetching
user_pref("network.http.speculative-parallel-limit", 0); // Disable speculative connections
user_pref("network.connectivity-service.enabled", false); // Disable connectivity checks
user_pref("network.captive-portal-service.enabled", false); // Disable captive portal detection
user_pref("beacon.enabled", false); // Disable beacon API
user_pref("browser.send_pings", false); // Disable hyperlink auditing (ping attribute)
user_pref("browser.backspace_action", 2); // Disable Backspace key for navigation (prevents accidental data loss)

// ----------------------------------------------------------------------------
// Enhanced Security & Browser Hardening
// Strengthen core browser defenses.
// ----------------------------------------------------------------------------
user_pref("security.pki.sha1_enforcement_level", 1); // Stronger SHA-1 enforcement
user_pref("security.cert_pinning.enforcing_strict", true); // Certificate pinning
user_pref("security.tls.enable_0rtt_data", false); // Disable TLS 0-RTT (potential replay attacks)
user_pref("security.remote_settings.enabled", false); // Disable remote settings
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // Treat unsafe SSL as broken
user_pref("xpinstall.signatures.required", true); // Enforce extension signing (should be default)
user_pref("browser.download.panel.autohide", true); // Auto-hide download panel
user_pref("browser.download.forbid_open_async_handlers", true); // Prevent auto-opening dangerous files
user_pref("browser.contentblocking.category", "strict"); // Enable strict content blocking (Enhanced Tracking Protection)
user_pref("security.ssl.disable_session_identifiers", true); // Disable SSL session identifiers

// ----------------------------------------------------------------------------
// User Interface & Convenience (Adjust as desired, minor privacy impact)
// Some settings for a cleaner or more controlled interface.
// ----------------------------------------------------------------------------
user_pref("browser.startup.homepage_override.mstone", "ignore"); // Prevent "What's New" page
user_pref("browser.tabs.warnOnClose", false); // Don't warn on multiple tabs close
user_pref("browser.sessionstore.max_tabs_undo", 0); // Disable session restore for tabs
user_pref("browser.sessionstore.max_windows_undo", 0); // Disable session restore for windows
user_pref("browser.chrome.site_icons", false); // Disable favicon fetching
user_pref("browser.urlbar.decodeURLsOnCopy", true); // Copy decoded URLs

// ----------------------------------------------------------------------------
// Experimental Features & Future Considerations
// Some features that might be worth disabling or enabling based on ongoing research.
// Research these individually before enabling/disabling.
// ----------------------------------------------------------------------------
// user_pref("dom.security.featurePolicy.enabled", true); // Enable Feature Policy (good for security, usually default)
// user_pref("dom.security.permissions.ui.enabled", false); // Disable permissions prompts (could be inconvenient)
