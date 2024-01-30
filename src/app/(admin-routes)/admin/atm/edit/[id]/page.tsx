import { getServerSession } from "next-auth"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { AtmEdit } from "@/components/pages/atm/AtmEdit"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <AtmEdit token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page