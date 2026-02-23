import type { Metadata } from "next";
import './global.css'
import { UserProvider } from "./Context/UserContext";
import { Analytics } from '@vercel/analytics/next';

interface Props{
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "UserHub",
    description: "Hub to add User and view their info",
    keywords: "users, user, hub, saas, nextjs"
}

const RootLayout = (props: Props) => {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                {props.children}
                <Analytics />
            </body>
            </UserProvider>
            
        </html>
    )
}

export default RootLayout;