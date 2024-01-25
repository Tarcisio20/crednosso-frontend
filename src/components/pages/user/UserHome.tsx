"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllUser } from "@/api/admin";
import { UserType } from "@/types/UserType";
import { TitlePage } from "@/components/admin/TitlePage";
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects";
import { ButtonTableActions } from "@/components/admin/ButtonTableActions";
import { NothingToShow } from "@/components/admin/NothingToShow";

type Props = {
  token: string | undefined;
  idUser: string | undefined;
};

export const UserHome = ({ token, idUser }: Props) => {
  const router = useRouter();

  const [users, setUsers] = useState<UserType[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllUsersFunction();
  }, []);

  const getAllUsersFunction = async () => {
    setLoading(true);
    const us = await getAllUser(token as string, idUser as string);
    setUsers(us.users);
    setLoading(false);
  };

  const editUser = (id: string) => {
    router.push(`/admin/user/edit/${id}`);
  };

  return (
    <>
      <TitlePage title="Usuários" />
      <ButtonForRedirects label="Adicionar Usuário" url="/admin/user/add" />
      {!loading && users?.length > 0 && (
        <>
          <div className="p-4 w-full">
            <table
              width="100%"
              className="text-center table-auto border-collapse border rounded"
            >
              <thead>
                <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded">
                  <th>Id</th>
                  <th>Nome Completo</th>
                  <th>E-mail</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((item, key) => (
                    <tr className="py-2 " key={key}>
                      <th>{item.id}</th>
                      <th>{item.name_full}</th>
                      <th>{item.email}</th>
                      <th>{item.user_type}</th>
                      <th>{item.status == true ? "Ativo" : "Inativo"}</th>
                      <th className="flex justify-center  items-center gap-2">
                        <ButtonTableActions
                          label="Editar"
                          page="user"
                          idElement={item.id}
                          type="edit"
                          color="cyan"
                          onclick={() => editUser(item.id.toString())}
                        />

                        <ButtonTableActions
                          label="Resetar"
                          page="user"
                          idElement={item.id}
                          type="delete"
                          color="cyan"
                          onclick={() => {}}
                        />
                        <ButtonTableActions
                          label="Bloquear"
                          page="user"
                          idElement={item.id}
                          type="delete"
                          color="red"
                          onclick={() => {}}
                        />
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {!loading && users.length === 0 && <NothingToShow label="user" />}
    </>
  );
};
