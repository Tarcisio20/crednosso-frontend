"use client"

import { useState } from "react";
import { addOrderType } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { TitlePage } from "@/components/admin/TitlePage"
import { useRouter } from "next/navigation";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderTypeAdd = ({ token, idUser } : Props) => {

    const router = useRouter()

    const [nameOrderType, setNameOrderTytpe] = useState('')
    const [msgError, setMsgError] = useState('')
    const [loading, setLoading] = useState(false)

    const addOrderTypeFunction = async () => {
        setMsgError('')
        setLoading(true)
        if(nameOrderType !== ''){
            const ot = await addOrderType(token as string, idUser as string, { name_full : nameOrderType  })
            if(ot.success){
                router.back()
            }else{
                 setMsgError('Erro ao cadastrar')
            }
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Adicionar Tipo de Pedido" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">INFORMAÇÕES GERAIS</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" value={nameOrderType} onChange={e=>setNameOrderTytpe(e.target.value)} />
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Adicionar Tipo de Pedido" : 'Aguarde..'} disabled={loading} color="green" onClick={addOrderTypeFunction} />
                </div>
                {msgError && <ErrorComponent label={msgError} />}
            </div>
        </>
    )
}