import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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

        return user;
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

        return user;
      } catch (e) {
        console.log(e);
      }
    }
  }

  async logout() {
    const auth = getAuth(app);

    await auth.signOut();
  }
}

export default Firebase;
