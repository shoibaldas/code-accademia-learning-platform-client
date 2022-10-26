import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebaseconfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [signIn, setSignIn] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://code-accademia-server.vercel.app/category-courses')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => unSubscribe();
    }, [signIn])

    const authinfo = { categories, user, loading, setSignIn, providerLogin, signInUser, createUser, updateUserProfile, logOut };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;