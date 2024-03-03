import { AppContextProvider } from '@/AppContext';
import '@/styles/index.css';
import { StrictMode } from 'react';

export default function Application({Component, pageProps}) {
    return (
        <StrictMode>
            <AppContextProvider>
                <Component {...pageProps}/>
            </AppContextProvider>
        </StrictMode>
        
    )
}