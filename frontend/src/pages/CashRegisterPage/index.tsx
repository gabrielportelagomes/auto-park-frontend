import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CashHandling from "../../components/CashHandling";
import Header from "../../components/Header";
import LoadingPage from "../../components/LoadingPage";
import useCashBalance from "../../hooks/api/useCashBalance";
import * as Style from "./style";

export default function CashRegisterPage() {
  const navigate = useNavigate();
  const { cashBalance, cashBalanceLoading } = useCashBalance();
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

  if (cashBalanceLoading) {
    return <LoadingPage />;
  }
  return (
    <Style.PageContainer>
      <Header />
      {cashBalance ? (
        <CashHandling
          cashItems={cashBalance}
          transaction_type={transactionType}
        />
      ) : (
        <Style.Container>
          <Style.EmptyTitle>
            Você precisa ter ao menos uma moeda/nota registrada
          </Style.EmptyTitle>
        </Style.Container>
      )}
    </Style.PageContainer>
  );
}
