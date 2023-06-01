import useAsync from "../useAsync";

import * as vehicleType from "../../services/api/vehicleTypeApi";
import useToken from "../useToken";

export default function useSaveVehicleType() {
  const token = useToken();

  const {
    loading: vehicleTypeLoading,
    error: vehicleTypeError,
    act: postVehicleType,
  } = useAsync((data) => vehicleType.postVehicleType(token, data), {
    immediate: false,
  });

  return {
    vehicleTypeLoading,
    vehicleTypeError,
    postVehicleType,
  };
}
