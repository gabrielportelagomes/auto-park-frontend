import useAsync from "../useAsync";

import * as cashRegister from "../../services/api/cashRegisterApi";
import useToken from "../useToken";

export default function useSaveCashRegister() {
  const token = useToken();

  const {
    loading: cashRegisterLoading,
    error: cashRegisterError,
    act: postCashRegister,
  } = useAsync((data) => cashRegister.postCashRegister(token, data), {
    immediate: false,
  });

  return {
    cashRegisterLoading,
    cashRegisterError,
    postCashRegister,
  };
}
