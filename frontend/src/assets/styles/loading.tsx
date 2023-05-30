import { ThreeDots } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";

export const loadingButton = (
  <ThreeDots
    height="16"
    width="50"
    radius="4"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

export const loadingPage = <RotatingLines strokeColor="#ffffff" width="100" />;
