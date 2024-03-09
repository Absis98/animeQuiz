import { Box, Stack } from "@mui/material"
import { UserProfileCard } from "./UserProfileCard";
import { useAppContext } from "@/AppContext";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

export function LeftSection() {
    const pathname = usePathname()
    const { router } = useAppContext();
    const handleOnClickQuizzes = () => {
        router.push('/homepage')
    }

    const handleOnClickProfile = () => {
        router.push('/profile')
    }
    return (
        <Box sx={{
            backgroundColor: 'ECECEC',
            border: '1px solid black',
            width: '15%',
            padding: '10px'
        }}
        height='100%' 
        display='flex' 
        flexDirection='column'>
            <UserProfileCard />
            <Stack sx={{
                marginTop: '32px'
            }} spacing={1}>
                <Box 
                    className={`cp ${pathname === '/homepage' ? 'left-nav-page-link-selected' : 'left-nav-page-link'}`}
                    onClick={handleOnClickQuizzes}
                >
                    Quizzes
                </Box>
                <Box 
                    className={`cp ${pathname === '/profile' ? 'left-nav-page-link-selected' : 'left-nav-page-link'}`}
                    onClick={handleOnClickProfile}
                >
                    Profile
                </Box>
            </Stack>

        </Box>
    )
}