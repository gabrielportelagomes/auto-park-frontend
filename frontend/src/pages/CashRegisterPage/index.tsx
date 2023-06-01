import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CashHandling from "../../components/CashHandling";
import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import useCashBalance from "../../hooks/api/useCashBalance";
import * as Style from "./style";

export default function CashRegisterPage() {
  const navigate = useNavigate();
  const { cashBalance } = useCashBalance();
  const { type } = useParams();
  const [transactionType, setTransactionType] = useState("");

  useEffect(() => {
    if (type === "entrada") {
      setTransactionType("INFLOW");
    } else if (type === "saida") {
      setTransactionType("OUTFLOW");
    } else {
      navigate("/*");
    }
  }, []);

  if (!cashBalance) {
    return <LoadingPage />;
  }
  return (
    <Style.PageContainer>
      <Header />

      <CashHandling
        cashItems={cashBalance}
        transaction_type={transactionType}
      />
    </Style.PageContainer>
  );
}
