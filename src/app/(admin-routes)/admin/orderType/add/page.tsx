import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OrderTypeAdd } from "@/components/pages/orderType/OrderTypeAdd"
import { getServerSession } from "next-auth"

const Page = async() => {
    
    const session = await getServerSession(nextAuthOptions)
    
    return <OrderTypeAdd token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page