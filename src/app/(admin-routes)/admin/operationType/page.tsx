import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OperationTypeHome } from "@/components/pages/operationType/OperationTypeHome"
import { getServerSession } from "next-auth"


const Page = async  () => {

    const session =  await getServerSession(nextAuthOptions)

    return <OperationTypeHome token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page