import { AppContextProvider } from '@/AppContext';
import '@/styles/index.css';
import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { InitializeAtoms } from '@/plugins/InitializeAtoms';
import RecoilNexus from "recoil-nexus";

export default function Application({Component, pageProps}: {Component: any, pageProps: any}) {
    

    return (
        <StrictMode>
            <RecoilRoot>
                <RecoilNexus />
                <AppContextProvider>
                    <InitializeAtoms />
                    <Component {...pageProps}/>
                </AppContextProvider>
            </RecoilRoot>
        </StrictMode>
        
    )
}