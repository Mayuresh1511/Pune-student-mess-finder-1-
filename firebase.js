import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
set,
get,
push,
child
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCS7a9qpvON9YhEvpNbWj9XsThz4jGARfI",
  authDomain: "pune-student-mess-finder.firebaseapp.com",
  databaseURL: "https://pune-student-mess-finder-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pune-student-mess-finder",
  storageBucket: "pune-student-mess-finder.firebasestorage.app",
  messagingSenderId: "843319061892",
  appId: "1:843319061892:web:12118ee7a1ea8df88fc1d1"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {
db,
ref,
set,
get,
push,
child
};