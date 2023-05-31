import Cash from "../Cash";
import * as Style from "./style";

export interface CashProps {
  id: number;
  cash_type: "COIN" | "NOTE";
  value: number;
  quantity: number;
  amount: number;
}

export interface CashBalanceProps {
  cashBalance: CashProps[];
}

export default function CashBalance({ cashBalance }: CashBalanceProps) {
  const totalAmount = cashBalance.reduce(
    (total, cash) => total + cash.amount,
    0
  );

  return (
    <Style.Container>
      <Style.Top>
        <Style.CashIcon></Style.CashIcon>
        <Style.Title>Dinheiro em caixa:</Style.Title>
      </Style.Top>
      <Style.Content>
        {cashBalance.map((cash) => {
          return <Cash key={cash.id} {...cash} />;
        })}
      </Style.Content>
      <Style.TotalAmount>
        Total:{" "}
        {(totalAmount / 100).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Style.TotalAmount>
    </Style.Container>
  );
}
