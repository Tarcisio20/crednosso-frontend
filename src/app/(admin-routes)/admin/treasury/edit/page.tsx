"use client";
import { ButtonComuns } from "@/components/admin/ButtonComuns";
import { TitlePage } from "@/components/admin/TitlePage";

const Page = () => {
  return (
    <>
      <TitlePage title="Editar Tesouraria" />
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <label className="text-center uppercase font-bold">
          Informações Gerais
        </label>
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
        <div className="flex flex-col h-full gap-2 w-1/3 text-center mt-3">
          <label className="text-center uppercase font-bold">
            Configuração dos Cassetes
          </label>
          <div className="flex items-center gap-6 h-full justify-center">
            <div className="flex flex-col  gap-3 w-1/3">
              <label className="flex items-center">R$ 10,00</label>
              <label className="flex items-center">R$ 20,00</label>
              <label className="flex items-center">R$ 50,00</label>
              <label className="flex items-center">R$ 100,00</label>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <input className="rounded text-center text-gray-900 outline-none h-6" />
              <input className="rounded text-center text-gray-900 outline-none h-6" />
              <input className="rounded text-center text-gray-900 outline-none h-6" />
              <input className="rounded text-center text-gray-900 outline-none h-6" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 w-2/3">
          <ButtonComuns
            label="Editar Tesouraria"
            color="cyan"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
