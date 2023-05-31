import useAsync from "../useAsync";

import * as vehicleRegister from "../../services/api/vehicleRegisterApi";
import useToken from "../useToken";

export default function useSaveVehicleRegister() {
  const token = useToken();

  const {
    loading: vehicleRegisterLoading,
    error: vehicleRegisterError,
    act: postVehicleRegister,
  } = useAsync((data) => vehicleRegister.postVehicleRegister(token, data), {
    immediate: false,
  });

  return {
    vehicleRegisterLoading,
    vehicleRegisterError,
    postVehicleRegister,
  };
}
