import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

//TODO:
//Switch from promises to await
function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      const pushHistory = (auth) => {
        history.push("/");
      };
      pushHistory();
    } catch (err) {
      alert(err.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const pushHistory = (auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      };
      updateUser(username);
      pushHistory(auth);
    } catch (err) {
      alert(err.message);
    }
  };

  const updateUser = (a) => {
    var user = auth.currentUser;
    user
      .updateProfile({
        displayName: a,
      })
      .then(function () {
        history.push(auth);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const signIn = (e) => {
  //   e.preventDefault();
  //
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const register = (e) => {
  //   e.preventDefault();
  //
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       console.log(auth);
  //       if (auth) {
  //         history.push("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  //(e) => setUsername(e.target.value)

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>
            <strong>Username</strong>
            <small> (For users Signing Up)</small>
          </h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signinButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you are agreeing to Apollo's Conditions of Use and Terms
          of Service. Please see our Privacy Notice and Terms of Service.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Apollo account
        </button>
      </div>
    </div>
  );
}

export default Login;
