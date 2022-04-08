import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Reserva from '../Pages/Reserva';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/reserva' component={Reserva} />
        </Switch>
    )
}