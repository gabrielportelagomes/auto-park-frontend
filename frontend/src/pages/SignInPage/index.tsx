import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import * as Style from "./style";
import InputForm from "../../components/Form/Input";
import ButtonForm from "../../components/Form/Button";
import { handleForm } from "../../utils/handleFormUtils";
import { loadingButton } from "../../assets/styles/loading";
import useSignIn from "../../hooks/api/useSinIn";
import UserContext from "../../contexts/UserContext";

interface FormData {
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signInLoading, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleForm<FormData>(event, form, setForm);
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        email: form.email,
        password: form.password,
      };

      const user = await signIn(body);
      setUserData(user.token);
      setIsLoading(false);
      toast.success("Login realizado com sucesso!");
      navigate("/inicio");
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível fazer o login!");
      }

      setIsLoading(false);
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
            disabled={isLoading || signInLoading}
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
            disabled={isLoading || signInLoading}
            autoComplete="off"
            required
          />
          <ButtonForm type="submit" disabled={isLoading || signInLoading}>
            {isLoading || signInLoading ? loadingButton : "Entrar"}
          </ButtonForm>
        </Style.Form>
        <Style.Link>
          {isLoading || signInLoading ? (
            <p>Não posui cadastro? Clique aqui!</p>
          ) : (
            <Link to={"/cadastro"}>
              <p>Não posui cadastro? Clique aqui!</p>
            </Link>
          )}
        </Style.Link>
      </Style.FormContainer>
    </Style.PageContainer>
  );
}
