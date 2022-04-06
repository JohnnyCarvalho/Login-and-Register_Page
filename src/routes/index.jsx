/**
 * @description Rota para a página de login
 * @author Johnny Carvalho
 * @version 1.0.0
 * @date 05/03/2022
 * @time 22:00
 */

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/Login';

export const AppRouter = () => {
    // Prestar a atenção se o {login} está correto ou teremos que atualizar o caminho para {<login/>}
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login />} />
            </Routes>
        </Router>

    );
}