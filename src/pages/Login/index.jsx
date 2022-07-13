import { firebaseApp, auth } from '../../database/firebase';
import { Link } from 'react-router-dom';
import jsxIMG from '../../assets/jsx.png';
import { useState } from 'react';
import { LayoutComponents } from '../../components/layoutComponents';



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function connect() {
          try {
              await auth.signInWithEmailAndPassword(email, password);
          } catch (e) {
              console.error("Error adding document: ", e);
          }
          window.location.href = "/home";
          
      }

  return (
      <LayoutComponents>
    <form className="pages-form">

      <span className="pages-form-title">Wellcome!</span>
      <span className="pages-form-title">
        <img src={jsxIMG} alt="React Icon" />
      </span>

      <div className="wrap-input">
        <input className={email !== "" ? "has-val input" : "input"} // Condição adicionada para verificar se o email está preenchido
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder='Email . . .'></span>
      </div>

      <div className="wrap-input">
        <input className={password !== "" ? "has-val input" : "input"} // Condição adicionada para verificar se o password está preenchido
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder='Password . . .'></span>
      </div>

      <div className="container-pages-form-btn">
        <button
        className="pages-form-btn"
        onClick={connect}
        >Sing in</button>
      </div>

      <div className="text-center">
        <span className="text1">Don't have account?</span>
      </div>
      <div className='text-center'>
        <Link className="text2" to="/register">Create account!</Link>
      </div>

    </form>
  </LayoutComponents>
  );
};