import { createContext, useContext, useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { useRouter } from 'next/navigation'

const AppContext = createContext('' as any);

export const AppContextProvider = ({ children }) => {
    const [ userData, setUserData ] = useState({});
    const router = useRouter()

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