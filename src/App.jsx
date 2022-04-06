import jsxIMG from './assets/jsx.png';
import './styles.css';
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">

      <div className="container-login">

        <div className="wrap-login">

          <form className="login-form">

            <span className="login-form-title">Sign In!</span>
            <span className="login-form-title">
              <img src={jsxIMG} alt="React Icon" />
            </span>

            <div className="wrap-input">
              <input className={email !== "" ? "has-val input" : "input"} // Condição adicionada para verificar se o email está preenchido
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? "has-val input" : "input"} // Condição adicionada para verificar se o password está preenchido
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Password'></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Sign In</button>
            </div>

            <div className="text-center">
              <span className="text1">Don't have account?</span>
            </div>
            <div className='text-center'>
              <a href="#" className="text2">Create account!</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
