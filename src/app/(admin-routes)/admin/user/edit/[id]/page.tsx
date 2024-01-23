import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { UserEdit } from "@/components/pages/user/UserEdit"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <UserEdit token={session?.userReturn.token || undefined} idUser={session?.userReturn.idUser || undefined} />
}

export default Page