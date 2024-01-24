"use client"

import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { useState } from "react";

type Props = {
    token :string | undefined;
    idUser : string | undefined;
}

export const TreasuryAdd = ({ token, idUser } : Props) => {

    const [idSystemTreasury, setIdSystemTreasury] = useState('')
    const [nameTreasury, setNameTreasury] = useState('')
    const [shortNameTreasury, setShortNameTreasury] = useState('')
    const [cassATreasury, setCassATreasury] = useState(0)
    const [cassBTreasury, setCassBTreasury] = useState(0)
    const [cassCTreasury, setCassCTreasury] = useState(0)
    const [cassDTreasury, setCassDTreasury] = useState(0)


    const alterValue = (type: number, value : number) => {
        switch(type){
            case 10:
                
            case 20:
            case 50:
            case 100:
        }
    }

    return(
        <>
            <TitlePage title="Adicionar Tesouraria" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-3 w-1/3 text-center">
                    <label className="uppercase">ID Sistema</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" value={idSystemTreasury} onChange={e=>setIdSystemTreasury(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Completo</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" value={nameTreasury} onChange={e=>setNameTreasury(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Reduzido</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center"  type="text" value={shortNameTreasury} onChange={e=>setShortNameTreasury(e.target.value)} />
                </div>
                
                <div className="flex flex-col gap-2 w-1/3 text-center mt-3">
                    <label className="text-center uppercase font-bold mb-2">Valores dos Cassetes</label>
                    <div className="flex items-center gap-6 justify-center">
                        <div className="flex flex-col items-center justify-center  gap-3 w-2/3">
                            <label className="flex items-center h-8">CASSETE A</label>
                            <label className="flex items-center h-8">CASSETE B</label>
                            <label className="flex items-center h-8">CASSETE C</label>
                            <label className="flex items-center justify-center h-full h-8">CASSETE D</label>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <input 
                                className="rounded text-center text-gray-900 outline-none h-8" 
                                type="number" 
                                value={cassATreasury} 
                                onChange={e=>setCassATreasury(parseInt(e.target.value))}
                            />
                            <input 
                                className="rounded text-center text-gray-900 outline-none h-8"
                                type="number" 
                                value={cassBTreasury} 
                                onChange={e=>setCassBTreasury(parseInt(e.target.value))}
                            />
                            <input
                                className="rounded text-center text-gray-900 outline-none h-8"
                                type="number" 
                                value={cassCTreasury} 
                                onChange={e=>setCassCTreasury(parseInt(e.target.value))}
                            />
                            <input 
                                className="rounded text-center text-gray-900 outline-none h-8"
                                type="number" 
                                value={cassDTreasury} 
                                onChange={e=>setCassDTreasury(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <input className="rounded text-center text-gray-900 outline-none h-8" />
                            <input className="rounded text-center text-gray-900 outline-none h-8" />
                            <input className="rounded text-center text-gray-900 outline-none h-8" />
                            <input className="rounded text-center text-gray-900 outline-none h-8" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4 w-1/3">
                    <label className="uppercase text-2xl w-1/3 text-center">Total</label>
                    <input className="rounded text-center  text-gray-900 outline-none w-full h-8"  />
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Adicionar Tesouraria" color="green" onClick={()=>{}} />
                </div>
            </div>
        </>
    )
}