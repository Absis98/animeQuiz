import { useAppContext } from "@/AppContext";
import { getQuestionsList, verifyAnswers } from "@/api/questions"
import { QuestionForm } from "@/components/QuizPage/QuestionForm";
import { QuizProgressBar } from "@/components/QuizPage/QuizProgressBar";
import ScoreScreen from "@/pages/quizpage/scorescreen";
import { Box } from "@mui/material";
import { useEffect, useState } from "react"

export default function QuizQuestions() {
    
    const [questions, setQuestions] = useState([] as any[]);
    const [inprogressQuestion, setInprogressQuestion] = useState(0);
    const [answers, setAnswers] = useState([] as any[]);
    const [timer, setTimer] = useState(20);
    const [quizSessionId, setQuizSessionId] = useState(null);
    const [score, setScore] = useState(null);

    const setAnswer = (questionId: number, answer: string) => {
        setAnswers((value) => {
            return value.length ? [...value, { id: questionId, answer, timeTaken: 20 - timer}] : [{ id: questionId, answer, timeTaken: 20 - timer}];
        });
    }

    const moveToNextQuestion = () => {
        if (inprogressQuestion === questions.length - 1) {
            setInprogressQuestion(-1);
            verifyAnswers({sessionId: quizSessionId, answers}).then((res: any) => {
                const result = res.data.reduce((acc, curr) => curr.isCorrect ? acc + 1 : acc);
                setScore(result);
                // router.push({pathname: '/quizpage/scorescreen'})
            });
        } else {
            setInprogressQuestion(inprogressQuestion + 1);
        }
    }

    useEffect(() => {
        getQuestionsList().then((res) => {
            setQuestions(res?.data.questions);
            setQuizSessionId(res?.data.sessionId);
        })

        return () => {
            console.log('unmounted')
        }
    }, [])

    let timerHandler: any;
    useEffect(() => {
        if (timer > 0) {
            timerHandler = setInterval(() => { setTimer(timer - 1)}, 1000)
        }
        
        if (timer <= 0) {
            setTimer(20);
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
            setTimer(20);
        }
    }, [answers])
    
    return (
        <div>
            {questions?.length && inprogressQuestion >= 0 &&  <Box my={4}
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
            <ScoreScreen />
        </div>
    )
} 