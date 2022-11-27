import React from 'react'

export default function Signup() {
  return (
    <>
        <div>
            <section>
                <div className="imgBx">
                    {/* <img src="For Login Page.jpg"> */}
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2><br/><br/>Sign Up</h2>
                        <form>
                            <div className="inputBx">
                                <span>Email Address</span>
                                <input type="text" name=""/>
                            </div>
                            <div className="inputBx">
                                <span>Username</span>
                                <input type="text" name=""/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Password</span>
                                <input type="password" name=""/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Confirm Password</span>
                                <input type="password" name=""/>
                            </div>
                            <div className="remember">
                                <br/><br/>
                                <label><input type="checkbox" name=""/> I have read and agreed to the terms and conditions</label>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Sign Up" name=""/>
                            </div>
                            <div className="inputBx">
                                <p>Have an account already? <a href="login.html">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
