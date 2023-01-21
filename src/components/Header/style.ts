import styled from "styled-components";

export const DivContainer = styled.div`
  padding: 0.625rem;
  width: 100%;
  background-color: var(--gray-4);
  box-shadow: 0px 8px 9px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;

  figure {
    animation: headerAnimation 1s;
    @keyframes headerAnimation {
      0% {
        transform: translateY(-9vh);
      }
      20% {
        transform: translateY(2.5vh);
      }
      60% {
        transform: translateY(-1.5vh);
      }
      100% {
        transform: translateY(0vh);
      }
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 430px) {
    position: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  form {
    position: relative;
    width: 100%;
    max-width: 23rem;
    display: flex;
  }

  input {
    width: 100%;
    padding: 0.5rem 0.313rem;
    border: 2px solid var(--gray-3);
    border-radius: 0.5rem;
  }

  button {
    position: absolute;
    top: 6px;
    right: 6px;
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    color: var(--gray-1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.188rem;
    padding: 2px;
    border: 1px solid var(--gray-1);
    border-radius: 0.5rem;
    transition: 0.5s;
    font-weight: 600;

    :hover {
      color: var(--red);
    }

    @media (min-width: 430px) {
      position: unset;
    }
  }
`;
