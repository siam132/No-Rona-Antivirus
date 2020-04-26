import React from 'react';
import {Switch, Redirect} from 'react-router-dom';

import {RouteWithLayout} from './components';
import {Main as MainLayout, Minimal as MinimalLayout} from './layouts';

import {
    Dashboard as DashboardView,
    Resources as ResourcesView,
    UserList as UserListView,
    Testing as TestingView,
    Icons as IconsView,
    Account as AccountView,
    Settings as SettingsView,
    SignUp as SignUpView,
    SignIn as SignInView,
    NotFound as NotFoundView
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/sign-in"
            />
            <RouteWithLayout
                component={ResourcesView}
                exact
                layout={MainLayout}
                path="/resources"
            />
            <RouteWithLayout
                component={TestingView}
                exact
                layout={MainLayout}
                path="/testing"
            />
            <RouteWithLayout
                component={UserListView}
                exact
                layout={MainLayout}
                path="/donate"
            />
            <RouteWithLayout
                component={AccountView}
                exact
                layout={MainLayout}
                path="/account"
            />
            <RouteWithLayout
                component={SettingsView}
                exact
                layout={MainLayout}
                path="/settings"
            />
            <RouteWithLayout
                component={SignUpView}
                exact
                layout={MinimalLayout}
                path="/sign-up"
            />
            <RouteWithLayout
                component={SignInView}
                exact
                layout={MinimalLayout}
                path="/sign-in"
            />
            <RouteWithLayout
                component={NotFoundView}
                exact
                layout={MinimalLayout}
                path="/not-found"
            />
            <Redirect to="/not-found"/>
        </Switch>
    );
};

export default Routes;
