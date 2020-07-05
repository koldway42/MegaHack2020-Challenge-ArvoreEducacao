import React from 'react';

import './App.scss';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from "../../store/store"

import { BrowserRouter } from "react-router-dom"
import Routes from "../../routes/index"

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <div className="app" data-testid="app">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
        </PersistGate>
    </Provider>
    );

export default App;
