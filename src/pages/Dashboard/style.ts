import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 855px) {
    align-items: center;
  }
`;

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1120px;

  @media (min-width: 855px) {
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
  }
`;
