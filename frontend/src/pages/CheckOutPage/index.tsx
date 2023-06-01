import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import * as Style from "./style";
import InflowCashRegister from "../../components/InflowCashRegister";
import useCashBalance from "../../hooks/api/useCashBalance";
import LoadingPage from "../../components/LoadingPage";
import useUpdateVehicleRegister from "../../hooks/api/useUpdateVehicleRegister";

export interface Register {
  id: number;
  vehicle_type_id: number;
  plate_number: string;
  entry_time: string;
  exit_time: string;
  paid_amount: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export default function CheckOutPage() {
  const navigate = useNavigate();
  const { cashBalance } = useCashBalance();
  const { patchVehicleRegister, updateVehicleRegister } =
    useUpdateVehicleRegister();
  const { id } = useParams();

  useEffect(() => {
    const idNumber = Number(id);
    newVehicleRegister(idNumber);
  }, []);

  async function newVehicleRegister(id: number) {
    try {
      await patchVehicleRegister(id);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        navigate("/inicio");
      } else {
        toast.error("Não foi possível atualizar o registro!");
        navigate("/inicio");
      }
    }
  }

  if (!cashBalance || !updateVehicleRegister) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      <Style.Content>
        <Style.Title>Valor a pagar:</Style.Title>
        <Style.TotalAmount>
          {(updateVehicleRegister.paid_amount / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Style.TotalAmount>
      </Style.Content>
      <InflowCashRegister
        cashItems={cashBalance}
        total_price={updateVehicleRegister.paid_amount}
      />
    </Style.PageContainer>
  );
}
