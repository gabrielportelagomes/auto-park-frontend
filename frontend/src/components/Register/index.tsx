import dayjs from "dayjs";

import { RegisterProps } from "../ActiveVehicles";
import * as Style from "./style";

export default function Register(register: RegisterProps) {
  return (
    <Style.Container>
      <Style.Title>{register.plate_number}</Style.Title>
      <Style.Type>
        <p>Tipo:</p>
        <p>{register.VehicleType.vehicle_type}</p>
      </Style.Type>
      <Style.EntryTime>
        <p>Entrada:</p>
        <p>{dayjs(register.entry_time).format("DD/MM/YYYY HH:mm:ss")}</p>
      </Style.EntryTime>
      <Style.Circle />
    </Style.Container>
  );
}
