<!--
Title: Configure BurpSuite Proxy with Firefox on macOS
Description: Learn how to configure Firefox to route traffic through Burp Suite for intercepting and analyzing web traffic on macOS.
Author: Abhiram S
Contributors: Abhiram S
Publication date: 2025-07-07T00:00:00.000Z
Listed: true
-->

# Configure BurpSuite Proxy with Firefox on macOS

This guide walks you through configuring Firefox on macOS to route HTTP and HTTPS traffic through Burp Suite Community Edition for traffic inspection and vulnerability analysis.

## Requirements

- Firefox (latest version)
- macOS system
- Burp Suite Community Edition (free version)

## Step 1: Download and Install Burp Suite

- Download Burp Suite Community Edition:  
  [https://portswigger.net/burp/communitydownload](https://portswigger.net/burp/communitydownload)
- Enter your email and download the macOS installer.
- Install the application normally via the `.dmg`.

## Step 2: Launch Burp Suite

- Open Burp Suite and select **Temporary Project**.
- Choose **Use Burp defaults** and click **Start Burp**.

You should now see `Burp Suite Community Edition v[version] - Temporary Project`.

Go to:
```
Proxy > Options
```
Take note of the **Proxy Listener address** — it should be:
```
127.0.0.1:8080
```

## Step 3: Configure Firefox to Use the Burp Proxy

1. Open Firefox and go to:
   ```
   about:preferences#general
   ```
   or navigate via:
   ```
   Menu (☰) > Settings
   ```

2. Scroll to **Network Settings** and click **Settings…**

3. In the **Connection Settings** window:
   - Select **Manual proxy configuration**
   - Set **HTTP Proxy**, **HTTPS Proxy**, and **SOCKS Host** to:
     ```
     127.0.0.1
     ```
   - Set **Port** to:
     ```
     8080
     ```
     *(If 8080 is in use, try 8081 instead)*

4. Click **OK**

## Step 4: Install Burp Suite CA Certificate in Firefox

1. In Firefox, visit:
   ```
   http://burp
   ```

2. Click **CA Certificate** to download Burp’s root certificate.

3. Go back to:
   ```
   about:preferences#privacy
   ```
   and search for **Certificates**.

4. Click **View Certificates** > **Import**, then choose the downloaded certificate.

5. Check:
   - “Trust this CA to identify websites”
   - Click **OK**

## Step 5: Test Interception

- In Burp Suite, ensure:
  ```
  Proxy > Intercept is on
  ```

- In Firefox, visit any website (e.g., Google or DuckDuckGo).
- The browser tab may continue loading — this is expected.
- In Burp Suite, the intercepted request will appear.
- Click **Forward** multiple times to pass requests through.

You should eventually see the page load.

---

## Sample Intercepted Requests

### 1. Firefox Connectivity Check

```
GET /canonical.html HTTP/1.1
Host: detectportal.firefox.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Cache-Control: no-cache
Pragma: no-cache
DNT: 1
Sec-GPC: 1
Connection: keep-alive
```

This is Firefox checking if the system is online. It includes key privacy headers like `DNT` and `Sec-GPC`.

---

### 2. DuckDuckGo Autocomplete Request

```
GET /ac/?type=list&q=http HTTP/2
Host: ac.duckduckgo.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
DNT: 1
Sec-GPC: 1
TE: trailers
Connection: keep-alive
```

These autocomplete requests are typical when using DuckDuckGo. You’ll see dynamic changes to the `q` parameter as you type (`http`, `http%3A`, etc.).

---

## Troubleshooting

- If intercept is not working, close Firefox and Burp Suite completely.
- Use Activity Monitor to ensure Firefox is not running in the background.
- Relaunch Burp Suite and Firefox and try again.

---

## Summary

This process allows you to inspect HTTP/S requests from Firefox using Burp Suite, which is a critical skill for understanding web traffic, debugging, or performing web security testing.

Burp Suite works by acting as a **proxy**, holding and forwarding each request you approve, allowing full control and visibility over what gets sent and received.
