import styled, { css } from "styled-components";
import { ILiStyledProps } from "../../interfaces";

export const UlStyled = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0 0 0.625rem 0.625rem;
  height: max-content;

  @media (min-width: 855px) {
    flex-wrap: wrap;
    overflow: unset;
    gap: 1rem;
    padding: 0;
  }
`;

export const LiStyled = styled.li<ILiStyledProps>`
  display: flex;
  flex-direction: column;
  border: 0.125rem solid var(--gray-3);
  border-radius: 0.313rem;
  margin-right: 0.5rem;
  /* animation: name duration timing-function delay iteration-count direction
    fill-mode; */
  ${({ timeAnimation }) =>
    timeAnimation &&
    css`
      animation: liAnimation ${timeAnimation};
    `}
  /* animation: liAnimation 1s; */
  @keyframes liAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 855px) {
    margin: 0;
    height: max-content;
  }

  figure {
    background-color: var(--gray-4);
  }

  img {
    width: 150px;

    @media (min-width: 855px) {
      width: 217px;
    }
  }

  .description-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.625rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    white-space: nowrap;
    overflow-x: hidden;
    width: 11ch;
    text-overflow: ellipsis;
    color: var(--gray-1);

    @media (min-width: 855px) {
      width: unset;
    }
  }

  span {
    font-size: 0.75rem;
    color: var(--gray-2);
  }

  p {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--green-1);
  }
`;

export const ButtonStyled = styled.button`
  border: 2px solid transparent;
  background-color: var(--green-1);
  color: var(--white);
  border-radius: 0.5rem;
  padding: 0.25rem 0.375rem;
  transition: 0.5s;

  :hover {
    color: var(--green-1);
    background-color: transparent;
    border-color: var(--green-1);
  }
`;
