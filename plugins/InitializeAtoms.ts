import { useRecoilState } from 'recoil';
import { userState, quizTypesState } from '@/state/atoms';
import { useEffect } from 'react';
import { getQuizList } from '@/api/quizzes';

export function InitializeAtoms() {
    const [userData, setUserData] = useRecoilState(userState);
    const [quizTypes, setQuizTypes] = useRecoilState(quizTypesState);

    useEffect(() => {
        const id = Number(window.localStorage.getItem('userId'));
        const userName: string = window.localStorage.getItem('userName') || '';
        const userEmail: string = window.localStorage.getItem('email') || '';
        setUserData({id: id, name: userName, email: userEmail});

        getQuizList().then((res) => {
            setQuizTypes(res?.data);
        });
    }, [])

    return null;
}