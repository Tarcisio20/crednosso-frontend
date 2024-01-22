"use client"

import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"


const Page = () => {
    return(
        <>
            <TitlePage title="Pedidos" />
            <ButtonForRedirects label="Adicionar Pedido" url="/admin/order/add" />
            <div className="p-4 w-full">
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Lote</th>
                            <th>Data</th>
                            <th>Valor Total</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>12487</th>
                            <th>15/02/2024</th>
                            <th>R$ 500.000,00</th>
                            <th>Aguardando Aprovação</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 bg-slate-500">
                            <th>2</th>
                            <th>12482</th>
                            <th>16/02/2024</th>
                            <th>R$ 250.000,00</th>
                            <th>Recusado</th>
                            <th className="flex justify-center  items-center gap-2" >
                                <ButtonTableActions label="Editar" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Page