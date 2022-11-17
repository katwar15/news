import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwxcVqHCRAf1BJaqYS-JZZSDle2NYzydU",
  authDomain: "thenews-330a3.firebaseapp.com",
  projectId: "thenews-330a3",
  storageBucket: "thenews-330a3.appspot.com",
  messagingSenderId: "502415378162",
  appId: "1:502415378162:web:19140e82f69e6245b8b26b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
