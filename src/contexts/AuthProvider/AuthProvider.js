import React from 'react';
import { getAuth } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { name: 'rakib' }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;