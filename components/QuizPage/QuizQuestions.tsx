import { getQuestionsList, verifyAnswers } from "@/api/questions"
import { QuestionForm } from "@/components/QuizPage/QuestionForm";
import { QuizProgressBar } from "@/components/QuizPage/QuizProgressBar";
import ScoreScreen from "@/components/QuizPage/ScoreScreen";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { QUESTION_TIMER } from "./Constants";

export default function QuizQuestions() {
    const searchParams = useSearchParams();
    const [questions, setQuestions] = useState([] as any[]);
    const [inprogressQuestion, setInprogressQuestion] = useState(0);
    const [answers, setAnswers] = useState([] as any[]);
    const [timer, setTimer] = useState(QUESTION_TIMER);
    const [quizSessionId, setQuizSessionId] = useState(null);
    const [score, setScore] = useState(null);
    const [displayScores, setDisplayScores] = useState(false)

    const setAnswer = (questionId: number, answer: string) => {
        setAnswers((value) => {
            return value.length ? [...value, { id: questionId, answer, timeTaken: QUESTION_TIMER - timer}] : [{ id: questionId, answer, timeTaken: QUESTION_TIMER - timer}];
        });
    }

    const moveToNextQuestion = () => {
        if (inprogressQuestion === questions.length - 1) {
            setInprogressQuestion(-1);
            verifyAnswers({sessionId: quizSessionId, answers}).then((res: any) => {
                const result = res.data.reduce((acc: number, curr: any) => curr.isCorrect ? acc + 1 : acc, 0);
                setScore(result);
                setDisplayScores(true)
            });
        } else {
            setInprogressQuestion(inprogressQuestion + 1);
        }
    }

    useEffect(() => {
        const userId = Number(localStorage.getItem('userId'));
        const quizTypeId = Number(searchParams.get('quizTypeId'));
        getQuestionsList(userId, quizTypeId).then((res) => {
            setQuestions(res?.data.questions);
            setQuizSessionId(res?.data.sessionId);
        })
    }, [])

    let timerHandler: any;

    useEffect(() => {
        if (timer > 0) {
            timerHandler = setInterval(() => { setTimer(timer - 1)}, 1000)
        }
        
        if (timer <= 0) {
            timeupHandler();
        }
        return () => {
            clearInterval(timerHandler);
        }
    }, [timer])

    const timeupHandler = () => {
        setAnswer(questions[inprogressQuestion]?.id, '');
    } 

    useEffect(() => {
        if (answers.length) {
            moveToNextQuestion();
            clearInterval(timerHandler);
            setTimer(QUESTION_TIMER);
        }
    }, [answers])
    
    return (
        <div>
            {questions?.length && !displayScores && inprogressQuestion >= 0 &&  <Box my={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={4}
                p={2}
            >
                <QuizProgressBar 
                    inprogressQuestion={inprogressQuestion}
                    totalQuestions={questions.length}
                    timer={timer}
                />
                <QuestionForm
                    questionData={questions[inprogressQuestion]}
                    options={questions[inprogressQuestion]?.options.split(',')}
                    setAnswer={(answer: any) => setAnswer(questions[inprogressQuestion]?.id, answer)}
                />
            </Box>}
            {displayScores && <ScoreScreen score={score} totalQuestions={questions.length}/>}
        </div>
    )
} 