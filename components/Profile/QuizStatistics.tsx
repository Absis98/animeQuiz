import { quizTypesState } from "@/state/atoms";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getMostParticipatedQuiz } from "./Utils";
import { IoMdList } from "react-icons/io";
import { FaWpexplorer } from "react-icons/fa";

export function QuizStatistics(props: any) {
    
    const [quizTypes] = useRecoilState(quizTypesState);
    const [categoriesExplored, setCategoriesExplored] = useState(null as any);
    useEffect(() => {
        if (quizTypes.length) {
            const data = getMostParticipatedQuiz(props.quizSessions, quizTypes);
            const categoriesExplored = data.categoriesExplored.length;
            setCategoriesExplored(categoriesExplored);
        }
    }, [quizTypes])

    const statCards = [
        {title: 'Quiz Participated', value: props.quizSessions.length, icon: IoMdList}, 
        {title: 'Categories Explored', value: categoriesExplored, icon: FaWpexplorer}
    ]
    return (
        <Box marginTop='24px' marginLeft='16px'>
            <Box fontSize='1.7rem' marginLeft='24px'>Quiz Statistics</Box>
            <Box display='flex' marginTop='16px'>
                {statCards.map((stat) => 
                <Box 
                    key={stat.title} 
                    display='flex' 
                    flexDirection='column'
                    sx={{
                        padding: '4px',
                        width: 'fit-content',
                        backgroundColor: 'white',
                        marginX: '8px'
                    }}
                >
                    <Box marginX={"auto"} marginY={"8px"}><stat.icon size={50}/></Box>
                    <span>{stat.title}</span>
                    <Box marginX={"auto"}>{stat.value}</Box>
                </Box>
                )}
            </Box>
        </Box>
    )
}