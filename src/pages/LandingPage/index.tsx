import { ContainerLandingPage, HeaderLandingPage } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export function LandingPage() {
  return (
    <ContainerLandingPage>
      <HeaderLandingPage>
        <div className="burguer-header">
          <p className="p1">
            <span>B</span>
            <span>U</span>
            <span>R</span>
            <span>G</span>
            <span>E</span>
            <span>R</span>
          </p>
          <p className="p2">
            <span>K</span>
            <span>E</span>
            <span>N</span>
            <span>Z</span>
            <span>I</span>
            <span>E</span>
          </p>
        </div>
      </HeaderLandingPage>
      {/* <Link to={"/dashboard"}>go to dashboard</Link> */}
    </ContainerLandingPage>
  );
}
