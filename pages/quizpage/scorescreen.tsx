import QuizQuestions from "@/components/QuizPage/QuizQuestions";
import { Box, LinearProgress } from "@mui/material";
import { useEffect } from "react";

export default function ScoreScreen(props) {


    return (
        <Box>
           <Box>{props.score} / 10</Box>
           <LinearProgress sx={{padding:'2px', height:'8px', borderRadius: '4px'}} variant="determinate" value={props.score * 10} />
        </Box>
    )
}