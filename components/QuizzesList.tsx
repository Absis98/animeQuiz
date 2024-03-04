import { getQuizList } from "@/api/quizzes";
import { QuizTypeCard } from "@/components/QuizTypeCard";
import { QuizType } from "@/types/quizType";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export function Quizzes() {
    const [quizTypes, setQuizTypes] = useState([] as QuizType[]);
    useEffect(() => {
        getQuizList().then((res) => {
            setQuizTypes(res?.data);
        })
    }, [])
    return (
        <Box display='flex' flexWrap='wrap'>
            {quizTypes.map((quiz) => {
                return <QuizTypeCard key={quiz.quizName} quizType={quiz} />
            })}
        </Box>
    )
}