import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            console.log('current use', createUser)
            if (createUser.uid) {
                setUser(createUser)
            }
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, setUser, createUser, login, googleLogin, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;