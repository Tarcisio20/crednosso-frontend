import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { UserAdd } from "@/components/pages/user/UserAdd"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <UserAdd token={session?.userReturn.token || undefined} idUser={session?.userReturn.idUser || undefined} />
}

export default Page