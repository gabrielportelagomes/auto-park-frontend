import dayjs from "dayjs";

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

export interface VehicleRegistersProps {
  registersByDate: RegisterProps[];
  date: boolean;
}

export default function VehicleRegisters({
  registersByDate,
  date,
}: VehicleRegistersProps) {
  const firstEntry = registersByDate.find((register) => register.entry_time);
  const entryTime = firstEntry ? firstEntry.entry_time : "N/A";
  const formattedDate = dayjs(entryTime).format("DD/MM/YYYY");

  return (
    <Style.Container>
      <Style.Top>
        {date ? (
          <Style.Title>
            Registros de veículos do dia: {formattedDate}
          </Style.Title>
        ) : (
          <Style.Title>Histórico de registros:</Style.Title>
        )}
      </Style.Top>
      <Style.Content>
        {registersByDate.map((register) => {
          return <Register key={register.id} {...register} />;
        })}
      </Style.Content>
    </Style.Container>
  );
}
