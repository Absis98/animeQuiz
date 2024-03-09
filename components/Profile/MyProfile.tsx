import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { userState, quizTypesState } from "@/state/atoms";
import { useRecoilState } from "recoil";
import { getMostParticipatedQuiz } from './Utils';

export function MyProfile(props: any) {

    const [userData] = useRecoilState(userState);
    const [quizTypes] = useRecoilState(quizTypesState);
    const [quizTypeWithMaxSessions, setQuizTypeWithMaxSessions] = useState('');
    
    const initials = userData.name?.split(' ').reduce((acc, curr) => acc + curr[0], '');
    const quizCount = props.quizSessions?.length;
    let categoriesExplored;

    useEffect(() => {
        if (quizTypes.length) {
            const data = getMostParticipatedQuiz(props.quizSessions, quizTypes);
            setQuizTypeWithMaxSessions(data.typeWithMaxCount);
            categoriesExplored = data.categoriesExplored;
        }
    }, [quizTypes])

    const profileStats = [
        {title: 'Popular Anime', value: quizTypeWithMaxSessions},
        {title: 'Quiz Participated', value: quizCount}
    ];

    return (
        <Box 
            display='flex' 
            margin='16px 0 0 16px'
            sx={{
                backgroundColor:'white',
                padding: '16px'
            }}
        >
            <Box className="circle" width='60px' height='60px'>{initials}</Box>
            <Box display='flex' flexDirection='column' justifyContent='center' marginLeft='16px'>
                <Box fontSize='1.5rem'>{userData.name}</Box>
                <Box fontSize='1.2rem'>{userData.email}</Box>
                <Box display='flex'>{profileStats.map((stat) => 
                    <Box 
                        key={stat.title}
                        sx={{
                            padding: '16px',
                            marginX:'8px', 
                            marginTop:'16px',
                            boxShadow: '1px 1px 1px 1px grey',
                            backgroundColor: 'pink'

                        }}>
                        <Box 
                            sx={{
                                boxShadow: '2px 2px 2px 2px grey',
                                padding: '8px',
                                backgroundColor:'white'
                            }}    
                        >
                            <div>{stat.value}</div>
                            <div>{stat.title}</div>
                        </Box>
                    </Box>)}
                </Box>
            </Box>
        </Box>
    )
}