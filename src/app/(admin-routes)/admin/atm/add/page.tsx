"use client"
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"

const Page = () => {
    return(
        <>
            <TitlePage title="Adicionar Atm" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-3 w-1/3 text-center">
                    <label className="uppercase">ID Sistema</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Completo</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome Reduzido</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Transportadora</label>
                    <div className="flex gap-3">
                        <input className="w-20 h-6 rounded outline-none text-gray-900 text-center" />
                        <select className="w-full h-6 outline-none rounded text-gray-900 text-center">
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
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
                            <select className="rounded text-center text-gray-900 outline-none">
                                <option value="10" selected>R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none">
                                <option value="10" >R$ 10,00</option>
                                <option value="20" selected>R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none">
                                <option value="10">R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50" selected>R$ 50,00</option>
                                <option value="100">R$ 100,00</option>
                            </select>
                            <select className="rounded text-center text-gray-900 outline-none">
                                <option value="10">R$ 10,00</option>
                                <option value="20">R$ 20,00</option>
                                <option value="50">R$ 50,00</option>
                                <option value="100" selected>R$ 100,00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Adicionar Atm" color="green" onClick={()=>{}} />
                </div>
            </div>
        </>
    )
}

export default Page