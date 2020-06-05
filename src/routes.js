import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './pages/User/SignUp'
import Signin from './pages/User/SignIn'
import Logout from './pages/User/Logout'
import Dashboard from './pages/Dashboard'
import Download from './pages/Download'
import Profile from './pages/User/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Dashboard } />
                <Route path="/signup" exact component={ Signup } />
                <Route path="/signin" exact component={ Signin } />
                <Route path="/logout" exact component={ Logout } />
                <Route path="/profile" exact component={ Profile } />
                <Route path="/download/:id" exact component={ Download } />
            </Switch>
        </BrowserRouter>
    )
}