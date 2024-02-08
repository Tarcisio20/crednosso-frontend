import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OrderView } from "@/components/pages/order/OrderView"
import { getServerSession } from "next-auth"

const Page = async () => {
    
    const session = await getServerSession(nextAuthOptions)

    return <OrderView token={session?.userReturn.token} idUser={session?.userReturn.idUser}  />
}

export default Page