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
      <Style.Infos>
        <p>Entrada:</p>
        <p>{dayjs(register.entry_time).format("DD/MM/YYYY HH:mm:ss")}</p>
      </Style.Infos>
      {register.exit_time && (
        <Style.Infos>
          <p>Saída:</p>
          <p>{dayjs(register.exit_time).format("DD/MM/YYYY HH:mm:ss")}</p>
        </Style.Infos>
      )}
      {register.paid_amount && (
        <Style.Infos>
          <span>Total:</span>
          <span>
            {(register.paid_amount / 100).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </Style.Infos>
      )}
      <Style.ExitButton
        onClick={() => setIsOpen(true)}
        display={register.exit_time}
      >
        registrar saída
      </Style.ExitButton>
    </Style.Container>
  );
}
