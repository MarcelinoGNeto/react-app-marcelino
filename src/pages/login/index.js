import * as React from 'react';
import './styles.css';

const Login = () => {
    return (
        <main class="container">
            <h2>LOGIN</h2>
            <form action="">
                <div class="input-field">
                    <input type="text" name="email" id="email" 
                    placeholder="Email" />
                    <div class="underline"></div>
                </div>
                <div class="input-field">
                    <input type="password" name="password" id="password" 
                    placeholder="password" />
                    <div class="underline"></div>
                </div>
                <input type="submit" value="LOGIN" />
                <div class="remember">
                <input type="checkout" value="x"/>
                </div>
                
            </form>

            <div class="footer">
                <div class="">       
                <p>Not a member? <a href="/">Sign up now</a></p>
                </div>
            </div>
        </main>
    );
}

export default Login;