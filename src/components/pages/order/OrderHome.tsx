"use client"

import { useEffect, useState } from "react"
import { getAllTreasuries, getOrders } from "@/api/admin"
import { OrderType } from "@/types/OrderType"
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { TitlePage } from "@/components/admin/TitlePage"
import { TreasuryType } from "@/types/TreasuryType"
import { TransformDataShow } from "@/Utils/TransformDataShow"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderHome = ({ token, idUser } : Props) => {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<OrderType[] | []>([])
    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{
        getOrderFunction()
    }, [])

    const getOrderFunction = async () => {
        setLoading(true)
        const o = await getOrders(token as string, idUser as string)
        setOrders(o.orders)
        const t = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(t.treasuries)
        console.log(t.treasuries)
        setLoading(false)
    }

    const returnTreasureForId = (id : number) => {
        for(let i = 0; i < treasuries.length; i++){
            if(parseInt(treasuries[i].id_system) === id){
                return treasuries[i].shortened_name
            }
        }
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
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, key)=>(
                        <tr key={key} className="py-2">
                            <td>
                                <input type="checkbox" id={item.id.toString()} />
                            </td>
                            <td>{item.id_order_type}</td>
                            <td>{item.id_origin_treasury}</td>
                            <td>{returnTreasureForId(item.id_origin_treasury)}</td>
                            <td>{item.id_destiny_treasury}</td>
                            <td>{returnTreasureForId(item.id_destiny_treasury)}</td>
                            <td>{TransformDataShow(item.order_date.toString())}</td>
                            <td>
                            {GenereateTotalValuesCassetesInReal(item.value_requested_10, item.value_requested_20, item.value_requested_50, item.value_requested_100)}
                            </td>
                            <td>{item.id_status_confirmation_order}</td>
                            <td>
                            {item.confirmed === false ? 'R$ 00,00' : GenereateTotalValuesCassetesInReal(item.value_confirmed_10, item.value_confirmed_20, item.value_confirmed_50, item.value_confirmed_100)}
                            </td>    
                            <td>{item.observation}</td>
                        </tr>
                    ))}
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