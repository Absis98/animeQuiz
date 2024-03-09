import { QuizTypeCard } from "@/components/QuizTypeCard";
import { Box } from "@mui/material";
import { quizTypesState } from "@/state/atoms";
import { useRecoilState } from "recoil";

export function Quizzes() {
    const [quizTypes] = useRecoilState(quizTypesState);
  
    return (
        <Box display='flex' flexWrap='wrap'>
            {quizTypes.map((quiz) => {
                return <QuizTypeCard key={quiz.quizName} quizType={quiz} />
            })}
        </Box>
    )
}