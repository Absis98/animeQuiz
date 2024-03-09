import { Box } from "@mui/material";
import { userState } from '@/state/atoms';
import { useRecoilState } from 'recoil';

export function  UserProfileCard() {
    const [userData] = useRecoilState(userState);
    const initials = userData.name?.split(' ').reduce((acc, curr) => acc + curr[0], '');
    return (
        <Box 
            sx={{
            backgroundColor: 'white',
            padding: '8px'
            }} 
            display='flex'
        >
            <div className="circle">{initials}</div>
            <Box display='flex' flexDirection='column' marginLeft='16px'>
                <div>{userData?.name}</div>
                <div>{userData?.email}</div>
            </Box>
        </Box>
    )
}