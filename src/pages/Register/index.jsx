import { LayoutComponents } from "../../components/layoutComponents";
import { Link } from 'react-router-dom';
import jsxIMG from '../../assets/jsx.png';
import { useState } from 'react';


export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [confirmPassord, setConfirmPassord] = useState('');
    

    return (
        <LayoutComponents>
            <form className="pages-form">

                <span className="pages-form-title">Register!</span>
                <span className="pages-form-title">
                    <img src={jsxIMG} alt="React Icon" />
                </span>

                <div className="wrap-input">
                    <input className={firstName !== "" ? "has-val input" : "input"}
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                        <span className="focus-input" data-placeholder="First Name . . ."></span>
                </div>

                <div className="wrap-input">
                    <input className={lastName !== "" ? "has-val input" : "input"}
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                    <span className="focus-input" data-placeholder="Last Name . . ."></span>
                </div>

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
                        onChange={(e) => setPassowrd(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder='Password . . .'></span>
                </div>

                <div className="wrap-input">
                    <input className={confirmPassord !== "" ? "has-val input" : "input"} 
                    type="password"
                    value={confirmPassord}
                    onChange={(e) => setConfirmPassord(e.target.value)}/>
                    <span className="focus-input" data-placeholder="Confirm Password . . ."></span>
                </div>

                <div className='text-center'>
                    <Link className="text2" to="/login">Return</Link>
                </div>

            </form>
        </LayoutComponents>
    );
}