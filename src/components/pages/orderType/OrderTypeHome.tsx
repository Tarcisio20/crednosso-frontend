"use client"

import { useEffect, useState } from "react"
import { getOrderTypes } from '@/api/admin'
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"
import { OrderTypeType } from "@/types/OrderTypeType"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { useRouter } from "next/navigation"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderTypeHome =  ({ token, idUser } : Props) => {

    const router = useRouter()

    const [orderTypes, setOrderTypes] = useState<OrderTypeType[] | []>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getAllOrderTypes()
    }, [])

    const getAllOrderTypes = async () => {
        setLoading(true)
        const ot = await getOrderTypes(token as string, idUser as string)
        setOrderTypes(ot.orderTypes)
        setLoading(false)
    }

    const edit = (id : number) => {
        router.push(`/admin/orderType/edit/${id}`)
    }

    return (
        <>
            <TitlePage title="Tipos de Pedido" />
            <ButtonForRedirects label="Adicionar Tipo de Pedido" url="/admin/orderType/add" />
            {!loading && orderTypes.length > 0 &&  (
            <> 
                <div className="p-4 w-full">
                    <table width="100%" className="text-center table-auto border-collapse border rounded">
                        <thead>
                            <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                                <th>ID</th>
                                <th>NOME COMPLETO</th>
                                <th>STAUTS</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                        {!loading && orderTypes.map((item, key)=>(
                        <tr key={key} className="py-2 ">
                            <th>{item.id}</th>
                            <th>{item.name_full}</th>
                            <th>{item.status === true ? 'Ativo' : 'Inativo'}</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="orderType" idElement={"1"} color="cyan" type="edit" onclick={()=>edit(parseInt(item.id))} />
                                <ButtonTableActions label="Excluir" page="orderType" color="red" idElement={"1"} type="del" onclick={()=>{}} />
                            </th>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
            )}
            {!loading && orderTypes.length <= 0 &&   <NothingToShow label="tipo de pedido" />}
        </>
    )
}