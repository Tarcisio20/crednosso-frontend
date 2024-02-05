import { req, headersPadrao } from "@/api/axios";
import { AxiosRequestConfig } from "axios";

export const login = async (email: string, pass: string) => {
  try {
    const json = await req.post("/login", { email: email, password: pass });
    return json.data;
  } catch (error) {
    return error;
  }
};

export const getAllSupply = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get("/admin/supply", config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getAllOrderType = async (token: string, idUser: string) => {
  try {
    const data = {};
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get("/admin/order_type", config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getAllUser = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get("/admin/user", config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getUserById = async (
  token: string,
  idUser: string,
  idEdit: string
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/user/${idEdit}`, config);

    return json.data;
  } catch (error) {
    return false;
  }
};

type AdduserProps = {
  name: string;
  email: string;
  type: string;
};
export const addUser = async (
  token: string,
  idUser: string,
  data: AdduserProps
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.post(`/admin/user`, data, config);

    return json.data;
  } catch (error) {
    return false;
  }
};

export const editUserById = async (
  token: string,
  idUser: string,
  idEdit: string,
  data: {}
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.put(`/admin/user/${idEdit}`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const removeUser = async (token: string, idUser: string, idEdit: string,) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.delete(`/admin/user/${idEdit}`, config);
    return json.data;
  } catch (error) {
    return false;
  }
}

export const getOrderTypes = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get("/admin/order_type", config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const addOrderType = async (
  token: string,
  idUser: string,
  data: { name_full: string }
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.post("/admin/order_type", data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getOrderTypeById = async (
  token: string,
  idUser: string,
  idEdit: string
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/order_type/${idEdit}`, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const OrderTypeEdited = async (
  token: string,
  idUser: string,
  idEdit: string,
  data: { name_full: string; status: boolean }
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.put(`/admin/order_type/${idEdit}`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getAllOperationType = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get("/admin/operation_type", config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const addOperationType = async (
  token: string,
  idUser: string,
  data: { name_full: string }
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.post("/admin/operation_type", data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getOperationTypeById = async (
  token: string,
  idUser: string,
  idEdit: string
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/operation_type/${idEdit}`, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const editOperartionType = async (
  token: string,
  idUser: string,
  idEdit: string,
  data: { name_full: string; status: boolean }
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.put(`/admin/operation_type/${idEdit}`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getAllTreasuries = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/treasury`, config);
    return json.data;
  } catch (error) {
    return false;
  }
};


type TreasuryAddProps = {
  id_system: string;
  name_full: string;
  shortened_name: string;
  number_count: string;
  balance_cass_10: string;
  balance_cass_20: string;
  balance_cass_50: string;
  balance_cass_100: string;
};
export const addTreasury = async (
  token: string,
  idUser: string,
  data: TreasuryAddProps
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.post(`/admin/treasury`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getTreasuryById = async (
  token: string,
  idUser: string,
  id: string
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/treasury/${id}`, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

type TreasuryEditProps = {
  id_system: string;
  name_full: string;
  shortened_name: string;
  number_count: string;
  balance_cass_10: string;
  balance_cass_20: string;
  balance_cass_50: string;
  balance_cass_100: string;
  status : boolean;
};
export const editTreasury = async (
  token: string,
  idUser: string,
  idEdit: string,
  data: TreasuryEditProps
) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };

    const json = await req.put(`/admin/treasury/${idEdit}`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

type OrderProps = {
  order_date: string;
  batch: string;
  id_origin_treasury: string;
  id_destiny_treasury: string;
  id_operation_type: string;
  id_order_type: string;
  batch_treasury: string;
  value_requested_10: string;
  value_requested_20: string;
  value_requested_50: string;
  value_requested_100: string;
  observation: string;
};
export const AddOrder = async (
  token: string,
  idUser: string,
  data: OrderProps
) => {
  console.log(data);
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    console.log(data);
    const json = await req.post(`/admin/order`, data, config);
    return json.data;
  } catch (error) {
    return false;
  }
};

export const getAllAtms = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/atm`, config);
    return json.data;
  } catch (error) {
    return false;
  }
}

type AddAtmProps = {
  id_system : string;
  name_full : string;
  shortened_name : string;
  id_treasury :  string;
  config_cass_A : string;
  config_cass_B : string;
  config_cass_C : string;
  config_cass_D : string;
  balance_cass_A : string;
  balance_cass_B : string;
  balance_cass_C : string;
  balance_cass_D : string;
}
export const AddAtm = async (token: string, idUser: string, data : AddAtmProps) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.post(`/admin/atm`, data,  config);
    return json.data;
  } catch (error) {
    return false;
  }
}

export const getAtmById = async (token: string, idUser: string, id : string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/atm/${id}`,  config);
    return json.data;
  } catch (error) {
    return false;
  }
}

type EditAtmProps = {
  id_system : string;
  name_full : string;
  shortened_name : string;
  id_treasury :  string;
  config_cass_A : string;
  config_cass_B : string;
  config_cass_C : string;
  config_cass_D : string;
  status : boolean;
}
export const editAtm = async (token: string, idUser: string, idEdit : string, data : EditAtmProps) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.put(`/admin/atm/${idEdit}`, data,  config);
    return json.data;
  } catch (error) {
    return false;
  }
}

export const getOrders = async (token: string, idUser: string) => {
  try {
    const headersForReq = {
      ...headersPadrao,
      Authorization: `Token ${token}`,
      id: idUser,
    };
    const config: AxiosRequestConfig = {
      headers: headersForReq,
    };
    const json = await req.get(`/admin/order`,  config);
    return json.data;
  } catch (error) {
    return false;
  }
}