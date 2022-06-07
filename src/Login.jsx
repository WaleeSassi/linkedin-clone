import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebaseC";
import "./Login.css";
function Login(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phototUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

  const Register = () => {
    if (!name) {
      return alert("please enter your name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: phototUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                phototUrl: phototUrl,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };
  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            phototUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if regestring)"
        />{" "}
        <input
          type="text"
          value={phototUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          placeholder="Profile picture URL"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={LoginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={Register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
