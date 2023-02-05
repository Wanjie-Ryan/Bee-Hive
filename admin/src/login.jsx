import React from 'react';


function Login(){


     return(

         <>

         <div className="reg">


            <form className="signup-form">

                <div className="form-header">HoneyPot | Signin</div>
                <div className="form-body">
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
                <button type="submit">Login</button>
                
                </div>


            </form>

                
         </div>


            
            
        </>




    )
}


export default Login