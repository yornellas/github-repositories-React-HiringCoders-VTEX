import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home'
import Repositories from './Pages/Repositories';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;