import { auth } from '../../Firebase/FirebaseInit.ts';
import React, { useEffect, useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setUser({ ...user });
            setLoggedIn(true);
        } else {
            setUser(null);
            setLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        user,
        loggedIn,
        loading
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};