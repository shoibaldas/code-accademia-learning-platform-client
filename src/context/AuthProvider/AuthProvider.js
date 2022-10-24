import React, { createContext } from 'react';
import app from '../../firebase/firebaseconfig';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authinfo = { providerLogin, signInUser };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;