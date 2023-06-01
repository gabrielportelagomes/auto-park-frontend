import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import * as Style from "./style";
import "./style.css";

Modal.setAppElement("#root");

interface ChangeDetails {
  user_id: number;
  transaction_type: string;
  cash_item_id: number;
  quantity: number;
  amount: number;
  value: number;
}

export interface CashChangeModalProps {
  title: string;
  change: ChangeDetails[] | undefined;
  alertModalIsOpen: boolean;
  setAlertModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CashChangeModal({
  title,
  change,
  alertModalIsOpen,
  setAlertModalIsOpen,
}: CashChangeModalProps) {
  const navigate = useNavigate();

  function closeModal() {
    setAlertModalIsOpen(false);
    navigate("/inicio");
  }

  const totalAmount = change?.reduce((total, cash) => total + cash.amount, 0);

  return (
    <div>
      <Modal
        isOpen={alertModalIsOpen}
        onRequestClose={closeModal}
        className="AlertModal"
      >
        <Style.Close onClick={closeModal}>X</Style.Close>
        <Style.Title>{title}</Style.Title>
        {change?.length === 0 ? (
          <Style.Details>Nenhum troco para ser repassado!</Style.Details>
        ) : (
          <Style.Content>
            {change?.map((cash) => {
              return (
                <Style.Change key={cash.value}>
                  <Style.Details>
                    {(cash.value / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Style.Details>
                  <Style.Details>quant.: {cash.quantity},00</Style.Details>
                  <Style.Details>
                    total:{" "}
                    {(cash.amount / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Style.Details>
                </Style.Change>
              );
            })}
            <Style.Total>
              Total:{" "}
              {totalAmount
                ? (totalAmount / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "Valor indisponível"}
            </Style.Total>
          </Style.Content>
        )}
      </Modal>
    </div>
  );
}
