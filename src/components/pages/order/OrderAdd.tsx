"use client";

import { useEffect, useState } from "react";
import {
  getAllOperationType,
  getAllTreasuries,
  getOrderTypes,
  AddOrder,
} from "@/api/admin";
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects";
import { TitlePage } from "@/components/admin/TitlePage";
import { OrderTypeType } from "@/types/OrderTypeType";
import { OperationTypeType } from "@/types/OperationTypeType";
import { TreasuryType } from "@/types/TreasuryType";
import { GenereateIndividualValuesCassetesInReal } from "@/Utils/GenereateIndividualValuesCassetesInReal";
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal";
import { ButtonComuns } from "@/components/admin/ButtonComuns";
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { useRouter } from "next/navigation";
import { TransformData } from "@/Utils/TransformData";

type Props = {
  token: string | undefined;
  idUser: string | undefined;
};

export const OrderAdd = ({ token, idUser }: Props) => {
  const router = useRouter();

  const [orderTypes, setOrderTypes] = useState<OrderTypeType[] | []>([]);
  const [operationTypes, setOperationTypes] = useState<
    OperationTypeType[] | []
  >([]);
  const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([]);

  const [idOperationType, setIdOperationType] = useState("");
  const [idOrderType, setIdOrderType] = useState("");
  const [idTreasuryOrigin, setIdTreasuryOrigin] = useState("");
  const [idTreasuryDestiny, setIdTreasuryDestiny] = useState("");
  const [dateOrder, setDateOrder] = useState("");
  const [cassA, setCassA] = useState(0);
  const [cassB, setCassB] = useState(0);
  const [cassC, setCassC] = useState(0);
  const [cassD, setCassD] = useState(0);
  const [obs, setObs] = useState("");

  const [cassAValue, setCassAValue] = useState("R$ 0,0");
  const [cassBValue, setCassBValue] = useState("R$ 0,0");
  const [cassCValue, setCassCValue] = useState("R$ 0,0");
  const [cassDValue, setCassDValue] = useState("R$ 0,0");
  const [valueTotal, setValueTotal] = useState("R$ 0,0");

  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState("");

  useEffect(() => {
    getAllItemsForScreen();
  }, []);

  useEffect(() => {
    setValueTotal(
      GenereateTotalValuesCassetesInReal(cassA, cassB, cassC, cassD)
    );
  }, [cassA, cassB, cassC, cassD]);

  const getAllItemsForScreen = async () => {
    setLoading(true);
    const orderT = await getOrderTypes(token as string, idUser as string);
    setOrderTypes(orderT.orderTypes);
    const operationT = await getAllOperationType(
      token as string,
      idUser as string
    );
    setOperationTypes(operationT.operationType);
    const t = await getAllTreasuries(token as string, idUser as string);
    setTreasuries(t.atms);
    setLoading(false);
  };

  const alterCass = (type: number, value: number) => {
    if (value < 0) value = 0;
    switch (type) {
      case 10:
        setCassA(value);
        setCassAValue(GenereateIndividualValuesCassetesInReal(type, value));
        break;
      case 20:
        setCassB(value);
        setCassBValue(GenereateIndividualValuesCassetesInReal(type, value));
        break;
      case 50:
        setCassC(value);
        setCassCValue(GenereateIndividualValuesCassetesInReal(type, value));
        break;
      case 100:
        setCassD(value);
        setCassDValue(GenereateIndividualValuesCassetesInReal(type, value));
        break;
    }
  };

  const addOrderFunction = async () => {
    setMsgError("");
    setLoading(true);
    if (
      dateOrder !== "" &&
      idTreasuryOrigin !== "" &&
      idTreasuryDestiny !== "" &&
      idOrderType !== ""
    ) {
       
      const or = await AddOrder(token as string, idUser as string, {
        
        order_date:  TransformData(dateOrder),
        batch: "0",
        id_origin_treasury: idTreasuryOrigin,
        id_destiny_treasury: idTreasuryDestiny,
        id_operation_type: idOperationType,
        id_order_type: idOrderType,
        batch_treasury: "0",
        value_of_10: cassA.toString(),
        value_of_20: cassB.toString(),
        value_of_50: cassC.toString(),
        value_of_100: cassD.toString(),
        observation: obs,
      });
      if (or.error) setMsgError(or.error);
      if (or.success) {
        router.back();
      }
    } else {
      setMsgError("Favor, Preencher todos os campos!");
    }
    setLoading(false);
  };

  return (
    <>
      <TitlePage title="Adicionar Pedido" />
      <ButtonForRedirects label="Visualizar Pedidos" url="/admin/order/view" />
      <div className="flex gap-5 w-4/5 p-5">
        <div className="flex flex-col gap-3 bg-red-600 w-full p-5">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Tipo de Operação</label>
            <div className="text-gray-900">
              <input
                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                type="text"
                value={idOperationType}
                onChange={(e) => setIdOperationType(e.target.value)}
                disabled={loading}
              />
              <select
                className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52"
                value={idOperationType}
                onChange={(e) => setIdOperationType(e.target.value)}
                disabled={loading}
              >
                <option value=""></option>
                {!loading &&
                  operationTypes.map((item, key) => (
                    <option key={key} value={item.id}>
                      {item.name_full}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Origem</label>
            <div className="text-gray-900">
              <input
                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                type="text"
                value={idTreasuryOrigin}
                onChange={(e) => setIdTreasuryOrigin(e.target.value)}
                disabled={loading}
              />
              <select
                className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52"
                value={idTreasuryOrigin}
                onChange={(e) => setIdTreasuryOrigin(e.target.value)}
                disabled={loading}
              >
                <option value=""></option>
                {!loading &&
                  treasuries.map((item, key) => (
                    <option key={key} value={item.id}>
                      {item.id_system} - {item.name_full}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Destino</label>
            <div className="text-gray-900">
              <input
                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                type="text"
                value={idTreasuryDestiny}
                onChange={(e) => setIdTreasuryDestiny(e.target.value)}
                disabled={loading}
              />
              <select
                className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52"
                value={idTreasuryDestiny}
                onChange={(e) => setIdTreasuryDestiny(e.target.value)}
                disabled={loading}
              >
                <option value=""></option>
                {!loading &&
                  treasuries.map((item, key) => (
                    <option key={key} value={item.id}>
                      {item.id_system} - {item.name_full}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Data Inicio</label>
            <div className="text-gray-900">
              <input
                className="w-40 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                type="date"
                value={dateOrder}
                onChange={(e) => setDateOrder(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Tipo de Pedido</label>
            <div className="text-gray-900">
              <input
                className="w-16 h-6 p-1 text-center outline-none border-2 border-gray-600 mr-2 rounded"
                type="text"
                value={idOrderType}
                onChange={(e) => setIdOrderType(e.target.value)}
                disabled={loading}
              />
              <select
                className="text-gray-900 outline-none border-2 border-gray-600 rounded min-w-52"
                value={idOrderType}
                onChange={(e) => setIdOrderType(e.target.value)}
                disabled={loading}
              >
                <option value=""></option>
                {!loading &&
                  orderTypes.map((item, key) => (
                    <option key={key} value={item.id}>
                      {item.name_full}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-yellow-600 w-full p-5">
          <label className="flex justify-center text-center font-bold uppercase text-gray-900 text-xl">
            Composição
          </label>
          <div className="flex w-full justify-between px-3 h-full gap-1">
            <div className=" w-32 flex flex-col gap-4 text-center">
              <label className="uppercase text-gray-900 font-bold">
                CEDULA
              </label>
              <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">
                R$ 10,00
              </label>
              <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">
                R$ 20,00
              </label>
              <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">
                R$ 50,00
              </label>
              <label className="uppercase text-gray-900 font-bold h-6 flex justify-center items-center">
                R$ 100,00
              </label>
            </div>
            <div className=" w-1/3 flex flex-col gap-4 text-center items-center">
              <label className="uppercase text-gray-900 font-bold ">
                QUANTIDADE
              </label>
              <input
                className="w-20 h-6 text-gray-900 text-center outline-none rounded"
                value={cassA}
                onChange={(e) => alterCass(10, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="w-20 h-6 text-gray-900 text-center outline-none rounded"
                value={cassB}
                onChange={(e) => alterCass(20, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="w-20 h-6 text-gray-900 text-center outline-none rounded"
                value={cassC}
                onChange={(e) => alterCass(50, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="w-20 h-6 text-gray-900 text-center outline-none rounded"
                value={cassD}
                onChange={(e) => alterCass(100, parseInt(e.target.value))}
                disabled={loading}
              />
            </div>
            <div className=" w-full flex flex-col gap-4 text-center items-center">
              <label className="uppercase text-gray-900 font-bold">VALOR</label>
              <div className="flex justify-center items-center w-11/12 h-6 text-gray-900 text-center outline-none rounded bg-slate-200 font-bold">
                {cassAValue}
              </div>
              <div className="flex justify-center items-center w-11/12 h-6 text-gray-900 text-center outline-none rounded bg-slate-200 font-bold">
                {cassBValue}
              </div>
              <div className="flex justify-center items-center w-11/12 h-6 text-gray-900 text-center outline-none rounded bg-slate-200  font-bold">
                {cassCValue}
              </div>
              <div className="flex justify-center items-center w-11/12 h-6 text-gray-900 text-center outline-none rounded bg-slate-200 font-bold">
                {cassDValue}
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-end px-3">
            <label className="uppercase text-gray-900 font-bold flex items-center">
              TOTAL
            </label>
            <div className=" flex justify-center items-center h-6 rounded w-1/2 font-bold bg-slate-300 text-black">
              {valueTotal}
            </div>
          </div>
          <div className=" flex justify-center items-center h-6 rounded w-full">
            <input
              className="h-8 outline-none rounded  w-full text-black px-1"
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>
      </div>
      <ButtonComuns
        color="cyan"
        label={!loading ? "Salvar Pedido" : "Aguarde..."}
        onClick={addOrderFunction}
        disabled={loading}
      />
      {!loading && msgError !== "" && <ErrorComponent label={msgError} />}
    </>
  );
};
