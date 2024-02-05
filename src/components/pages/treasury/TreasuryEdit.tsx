"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTreasuryById, editTreasury } from "@/api/admin";
import { TitlePage } from "@/components/admin/TitlePage";
import { ButtonComuns } from "@/components/admin/ButtonComuns";
import { GenereateIndividualValuesCassetesInReal } from "@/Utils/GenereateIndividualValuesCassetesInReal";
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal";
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { error } from "console";

type Props = {
  token: string | undefined;
  idUser: string | undefined;
};

export const TreasuryEdit = ({ token, idUser }: Props) => {

    const params = useParams()
  const router = useRouter()

  const [idSystemTreasury, setIdSystemTreasury] = useState("");
  const [nameTreasury, setNameTreasury] = useState("");
  const [shortNameTreasury, setShortNameTreasury] = useState("");
  const [countTreasury, setCountTreasury] = useState("");
  const [cassATreasury, setCassATreasury] = useState(0);
  const [cassBTreasury, setCassBTreasury] = useState(0);
  const [cassCTreasury, setCassCTreasury] = useState(0);
  const [cassDTreasury, setCassDTreasury] = useState(0);
  const [statusTreasury, setStatusTreasury] = useState('');

  const [cassAShowTreasury, setCassAShowTreasury] = useState("R$ 0,0");
  const [cassBShowTreasury, setCassBShowTreasury] = useState("R$ 0,0");
  const [cassCShowTreasury, setCassCShowTreasury] = useState("R$ 0,0");
  const [cassDShowTreasury, setCassDShowTreasury] = useState("R$ 0,0");

  const [totalCassShow, setTotalCassShow] = useState("R$ 0,0");

  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState("");

    useEffect(()=>{
        getTreasuryFunction()
    }, [])

  useEffect(() => {
    setTotalCassShow(
      GenereateTotalValuesCassetesInReal(
        cassATreasury,
        cassBTreasury,
        cassCTreasury,
        cassDTreasury
      )
    );
  }, [cassATreasury, cassBTreasury, cassCTreasury, cassDTreasury]);

  const getTreasuryFunction = async () => {
    setLoading(true)
    const t = await getTreasuryById(token as string, idUser as  string, params.id.toString())
    setIdSystemTreasury(t.treasury[0].id_system)
    setNameTreasury(t.treasury[0].name_full)
    setShortNameTreasury(t.treasury[0].shortened_name)
    setCountTreasury(t.treasury[0].number_count)
    setCassATreasury(t.treasury[0].balance_cass_10)
    setCassBTreasury(t.treasury[0].balance_cass_20)
    setCassCTreasury(t.treasury[0].balance_cass_50)
    setCassDTreasury(t.treasury[0].balance_cass_100)
    setStatusTreasury(t.treasury[0].status === true ? '1' : '0')
    setCassAShowTreasury(
      GenereateIndividualValuesCassetesInReal(10, t.treasury[0].balance_cass_10)
    )
    setCassBShowTreasury(
      GenereateIndividualValuesCassetesInReal(20, t.treasury[0].balance_cass_20)
    )
    setCassCShowTreasury(
      GenereateIndividualValuesCassetesInReal(50, t.treasury[0].balance_cass_50)
    )
    setCassDShowTreasury(
      GenereateIndividualValuesCassetesInReal(100, t.treasury[0].balance_cass_100)
    )
    setTotalCassShow( GenereateTotalValuesCassetesInReal(t.treasury[0].balance_cass_10, t.treasury[0].balance_cass_20, t.treasury[0].balance_cass_50, t.treasury[0].balance_cass_100) )
    setLoading(false)
   
  }

  const alterValue = (type: number, value: number) => {
    if (value < 0) value = 0;
    switch (type) {
      case 10:
        setCassATreasury(0);
        setCassATreasury(value);
        setCassAShowTreasury(
          GenereateIndividualValuesCassetesInReal(type, value)
        );
        break;
      case 20:
        setCassBTreasury(value);
        setCassBShowTreasury(
          GenereateIndividualValuesCassetesInReal(type, value)
        );
        break;
      case 50:
        setCassCTreasury(value);
        setCassCShowTreasury(
          GenereateIndividualValuesCassetesInReal(type, value)
        );
        break;
      case 100:
        setCassDTreasury(value);
        setCassDShowTreasury(
          GenereateIndividualValuesCassetesInReal(type, value)
        );
    }
  };

  const editTreasuryFunction = async () => {
    setLoading(true);
    setMsgError('')
    if (
      idSystemTreasury !== "" &&
      nameTreasury !== "" &&
      shortNameTreasury !== "" && countTreasury !== ''
    ) {
      let data = {
        id_system: idSystemTreasury.toString(),
        name_full: nameTreasury,
        shortened_name: shortNameTreasury,
        number_count: countTreasury.toString(),
        balance_cass_10: cassATreasury.toString(),
        balance_cass_20: cassBTreasury.toString(),
        balance_cass_50: cassCTreasury.toString(),
        balance_cass_100: cassDTreasury.toString(),
        status : statusTreasury === '0' ? false : true
      };
      console.log(data)
      const editT = await editTreasury(token as string, idUser as string, params.id.toString(), data);
      if(editT.error){
        setMsgError(editT.error)
      } 
      if(editT.success){
        router.back()
        return
      }
    } else {
      setMsgError("Favor, Preecher todos os campos!");
    }
    setLoading(false);
  };

  const alterStatus = (e : string) => {
    console.log(e)
    setStatusTreasury(e)
  }

  return (
    <>
      <TitlePage title="Editar Tesouraria" />
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <label className="text-center uppercase font-bold">
          INFORMAÇÕES GERAIS
        </label>
        <div className="flex flex-col gap-3 w-1/3 text-center">
          <label className="uppercase">ID SISTEMA</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={idSystemTreasury}
            onChange={(e) => setIdSystemTreasury(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">NOME COMPLETO</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={nameTreasury}
            onChange={(e) => setNameTreasury(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">NOME REDUZIDO</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={shortNameTreasury}
            onChange={(e) => setShortNameTreasury(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">CONTA TESOURARIA</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={countTreasury}
            onChange={(e) => setCountTreasury(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">STATUS</label>
          <select  className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} value={statusTreasury} onChange={e=>alterStatus(e.target.value)} >
            <option value="1">ATIVO</option>
            <option value="0">INATIVO</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 w-1/3 text-center mt-3">
          <label className="text-center uppercase font-bold mb-2">
            VALORES DOS CASSETES
          </label>
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
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassATreasury}
                onChange={(e) => alterValue(10, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassBTreasury}
                onChange={(e) => alterValue(20, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassCTreasury}
                onChange={(e) => alterValue(50, parseInt(e.target.value))}
                disabled={loading}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassDTreasury}
                onChange={(e) => alterValue(100, parseInt(e.target.value))}
                disabled={loading}
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                {cassAShowTreasury}
              </div>

              <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                {cassBShowTreasury}
              </div>
              <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                {cassCShowTreasury}
              </div>
              <div className=" flex justify-center items-center font-bold rounded text-center text-gray-900 outline-none h-8 bg-slate-400">
                {cassDShowTreasury}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4 w-1/3">
          <label className="uppercase text-2xl w-1/3 text-center">Total</label>
          <div className="flex justify-center items-center font-bold rounded text-center  text-gray-900 outline-none w-full h-8 bg-slate-400">
            {totalCassShow}
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 w-2/3">
          <ButtonComuns
            label={!loading ? "Editar Tesouraria" : "Aguarde ..."}
            color="green"
            onClick={editTreasuryFunction}
            disabled={loading}
          />
        </div>
        {!loading && msgError !== "" && <ErrorComponent label={msgError} />}
      </div>
    </>
  );
};
