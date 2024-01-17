import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { TitlePage } from "@/components/admin/TitlePage"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = getServerSession(nextAuthOptions)

    return(
        <>
            <TitlePage title="Tipos de Operações" />
        </>
    )
}

export default Page