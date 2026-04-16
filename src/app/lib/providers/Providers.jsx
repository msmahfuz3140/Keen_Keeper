import ContextProvider from '@/Context/ContextProvider';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    );
};

export default Providers;