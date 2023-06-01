import useAsync from "../useAsync";

import * as cashItem from "../../services/api/cashItemApi";
import useToken from "../useToken";

export default function useSaveCashItem() {
  const token = useToken();

  const {
    loading: cashItemLoading,
    error: cashItemError,
    act: postCashItem,
  } = useAsync((data) => cashItem.postCashItem(token, data), {
    immediate: false,
  });

  return {
    cashItemLoading,
    cashItemError,
    postCashItem,
  };
}