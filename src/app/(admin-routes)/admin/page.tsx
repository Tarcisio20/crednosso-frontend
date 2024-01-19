import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { TitlePage } from "@/components/admin/TitlePage"
import { getServerSession } from "next-auth"

const Page = async () => {

    const session = await getServerSession(nextAuthOptions)
    console.log(session)
    return(
      <>
          <TitlePage title="Pagina Inicial" />
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-xl">
              Seja bem vindo, {session?.userReturn.name}!
            </p>
            <p>Aqui está algumas informações sobre você</p>
            <p>Nivel de permissão: {session?.userReturn.nivel}</p>
            <p>Ultimo acesso em {session?.userReturn.last_login}</p>
          </div>
      </>
    )
}

export default Page