import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegisterApi";
import useToken from "../useToken";

export default function useAllVehicleRegisters() {
  const token = useToken();

  const {
    data: allVehicleRegisters,
    loading: allVehicleRegistersLoading,
    error: allVehicleRegistersError,
    act: getAllVehicleRegisters,
  } = useAsync(() => vehicleRegister.getAllRegisters(token));

  return {
    allVehicleRegisters,
    allVehicleRegistersLoading,
    allVehicleRegistersError,
    getAllVehicleRegisters,
  };
}
