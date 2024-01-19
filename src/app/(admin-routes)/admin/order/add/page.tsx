"use client"

import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { TitlePage } from "@/components/admin/TitlePage"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import * as apiAdmin from '@/api/admin'

const Page = () => {

    const { data : session, status } = useSession()
    const [orderType, setOrderType] = useState()

    useEffect(()=>{
        getOrderType()
    })

    const getOrderType = async () => {
        const data = await apiAdmin.getAllOrderType(session?.userReturn.token ?? '', session?.userReturn.idUser ?? '') 
        setOrderType(data.orderTypes)
    }
    console.log(orderType)
    return(
        <>
            <TitlePage title="Adicionar Pedido" />
            <ButtonForRedirects label="Visualizar Pedidos" url="/admin/order/view" />
            <div className="flex gap-5 w-4/5 p-5">
                <div className="flex flex-col gap-3 bg-red-600 w-full p-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Tipo de Operação</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">  
                                <option value="0"></option>
                                <option value="1">Valor 1</option>
                                <option value="2">Valor 2</option>
                                <option value="3">Valor 3</option>
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Origem</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">  
                                <option value="0"></option>
                                <option value="1">Valor 1</option>
                                <option value="2">Valor 2</option>
                                <option value="3">Valor 3</option>
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Destino</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">  
                                <option value="0"></option>
                                <option value="1">Valor 1</option>
                                <option value="2">Valor 2</option>
                                <option value="3">Valor 3</option>
                            </select>    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Data Inicio</label>
                        <div className="text-gray-900">
                            <input className="w-40 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />    
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Tipo de Pedido</label>
                        <div className="text-gray-900">
                            <input className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded" />
                            <select className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52">  
                                <option value="0"></option>
                                <option value="1">Valor 1</option>
                                <option value="2">Valor 2</option>
                                <option value="3">Valor 3</option>
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

export default Page