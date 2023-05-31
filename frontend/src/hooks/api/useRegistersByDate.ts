import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegisterApi";
import useToken from "../useToken";

export default function useRegistersByDate() {
  const token = useToken();

  const {
    data: registersByDate,
    loading: registersByDateLoading,
    error: registersByDateError,
    act: getRegistersByDate,
  } = useAsync((data) => vehicleRegister.getRegistersByDate(token, data), {
    immediate: false,
  });

  return {
    registersByDate,
    registersByDateLoading,
    registersByDateError,
    getRegistersByDate,
  };
}
