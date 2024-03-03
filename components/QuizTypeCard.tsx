import { useAppContext } from "@/AppContext";
import { Box } from "@mui/material";

export function QuizTypeCard(props: any) {
    const { quizType } = props;
    const { router } = useAppContext();
    const navigateToQuizPage = () => {
        router.push({pathname: '/quizpage', query: { quizName: quizType.title}})
    }
    return (
        <Box sx={{
            maxWidth: '240px',
            maxHeight: '140px',
            backgroundColor: 'white',
            padding: '4px',
            margin: '8px',
            }}
            display='flex'
            onClick={navigateToQuizPage}
        >
            <img 
                src="/download.jpeg" 
                alt="Description of the image"
                className="login-page-image" // You can still use your custom class
                style={{ width: '50%'}}
            />
            
            <Box display='flex' flexDirection='column'>
                <span>{quizType.title}</span>
                <span>{quizType.subtitle}</span>
            </Box>
        </Box>
    )
}