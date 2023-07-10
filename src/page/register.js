import { useState } from "react"
import InputText from "../components/InputBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accessLogin } from "../Store/actions";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegis = (e) => {
        dispatch(accessLogin(true));
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen w-full">
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="text-left">
                    <img className="mb-4 w-44" src="./icon/logo_ebility.png" alt="/" />
                    <h1 className="font-bold text-3xl mb-2.5">Sign up for an account</h1>
                    <p className="text-gray-400 mb-10">Ready to be part of the digital controller?</p>
                    <form>
                        <label className="font-semibold">Email Address</label>
                        <InputText
                            design="peer mt-2.5 w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 
                            invalid:border-pink-500 invalid:text-pink-600"
                            value={email}
                            onChange={handleEmail}
                            placeHolder='Email Address'
                            type='email'
                            testid="email-input"
                        >
                            <p className="invisible peer-invalid:visible text-pink-600 text-sm mb-4">
                                Please provide a valid email address.
                            </p>
                        </InputText>
                        <label className="font-semibold">Password</label>
                        <InputText
                            design='peer w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 invalid:border-pink-500 invalid:text-pink-600'
                            value={password}
                            onChange={handlePassword}
                            placeHolder='Password'
                            type='password'
                            testid="password-input"
                        >
                            {password.length < 10 &&
                                <p className="text-pink-600 text-sm mb-4">
                                    Password must be 10 character minimum.
                                </p>}
                        </InputText>
                        <div className="flex mt-4">
                            <input type="checkbox" className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2" />
                            <p className="text-gray-400">I accept the <span><a href="/#" className="font-semibold text-blue-500">Terms of use</a></span> and <span><a href="/#" className="font-semibold text-blue-500">Subscription</a></span></p>
                        </div>
                        <Link to="/">
                            <Button
                                btnName="Sign Up"
                                design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                                click={handleRegis}
                            />
                        </Link>
                        <p className="text-center text-gray-400">Already have an account? <span><Link className="font-semibold text-blue-500" to="/login">Sign In</Link></span></p>
                    </form>
                </div>
            </div>
            <div className="hidden sm:inline-flex flex items-center justify-center bg-sky-600 h-screen">
                <img className="w-2/3 m-auto" src="./icon/icon_rocket.png" alt="/" />
            </div>
        </div>
    )
}

export default RegisterPage;