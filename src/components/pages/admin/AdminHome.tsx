"use client"

import { TitlePage } from "@/components/admin/TitlePage"
import { useSession } from "next-auth/react"

type Props = {
  session : {
    idUser : number;
    name : string;
    last_login : string;
    token : string;
    nivel : string;
  }
}

export const AdminHome = ( { session } : Props) => {
    
    return (
        <>
            <TitlePage title="Pagina Inicial" />
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-xl">
              Seja bem vindo, {session.name}!
            </p>
            <p>Aqui está algumas informações sobre você</p>
            <p>Nivel de permissão: {session.nivel}</p>
            <p>Ultimo acesso em {session.last_login}</p>
          </div>
        </>
    )
}