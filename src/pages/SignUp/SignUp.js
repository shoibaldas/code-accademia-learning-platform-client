import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottiecomponent from '../../asset/LottieComponent/Lottiecomponent';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [hidePassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!hidePassword);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;

        console.log(email, password, confirm)
        if (password.length < 6) {
            setError('Your password need to be atleast 6 characters');
            return;
        }
        if (password !== confirm) {
            setError('Password did not matched!');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
                handleEmailVerification();
                toast.success("Account successfully created. Please Verify your email.")
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='container flex justify-center items-center gap-56'>
            <div className='hidden md:flex w-5/12 text-center flex-col '>
                <div className='md:-mb-9'>
                    <h1 className='text-4xl font-bold text-violet-800 uppercase'>Sign Up today</h1>
                    <p className='text-md font-semibold text-gray-700'>And, get acess to the best courses...</p>
                </div>
                <Lottiecomponent></Lottiecomponent>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div onSubmit={handleSignUp} className="card-body">
                    <form>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="block dark:text-gray-100 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photoURL" className="block dark:text-gray-100 input input-bordered" required />
                            </div>
                        </div>
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
                            <div className='relative'>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="block dark:text-gray-100 input input-bordered" required />
                        </div>
                        <div className="flex items-center py-3">
                            <input id="link-checkbox" onClick={handleAccepted} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</Link>.</label>
                        </div>
                        <p className='text-red-700 text-sm'>{error}</p>
                        <div className="form-control mt-2">
                            <button disabled={!accepted} className="rounded-md py-3 text-white font-semibold border border-gray-400 bg-violet-600">Sign Up</button>
                        </div>
                    </form>
                    <label className="label">
                        <p className='text-sm text-gray-300'>Already have an account?<Link to="/login" className="label-text-alt link link-hover"> <span className='text-white hover:text-blue-800 font-bold'>Login</span> </Link></p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUp;