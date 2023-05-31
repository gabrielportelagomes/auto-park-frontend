import useAsync from "../useAsync";

import * as cashRegister from "../../services/api/cashRegisterApi";
import useToken from "../useToken";

export default function useCashBalance() {
  const token = useToken();

  const {
    data: cashBalance,
    loading: cashBalanceLoading,
    error: cashBalanceError,
    act: getcashBalance,
  } = useAsync(() => cashRegister.getBalance(token));

  return {
    cashBalance,
    cashBalanceLoading,
    cashBalanceError,
    getcashBalance,
  };
}
