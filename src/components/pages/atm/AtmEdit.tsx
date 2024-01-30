"use client"
import { editAtm, getAllTreasuries, getAtmById } from "@/api/admin";
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { TitlePage } from "@/components/admin/TitlePage"
import { TreasuryType } from "@/types/TreasuryType";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const AtmEdit = ({ token, idUser } : Props) => {

    const router = useRouter() 

    const params = useParams()
    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [idSystemAtm, setIdSystemAtm] = useState('')
    const [nameAtm, setNameAtm] = useState('')
    const [shortenedAtm, setShortenedAtm] = useState('')
    const [idTreasury, setIdTreasury] = useState('')
    const [configA, setConfigA] = useState('')
    const [configB, setConfigB] = useState('')
    const [configC, setConfigC] = useState('')
    const [configD, setConfigD] = useState('')
    const [statusAtm, setStatusAtm] = useState('')
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{
        getAtmFunction()
    }, [])

    const getAtmFunction = async () => {
        setLoading(true)
        const at = await getAtmById(token as string, idUser as string, params.id.toString())
        setIdSystemAtm(at.atm.id_system)
        setNameAtm(at.atm.name_full)
        setShortenedAtm(at.atm.shortened_name)
        const t = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(t.treasuries)
        setIdTreasury(at.atm.id_treasury)
        setConfigA(at.atm.config_cass_A)
        setConfigB(at.atm.config_cass_B)
        setConfigC(at.atm.config_cass_C)
        setConfigD(at.atm.config_cass_D)
        setStatusAtm(at.atm.status === true ? '1' : '0')
        setLoading(false)
    }

    const editAtmFucntion = async () => {
        if(idSystemAtm !== '' && nameAtm !== '' && shortenedAtm !== '' && idTreasury !== '' && configA !== '' && configB !== '' && configC !== '' && configD !== '' && statusAtm !== ''){
            
            const data = {
                id_system : idSystemAtm.toString(),
                name_full : nameAtm,
                shortened_name : shortenedAtm,
                id_treasury :  idTreasury.toString(),
                config_cass_A : configA.toString(),
                config_cass_B : configB.toString(),
                config_cass_C : configC.toString(),
                config_cass_D : configD.toString(),
                status : statusAtm.toString()
            }
            const editedAtm = await editAtm(token as string, idUser as string, params.id.toString(), data)
            console.log(editedAtm)
            if(editedAtm.error) setMsgError(editedAtm.error)
            if(editedAtm.success){
                router.back()
            }else{
                setMsgError(editedAtm.error)
            }
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }
    }

    return(
        <>
            <TitlePage title="Editar Atm " />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-3 w-1/3 text-center">
                    <label className="uppercase">ID Sistema</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={idSystemAtm} onChange={e=>setIdSystemAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Completo</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={nameAtm} onChange={e=>setNameAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Reduzido</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" value={shortenedAtm} onChange={e=>setShortenedAtm(e.target.value)} disabled={loading} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Transportadora</label>
                    <div className="flex gap-3">
                        <input className="w-20 h-6 rounded outline-none text-gray-900 text-center" value={idTreasury} onChange={e=>setIdTreasury(e.target.value)} disabled={loading} />
                        <select className="w-full h-6 outline-none rounded text-gray-900 text-center" value={idTreasury} onChange={e=>setIdTreasury(e.target.value)} disabled={loading}>
                          {treasuries.map((item, key)=>(
                            <option key={key} value={item.id_system} >{item.shortened_name}</option>
                          ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-1/3 text-center mt-3">
                    <label className="text-center uppercase font-bold">Configuração dos Cassetes</label>
                    <div className="flex items-center gap-6 justify-center">
                        <div className="flex flex-col items-center justify-center  gap-3 w-1/3">
                            <label className="flex items-center">CASSETE A</label>
                            <label className="flex items-center">CASSETE B</label>
                            <label className="flex items-center">CASSETE C</label>
                            <label className="flex items-center justify-center h-full">CASSETE D</label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <select className="rounded text-center text-gray-900 outline-none" value={configA} onChange={e=>setConfigA(e.target.value)} disabled={loading}>
                                <option value="10" >R$ 10,00</option>
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
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Status</label>
                    <select  className="h-6 rounded outline-none text-gray-900 text-center" value={statusAtm} onChange={e=>setStatusAtm(e.target.value)} disabled={loading} >
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Editar Atm" : 'Aguarde...'} disabled={loading} color="green" onClick={editAtmFucntion} />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />}
            </div>
        </>
    )
}