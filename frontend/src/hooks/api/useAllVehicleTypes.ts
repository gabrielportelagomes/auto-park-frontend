import useAsync from "../useAsync";

import * as vehicleType from "../../services/api/vehicleTypeApi";
import useToken from "../useToken";

export default function useAllVehicleTypes() {
  const token = useToken();

  const {
    data: allVehicleTypes,
    loading: allVehicleTypesLoading,
    error: allVehicleTypesError,
    act: getAllVehicleTypes,
  } = useAsync(() => vehicleType.getAllVehicleTypes(token));

  return {
    allVehicleTypes,
    allVehicleTypesLoading,
    allVehicleTypesError,
    getAllVehicleTypes,
  };
}
