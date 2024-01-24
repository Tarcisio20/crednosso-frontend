import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { TreasuryHome } from "@/components/pages/treasury/TreasuryHome"
import { getServerSession } from "next-auth"


const Page = async  () => {

    const session = await getServerSession(nextAuthOptions)

    return <TreasuryHome token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page