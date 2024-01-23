"use client"

import { useState } from "react";
import { addUser } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { TitlePage } from "@/components/admin/TitlePage"
import { useRouter } from "next/navigation";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const UserAdd = ({ token , idUser } : Props) => {

    const router = useRouter()

    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [nivelUser, setNvelUser] = useState('comum')
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    const addUserFunction = async () => {
        setLoading(true)
        setMsgError('')
        if(nameUser !== '' && emailUser !== '' && nivelUser !== '' ){
            console.log("NOME => ", nameUser)
            console.log("email => ", emailUser)
            console.log("NIVEL => ", nivelUser)
            const us = await addUser(token as string, idUser as string, {name : nameUser, email : emailUser, type : nivelUser} )
            if(us.error) setMsgError(us.error)
            if(us.success) router.push('/admin/user')
        }else{
            setMsgError('Favor, preencher todos os campos!')
        }
        setLoading(false)
    } 

    return(
        <>
            <TitlePage title="Adicionar Usuário" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} type="text" value={nameUser} onChange={e=>setNameUser(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">E-mail</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} type="text" value={emailUser} onChange={e=>setEmailUser(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nivel</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} value={nivelUser} onChange={e=>setNvelUser(e.target.value)} >
                        <option value="comum">Comum</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Adicionar Usuário" : "Carregando..."} color="green" onClick={addUserFunction} disabled={loading} />
                </div>
                {!loading && msgError !== '' && 
                    <ErrorComponent label={msgError} />
                }
            </div>
        </>
    )
}