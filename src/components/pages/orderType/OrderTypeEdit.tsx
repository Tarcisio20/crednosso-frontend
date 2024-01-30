"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getOrderTypeById, OrderTypeEdited } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { ErrorComponent } from "@/components/admin/ErrorComponent";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderTypeEdit  = ({ token, idUser } : Props) => {

    const params = useParams()
    const router = useRouter()

    const [nameOrderType, setNameOrderType] = useState('')
    const [statusOrderType, setStatusOrderType] = useState('')
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{
        getOrderTypeFunction()
    }, [])

    const getOrderTypeFunction = async () => {
        setLoading(true)
        const ot = await getOrderTypeById(token as string, idUser as string, params.id.toString())
        setNameOrderType(ot.orderType.name_full)
        setStatusOrderType(ot.orderType.status === true ? '1' : '0')
        setLoading(false)
        console.log(ot.orderType)
    }

    const editOrderType = async  ()  => {
        setLoading(true)
        setMsgError('')
        if(nameOrderType !== '' && statusOrderType !== ''){
            const otEdited = await OrderTypeEdited(token as string, idUser as string, params.id.toString(), { name_full : nameOrderType, status : statusOrderType === '1' ? true : false })
            console.log(otEdited)
            if(!otEdited.success){
                router.back()
            }else{
                setMsgError('Erro ao Salvar, tentar novamente mais tarde')
            }
                         
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Editar Tipo de Pedido" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} type="text" value={nameOrderType} onChange={e=>setNameOrderType(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Status</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} value={statusOrderType} onChange={e=>setStatusOrderType(e.target.value)}  >
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Editar Tipo de Pedido" : "Aguarde ...."} color="green" onClick={editOrderType} />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />}
            </div>
        </>
    )
}