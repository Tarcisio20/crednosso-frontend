"use client"

import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"

const Page = () => {
    return(
        <>
            <TitlePage title="Adicionar Usuário" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">E-mail</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nivel</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" >
                        <option value="comum">Comum</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Adicionar Usuário" color="green" onClick={()=>{}} />
                </div>
            </div>
        </>
    )
}

export default Page