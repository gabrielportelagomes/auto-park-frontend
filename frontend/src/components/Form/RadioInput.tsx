import React from "react";

import * as Style from "./style";

interface RadioOption {
  id: number | string;
  label: string;
}

interface RadioInputProps {
  label: string;
  id: string;
  name: string;
  value?: number | string;
  options: RadioOption[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
}

export default function RadioInput({
  label,
  id,
  name,
  value,
  options,
  onChange,
  disabled,
  required,
}: RadioInputProps) {
  return (
    <Style.Container>
      <Style.Label>{label}</Style.Label>
      {options.map((option) => (
        <Style.RadioContainer key={option.id}>
          <Style.RadioInput
            type="radio"
            id={`${id}_${option.id}`}
            name={name}
            value={option.id}
            checked={option.id === value}
            onChange={onChange}
            disabled={disabled}
            required={required}
          />
          <Style.RadioLabel htmlFor={`${id}_${option.id}`}>
            {option.label}
          </Style.RadioLabel>
        </Style.RadioContainer>
      ))}
    </Style.Container>
  );
}
