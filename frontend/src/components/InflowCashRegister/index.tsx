import { useState } from "react";
import { toast } from "react-toastify";

import * as Style from "./style";
import useSaveChange from "../../hooks/api/useSaveChange";
import { CashChangeModal } from "../CashChangeModal";

interface CashItem {
  id: number;
  cash_type: string;
  value: number;
}

interface SelectedCashItem {
  cash_item_id: number;
  quantity: number;
  amount: number;
  transaction_type: string;
  value: number;
}

interface CashListProps {
  cashItems: CashItem[];
  total_price: number;
}

interface ChangeDetails {
  user_id: number;
  transaction_type: string;
  cash_item_id: number;
  quantity: number;
  amount: number;
  value: number;
}

export default function InflowCashRegister({
  cashItems,
  total_price,
}: CashListProps) {
  const { postChange } = useSaveChange();
  const [selectedItems, setSelectedItems] = useState<SelectedCashItem[]>([]);
  const [alertModalIsOpen, setAlertModalIsOpen] = useState<boolean>(false);
  const [changeDetails, setChangeDetails] = useState<
    ChangeDetails[] | undefined
  >();

  function handleItemChange(checked: boolean, item: CashItem) {
    if (checked) {
      const newItem: SelectedCashItem = {
        cash_item_id: item.id,
        quantity: 1,
        amount: item.value,
        transaction_type: "INFLOW",
        value: item.value,
      };
      setSelectedItems([...selectedItems, newItem]);
    } else {
      const updatedItems = selectedItems.filter(
        (selectedItem) => selectedItem.cash_item_id !== item.id
      );
      setSelectedItems(updatedItems);
    }
  }

  function handleIncrement(id: number) {
    const updatedItems = selectedItems.map((item) => {
      if (item.cash_item_id === id) {
        const quantity = item.quantity + 1;
        const amount = quantity * item.value;
        return { ...item, quantity, amount };
      }
      return item;
    });
    setSelectedItems(updatedItems);
  }

  function handleDecrement(id: number) {
    const updatedItems = selectedItems.map((item) => {
      if (item.cash_item_id === id && item.quantity > 1) {
        const quantity = item.quantity - 1;
        const amount = quantity * item.value;
        return { ...item, quantity, amount };
      }
      return item;
    });
    setSelectedItems(updatedItems);
  }

  const total = selectedItems.reduce((sum, item) => sum + item.amount, 0);

  async function createChange() {
    const updatedItems = selectedItems.map((item) => {
      const { value, ...updatedItem } = item;
      return updatedItem;
    });

    const body = {
      total_price,
      total_paid: total,
      cash_register: updatedItems,
    };

    try {
      const change = await postChange(body);

      setChangeDetails(change);
      setAlertModalIsOpen(true);
      toast.success("Registro realizado com sucesso!");
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível fazer o registro!");
      }
    }
  }

  return (
    <Style.Container>
      <CashChangeModal
        title="Detalhes do troco:"
        change={changeDetails}
        alertModalIsOpen={alertModalIsOpen}
        setAlertModalIsOpen={setAlertModalIsOpen}
      />
      <Style.Title>Notas recebidas:</Style.Title>
      <Style.Content>
        {cashItems.map((item) => {
          const selectedItem = selectedItems.find(
            (selectedItem) => selectedItem.cash_item_id === item.id
          );
          const isSelected = !!selectedItem;
          const quantity = isSelected ? selectedItem!.quantity : 0;

          return (
            <Style.Cash key={item.id}>
              <Style.Label>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => handleItemChange(e.target.checked, item)}
                />
                {(item.value / 100).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Style.Label>
              <Style.Quantity>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </Style.Quantity>
            </Style.Cash>
          );
        })}
      </Style.Content>
      <Style.TotalAmount>
        {(total / 100).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Style.TotalAmount>
      <Style.ButtonContainer>
        <Style.EntryButton onClick={createChange}>Confirmar</Style.EntryButton>
      </Style.ButtonContainer>
    </Style.Container>
  );
}
