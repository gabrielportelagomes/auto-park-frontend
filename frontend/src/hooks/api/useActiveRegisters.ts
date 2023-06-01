import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegisterApi";
import useToken from "../useToken";

export default function useActiveRegisters() {
  const token = useToken();

  const {
    data: activeRegisters,
    loading: activeRegistersLoading,
    error: activeRegistersError,
    act: getActiveRegisters,
  } = useAsync(() => vehicleRegister.getActiveRegisters(token));

  return {
    activeRegisters,
    activeRegistersLoading,
    activeRegistersError,
    getActiveRegisters,
  };
}
