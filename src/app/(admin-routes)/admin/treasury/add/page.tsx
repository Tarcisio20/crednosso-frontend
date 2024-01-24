import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { TreasuryAdd } from "@/components/pages/treasury/TreasuryAdd"
import { getServerSession } from "next-auth"

const Page = async () => {
    
    const session = await getServerSession(nextAuthOptions)
    
    return <TreasuryAdd token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page