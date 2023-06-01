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
import useSaveCashItem from "../../hooks/api/useSaveCashItem";

interface FormData {
  value: string;
  cash_type?: string;
}

export default function CashItemPage() {
  const navigate = useNavigate();
  const { cashItemLoading, postCashItem } = useSaveCashItem();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    value: "",
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
        ...form,
        value: parseInt(form.value.replace(/[^\d]+/g, "")),
      };
    
      await postCashItem(body);
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
          label="Valor:"
          id="value"
          name="value"
          value={form.value}
          onChange={(e) => onFormChange(convertValue(e))}
          type="text"
          placeholder="R$ 0,00"
          disabled={isLoading || cashItemLoading}
          minLength={7}
          autoComplete="off"
          required
        />
        <RadioInput
          label="Tipo:"
          id="cash_type"
          name="cash_type"
          value={form.cash_type}
          onChange={onFormChange}
          options={[
            { id: "COIN", label: "moeda" },
            { id: "NOTE", label: "nota" },
          ]}
          disabled={isLoading || cashItemLoading}
          required
        />
        <ButtonForm type="submit" disabled={isLoading || cashItemLoading}>
          {isLoading || cashItemLoading ? loadingButton : "Registrar"}
        </ButtonForm>
      </Style.Form>
    </Style.PageContainer>
  );
}
