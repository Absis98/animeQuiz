import { createContext, useContext, useState, useEffect } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { useRouter } from 'next/navigation'

const AppContext = createContext('' as any);

export const AppContextProvider = ({ children }: { children: any}) => {
    const [ userData, setUserData ] = useState(null as any);
    const [ userId, setUserId ] = useState(null as any);
    const router = useRouter()

    useEffect(() => {
        const id = window.localStorage.getItem('userId');
        setUserId(id);
    }, [])

    useEffect(() => {
            const userName = window.localStorage.getItem('userName');
            const userEmail = window.localStorage.getItem('email');
            setUserData({
                id: userId,
                name: userName,
                email: userEmail
            });
    }, [userId])
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