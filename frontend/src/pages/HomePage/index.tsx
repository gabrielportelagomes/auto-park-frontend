import ActiveVehicles from "../../components/ActiveVehicles";
import CashBalance from "../../components/CashBalance";
import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import useActiveRegisters from "../../hooks/api/useActiveRegisters";
import useCashBalance from "../../hooks/api/useCashBalance";
import * as Style from "./style";

export default function HomePage() {
  const { cashBalance } = useCashBalance();
  const { activeRegisters } = useActiveRegisters();

  if (!cashBalance || !activeRegisters) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      <CashBalance cashBalance={cashBalance} />
      <ActiveVehicles activeRegisters={activeRegisters} />
    </Style.PageContainer>
  );
}
