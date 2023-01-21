import styled from "styled-components";

export const ContainerLandingPage = styled.div`
  .burguer-header {
    text-align: center;
    width: 80px;
    height: 65px;
    border-top: 20px solid var(--green-1);
    border-bottom: 15px solid var(--green-1);
    border-radius: 15px;
    color: var(--green-1);
    position: relative;

    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .p1 {
      position: absolute;
      top: -2.5px;
      font-size: 15px;
      font-weight: 900;
    }

    .p2 {
      position: absolute;
      bottom: -6px;
      left: 0;
      font-weight: 400;
      font-size: 18.5px;
    }

    span {
      font-family: "Alfa Slab One", cursive;
    }
  }
`;

export const HeaderLandingPage = styled.header``;

export const MainLandingPage = styled.main``;

export const DivLeft = styled.div``;

export const DivRight = styled.div`
  background-color: var(--green-1);
`;
