import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import * as Style from "./style";
import VehicleRegisters from "../../components/VehicleRegisters";
import useAllVehicleRegisters from "../../hooks/api/useAllVehicleRegisters";

export default function RegistersHistory() {
  const { allVehicleRegisters } = useAllVehicleRegisters();

  if (!allVehicleRegisters) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />

      <VehicleRegisters registersByDate={allVehicleRegisters} date={false} />
    </Style.PageContainer>
  );
}
