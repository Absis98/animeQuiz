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
            {/* <script src="https://accounts.google.com/gsi/client" async></script>
            <div id="g_id_onload"
                data-client_id="156069020952-i5vdmutpj4rirtbo7b64g13i09jvr1te.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000"
                data-auto_prompt="false">
            </div>

            <div className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div> */}
                <LoginForm />
            </Box>
        </Box>
    )
}