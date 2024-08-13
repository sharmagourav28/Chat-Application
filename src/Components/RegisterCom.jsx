import React from "react";
import addimg from "../assets/addImg.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Auth/firebase.js";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

const RegisterCom = () => {
  const [err, seterr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); // when we click on signup we don't want to referesh page that's why we use this
    console.log(e.target[0].value);
    const displayname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayname);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          seterr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // await setDoc(doc(db, "users", res.user.uid), {
            //   uid: res.user.uid,
            //   displayname,
            //   email,
            //   photoURL: downloadURL,
            // });
          });
        }
      );
    } catch (err) {
      seterr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addimg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Signup</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterCom;
