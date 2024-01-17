import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const getDataSession = async () => {
    const session = await getServerSession(nextAuthOptions)
    return session?.userReturn
}

export default getDataSession