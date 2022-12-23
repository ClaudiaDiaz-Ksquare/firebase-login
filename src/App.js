// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp  } from "firebase/app";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  // LOGIN
  // ========== A D M I N ============
  const email = "hms@admin.com";
  const passwd = "root123";
  // ========== D O C T O R ============
  const dr_email = "dralejos@hotmail.com";
  const dr_passwd = "rich123";
  // ========== P A T I E N T ============
  const px_email = "dannae@hotmail.com";
  const px_passwd = "dannae123";

  const admn_login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, passwd);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
  const dr_login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, dr_email, dr_passwd);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
  const px_login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, px_email, px_passwd);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={admn_login}> Admin Login </button>
        <button onClick={dr_login}> Doctor Login </button>
        <button onClick={px_login}> Patient Login </button>
      </header>
    </div>
  );
}

export default App;
