import Box from '@mui/material/Box';
import { LoginForm } from "@/components/LoginForm"

export default function LoginPage() {
    return (
        <Box display="flex">
            <Box flex="1" width="100%"> {/* Equivalent to flex-grow w-full */}
                <img 
                src="/download.jpeg" 
                alt="Description of the image"
                className="login-page-image" // You can still use your custom class
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
            <Box flex="1">
                <LoginForm />
            </Box>
        </Box>
    )
}