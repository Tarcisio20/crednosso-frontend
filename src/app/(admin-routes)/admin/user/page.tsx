"use client"

import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"


const Page =  () => {


    return (
        <>
            <TitlePage title="Usuários" />
            <ButtonForRedirects label="Adicionar Usuário" url="/admin/user/add" />
            <div className="p-4 w-full">
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Nome Completo</th>
                            <th>E-mail</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>Nome do usuario</th>
                            <th>email@email.com.br</th>
                            <th>admin</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="user" idElement={"1"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Excluir" page="user" color="red" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 ">
                            <th>2</th>
                            <th>Nome do usuario</th>
                            <th>email2@email.com</th>
                            <th>comum</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="user" idElement={"2"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Excluir" page="user" idElement={"2"} color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Page