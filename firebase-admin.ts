import admin from "firebase-admin";
import adminDb from "firebase-admin/firestore";

let app;

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "/n"),
    }),
  });
}

// const adminDb = initFirestore({
//   credential: admin.credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "/n"),
//   }),
// });

// db = adminDb.initializeFirestore(app,{preferRest:true})
const adminAuth = admin.auth(app);
export { adminAuth };
