import { CashProps } from "../CashBalance";
import * as Style from "./style";

export default function Cash(cash: CashProps) {
  return (
    <Style.Container disabled={cash.quantity === 0}>
      <Style.Value>
        {(cash.value / 100).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Style.Value>
      <Style.Quantity>
        <p>quant.:</p> <p>{cash.quantity},00</p>
      </Style.Quantity>
      <Style.Total>
        <p>total:</p>
        <p>
          {((cash.quantity * cash.value) / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Style.Total>
    </Style.Container>
  );
}
