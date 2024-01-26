import { getServerSession } from "next-auth"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OrderAdd } from "@/components/pages/order/OrderAdd"

const Page  = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <OrderAdd token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page