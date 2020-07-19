import React, { useEffect, useState } from 'react';

export const UserStoreContext = React.createContext();

const UserStore = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    const [defaultCountry, setDefaultCountry] = useState(undefined);

    useEffect(() => {
        // TODO: Save settings in backend.
        console.log('Updating user\'s settings in DB');
        if (defaultCountry) {
            localStorage.setItem('default_country', defaultCountry);
        }
    }, [defaultCountry]);

    useEffect(() => {
        // TODO: Get settings from backend.
        const df = localStorage.getItem('default_country');
        if (df) {
            setDefaultCountry(df);
        }
        setLoaded(true);
    }, [])

    return (
        <UserStoreContext.Provider value={{ defaultCountry, setDefaultCountry }}>
            {loaded && children}
        </UserStoreContext.Provider>
    );
};

export default UserStore;
