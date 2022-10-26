import React from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = { user, googleLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;