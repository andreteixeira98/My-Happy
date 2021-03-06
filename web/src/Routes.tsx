import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Landing} />
                <Route path="/OrphanagesMap" component={OrphanagesMap} />
                <Route path="/Orphanage"  component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;