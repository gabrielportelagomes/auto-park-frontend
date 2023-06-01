import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import * as Style from "./style";
import useRegistersByDate from "../../hooks/api/useRegistersByDate";
import VehicleRegisters from "../../components/VehicleRegisters";

export default function RegistersByDatePage() {
  const { getRegistersByDate, registersByDate } = useRegistersByDate();
  const { date } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (date === "hoje") {
      const newDate = new Date();
      const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
      getRegisters(formattedDate);
    } else if (date) {
      getRegisters(date);
    }
  }, []);

  async function getRegisters(date: string) {
    try {
      await getRegistersByDate(date);
      setLoading(false);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível recuperar os registros!");
      }
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      {registersByDate ? (
        <VehicleRegisters registersByDate={registersByDate} date={true} />
      ) : (
        <Style.Container>
          <Style.EmptyTitle>Nenhum registro foi encontrado</Style.EmptyTitle>
        </Style.Container>
      )}
    </Style.PageContainer>
  );
}
