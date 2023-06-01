import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import * as Style from "./style";
import useSaveCashRegister from "../../hooks/api/useSaveCashRegister";

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
  transaction_type: string;
}

export default function CashHandling({
  cashItems,
  transaction_type,
}: CashListProps) {
  const navigate = useNavigate();
  const { postCashRegister } = useSaveCashRegister();
  const [selectedItems, setSelectedItems] = useState<SelectedCashItem[]>([]);

  function handleItemChange(checked: boolean, item: CashItem) {
    if (checked) {
      const newItem: SelectedCashItem = {
        cash_item_id: item.id,
        quantity: 1,
        amount: item.value,
        transaction_type,
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

  async function createCashRegister() {
    const updatedItems = selectedItems.map((item) => {
      const { value, ...updatedItem } = item;
      return updatedItem;
    });

    try {
      await postCashRegister(updatedItems);

      toast.success("Registro realizado com sucesso!");
      navigate("/inicio");
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
      <Style.Title>
        {transaction_type === "INFLOW"
          ? "Registrar entrada:"
          : "Registrar saída:"}
      </Style.Title>
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
        <Style.EntryButton onClick={createCashRegister}>
          Confirmar
        </Style.EntryButton>
      </Style.ButtonContainer>
    </Style.Container>
  );
}
