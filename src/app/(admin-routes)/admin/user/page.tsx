import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { UserHome } from "@/components/pages/user/UserHome"
import { getServerSession } from "next-auth"

const Page = async  () => {

    const session = await getServerSession(nextAuthOptions)

    return <UserHome token={session?.userReturn.token || undefined} idUser={session?.userReturn.idUser || undefined}  />
}

export default Page