import api from "./api";

export interface CashItem {
  cash_type: "COIN" | "NOTE";
  value: number;
}

export async function postCashItem(token: string | null, body: CashItem) {
  const response = await api.post("/cash-item", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
