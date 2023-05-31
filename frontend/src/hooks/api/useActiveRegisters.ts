import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegister";
import useToken from "../useToken";

export default function useActiveRegisters() {
  const token = useToken();

  const {
    data: activeRegisters,
    loading: activeRegistersLoading,
    error: activeRegistersError,
    act: getactiveRegisters,
  } = useAsync(() => vehicleRegister.getActiveRegisters(token));

  return {
    activeRegisters,
    activeRegistersLoading,
    activeRegistersError,
    getactiveRegisters,
  };
}
