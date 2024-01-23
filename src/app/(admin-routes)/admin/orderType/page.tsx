import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OrderTypeHome } from "@/components/pages/orderType/OrderTypeHome"
import { getServerSession } from "next-auth"


const Page = async  () => {

    const session =  await getServerSession(nextAuthOptions)

    return <OrderTypeHome token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
       
}

export default Page