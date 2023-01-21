import { DivContainer, HeaderContainer } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { aplicationContext } from "../../context";

export function Header() {
  const { inputPesquisa } = useContext(aplicationContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <DivContainer>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <form>
          <input
            onChange={(e) => inputPesquisa(e.target.value)}
            type="text"
            placeholder="Digitar pesquisa"
          />
          <Button
            type="button"
            click={() => inputPesquisa(inputValue)}
            text="Pesquisar"
          />
        </form>
        <Link to="/landingpage">
          Sair
          <FiLogOut />
        </Link>
      </HeaderContainer>
    </DivContainer>
  );
}
