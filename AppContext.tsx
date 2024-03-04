import { createContext, useContext, useEffect, useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { useRouter } from 'next/navigation'

const AppContext = createContext('' as any);

export const AppContextProvider = ({ children }) => {
    const [ userData, setUserData ] = useState({});
    const router = useRouter()

    useEffect(() => {
        // Check if window is available (i.e., if code is running on the client-side)
        if (typeof window !== 'undefined') {
            // Access window.localStorage only if window is available
            setUserData({
                id: window.localStorage.getItem('userId'),
                name: window.localStorage.getItem('userName'),
                email: window.localStorage.getItem('email')
            });
        }
    }, []); 
    const contextValue = {
        userData,
        setUserData,
        router
    }
    return (
        <AppContext.Provider value={contextValue}>
            <AppRouterCacheProvider>
            {children}
            </AppRouterCacheProvider>
        </AppContext.Provider>
    );
};
export const useAppContext = () => {
    return useContext(AppContext);
}