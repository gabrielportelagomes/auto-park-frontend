import ActiveVehicles from "../../components/ActiveVehicles";
import CashBalance from "../../components/CashBalance";
import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import useActiveRegisters from "../../hooks/api/useActiveRegisters";
import useCashBalance from "../../hooks/api/useCashBalance";
import * as Style from "./style";

export default function HomePage() {
  const { cashBalance, cashBalanceLoading } = useCashBalance();
  const { activeRegisters, activeRegistersLoading } = useActiveRegisters();

  if (cashBalanceLoading || activeRegistersLoading) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      {cashBalance && <CashBalance cashBalance={cashBalance} />}
      <ActiveVehicles activeRegisters={activeRegisters} />
    </Style.PageContainer>
  );
}
