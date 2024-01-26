"use client"

import { useEffect, useState } from "react"
import { getAllOperationType, getAllTreasuries, getOrderTypes } from '@/api/admin'
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { TitlePage } from "@/components/admin/TitlePage"
import { OrderTypeType } from "@/types/OrderTypeType"
import { OperationTypeType } from "@/types/OperationTypeType"
import { TreasuryType } from "@/types/TreasuryType"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderAdd = ({ token, idUser } : Props) => {

    const [orderTypes, setOrderTypes] = useState<OrderTypeType[] | []>([])
    const [operationTypes, setOperationTypes] = useState<OperationTypeType[] | []>([])
    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])

    const [idOperationType, setIdOperationType] = useState('')
    const [idOrderType, setIdOrderType] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getAllItemsForScreen()
    }, [])

    const getAllItemsForScreen = async () => {
        setLoading(true)
        const orderT = await getOrderTypes(token as string, idUser as string)
        setOrderTypes(orderT.orderTypes)
        const operationT = await getAllOperationType(token as string, idUser as string)
        setOperationTypes(operationT.operationType)
        const t = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(t.atms)
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Adicionar Pedido" />
            <ButtonForRedirects label="Visualizar Pedidos" url="/admin/order/view" />
            <div className="flex gap-5 w-4/5 p-5">
                <div className="flex flex-col gap-3 bg-red-600 w-full p-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Tipo de Operação</label>
                        <div className="text-gray-900">
                            <input
                                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                                type="text"
                                value={idOperationType}
                                onChange={e=>setIdOperationType(e.target.value)}
                            />
                            <select
                                className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52" 
                                value={idOperationType} 
                                onChange={e=>setIdOperationType(e.target.value)}
                            >
                                <option value=""></option>
                                {!loading && operationTypes.map((item, key)=>(
                                    <option key={key} value={item.id}>{item.name_full}</option>
                                ))}
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Origem</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">
                                <option value=""></option>
                                {!loading && treasuries.map((item, key)=>(
                                    <option key={key} value={item.id}>{item.id_system} - {item.name_full}</option>    
                                ))}
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Destino</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">
                                <option value=""></option>
                                {!loading && treasuries.map((item, key)=>(
                                    <option key={key} value={item.id}>{item.id_system} - {item.name_full}</option>    
                                ))} 
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Data Inicio</label>
                        <div className="text-gray-900">
                            <input className="w-40 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" type="date" />    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Tipo de Pedido</label>
                        <div className="text-gray-900">
                            <input
                                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                                type="text"
                                value={idOrderType}
                                onChange={e=>setIdOrderType(e.target.value)}
                            />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52" value={idOrderType} onChange={e=>setIdOrderType(e.target.value)} >
                                {!loading && orderTypes.map((item, key)=>(
                                    <option key={key} value={item.id} >{item.name_full}</option>
                                ))}
                            </select>    
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-2 bg-yellow-600 w-full p-5">
                    <label className="flex justify-center text-center font-bold uppercase text-gray-900 text-xl">Composição</label>
                    <div className="flex w-full justify-between px-3 h-full gap-2">
                      <div className=" w-1/3 flex flex-col gap-4 text-center">
                        <label className="uppercase text-gray-900 font-bold">CEDULA</label>
                        <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">R$ 10,00</label>
                        <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">R$ 20,00</label>
                        <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">R$ 50,00</label>
                        <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">R$ 100,00</label>
                      </div>
                      <div className=" w-1/3 flex flex-col gap-4 text-center items-center">
                        <label className="uppercase text-gray-900 font-bold ">QUANTIDADE</label>
                        <input className="w-20 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-20 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-20 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-20 h-6 text-gray-900 text-center outline-none rounded" />
                      </div>
                      <div className=" w-1/3 flex flex-col gap-4 text-center items-center">
                        <label className="uppercase text-gray-900 font-bold">VALOR</label>
                        <input className="w-11/12 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-11/12 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-11/12 h-6 text-gray-900 text-center outline-none rounded" />
                        <input className="w-11/12 h-6 text-gray-900 text-center outline-none rounded" />
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end px-3">
                        <label className="uppercase text-gray-900 font-bold flex items-center">TOTAL</label>
                        <input className="h-6 rounded w-1/2" />
                    </div>
                </div>
            </div>
        </>
    )
}