import React from 'react'
// import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
// import Signup from './Signup'
export default function Login() {


  return (
    <>

        <div>
            <section>
                <div className="imgBx">
                    {/* <img src="For Login Page.jpg"> */}
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2>Login</h2>
                        <form>
                            <div className="inputBx">
                                <span>Username</span>
                                <input type="text" name=""/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Password</span>
                                <input type="password" name=""/>
                            </div>
                            <div className="remember">
                                <label><input type="checkbox" name=""/> Remember me</label>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Sign in" name=""/>
                            </div>  
                          
                        </form>
                    </div>
                </div>
            </section>  
        </div>    
    </>
  )
}
