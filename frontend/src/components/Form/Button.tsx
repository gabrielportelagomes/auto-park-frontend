import { loadingButton } from "../../assets/styles/loading";
import * as Style from "./style";

interface ButtonFormProps {
  type: "button" | "submit" | "reset";
  disabled: boolean;
  children: React.ReactNode;
}

export default function ButtonForm({
  type,
  disabled,
  children,
}: ButtonFormProps) {
  return (
    <Style.ButtonContainer>
      {disabled ? (
        <Style.ButtonStyle disabled={disabled}>
          {loadingButton}
        </Style.ButtonStyle>
      ) : (
        <Style.ButtonStyle type={type} disabled={disabled}>
          {children}
        </Style.ButtonStyle>
      )}
    </Style.ButtonContainer>
  );
}
