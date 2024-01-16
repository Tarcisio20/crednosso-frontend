import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogout from "@/components/admin/ButtonLogout"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)


    return(
          <div>Painel Admin Usuario ID : {session?.userReturn.idUser}
            <ButtonLogout />
          </div>

    )
}

export default Page