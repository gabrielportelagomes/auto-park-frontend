import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { RegisterProps } from "../ActiveVehicles";
import * as Style from "./style";

export default function Register(register: RegisterProps) {
  const navigate = useNavigate();

  function checkOut() {
    const confirmValue = confirm(
      `Deseja confirmar saída do veículo com a placa ${register.plate_number}?`
    );
    if (confirmValue) {
      navigate(`/registrar-saida/${register.id}`);
    }
  }

  return (
    <Style.Container>
      <Style.Title>
        <div></div>
        <h3>{register.plate_number}</h3>
        <div>{register.exit_time === null && <Style.Circle />}</div>
      </Style.Title>
      <Style.Type>
        <p>Tipo:</p>
        <p>{register.VehicleType.vehicle_type}</p>
      </Style.Type>
      <Style.EntryTime>
        <p>Entrada:</p>
        <p>{dayjs(register.entry_time).format("DD/MM/YYYY HH:mm:ss")}</p>
      </Style.EntryTime>

      <Style.ExitButton onClick={checkOut} display={register.exit_time}>
        registrar saída
      </Style.ExitButton>
    </Style.Container>
  );
}
