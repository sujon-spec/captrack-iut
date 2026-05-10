# Deploy CapTrack to Firebase Hosting

This project is wired for the Firebase project **`capstoneproject2026-211b7`**.

## One-time setup

```bash
# 1. Install the Firebase CLI (only once on your machine)
npm install -g firebase-tools

# 2. Sign in with the Google account that owns the Firebase project
firebase login
```

## Deploy

From the project root (the folder that contains `index.html`):

```bash
firebase deploy --only hosting
```

The CLI will print two URLs when it finishes — for example:

- `https://capstoneproject2026-211b7.web.app`
- `https://capstoneproject2026-211b7.firebaseapp.com`

Either one is your live link. Share it with the teams.

## Re-deploying after edits

Every time you change a file, just run `firebase deploy --only hosting` again.

## Firestore database

The app stores all live state (tasks, files, feedback, meetings, team edits) in a single Firestore document at:

```
/captrack/state
```

Every browser subscribes via `onSnapshot`, so changes made by one user appear in everyone else's window in real time. `localStorage` is kept as an offline cache — first paint comes from local data, then Firestore hydrates.

### Deploy the security rules

```bash
firebase deploy --only firestore:rules
```

The included `firestore.rules` is **open** (`allow read, write: if true`) so the prototype works without Firebase Auth. **Tighten this before any public launch** — at minimum, lock writes to authenticated users.

### Reset the cloud state

From the browser console on the live site:

```js
window.CAPSTONE.reset();
```

This clears localStorage AND deletes `/captrack/state`, then reloads with the original seed data.

## Files involved

- `firebase.json` — hosting config (serves the project root, falls back to `index.html` for SPA routes)
- `.firebaserc` — pins this folder to the `capstoneproject2026-211b7` project
- `firebase-init.js` — initialises Firebase Analytics in the browser
- `index.html` — loads the Firebase compat SDK + `firebase-init.js`

## Optional — verify locally before deploy

```bash
firebase emulators:start --only hosting
# then open the URL it prints, usually http://localhost:5000
```
