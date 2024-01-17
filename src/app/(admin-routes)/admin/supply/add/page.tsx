import { TitlePage } from "@/components/admin/TitlePage"

const Page = () => {
    return(
        <>
            <TitlePage title="Adicionar Pedido" />
            <div className="flex gap-5 w-4/5 p-5">
                <div className="flex flex-col gap-3 bg-red-600 w-full">
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

                </div>
                <div className="bg-yellow-600 w-full">Lado Esquerdo</div>
            </div>
        </>
    )
}

export default Page