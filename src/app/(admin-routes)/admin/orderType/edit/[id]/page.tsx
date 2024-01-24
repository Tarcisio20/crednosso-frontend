import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OrderTypeEdit } from "@/components/pages/orderType/OrderTypeEdit"
import { getServerSession } from "next-auth"

const Page = async() => {
    
    const session = await getServerSession(nextAuthOptions)

    return <OrderTypeEdit token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page