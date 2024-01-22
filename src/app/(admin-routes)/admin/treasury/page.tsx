"use client"

import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"


const Page =  () => {


    return (
        <>
            <TitlePage title="Tesourarias" />
            <ButtonForRedirects label="Adicionar Tesouraria" url="/admin/treasury/add" />
            <div className="p-4 w-full">
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Nome Completo</th>
                            <th>Nome Reduzido</th>
                            <th>Saldo R$ 10,00</th>
                            <th>Saldo R$ 20,00</th>
                            <th>Saldo R$ 50,00</th>
                            <th>Saldo R$ 100,00</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>Tesouraria 1</th>
                            <th>Tesouraria Reduzido</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="treasury" idElement={"1"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" page="treasury" color="red" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 ">
                            <th>2</th>
                            <th>Tesouraria 2</th>
                            <th>Tesouraria Reduzido</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="treasury" idElement={"2"} color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" page="treasury" idElement={"2"} color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Page