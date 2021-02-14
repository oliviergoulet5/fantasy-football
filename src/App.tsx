import NavigationBar from './components/NavigationBar';
import React, { useState } from 'react';
import Stats from './pages/Stats';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import AccountModalContext from './contexts/AccountModalContext';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import LoginRegisterModal from './pages/LoginRegisterModal';

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
                    <main className="h-screen">
                        {accountModalVisible && <LoginRegisterModal />}
                        <Switch>
                            <Route path="/home" component={Home} exact />

                            <Route path="/stats" component={Stats} />

                            <Route path="/watchlist" />

                            <Route path="/games" />

                            <Route path="/profile" />

                            <Route path="/settings" />

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
