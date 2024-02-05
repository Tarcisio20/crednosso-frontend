"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AddAtm, getAllTreasuries } from "@/api/admin";
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { TreasuryType } from "@/types/TreasuryType";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const AtmAdd = ({ token, idUser } : Props) => {

    const router = useRouter()

    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    const [idTreasury, setIdTreasury] = useState('')
    const [idSystemAtm, setIdSystemAtm] = useState("")
    const [nameAtm, setNameAtm] = useState("")
    const [shortedAtm, setShortedAtm] = useState("")

    const [configA, setConfigA] = useState("10")
    const [configB, setConfigB] = useState("20")
    const [configC, setConfigC] = useState("50")
    const [configD, setConfigD] = useState("100")


    useEffect(() => {
        getTreasuriesFunction()
    }, [])

    const getTreasuriesFunction = async () => {
        setLoading(true)
        const tr = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(tr.treasuries)
        setLoading(false)
    }

    const addAtmFunction = async () => {
        setLoading(true)
        setMsgError('')
        if(idSystemAtm !== '' && nameAtm !== '' && shortedAtm !== '' && configA !== '' && configB !== '' && configC !== '' && configD !== ''){ 
            const at = await AddAtm(token as string, idUser as string, {
                id_system : idSystemAtm,
                name_full : nameAtm,
                shortened_name : shortedAtm,
                id_treasury : idTreasury,
                config_cass_A : configA,
                config_cass_B : configB,
                config_cass_C : configC,
                config_cass_D :configD,
                balance_cass_A : '0',
                balance_cass_B : '0',
                balance_cass_C : '0',
                balance_cass_D : '0',
            })
            console.log(at)
            if(at.error) setMsgError(at.error)
            if(at.success) {
                router.back()
                return
            }else{
                setMsgError(at.error)
            }
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Adicionar Atm" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-3 w-1/3 text-center">
                    <label className="uppercase">ID SISTEMA</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={idSystemAtm} onChange={e=>setIdSystemAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME COMPLETO</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={nameAtm} onChange={e=>setNameAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME REDUZIDO</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={shortedAtm} onChange={e=>setShortedAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">TRANSPORTADORA</label>
                    <div className="flex gap-3">
                        <input className="w-20 h-6 rounded outline-none text-gray-900 text-center" value={idTreasury} onChange={e=>setIdTreasury(e.target.value)} disabled={loading} />
                        <select className="w-full h-6 outline-none rounded text-gray-900 text-center" value={idTreasury} onChange={e=>setIdTreasury(e.target.value)} disabled={loading}  >
                            {treasuries.map((item, key) => (
                                <option key={key} value={item.id_system}>{item.shortened_name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-1/3 text-center mt-3">
                    <label className="text-center uppercase font-bold">CONFIGIRAÇÃO DOS CASSETES</label>
                    <div className="flex items-center gap-6 justify-center">
                        <div className="flex flex-col items-center justify-center  gap-3 w-1/3">
                            <label className="flex items-center">CASSETE A</label>
                            <label className="flex items-center">CASSETE B</label>
                            <label className="flex items-center">CASSETE C</label>
                            <label className="flex items-center justify-center h-full">CASSETE D</label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <select className="rounded text-center text-gray-900 outline-none" value={configA} onChange={e=>setConfigA(e.target.value)} disabled={loading} >
                                <option value="10">R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none" value={configB} onChange={e=>setConfigB(e.target.value)} disabled={loading} >
                                <option value="10" >R$ 10,00</option>
                                <option value="20" >R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none" value={configC} onChange={e=>setConfigC(e.target.value)} disabled={loading} >
                                <option value="10">R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50" >R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none" value={configD} onChange={e=>setConfigD(e.target.value)} disabled={loading} >
                                <option value="10">R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100" >R$ 100,00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Adicionar Atm" : "Aguarde..."} disabled={loading} color="green" onClick={addAtmFunction} />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />}
            </div>
        </>
    )
}
