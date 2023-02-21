import React from 'react';
import GlobalStyle from './styles/global';
import RoutesApp from "./routes";
import { AuthProvider } from './contexts/auth';

const App = () => {
    return (
        <div className='App'>
            <AuthProvider>
                <GlobalStyle />
                <RoutesApp />
            </AuthProvider>
        </div>
    );
};

export default App;