import { QuizTypeCard } from "@/components/QuizTypeCard";
import { Box } from "@mui/material";

export default function Quizzes() {
    const availableQuizzes = [{title: 'Anime Quix', subtitle: 'Test your Anime knowledge'}];
    return (
        <Box display='flex' flexWrap='wrap'>
            {availableQuizzes.map((quiz) => {
                return <QuizTypeCard key={quiz.title} quizType={quiz} />
            })}
        </Box>
    )
}