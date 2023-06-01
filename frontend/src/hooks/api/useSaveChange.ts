import useAsync from "../useAsync";

import * as cashRegister from "../../services/api/cashRegisterApi";
import useToken from "../useToken";

export default function useSaveChange() {
  const token = useToken();

  const {
    loading: changeLoading,
    error: changeError,
    act: postChange,
  } = useAsync((data) => cashRegister.postChange(token, data), {
    immediate: false,
  });

  return {
    changeLoading,
    changeError,
    postChange,
  };
}
