import { useNavigate } from "react-router-dom";

import Register from "../Register";
import * as Style from "./style";

export interface VehicleTypeProps {
  id: number;
  vehicle_type: string;
  hour_hate: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface RegisterProps {
  id: number;
  vehicle_type_id: number;
  plate_number: string;
  entry_time: string;
  exit_time: string | null;
  paid_amount: number | null;
  user_id: number;
  created_at: string;
  updated_at: string;
  VehicleType: VehicleTypeProps;
}

export interface ActiveRegistersProps {
  activeRegisters: RegisterProps[];
}

export default function ActiveVehicles({
  activeRegisters,
}: ActiveRegistersProps) {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Top>
        <Style.CashIcon></Style.CashIcon>
        <Style.Title>Registros ativos:</Style.Title>
      </Style.Top>
      <Style.Content>
        {activeRegisters.map((register) => {
          return <Register key={register.id} {...register} />;
        })}
      </Style.Content>
      <Style.ButtonContainer>
        <Style.EntryButton onClick={() => navigate("/registrar-entrada")}>
          Registrar entrada
        </Style.EntryButton>
      </Style.ButtonContainer>
    </Style.Container>
  );
}
