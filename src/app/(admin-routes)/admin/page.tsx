import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { AdminHome } from "@/components/pages/admin/AdminHome"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)
    return <AdminHome session={ session?.userReturn } />
}

export default Page