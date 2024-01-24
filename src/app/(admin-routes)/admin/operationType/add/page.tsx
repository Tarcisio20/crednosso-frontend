import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { OperationTypeAdd } from "@/components/pages/operationType/OperationTypeAdd"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)

    return <OperationTypeAdd token={session?.userReturn.token} idUser={session?.userReturn.idUser} />
}

export default Page