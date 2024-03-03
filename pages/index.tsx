import { useEffect } from "react";
import LoginPage from "./loginPage";

export default function LandingPage() {

    useEffect(() => {
        console.log('ultra parent mounted')

       return () => {
           console.log('ultra paremnt unmounted')
       }
   })
   
    return (
        <LoginPage />
    )
}