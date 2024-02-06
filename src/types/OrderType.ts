export type OrderType = {
  id: number;
  order_date: Date;
  batch: number;
  id_origin_treasury: number;
  id_destiny_treasury: number;
  id_operation_type: number;
  id_order_type: number;
  batch_treasury: number;
  value_confirmed_10: number;
  value_confirmed_20: number;
  value_confirmed_50: number;
  value_confirmed_100: number;
  value_requested_10 : number;
  value_requested_20 : number;
  value_requested_50 : number;
  value_requested_100 : number;
  id_status_confirmation_order : number;
  confirmed  : boolean;
  observation: string;
  status: boolean;
}
