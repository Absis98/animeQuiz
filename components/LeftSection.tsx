import { Box, Stack } from "@mui/material"
import { UserProfileCard } from "./UserProfileCard";
import { useAppContext } from "@/AppContext";

export function LeftSection() {
    const { router } = useAppContext();
    const handleOnClickQuizzes = () => {
        router.push('/homepage')
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
            }} spacing={2}>
                <div className="cp" onClick={handleOnClickQuizzes}>Quizzes</div>
            </Stack>

        </Box>
    )
}