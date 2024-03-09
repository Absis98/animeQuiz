import { useAppContext } from "@/AppContext";
import { Box, Button, LinearProgress } from "@mui/material";

export default function ScoreScreen(props: any) {
    const { router } = useAppContext();
    
    const getProgressValue = () => {
        const multiplier = 100/props.totalQuestions;
        return multiplier * props.score;
    }

    const goToHomePage = () => {
        router.push('/homepage')
    }
    return (
        <Box display='flex' width='75%' justifyContent='center' flexDirection='column' marginX='auto' marginTop='10%'>
            <Box marginY='16px'>{props.score} / {props.totalQuestions}</Box>
            <LinearProgress sx={{padding:'2px', height:'8px', borderRadius: '4px'}} variant="determinate" value={getProgressValue()} />
            <Box marginY='16px'>You have answered {props.score} questions correctly</Box>
            <Button sx={{
                width: 'fit-content',
                marginX: 'auto'
            }} variant="contained" onClick={goToHomePage}>Go back to Home page</Button>
        </Box>
    )
}