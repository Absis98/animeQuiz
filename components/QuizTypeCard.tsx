import { useAppContext } from "@/AppContext";
import { Box } from "@mui/material";

export function QuizTypeCard(props: any) {
    const { quizType } = props;
    const { router } = useAppContext();
    const navigateToQuizPage = () => {
        router.push({pathname: `/quiz/${quizType.quizName}`, query: { quizTypeId: quizType.id}})
    }
    return (
        <Box sx={{
                maxWidth: '360px',
                maxHeight: '140px',
                backgroundColor: 'white',
                margin: '8px',
            }}
            display='flex'
            onClick={navigateToQuizPage}
        >
            <img 
                src={quizType.imageURL}
                alt={quizType.quizName}
                className="login-page-image"
                style={{ width: '40%'}}
            />
            
            <Box sx={{
                margin: '8px 0 0 8px'
            }} display='flex' flexDirection='column' justifyContent='space-between' flexGrow='1'>
                <Box display='flex' flexDirection='column'>
                    <span className="quiz-type-title">{quizType.quizName}</span>
                    <span className="quiz-type-subtitle">{quizType.subText}</span>
                </Box>
                <Box sx={{
                    marginY: '16px'
                }}>Total Attempts: {quizType.totalAttempts}</Box>
            </Box>
        </Box>
    )
}