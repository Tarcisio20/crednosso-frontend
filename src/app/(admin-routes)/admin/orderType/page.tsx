"use client"

import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"


const Page =  () => {


    return (
        <>
            <TitlePage title="Tipos de Pedido" />
            <ButtonForRedirects label="Adicionar Tipo de Pedido" url="/admin/orderType/add" />
            <div className="p-4 w-full">
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Nome Completo</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>Nome do tipo de Pedido</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="orderType" idElement={"1"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Excluir" page="orderType" color="red" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 ">
                            <th>2</th>
                            <th>Nome do tipo de pedido 2</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="orderType" idElement={"2"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Excluir" page="orderType" idElement={"2"} color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Page