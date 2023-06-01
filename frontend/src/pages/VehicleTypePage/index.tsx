import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import InputForm from "../../components/Form/Input";
import Header from "../../components/Header";
import * as Style from "./style";
import { handleForm } from "../../utils/handleFormUtils";
import ButtonForm from "../../components/Form/Button";
import { loadingButton } from "../../assets/styles/loading";
import useSaveVehicleType from "../../hooks/api/useSaveVehicleType";

interface FormData {
  vehicle_type: string;
  hour_hate: string;
}

export default function VehicleTypePage() {
  const navigate = useNavigate();
  const { vehicleTypeLoading, postVehicleType } = useSaveVehicleType();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    vehicle_type: "",
    hour_hate: "",
  });

  function convertValue(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    event.target.value = newValue;
    return event;
  }

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        ...form,
        hour_hate: parseInt(form.hour_hate.replace(/[^\d]+/g, "")),
      };

      await postVehicleType(body);
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
          label="Nome da categoria:"
          id="vehicle_type"
          name="vehicle_type"
          value={form.vehicle_type}
          onChange={onFormChange}
          type="text"
          placeholder="Ex: carro"
          disabled={isLoading || vehicleTypeLoading}
          autoComplete="off"
          required
        />
        <InputForm
          label="Valor da hora:"
          id="hour_hate"
          name="hour_hate"
          value={form.hour_hate}
          onChange={(e) => onFormChange(convertValue(e))}
          type="text"
          placeholder="R$ 0,00"
          disabled={isLoading || vehicleTypeLoading}
          autoComplete="off"
          required
        />
        <ButtonForm type="submit" disabled={isLoading || vehicleTypeLoading}>
          {isLoading || vehicleTypeLoading ? loadingButton : "Registrar"}
        </ButtonForm>
      </Style.Form>
    </Style.PageContainer>
  );
}
