import NavigationBar from './components/NavigationBar';
import React, { useState } from 'react';
import Stats from './pages/Stats';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import AccountModalContext from './contexts/AccountModalContext';
import Profile from './pages/Profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import LoginRegisterModal from './pages/LoginRegisterModal';
import AccountSettings from './pages/AccountSettings';

function App() {
    const [accountModalVisible, setAccountModalVisible] = useState<boolean>(
        false
    );

    return (
        <Router>
            <AccountModalContext.Provider
                value={{ accountModalVisible, setAccountModalVisible }}
            >
                <div className="h-screen bg-gray-100">
                    <NavigationBar />
                    <main className="h-screen w-full max-w-6xl m-auto mt-12">
                        {accountModalVisible && <LoginRegisterModal />}
                        <Switch>
                            <Route path="/home" component={Home} exact />

                            <Route path="/stats" component={Stats} />

                            <Route path="/watchlist" />

                            <Route path="/games" />

                            <Route 
                                path="/profile" 
                                component={ Profile }
                                exact
                            />

                            <Route
                                path="/profile/:id"
                                component={ Profile }
                            />

                            <Route 
                                path="/settings"
                                render={({ match: { url }}) => (
                                    <>
                                        <Route path={`${url}/profile-information`} component={ () => <AccountSettings page='Profile information' /> } />
                                        <Route path={`${url}/account-management`} component={ () => <AccountSettings page='Account management' />} />
                                        <Route path={`${url}/site-preferences`} component={ () => <AccountSettings page='Site preferences' />} /> 
                                        <Redirect path={`${url}`} to={`${url}/profile-information`} />
                                    </>
                                )}
                            />

                            <Route path="/404" component={PageNotFound} />

                            <Redirect path="/" to="/home" exact />

                            <Redirect to="/404" />
                        </Switch>
                    </main>
                </div>
            </AccountModalContext.Provider>
        </Router>
    );
}

export default App;
