// Firebase initialization — Analytics + Firestore.
// Loaded as classic scripts (compat SDK) so it works without a bundler.
(function () {
  if (typeof firebase === 'undefined') {
    console.warn('[Firebase] SDK not loaded');
    return;
  }
  const firebaseConfig = {
    apiKey: "AIzaSyDcgRD4GI5SSesDUNX1SP2FUFI_-sdhkAY",
    authDomain: "capstoneproject2026-211b7.firebaseapp.com",
    projectId: "capstoneproject2026-211b7",
    storageBucket: "capstoneproject2026-211b7.firebasestorage.app",
    messagingSenderId: "660581754632",
    appId: "1:660581754632:web:af390df0d82705d2fa2ebd",
    measurementId: "G-V32QDL6NBV"
  };
  try {
    const app = firebase.initializeApp(firebaseConfig);
    if (firebase.analytics) {
      try { firebase.analytics(); } catch (e) { /* analytics is optional */ }
    }
    window.__firebaseApp = app;
    if (firebase.firestore) {
      window.__firestore = firebase.firestore();
      console.log('[Firebase] Firestore ready:', firebaseConfig.projectId);
    } else {
      console.warn('[Firebase] Firestore SDK not loaded');
    }
  } catch (e) {
    console.warn('[Firebase] init failed', e);
  }
})();
