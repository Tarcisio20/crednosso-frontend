export const GenereateTotalValuesCassetesInReal = (
  valueA: number,
  valueB: number,
  valueC: number,
  valueD: number
) => {
  let va = valueA * 10;
  let vb = valueB * 20;
  let vc = valueC * 50;
  let vd = valueD * 100;

  let total = va + vb + vc + vd;

  return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
