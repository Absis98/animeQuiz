import { useAppContext } from "@/AppContext";
import SignIn from "./SignIn"
import Box from '@mui/material/Box';
import { useEffect } from "react";

export function LoginForm() {

    const { userData, router } = useAppContext();

    useEffect(() => {
        if (userData.id) {
            router.push('/homepage')
        }
    })
    return(
        <div>
            <Box 
                sx={{
                    fontWeight: 'bold',
                }}
                display="flex" justifyContent="flex-end" mt='20px' mr='40px'>
                <span className="">AnimeQ</span>
            </Box>
            <div>
                <SignIn />
            </div>
        </div>
    )
}