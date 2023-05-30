import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import * as Style from "./style";
import InputForm from "../../components/Form/Input";
import ButtonForm from "../../components/Form/Button";
import { handleForm } from "../../utils/handleFormUtils";
import { loadingButton } from "../../assets/styles/loading";
import useSignUp from "../../hooks/api/useSignUp";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUpLoading, signUp } = useSignUp();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&_*]*$/;

    if (!passwordPattern.test(form.password)) {
      toast.error("A senha não atende os requisitos de segurança!");
      setIsLoading(false);
      return;
    }

    if (form.password === form.confirmPassword) {
      try {
        const body = {
          email: form.email,
          password: form.password,
        };

        await signUp(body);
        setIsLoading(false);
        toast.success("Inscrito com sucesso! Por favor, faça o login.");
        navigate("/");
      } catch (error: any) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível fazer o cadastro!");
        }

        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      toast.error("As senhas devem ser iguais!");
    }
  }

  return (
    <Style.PageContainer>
      <Logo />
      <Style.FormContainer>
        <Style.Form onSubmit={submit}>
          <InputForm
            label="E-mail"
            id="email"
            name="email"
            value={form.email}
            onChange={onFormChange}
            type="email"
            placeholder="exemplo@email.com"
            disabled={isLoading || signUpLoading}
            autoComplete="off"
            required
          />
          <InputForm
            label="Senha"
            id="password"
            name="password"
            value={form.password}
            onChange={onFormChange}
            type="password"
            placeholder="Digite a senha"
            disabled={isLoading || signUpLoading}
            minLength={8}
            autoComplete="off"
            required
          />
          <Style.Note>
            <Style.InfoIcon /> A senha deve ter 8 caracteres, conter pelo menos
            uma letra maiúscula, uma minúscula e um número.
          </Style.Note>
          <InputForm
            label="Confirmar senha"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onFormChange}
            type="password"
            placeholder="Digite a senha novamente"
            disabled={isLoading || signUpLoading}
            minLength={8}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={isLoading || signUpLoading}>
            {isLoading || signUpLoading ? loadingButton : "Cadastrar"}
          </ButtonForm>
        </Style.Form>
        <Style.Link>
          {isLoading || signUpLoading ? (
            <p>Já posui cadastro? Faça o login!</p>
          ) : (
            <Link to={"/"}>
              <p>Já posui cadastro? Faça o login!</p>
            </Link>
          )}
        </Style.Link>
      </Style.FormContainer>
    </Style.PageContainer>
  );
}
