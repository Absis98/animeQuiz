import { useUserData } from "@/api/user";
import { Box } from "@mui/material";

export function  UserProfileCard() {
    const userData = useUserData();
    return (
        <Box sx={{
            backgroundColor: 'white'
        }} display='flex'>
            <span>Igm</span>
            <Box display='flex' flexDirection='column'>
                <div>{userData.name}</div>
                <div>{userData.email}</div>
            </Box>
        </Box>
    )
}