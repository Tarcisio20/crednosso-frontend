"use client"

import { ButtonOptions } from "@/components/admin/ButtonOptions"
import { Divider } from "@/components/admin/Divider"
import { TitlePage } from "@/components/admin/TitlePage"

const Page = () => {
    return(
        <>
        <div className="flex  flex-col w-full">
            <TitlePage title="Visualização de pedidos" />
            <div className="flex flex-row gap-3 px-4" >
                <div className="flex flex-col  gap-3 w-2/4 p-3">
                    <label className="uppercase font-bold">Data da Pesquisa</label>
                    <div className="flex flex-row items-center gap-3">
                        <input className="outline-none rounded w-50 h-7 text-gray-900 text-center" />
                        <label className="flex items-center font-bold">até</label>
                        <input className="outline-none rounded w-50 h-7 text-gray-900 text-center" />
                        <button className=" bg-yellow-500 inline-block  w-32 px-4 py-2 font-semibold uppercase text-gray-900 rounded hover:bg-yellow-600">Pesquisar</button>
                    </div>     
                </div>
                <div className="w-2/4 p-3 flex gap-2 flex-wrap">
                    <ButtonOptions label="Confirmação Parical" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Confirmação Total" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Gerar Lançamento" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Gerar Pagamento" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Gerar Relatório" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Relançar Lançamento" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Enviar E-mail" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Visualizar" color="yellow" onClick={()=>{}} />
                    <ButtonOptions label="Excluir" color="red" onClick={()=>{}} />
                </div>
            </div>
            <Divider />
            <div className="flex items-center gap-1 px-3">
                <input type="checkbox" className="outline-none h-4 w-4 rounded" />
                <label className="text-xs">Selecionar Tudo</label>
            </div>
            <div className="p-4">
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>X</th>
                            <th>Operação</th>
                            <th>Cod. Origem</th>
                            <th>Transp. Origem</th>
                            <th>Cod. Destino</th>
                            <th>Transp. Destino</th>
                            <th>Data Pedido</th>
                            <th>Valor Pedido</th>
                            <th>Status</th>
                            <th>Valor Realizado</th>
                            <th>Alt. Comp.</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2">
                            <td>
                                <input type="checkbox" id="1" />
                            </td>
                            <td>Retirada Loja</td>
                            <td>1</td>
                            <td>Origem</td>
                            <td>2</td>
                            <td>Destino</td>
                            <td>14/01/2024</td>
                            <td>R$ 100.000,00</td>
                            <td>Pago</td>
                            <td>R$ 80.000,00</td>
                            <td>Sim</td>
                            <td>Aqui vem uma observação</td>
                        </tr>
                        <tr className="py-2 bg-slate-500">
                            <td>
                                <input type="checkbox" id="1" />
                            </td>
                            <td>Retirada Loja</td>
                            <td>1</td>
                            <td>Origem</td>
                            <td>2</td>
                            <td>Destino</td>
                            <td>14/01/2024</td>
                            <td>R$ 100.000,00</td>
                            <td>Pago</td>
                            <td>R$ 80.000,00</td>
                            <td>Sim</td>
                            <td>Aqui vem uma observação</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Page