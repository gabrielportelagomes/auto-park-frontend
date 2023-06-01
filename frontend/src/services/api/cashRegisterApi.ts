import api from "./api";

export async function getBalance(token: string | null) {
  const response = await api.get("/cash-register/balance", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export interface CashDetails {
  cash_item_id: number;
  quantity: number;
  amount: number;
  transaction_type: string;
}

export interface ChangeDetails {
  total_price: number;
  total_paid: number;
  cash_register: CashDetails[];
}

export async function postChange(token: string | null, body: ChangeDetails) {
  const response = await api.post("/cash-register/change", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postCashRegister(
  token: string | null,
  body: CashDetails[]
) {
  const response = await api.post("/cash-register", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
