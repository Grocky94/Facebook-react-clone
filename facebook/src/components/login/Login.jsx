import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
    const [sigupopen, setsignupopen] = useState(false)
    return (
        <div >
            <div id="login-parent-screen">
                <div id="login-body">
                    <div id="login-inner-left-body">
                        <div id="login-inner-left-image-holder">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
                        </div>
                        <h1>Facebook helps you connect and share<br /> with the people in your life.</h1>
                    </div>
                    <div id="login-inner-right-body">
                        <div id="login-form-div">
                            <form>
                                <input type="email" placeholder='Email address' /><br />
                                <input type='password' placeholder='Password' /><br />
                                <input type='submit' value="Log in" />
                                <p>Forgetten password?</p>
                            </form>
                            <input type='submit' value="Create new account" onClick={() => { setsignupopen(true) }} />
                        </div>
                        <p><span>Create a Page</span> Create a Page for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
            {sigupopen ? <div id="register-model">
                <div id="register-form-div">
                    <div id="register-form-heading">
                        <div id="xmark-close" onClick={() => { setsignupopen(false) }}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <h1>Sign Up</h1>
                        <p>It's quick and easy.</p>
                    </div>
                    <form>
                        <div className='multi-input-div'>
                            <input className='name-input' placeholder='First Name' type='text' />
                            <input className='name-input' placeholder='Surname' type='text' />
                        </div>
                        <div className='single-input-div'>
                            <input className='email-input' type="email" placeholder='Email address' />
                        </div>
                        <div className='single-input-div'>
                            <input className='email-input' type="password" placeholder='New password' />
                        </div>
                        <div className='triple-input-div-parent'>
                            <p className='triple-input-header'>Date of birth <i class="fa-solid fa-circle-question"></i></p>
                            <div className='triple-input-div-align'>
                                <div className='selector-div'>
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div className='selector-div'>
                                    <select>
                                        <option value="Jan">Jan</option>
                                        <option value="Feb">Feb</option>
                                        <option value="Mar">Mar</option>
                                        <option value="Apr">Apr</option>
                                        <option value="May">May</option>
                                        <option value="Jun">Jun</option>
                                        <option value="Jul">Jul</option>
                                        <option value="Aug">Aug</option>
                                        <option value="Sep">Sep</option>
                                        <option value="Oct">Oct</option>
                                        <option value="Nov">Nov</option>
                                        <option value="Dec">dec</option>
                                    </select>
                                </div>
                                <div className='selector-div'>
                                    <select>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='triple-input-div-parent'>
                            <p className='triple-input-header'>Gender <i class="fa-solid fa-circle-question"></i></p>
                            <div className='triple-input-div-align'>
                                <div className='selector-div'>
                                    Female <input name="Gender" type='radio' value="Female" />
                                </div>
                                <div className='selector-div'>
                                    Male <input name="Gender" type='radio' value="Male" />
                                </div>
                                <div className='selector-div'>
                                    Custom <input name="Gender" type='radio' value="Custom" />
                                </div>
                            </div>
                        </div>
                        <p className='second-last-addition-info'>People who use our service may have uploaded your contact information to Facebook.<span> Learn more.</span> </p>
                        <p className='second-last-addition-info'>By clicking Sign Up, you agree to our <span> Terms, Privacy Policy</span> and <span>Cookies Policy.</span>  You may receive SMS notifications from us and can opt out at any time.</p>
                        <input className='sign-up-btn' type='submit' value="Sign up" />
                    </form>
                </div>
            </div> : ""}
        </div>
    )
}

export default Login
