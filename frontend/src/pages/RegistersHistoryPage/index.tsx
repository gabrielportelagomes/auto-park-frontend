import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import * as Style from "./style";
import VehicleRegisters from "../../components/VehicleRegisters";
import useAllVehicleRegisters from "../../hooks/api/useAllVehicleRegisters";

export default function RegistersHistoryPage() {
  const { allVehicleRegisters, allVehicleRegistersLoading } =
    useAllVehicleRegisters();

  if (allVehicleRegistersLoading) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      {allVehicleRegisters ? (
        <VehicleRegisters registersByDate={allVehicleRegisters} date={false} />
      ) : (
        <Style.Container>
          <Style.EmptyTitle>Nenhum registro foi encontrado</Style.EmptyTitle>
        </Style.Container>
      )}
    </Style.PageContainer>
  );
}
