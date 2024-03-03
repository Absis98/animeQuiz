import { Box, LinearProgress } from "@mui/material";
import { useEffect } from "react";

export function QuizProgressBar(props: any) {


    const quizProgress = () => {
        const multiplier = 100 / props.totalQuestions;
        return multiplier * props.inprogressQuestion;
    }

    

    useEffect(() => {

    }, [])

    return (
        <Box display={'flex'} flexDirection={'column'} width={'75%'} fontWeight='strong'>
            <Box sx={{
                marginBottom: '8px',
                fontWeight: 'strong'
            }}>
                Question {props.inprogressQuestion} / {props.totalQuestions}
            </Box>
            <div> <LinearProgress sx={{padding:'2px', height:'8px', borderRadius: '4px'}} variant="determinate" value={quizProgress()} /></div>
            <Box marginTop='8px'>{props.timer} seconds left</Box>
        </Box>
            
        
    )
}