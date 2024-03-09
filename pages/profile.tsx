import { LeftSection } from "@/components/LeftSection";
import { Box } from "@mui/material";
import { ProfileContainer } from "@/components/Profile/ProfileContainer";

export default function Homepage() {

    return (
            <Box 
                sx={{
                    margin: '16px',
                    backgroundColor: '#ECECEC'
                }}
                height='100vh'
                display='flex'
                flexDirection='row'>
                <LeftSection />
                <ProfileContainer />
            </Box>
    )
}