import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


const Routes = [
    {path: '/', page: <div>Inicial</div>},
    {path: '/login', page: <div>Login</div>},
    {path: '/home', page: <div>Home</div>},
    {path: '/perfil', page: <div>Home</div>},
    {path: '/cotitulares ', page: <div>Home</div>},
    {path: '/cotitulares/cadastrar', page: <div>Home</div>},
    {path: '/nao-encontrado', page: <div>Home</div>},

];


const Rotas = () => {
    return (

        <BrowserRouter>
            <Switch>
                {Routes.map((route) => {
                    return (
                        <Route key={route.path} path={route.path} exact>
                            {route.page}
                        </Route>
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;