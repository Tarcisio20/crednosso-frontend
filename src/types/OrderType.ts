export type OrderType = {
  id: number;
  order_date: Date;
  batch: number;
  id_origin_treasury: number;
  id_destiny_treasury: number;
  id_operation_type: number;
  id_order_type: number;
  batch_treasury: number;
  value_of_10: number;
  value_of_20: number;
  value_of_50: number;
  value_of_100: number;
  observation: string;
  status: boolean;
};
