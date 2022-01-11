import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, set, ref, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

class Firebase {
  async login(type) {
    const auth = getAuth(app);

    if (type === "Google") {
      const googleAuthProvider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        // The signed-in user info.
        const user = result.user;

        return user.uid;
      } catch (e) {
        console.log(e);
      }
    } else if (type === "Github") {
      const githubAuthProvider = new GithubAuthProvider();

      try {
        const result = await signInWithPopup(auth, githubAuthProvider);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);

        return user.uid;
      } catch (e) {
        console.log(e);
      }
    }
  }

  async logout() {
    const auth = getAuth(app);

    await auth.signOut();
  }

  async write(userId, data, timestamp) {
    const database = getDatabase(app);
    console.log(userId);
    try {
      await set(ref(database, `users/${userId}/posts/${timestamp}`), data);

      return 1;
    } catch (e) {
      return e;
    }
  }

  async setData(userId) {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${userId}/posts`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("no data");
      return {};
    }
  }

  async selectData(userId, postId) {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${userId}/posts`));
    if (snapshot.exists()) {
      return snapshot.val()[postId];
    } else {
      console.log("no data");
      return null;
    }
  }
}

export default Firebase;
