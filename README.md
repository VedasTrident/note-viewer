# Substack Notes Search (Web App + Browser Extension)

Search your Substack Notes in a dedicated web UI — without manually copy-pasting cookies.

Web app: [https://substack-notes-app.vercel.app](https://substack-notes-app.vercel.app)

⚠️ To work properly, you must install the browser extension (it fetches your Substack session cookie automatically).

---

## How it works (in plain English)

Substack authentication relies on a session cookie (`substack.sid`).
Browsers do not allow normal websites to read cookies from other domains — so the extension reads your Substack cookie and opens the web app with the required parameters.

The extension:

* Reads `substack.sid` from `substack.com`
* Asks for your Substack username (once)
* Opens the web app with `?username=...&cookie=...`

---

# 🚀 Installation Guide (Chrome / Brave / Edge)

## Option A — Download ZIP

1. Click **Code → Download ZIP**
2. Unzip the file
3. Open `chrome://extensions`
4. Enable **Developer mode** (top-right toggle)
5. Click **Load unpacked**
6. Select the extension folder (the folder containing `manifest.json`)

---

## Option B — Git Clone

```bash
git clone https://github.com/VedasTrident/note-viewer.git
```

Then repeat steps 3–6 above.

After installation:

* Pin it from the puzzle-piece icon (optional)
* You should see “Substack Notes Search” in your toolbar

---

# 🧠 How To Use

1. Make sure you are logged into Substack (open [https://substack.com](https://substack.com) and confirm you're signed in)
2. Click the extension icon
3. Enter your username (e.g., `vedshankar`)
4. Click **Search My Notes**
5. The web app opens automatically with your notes

---

# 🛠 Troubleshooting

## “Cookie not found. Please log in to Substack first.”

* Go to [https://substack.com](https://substack.com) and log in
* Try again
* If you use multiple Chrome profiles, make sure you’re logged into Substack in the same profile where the extension is installed

---

## Extension not showing in toolbar

* Go to `chrome://extensions`
* Confirm it is enabled
* Click the puzzle icon → Pin the extension

---

# 🔐 Privacy & Security Notes

* The extension reads only one cookie: `substack.sid` (from `substack.com`).
* It does not upload anything to third-party servers by itself.
* The cookie is passed to the web app so it can fetch your notes.

⚠️ Important:
Currently, the extension opens the web app with the cookie in the URL query string (`?cookie=...`).
That can end up in:

* Browser history
* Screen recordings/screenshots
* Logs/analytics (if added later)

If you want to improve this, a safer version would send the cookie via extension messaging or POST instead of using URL parameters.

---

# 📁 Suggested Repo Structure

If keeping both web app + extension in one repository:

```
/substack-notes-search
  /extension
    manifest.json
    popup.html
    popup.js
    icon16.png
    icon48.png
    icon128.png
    icon.svg

  /webapp
    (your Vercel / Next.js / frontend code)

  README.md
```

If the web app is in a different repository, keep this repo extension-only and link to the deployed app above.

---

# 🔎 Permissions Explained

The extension requests:

* `cookies` → to read `substack.sid`
* `storage` → to remember your username
* `host_permissions` for `*.substack.com` → so it can access Substack cookies

These permissions are required for the extension to function.

---

# 🧑‍💻 Development (Extension)

1. Edit files inside `/extension`
2. Go to `chrome://extensions`
3. Click the refresh icon on the extension card
4. Re-open the popup and test

---

# 🌍 Live App

[https://substack-notes-app.vercel.app](https://substack-notes-app.vercel.app)

---

# 📜 License

Add a license if you want others to reuse it.

MIT is recommended for small open-source tools.
