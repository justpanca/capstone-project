import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { accessLogin } from "../Store/actions";
import Button from "../components/Button";
import InputText from "../components/InputBar";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = (e) => {
    dispatch(accessLogin(true));
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen w-full">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-left">
          <img className="mb-4 w-44" src="./icon/logo_ebility.png" alt="/" />
          <h1 className="font-bold text-3xl mb-2.5">Sign in to your account</h1>
          <p className="text-gray-400 mb-10 w-80">Maximize your talent by taking courses that have been provided by the Ebility in full</p>
          <form>
            <label className="font-semibold" htmlFor="email">Email Address</label>
            <InputText
              design="peer mt-2.5 w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 
              invalid:border-pink-500 invalid:text-pink-600"
              value={email}
              onChange={handleEmail}
              placeholder='Email Address'
              type='email'
              testid="email-input"
            >
              <p className="invisible peer-invalid:visible text-pink-600 text-sm mb-4">
                Please provide a valid email address.
              </p>
            </InputText>
            <label className="font-semibold" htmlFor="password">Password</label>
            <InputText
              design='peer w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 invalid:border-pink-500 invalid:text-pink-600'
              value={password}
              onChange={handlePassword}
              placeholder='Password'
              type='password'
              testid="password-input"
            >
              {/* {password.length < 10 &&
                <p className="text-pink-600 text-sm mb-4">
                  Password must be 10 character minimum.
                </p>} */}
              <p className="invisible peer-invalid:visible text-pink-600 text-sm mb-4">
                Please provide a valid email address.
              </p>
            </InputText>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <input type="checkbox" className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2" />
                <p className="text-gray-400">Keep me signed in</p>
              </div>
              <div>
                <a className="text-blue-500" href="/#">Forgot Password?</a>
              </div>
            </div>
            <Link to="/">
              <Button
                btnName="Sign In"
                design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                testid="btnlogin"
                click={handleLogin}
              />
            </Link>
            <p className="text-center text-gray-400">Not registered yet? <span><Link className="font-semibold text-blue-500" to="/register">Create a new account</Link></span></p>
          </form>
        </div>
      </div>
      <div className="hidden sm:inline-flex flex items-center justify-center bg-sky-600 h-screen">
        <img className="w-2/3 m-auto" src="./icon/icon_earth.png" alt="/" />
      </div>
    </div>
  );
};

export default LoginPage;
