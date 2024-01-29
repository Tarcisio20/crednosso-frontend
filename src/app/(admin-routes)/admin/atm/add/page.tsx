import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { AtmAdd } from "@/components/pages/atm/AtmAdd"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <AtmAdd token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
       
}

export default Page