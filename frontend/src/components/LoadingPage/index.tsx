import { loadingPage } from "../../assets/styles/loading";
import * as Style from "./style";

export default function LoadingPage() {
  return (
    <Style.Container>
      <Style.Loading>{loadingPage}</Style.Loading>
      <Style.Message>Carregando...</Style.Message>
    </Style.Container>
  );
}
