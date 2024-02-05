"use client"

import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal"
import { TransformDataShow } from "@/Utils/TransformDataShow"
import { getOrders } from "@/api/admin"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { TitlePage } from "@/components/admin/TitlePage"
import { OrderType } from "@/types/OrderType"
import { loadStaticPaths } from "next/dist/server/dev/static-paths-worker"
import { useEffect, useState } from "react"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderHome = ({ token, idUser } : Props) => {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<OrderType[] | []>([])
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{
        getOrderFunction()
    }, [])

    const getOrderFunction = async () => {
        setLoading(true)
        const o = await getOrders(token as string, idUser as string)
        setOrders(o.orders)

        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Pedidos" />
            <ButtonForRedirects label="Adicionar Pedido" url="/admin/order/add" />
            <div className="p-4 w-full">
                {!loading && orders.length > 0 &&
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                <thead>
                    <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                        <th>X</th>
                        <th>Operação</th>
                        <th>Cod. Origem</th>
                        <th>Transp. Origem</th>
                        <th>Cod. Destino</th>
                        <th>Transp. Destino</th>
                        <th>Data Pedido</th>
                        <th>Valor Pedido</th>
                        <th>Status</th>
                        <th>Valor Realizado</th>
                        <th>Alt. Comp.</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="py-2">
                        <td>
                            <input type="checkbox" id="1" />
                        </td>
                        <td>Retirada Loja</td>
                        <td>1</td>
                        <td>Origem</td>
                        <td>2</td>
                        <td>Destino</td>
                        <td>14/01/2024</td>
                        <td>R$ 100.000,00</td>
                        <td>Pago</td>
                        <td>R$ 80.000,00</td>
                        <td>Sim</td>
                        <td>Aqui vem uma observação</td>
                    </tr>
                    <tr className="py-2 bg-slate-500">
                        <td>
                            <input type="checkbox" id="1" />
                        </td>
                        <td>Retirada Loja</td>
                        <td>1</td>
                        <td>Origem</td>
                        <td>2</td>
                        <td>Destino</td>
                        <td>14/01/2024</td>
                        <td>R$ 100.000,00</td>
                        <td>Pago</td>
                        <td>R$ 80.000,00</td>
                        <td>Sim</td>
                        <td>Aqui vem uma observação</td>
                    </tr>
                </tbody>
            </table>
                }
                {!loading && orders.length <= 0 && <NothingToShow label="Pedidos" />}
            </div>
        </>
    )
}