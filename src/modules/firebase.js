import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(token, user);

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

  async write(userId) {
    const database = getDatabase(app);
    console.log(userId);
    try {
      await set(ref(database, `users/${userId}`), {
        test: "hello",
      });

      return 1;
    } catch (e) {
      return e;
    }
  }
}

export default Firebase;
