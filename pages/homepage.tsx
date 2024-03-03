import { useUserData } from "@/api/user"
import { LeftSection } from "@/components/LeftSection";
import { Box } from "@mui/material";
import { Quizzes } from "@/components/QuizzesList";

export default function Homepage() {
    const userData: any = useUserData();

    return (
            <Box 
                sx={{
                    margin: '16px',
                    backgroundColor: '#ECECEC'
                }}
                height='100vh'
                display='flex'
                flexDirection='row'>
                <LeftSection />
                <Quizzes />
            </Box>
    )
}