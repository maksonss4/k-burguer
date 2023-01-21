import { ContainerDashboard, MainStyled } from "./style";
import { Header } from "../../components/Header";
import { ContainerCards } from "../../components/ContainerCards";
import { Cart } from "../../components/Cart";

export function Dashboard() {
  return (
    <ContainerDashboard>
      <Header />
      <MainStyled>
        <ContainerCards />
        <Cart />
      </MainStyled>
    </ContainerDashboard>
  );
}
