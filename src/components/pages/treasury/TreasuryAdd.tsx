"use client";

import { GenereateIndividualValuesCassetesInReal } from "@/Utils/GenereateIndividualValuesCassetesInReal";
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal";
import { ButtonComuns } from "@/components/admin/ButtonComuns";
import { TitlePage } from "@/components/admin/TitlePage";
import { useEffect, useState } from "react";

type Props = {
  token: string | undefined;
  idUser: string | undefined;
};

export const TreasuryAdd = ({ token, idUser }: Props) => {
  const [idSystemTreasury, setIdSystemTreasury] = useState("");
  const [nameTreasury, setNameTreasury] = useState("");
  const [shortNameTreasury, setShortNameTreasury] = useState("");
  const [cassATreasury, setCassATreasury] = useState(0);
  const [cassBTreasury, setCassBTreasury] = useState(0);
  const [cassCTreasury, setCassCTreasury] = useState(0);
  const [cassDTreasury, setCassDTreasury] = useState(0);

  const [cassAShowTreasury, setCassAShowTreasury] = useState("R$ 0,0");
  const [cassBShowTreasury, setCassBShowTreasury] = useState("R$ 0,0");
  const [cassCShowTreasury, setCassCShowTreasury] = useState("R$ 0,0");
  const [cassDShowTreasury, setCassDShowTreasury] = useState("R$ 0,0");

  const [totalCassShow, setTotalCassShow] = useState("R$ 0,0");

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

  return (
    <>
      <TitlePage title="Adicionar Tesouraria" />
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <label className="text-center uppercase font-bold">
          Informações Gerais
        </label>
        <div className="flex flex-col gap-3 w-1/3 text-center">
          <label className="uppercase">ID Sistema</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={idSystemTreasury}
            onChange={(e) => setIdSystemTreasury(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">Nome Completo</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={nameTreasury}
            onChange={(e) => setNameTreasury(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3 text-center">
          <label className="uppercase">Nome Reduzido</label>
          <input
            className="h-6 rounded outline-none text-gray-900 text-center"
            type="text"
            value={shortNameTreasury}
            onChange={(e) => setShortNameTreasury(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 w-1/3 text-center mt-3">
          <label className="text-center uppercase font-bold mb-2">
            Valores dos Cassetes
          </label>
          <div className="flex items-center gap-2 justify-center">
            <div className="flex flex-col items-center justify-center  gap-3 w-1/3">
              <label className="flex items-center h-8">CASSETE A</label>
              <label className="flex items-center h-8">CASSETE B</label>
              <label className="flex items-center h-8">CASSETE C</label>
              <label className="flex items-center justify-center h-full h-8">
                CASSETE D
              </label>
            </div>
            <div className="flex flex-col gap-3  w-1/3">
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassATreasury}
                onChange={(e) => alterValue(10, parseInt(e.target.value))}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassBTreasury}
                onChange={(e) => alterValue(20, parseInt(e.target.value))}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassCTreasury}
                onChange={(e) => alterValue(50, parseInt(e.target.value))}
              />
              <input
                className="rounded text-center text-gray-900 outline-none h-8"
                type="number"
                value={cassDTreasury}
                onChange={(e) => alterValue(100, parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-3 w-1/3">
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
            label="Adicionar Tesouraria"
            color="green"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};
