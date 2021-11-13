import useAuth from "../../components/hooks/useAuth/useAuth";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import loginimg from '../../images/admin-login.jpg'
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Login = () => {
  const location = useLocation()
  const history = useHistory()
  const auth = getAuth();
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin1, setIsLogin1] = useState(false);

  const toggleLogin = (e) => {
    setIsLogin1(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(name,email,password);
    // checking password length
    if (password.length < 6) {
      setError("Password Must Be 6 Character");
      return;
    }
    // case sensitive condition
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Password Must contain 2 digit");
      return;
    }
    if (isLogin1) {
      processLogin(name,email, password);
    } else {
      registerNewUser(name,email, password);
    }
    document.getElementById("myForm").reset();
    
  };

  const processLogin = (name,email,password,history,location) => {
    signInWithEmailAndPassword(auth, email, password,name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const destination = location?.state?.from || '/'
        history.replace(destination)
        setError("");

       
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (name,email, password, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // const user = {email, displayName:name}
        // setUser(user)
        // history.replace('/')
        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="row">
      <div className="col-md-7">
      <img className="w-50 img-fluid" src={loginimg} alt="" />
      </div>
      <div className="col-md-5">
      <form id="myForm" className="w-50" onSubmit={handleRegistration}>
      <div className="bg-white">
        <h2 className="text-dark justify-content-center">
          Please {isLogin1 ? "Login" : "Register"}
        </h2>

        <div className="form">
          <div className="row"></div>
          <div className="row">
            <div className="col mt-md-0 mt-3">
              
              <label className="text-start">Name</label>
              <input
                onBlur={handleNameChange}
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-md-0 mt-3">
              
              <label className="text-start">Email</label>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-md-0 mt-3">
             
              <label className="text-start">Password</label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="d-flex mx-1 justify-content-center">
            <input
              onChange={toggleLogin}
              className="form-check-input mx-2"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Already Registred?
            </label>
          </div>
          <div className="text-danger fw-bold">{error}</div>
          <button className="btn btn-outline-dark mt-3 mx-2">
            {isLogin1 ? "Login" : "Register"}
          </button>
          <br /> <br />
          <button
            type="button"
            onClick={handleResetPassword}
            className="btn btn-warning btn-sm"
          >
            Reset Password
          </button>
          <br />
          <button
            onClick={signInUsingGoogle}
            className="btn btn-outline-danger mt-3 mx-2"
          >
            Google SignIn
          </button>
        </div>
      </div>
    </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};
export default Login;
