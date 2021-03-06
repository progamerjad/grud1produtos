import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import ColsultaProdutos from './views/produtos/consulta';


export default () => {


    return(

        <HashRouter>

           <Switch>
               <Route exact path="/cadastro-produtos" component={CadastroProduto}/>
               <Route exact path="/consulta-produtos" component={ColsultaProdutos}/>
               <Route exact path="/" component={Home}/>
           </Switch>




        </HashRouter>
    )
}