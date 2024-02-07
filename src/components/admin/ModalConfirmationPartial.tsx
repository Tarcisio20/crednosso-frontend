import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal";
import { editOrderForConfirmationPartial, getOrderById, getTreasuryById } from "@/api/admin";
import { OrderType } from "@/types/OrderType";
import { TreasuryType } from "@/types/TreasuryType";
import { useEffect, useState } from "react";
import { Divider } from "./Divider";
import { GenereateIndividualValuesCassetesInReal } from "@/Utils/GenereateIndividualValuesCassetesInReal";
import { ButtonComuns } from "./ButtonComuns";
import { ErrorComponent } from "./ErrorComponent";

type Props = {
    isOpen : boolean;
    token : string;
    idUser : string;
    idElement : string;
    onClose : () => void;
}

export const ModalConfirmationPartial = ({isOpen, token, idUser, idElement, onClose} : Props) => {
    if(!isOpen) return null;
    
    const [order, setOrder] = useState<OrderType | []>([])
    const [treasury, setTreasury] = useState<TreasuryType | []>([])
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    const [cassA, setCassA] = useState(0)
    const [cassB, setCassB] = useState(0)
    const [cassC, setCassC] = useState(0)
    const [cassD, setCassD] = useState(0)

    const [cassAShow, setCassAShow] = useState("R$ 0,0")
    const [cassBShow, setCassBShow] = useState("R$ 0,0")
    const [cassCShow, setCassCShow] = useState("R$ 0,0")
    const [cassDShow, setCassDShow] = useState("R$ 0,0")

    const [cassTotalShow, setCassTotalShow] = useState("R$ 0,0")

    useEffect(()=>{
        getElementsFunction()
    }, [])

    useEffect(() => {
        setCassTotalShow(
          GenereateTotalValuesCassetesInReal(
            cassA,
            cassB,
            cassC,
            cassD
          )
        );
      }, [cassA, cassB, cassC, cassD]);

    const getElementsFunction = async () => {
        setLoading(true)
        const o = await getOrderById(token, idUser, idElement)
        setOrder(o.order[0])
        const t = await getTreasuryById(token, idUser, o.order[0].id_origin_treasury)
        setTreasury(t.treasury[0])
        setLoading(false)
    }

    const alterValue = (type: number, value: number) => {
        if (value < 0) value = 0;

        switch (type) {
          case 10:
            setCassA(value);
            setCassAShow(
              GenereateIndividualValuesCassetesInReal(type, value)
            );
            break;
          case 20:
            setCassB(value);
            setCassBShow(
              GenereateIndividualValuesCassetesInReal(type, value)
            );
            break;
          case 50:
            setCassC(value);
            setCassCShow(
              GenereateIndividualValuesCassetesInReal(type, value)
            );
            break;
          case 100:
            setCassD(value);
            setCassDShow(
              GenereateIndividualValuesCassetesInReal(type, value)
            );
        }
      };

    const alterValues = async () => {
        setMsgError('')
        setLoading(true)
        const oldValue = (order.value_requested_10 * 10) + (order.value_requested_20 * 20) + (order.value_requested_50 * 50) + (order.value_requested_100 * 100)
        const newValue = (cassA * 10) + (cassB * 20) + (cassC * 50) + (cassD * 100)
        console.log("Cheguei na função")
        if(newValue <= oldValue){
            const data = {
                value_confirmed_10 : cassA.toString(),
                value_confirmed_20 : cassB.toString(),
                value_confirmed_50 : cassC.toString(),
                value_confirmed_100 : cassD.toString(),
                id_status_confirmation_order : '3',
                confirmed : true,
            }
            console.log("Cheguei na função e no if")
            console.log(data)
            const o = await editOrderForConfirmationPartial(token as string, idUser as string, idElement, data)
        }else{
            setMsgError('O novo valor tem que ser menor ou igual ao pedido antigo')
        }
        setLoading(false)
    }
    
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative p-8 bg-white rounded-lg w-96 text-black">
            <button className="absolute top-0 right-0 p-2 font-bold" onClick={onClose}>X</button>
            <div>
                <div>
                    <div>ID : {order.id}</div>
                    <div>TRANSPORTADORA : {treasury.shortened_name}</div>
                    <div>VALOR ATUAL: {GenereateTotalValuesCassetesInReal(order.value_requested_10, order.value_requested_20, order.value_requested_10, order.value_requested_100)}</div>
                </div>
                <Divider />
                <div>
                <div className="flex items-center gap-2 justify-center">
                    <div className="flex flex-col items-center justify-center  gap-3 w-24">
                        <label className="flex items-center h-8">CASSETE A</label>
                        <label className="flex items-center h-8">CASSETE B</label>
                        <label className="flex items-center h-8">CASSETE C</label>
                        <label className="flex items-center justify-center h-full h-8">
                            CASSETE D
                        </label>
                    </div>
                    <div className="flex flex-col gap-3 w-24  ">
                        <input
                            className="rounded text-center text-gray-900 outline-none h-8 border border-slate-600"
                            type="number"
                            value={cassA}
                            onChange={(e) => alterValue(10, parseInt(e.target.value))}
                            disabled={loading}
                        />
                        <input
                            className="rounded text-center text-gray-900 outline-none h-8 border border-slate-600"
                            type="number"
                            value={cassB}
                            onChange={(e) => alterValue(20, parseInt(e.target.value))}
                            disabled={loading}
                        />
                        <input
                            className="rounded text-center text-gray-900 outline-none h-8 border border-slate-600"
                            type="number"
                            value={cassC}
                            onChange={(e) => alterValue(50, parseInt(e.target.value))}
                            disabled={loading}
                        />
                        <input
                            className="rounded text-center text-gray-900 outline-none h-8 border border-slate-600"
                            type="number"
                            value={cassD}
                            onChange={(e) => alterValue(100, parseInt(e.target.value))}
                            disabled={loading}
                        />
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                            {cassAShow}
                        </div>

                        <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                            {cassBShow}
                        </div>
                        <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                            {cassCShow}
                        </div>
                        <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                            {cassDShow}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4 ">
                    <label className="uppercase text-lg w-1/3 text-center">Total</label>
                    <div className="flex justify-center items-center font-bold rounded text-center  text-gray-900 outline-none w-full h-8 bg-slate-400">
                        {cassTotalShow}
                    </div>
                </div>
                <div className="flex items-center justify-center mt-3">
                    <ButtonComuns
                        label={!loading ? "Editar Pedido" : "Aguarde ..."}
                        color="green"
                        onClick={alterValues}
                        disabled={loading}
                    />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />}
            </div>
            </div>
        </div>
    )
}