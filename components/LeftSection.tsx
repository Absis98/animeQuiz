import { Box, Stack } from "@mui/material"
import { useUserData } from "@/api/user"
import { UserProfileCard } from "./UserProfileCard";

export function LeftSection() {
    const userData = useUserData();
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
            }} spacing={2}>
                <div>Quizzes</div>
                <div>Scores</div>
            </Stack>

        </Box>
    )
}