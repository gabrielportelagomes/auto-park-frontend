import useAsync from "../useAsync";

import * as authApi from "../../services/api/authApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(authApi.signIn, { immediate: false });

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
