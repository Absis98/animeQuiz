import { Box } from "@mui/material";
import { MyProfile } from "./MyProfile";
import { QuizStatistics } from "./QuizStatistics";
import { DiscoverQuiz } from "./DiscoverQuiz";
import { useEffect, useState } from "react";
import { getQuizSessionsForUser } from "@/api/user";
import { userState } from "@/state/atoms";
import { useRecoilState } from "recoil";

export function ProfileContainer() {
    const [quizSessions, setQuizSessions] = useState([]);
    const [userData] = useRecoilState(userState);
    useEffect(() => {
        if (userData.id) {
            getQuizSessionsForUser(userData?.id).then((res) => setQuizSessions(res?.data));
        }
    }, [userData]);
    return(
        <div>
            <Box display='flex'>
                <Box>
                    {quizSessions.length && <MyProfile quizSessions={quizSessions}/>}
                    {quizSessions.length && <QuizStatistics quizSessions={quizSessions}/>}
                </Box>
                <Box>
                    <DiscoverQuiz />
                </Box>

            </Box>
            
            
        </div>
    )
}