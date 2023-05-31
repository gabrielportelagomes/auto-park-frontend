import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import InputForm from "../../components/Form/Input";
import Header from "../../components/Header";
import * as Style from "./style";
import { handleForm } from "../../utils/handleFormUtils";
import ButtonForm from "../../components/Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import RadioInput from "../../components/Form/RadioInput";
import useAllVehicleTypes from "../../hooks/api/useAllVehicleTypes";
import LoadingPage from "../../components/LoadingPage";
import useSaveVehicleRegister from "../../hooks/api/useSaveVehicleRegister";

interface FormData {
  plate_number: string;
  vehicle_type_id?: number;
}

export default function CheckInPage() {
  const navigate = useNavigate();
  const { allVehicleTypes } = useAllVehicleTypes();
  const { vehicleRegisterLoading, postVehicleRegister } =
    useSaveVehicleRegister();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    plate_number: "",
  });

  if (!allVehicleTypes) {
    return <LoadingPage />;
  }
  const vehicleTypes = allVehicleTypes.map(
    ({ id, vehicle_type }: { id: number; vehicle_type: string }) => ({
      id,
      label: vehicle_type,
    })
  );

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "vehicle_type_id") {
      setForm((prevForm) => ({
        ...prevForm,
        vehicle_type_id: parseInt(event.target.value),
      }));
    } else {
      handleForm<FormData>(event, form, setForm);
    }
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        plate_number: form.plate_number,
        vehicle_type_id: form.vehicle_type_id,
      };

      await postVehicleRegister(body);
      setIsLoading(false);
      toast.success("Registro realizado com sucesso!");
      navigate("/inicio");
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível fazer o registro!");
      }

      setIsLoading(false);
    }
  }

  return (
    <Style.PageContainer>
      <Header />
      <Style.Form onSubmit={submit}>
        <InputForm
          label="Placa do veículo"
          id="plate_number"
          name="plate_number"
          value={form.plate_number}
          onChange={onFormChange}
          type="text"
          placeholder="Ex: H9BR75D"
          disabled={isLoading || vehicleRegisterLoading}
          minLength={7}
          autoComplete="off"
          required
        />
        <RadioInput
          label="Tipo de veículo:"
          id="vehicle_type"
          name="vehicle_type_id"
          value={form.vehicle_type_id}
          onChange={onFormChange}
          options={vehicleTypes}
          disabled={isLoading || vehicleRegisterLoading}
          required
        />
        <ButtonForm
          type="submit"
          disabled={isLoading || vehicleRegisterLoading}
        >
          {isLoading || vehicleRegisterLoading ? loadingButton : "Registrar"}
        </ButtonForm>
      </Style.Form>
    </Style.PageContainer>
  );
}
