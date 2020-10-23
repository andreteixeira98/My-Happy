import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Landing} />
                <Route path="/OrphanageMap"  exact component={Landing} />
                <Route path="/Orphanage"  exact component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;