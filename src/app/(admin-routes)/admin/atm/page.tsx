import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { AtmHome } from "@/components/pages/atm/AtmHome"
import { getServerSession } from "next-auth"

const Page = async () => {
    
    const session = await getServerSession(nextAuthOptions)
    
    return <AtmHome token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
} 

export default Page