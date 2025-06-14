import React, { use } from 'react';
import registerLottie from '../../assets/lotties/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // register user
        createUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Registered!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            })
            .catch(err => {
                console.log(err.code);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie className='w-[300px]' animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" required name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" required name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                        <div>
                            <p>Already have an account?
                                <Link to='/signIn' className='text-blue-500'> Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;