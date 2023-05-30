import * as Style from "./style";

interface InputFormProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  minLength?: number;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}

export default function InputForm({
  label,
  id,
  name,
  value,
  onChange,
  type,
  placeholder,
  minLength,
  disabled,
  required,
  autoComplete,
}: InputFormProps) {
  return (
    <Style.InputContainer>
      <Style.LabelStyle htmlFor={id}>{label}</Style.LabelStyle>
      <Style.InputStyle
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
      />
    </Style.InputContainer>
  );
}
