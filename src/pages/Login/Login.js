import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const [hidePassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { signInUser, providerLogin } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => console.error(error))

    }

    const handleGitSignin = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => console.error(error))
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Login Successfully!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleClickShowPassword = () => {
        setShowPassword(!hidePassword);
    }

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col max-w-md rounded-md p-8 sm:p-6  dark:bg-base-100 dark:text-gray-100">
                <div className="mb-4 text-center">
                    <h1 className="my-1 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-2 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="block dark:text-gray-100 input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative z-0'>
                                <input type={hidePassword ? 'text' : 'password'} name='password' placeholder="password" className="block dark:text-gray-100 w-full input input-bordered" required />
                                <div className='text-gray-200 flex items-center  cursor-pointer absolute inset-y-0 right-0 pr-3' onClick={handleClickShowPassword}>
                                    {hidePassword ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    )}
                                </div>
                            </div>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <p className='text-red-700 text-sm'>{error}</p>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-100 transition duration-200 shadow-md hover:bg-purple-700 focus:shadow-outline focus:outline-none">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                            <Link rel="noopener noreferrer" to="/signup" className="hover:underline dark:text-violet-400">Sign up</Link>.
                        </p>
                    </div>
                </form>

                <div className='space-y-2'>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm text-center dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignin} aria-label="Log in with Google" >
                            <FcGoogle className='w-6 h-6'></FcGoogle>
                        </button>
                        <button onClick={handleGitSignin} aria-label="Log in with GitHub">
                            <FaGithub className='w-6 h-6 text-gray-100'></FaGithub>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;