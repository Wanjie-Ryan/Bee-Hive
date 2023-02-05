import React from 'react';
import { Link } from "react-router-dom";
import './register.css';

function Register(){


    return(

        <>

          <div className="reg">

            <form className="signup-form">

                <div className="form-header">HoneyPot | Register</div>
                <div className="form-body">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailOrPhone">Email</label>
                        <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        />

                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        id="password"
                        />

                    </div>

                </div>


                <div className="form-footer">
                     <button type="submit">Create Account</button>
                     <p>
                        Already have an account? 
                        <Link to="/login">
                        Login
                        </Link>
                    </p>
                </div>

            </form>

          </div>
            
        
        </>




    )
}


export default Register