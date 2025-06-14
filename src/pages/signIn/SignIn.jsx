import React, { use } from 'react';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import Lottie from 'lottie-react';
import signInLottie from '../../assets/lotties/signIn.json'
import SocialLogin from '../shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in sign in',location);
    const from = location.state || '/'



    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // register user
        signInUser(email, password)
            .then(() => {
                // console.log(result.user);
                navigate(from)

            })
            .catch(err => {
                console.log(err.code);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie className='w-[300px]' animationData={signInLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" required name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" required name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                        <div>
                            <p>New to this Site?
                                <Link to='/register' className='text-blue-500'> Register now</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;