import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegisterApi";
import useToken from "../useToken";

export default function useUpdateVehicleRegister() {
  const token = useToken();

  const {
    data: updateVehicleRegister,
    loading: updateVehicleRegisterLoading,
    error: updateVehicleRegisterError,
    act: patchVehicleRegister,
  } = useAsync((data) => vehicleRegister.patchVehicleRegister(token, data), {
    immediate: false,
  });

  return {
    updateVehicleRegister,
    updateVehicleRegisterLoading,
    updateVehicleRegisterError,
    patchVehicleRegister,
  };
}
