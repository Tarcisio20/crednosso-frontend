"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { editOrderForConfirmationTotal, getAllOperationType, getAllTreasuries, getConfirmatioOrders, getOrderById, getOrders } from "@/api/admin"
import { OrderType } from "@/types/OrderType"
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { TitlePage } from "@/components/admin/TitlePage"
import { TreasuryType } from "@/types/TreasuryType"
import { TransformDataShow } from "@/Utils/TransformDataShow"
import { Divider } from "@/components/admin/Divider"
import { ButtonOptions } from "@/components/admin/ButtonOptions"
import { OperationTypeType } from "@/types/OperationTypeType"
import { ModalConfirmationPartial } from "@/components/admin/ModalConfirmationPartial"
import { ErrorComponent } from "@/components/admin/ErrorComponent"
import { useRouter } from "next/navigation"
import { ConfirmationOrderType } from "@/types/ConfirmationOrderType"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OrderHome = ({ token, idUser } : Props) => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<OrderType[] | []>([])
    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [operationType, setOperationType] = useState<OperationTypeType[] | []>([])
    const [confirmationOrders, setConfirmationOrders] = useState<ConfirmationOrderType[] | []>([])
    const [msgError, setMsgError] = useState('')
    const [inptusCheckeds, setInputsCheckeds] = useState<string[]>([])

    const [openModal, setOpenModal] = useState(false)

    useEffect(()=>{
        getOrderFunction()
    }, [])

    const getOrderFunction = async () => {
        setMsgError('')
        setLoading(true)
        const o = await getOrders(token as string, idUser as string)
        setOrders(o.orders)
        const t = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(t.treasuries)
        const ot = await getAllOperationType(token as string, idUser as string)
        setOperationType(ot.operationType)
        const c = await getConfirmatioOrders(token as string, idUser as string)
        setConfirmationOrders(c.confirmationTypes)
        setLoading(false)
    }

    const returnTreasureForId = (id : number) => {
        for(let i = 0; i < treasuries.length; i++){
            if(parseInt(treasuries[i].id_system) === id){
                return treasuries[i].shortened_name
            }
        }
    } 

    const returnOperationTypeForId = (id : number) => {
        for(let i = 0; i < operationType.length; i++){
            if(parseInt(operationType[i].id) === id){
                return operationType[i].name_full
            }
        }
    }

    const returnConfirmationOrderForId = (id : number) => {
        for(let i = 0; i < confirmationOrders.length; i++){
            if(parseInt(confirmationOrders[i].id) === id){
                return confirmationOrders[i].name_full
            }
        }
    }
    
    const toggleInputs = (event : ChangeEvent<HTMLInputElement>) => {
        const idInput = event.target.value
        if(event.target.checked){
            setInputsCheckeds([...inptusCheckeds, idInput])
        }else{
            setInputsCheckeds(inptusCheckeds.filter((item) => item !== idInput))
        }
        
    }

    const openModalFunction = () => {
        if(inptusCheckeds.length > 0){
            setOpenModal(true)
        }else if(inptusCheckeds.length > 1){
            setMsgError('Favor, Selecionar apenas um Pedido para editar')
        }else{
            setMsgError('Favor, Selecionar um Pedido para editar')
        }
    }

    const closeModalFunction = () => {
        setOpenModal(false)
    }

    const confirmationTotalFunction = async () => {
        setMsgError('')
        setLoading(true)
        if(inptusCheckeds.length > 0){
            for(let i = 0; i < inptusCheckeds.length; i++){
                let o = await getOrderById(token as string, idUser as string, inptusCheckeds[i])
                let data = {
                    value_confirmed_10 : o.order[0].value_requested_10.toString(),
                    value_confirmed_20 : o.order[0].value_requested_20.toString(),
                    value_confirmed_50 : o.order[0].value_requested_50.toString(),
                    value_confirmed_100 : o.order[0].value_requested_100.toString(),
                    id_status_confirmation_order : '2'.toString(),
                    confirmed : true,
                }
                let or = await editOrderForConfirmationTotal(token as string, idUser as string, inptusCheckeds[i], data)
            } 
            location.reload()
        }else{
            setMsgError('Favor selecionar algum pedido para proseguir')
        }
        setLoading(false)
    }

    const viewOrder = () => {
        setMsgError('')
        setLoading(true)
        if(inptusCheckeds.length == 1){
            router.push(`order/view/${inptusCheckeds[0]}`)
        }else{
            setMsgError("Selecionar 1 pedido para Visualizar")
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Pedidos" />
            <ButtonForRedirects label="Adicionar Pedido" url="/admin/order/add" />
            <Divider />
            <div className="flex justify-between items-between p-1 w-full mx-4 gap-10">
                <div className="flex flex-col text-center gap-2">
                    <label>Pesquisar</label>
                    <div className="flex gap-4">
                        <input type="date" className="rounded h-7 text-slate-600 text-center" disabled={loading} />
                        <label>até</label>
                        <input type="date" className="rounded h-7 text-slate-600 text-center" disabled={loading} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <ButtonOptions label="Confirmação Parical" color="yellow" disabled={loading} onClick={openModalFunction}  />
                    <ButtonOptions label="Confirmação Total" color="yellow" disabled={loading} onClick={confirmationTotalFunction} />
                    <ButtonOptions label="Gerar Lançamento" color="yellow" disabled={loading} onClick={()=>{}} />
                    <ButtonOptions label="Gerar Pagamento" color="yellow" disabled={loading} onClick={()=>{}} />
                    <ButtonOptions label="Gerar Relatório" color="yellow" disabled={loading} onClick={()=>{}} />
                    <ButtonOptions label="Relançar Lançamento" color="yellow" disabled={loading} onClick={()=>{}} />
                    <ButtonOptions label="Enviar E-mail" color="yellow" disabled={loading} onClick={()=>{}} />
                    <ButtonOptions label="Visualizar Pedido" color="yellow" disabled={loading} onClick={viewOrder} />
                    <ButtonOptions label="Excluir Pedido" color="red" disabled={loading} onClick={()=>{}} />
                </div>
            </div>
            <div className="p-4 w-full">
                {!loading && orders.length > 0 &&
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                <thead>
                    <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                        <th>X</th>
                        <th>Id</th>
                        <th>Operação</th>
                        <th>C. Origem</th>
                        <th>T. Origem</th>
                        <th>C. Destino</th>
                        <th>T. Destino</th>
                        <th>Data Pedido</th>
                        <th>Valor Pedido</th>
                        <th>Status</th>
                        <th>Vl. Realizado</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, key)=>(
                        <tr key={key} className="py-2">
                            <td>
                                <input type="checkbox" id={item.id.toString()} value={item.id}  onChange={toggleInputs} />
                            </td>
                            <td>{item.id}</td>
                            <td>{returnOperationTypeForId(item.id_operation_type)}</td>
                            <td>{item.id_origin_treasury}</td>
                            <td>{returnTreasureForId(item.id_origin_treasury)}</td>
                            <td>{item.id_destiny_treasury}</td>
                            <td>{returnTreasureForId(item.id_destiny_treasury)}</td>
                            <td>{TransformDataShow(item.order_date.toString())}</td>
                            <td>
                            {GenereateTotalValuesCassetesInReal(item.value_requested_10, item.value_requested_20, item.value_requested_50, item.value_requested_100)}
                            </td>
                            <td>{returnConfirmationOrderForId(item.id_status_confirmation_order)}</td>
                            <td>
                            {item.confirmed === false ? 'R$ 00,00' : GenereateTotalValuesCassetesInReal(item.value_confirmed_10, item.value_confirmed_20, item.value_confirmed_50, item.value_confirmed_100)}
                            </td>    
                        </tr>
                    ))}
                </tbody>
            </table>
                }
                {!loading && orders.length <= 0 && <NothingToShow label="Pedidos" />}
            </div>
            {openModal && <ModalConfirmationPartial isOpen={openModal} token={token as string} idUser={idUser as string} idElement={inptusCheckeds[0]} onClose={closeModalFunction} />}
            {!loading && msgError !== '' && <ErrorComponent  label={msgError}  />}
        </>
    )
}