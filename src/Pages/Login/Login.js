import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login" />

                        </div>
                    </form>
                    <p className='text-center'>new to Genius Car <Link className='text-orange-500 font-bold' to='/signup'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;