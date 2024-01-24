import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OperationTypeEdit } from "@/components/pages/operationType/OperationTypeEdit"
import { getServerSession } from "next-auth"

const Page = async () => {
    
    const session = await getServerSession(nextAuthOptions)

    return <OperationTypeEdit token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page