import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import * as Style from "./style";
import useRegistersByDate from "../../hooks/api/useRegistersByDate";
import VehicleRegisters from "../../components/VehicleRegisters";

export default function RegistersByDate() {
  const navigate = useNavigate();
  const { getRegistersByDate, registersByDate } = useRegistersByDate();
  const { date } = useParams();

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
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        navigate("/*");
      } else {
        toast.error("Não foi possível recuperar os registros!");
        navigate("/inicio");
      }
    }
  }

  if (!registersByDate) {
    return <LoadingPage />;
  }

  return (
    <Style.PageContainer>
      <Header />
      <VehicleRegisters registersByDate={registersByDate} date={true} />
    </Style.PageContainer>
  );
}
