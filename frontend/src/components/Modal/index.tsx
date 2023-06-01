import Modal from "react-modal";

import * as Style from "./style";
import "./style.css";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

export interface ModalProps {
  title: string;
  content: number;
  close: string;
  confirm: string;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalComponent({
  title,
  content,
  close,
  confirm,
  modalIsOpen,
  setIsOpen,
}: ModalProps) {
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function checkOut() {
    navigate(`/registrar-saida/${content}`);
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal">
        <Style.Title>{title}</Style.Title>

        <Style.ButtonContainer>
          <Style.Close onClick={closeModal}>{close}</Style.Close>
          <Style.Comfirm onClick={checkOut}>{confirm}</Style.Comfirm>
        </Style.ButtonContainer>
      </Modal>
    </div>
  );
}
