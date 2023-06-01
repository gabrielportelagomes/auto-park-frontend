import dayjs from "dayjs";
import { useState } from "react";

import { RegisterProps } from "../ActiveVehicles";
import * as Style from "./style";
import { ModalComponent } from "../Modal";

export default function Register(register: RegisterProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Style.Container>
      <ModalComponent
        title={`Confirmar saída do veículo de placa: ${register.plate_number}`}
        content={register.id}
        close="Cancelar"
        confirm="Continuar"
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
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

      <Style.ExitButton
        onClick={() => setIsOpen(true)}
        display={register.exit_time}
      >
        registrar saída
      </Style.ExitButton>
    </Style.Container>
  );
}
