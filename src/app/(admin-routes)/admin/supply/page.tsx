import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { SupplyHome } from "@/components/pages/supply/SupplyHome"
import { getServerSession } from "next-auth"


const Page = async  () => {

    const session = await getServerSession(nextAuthOptions)

    return <SupplyHome token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}


export default Page