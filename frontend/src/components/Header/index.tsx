import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Style from "./style";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [hamburguerMenuOpen, setHamburguerMenuOpen] = useState(false);

  function closeMenu() {
    setHamburguerMenuOpen(false);
  }

  function logOut() {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/");
  }

  return (
    <Style.HeaderContainer>
      <Style.Logo onClick={() => navigate("/inicio")}>AutoPark</Style.Logo>
      <Style.HamburguerMenu
        onClick={() => setHamburguerMenuOpen(!hamburguerMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </Style.HamburguerMenu>
      {hamburguerMenuOpen && (
        <Style.Menu>
          <Style.MenuItem onClick={() => navigate("/caixa/item")}>
            Caixa - registrar moeda
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/caixa/entrada")}>
            Caixa - registrar entrada
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/caixa/saida")}>
            Caixa - registrar saída
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/veiculo/tipo")}>
            Veículos - registrar tipo
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/registrar-entrada")}>
            Veículos - registrar entrada
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/registros/hoje")}>
            Veículos - registros do dia
          </Style.MenuItem>
          <Style.MenuItem onClick={() => navigate("/registros-historico")}>
            Veículos - histórico
          </Style.MenuItem>
          <Style.MenuItem onClick={logOut}>Sair</Style.MenuItem>
        </Style.Menu>
      )}
      <Style.OverlayMenu
        onClick={closeMenu}
        menuOpen={hamburguerMenuOpen}
      ></Style.OverlayMenu>
    </Style.HeaderContainer>
  );
}
