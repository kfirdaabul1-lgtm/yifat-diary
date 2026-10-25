// =====================================================================
//  הגדרות החיבור של "היומן של יפעת"
//  ממלאים פעם אחת לפי מדריך ההתקנה (README.md), שלב 3.
//  זה פרויקט Firebase חדש ונפרד מהמלונות ומהקנטינה.
// =====================================================================
window.APP_CONFIG = {

  // מעתיקים מ-Firebase Console ← Project settings ← Your apps ← SDK setup and configuration ← Config
  firebase: {
    apiKey: "AIzaSyCAObRi...",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "",
    appId: ""
  },

  // המייל של בעל המערכת. רק הוא מוסיף ומסיר מי יכול להיכנס.
  // חייב להיות זהה למייל שמופיע בקובץ firestore.rules.
  ownerEmail: "kfirdaabul1@gmail.com"
};
