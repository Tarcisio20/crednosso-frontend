import { useState } from "react";
import { ButtonComuns } from "./ButtonComuns";
import { ErrorComponent } from "./ErrorComponent";
import { alterDateOrder, getOrderById } from "@/api/admin";
import { TransformData } from "@/Utils/TransformData";

type Props = {
    isOpen : boolean;
    token : string;
    idUser : string;
    idElements : String[];
    onClose : () => void;
}

export const ModalRelaunchOrder = ({ isOpen, token, idUser, idElements, onClose } : Props) => {

    const [newDate, setNewDate] = useState('')

    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    const alterDateOrders = async () => {
        setMsgError('')
        setLoading(true)
        if(newDate){
            for(let x = 0; x < idElements.length; x++){
                let o = await getOrderById(token as string, idUser as string, idElements[x].toString())
                console.log(o) 
                let  data = {
                    order_date : TransformData(newDate),
                    observation : o.order[0].observation !=='' ? `RELANÇADO || ${o.order[0].observation}` : "RELANÇADO"
                }
                await alterDateOrder(token as string, idUser as string, idElements[x].toString(), data)
            }
            location.reload()
        }else{
            setMsgError('Preencher a nova data!')
        }  
        
        setLoading(false)
    }

    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative p-8 bg-white rounded-lg w-96 text-black">
                <button className="absolute top-0 right-0 p-2 font-bold" onClick={onClose}>X</button>
                <div className="flex flex-col items-center px-3 gap-4">
                    <div className="uppercase">QUAL SERÁ A DATA DO LANÇAMENTO?</div>
                    <input type="date" className="w-full h-10 outline-none rounded border border-slate-700 text-center" value={newDate} onChange={e=>setNewDate(e.target.value)} />
                </div>
                <div className="flex items-center justify-center mt-3">
                    <ButtonComuns
                        label={!loading ? "Alterar Data" : "Aguarde ..."}
                        color="green"
                        onClick={alterDateOrders}
                        disabled={loading}
                    />
                </div>
                {msgError !== '' && <ErrorComponent label={msgError} /> }
            </div>
        </div>
    )
}