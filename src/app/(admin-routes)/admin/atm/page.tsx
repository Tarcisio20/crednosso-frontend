import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { AtmHome } from "@/components/pages/atm/AtmHome"
import { getServerSession } from "next-auth"

const Page = async () => {
    
    const session = getServerSession(nextAuthOptions)
    
    return <AtmHome />
} 

export default Page