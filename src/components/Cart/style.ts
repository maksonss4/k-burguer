import styled from "styled-components";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";

export const CartContainer = styled.div`
  padding: 0 0.625rem 1rem 0.625rem;
  max-width: 420px;

  @media (min-width: 436px) {
    margin: 0 auto;
  }

  @media (min-width: 855px) {
    padding: 0;
    max-width: unset;
    min-width: 340px;
    margin: 0;
  }

  h2 {
    color: var(--white);
    background-color: var(--green-1);
    font-weight: 700;
    font-size: 18px;
    padding: 1.125rem;
    border-radius: 0.313rem 0.313rem 0 0;
  }

  ul {
    background-color: var(--gray-4);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px;
    width: 100%;
    overflow-y: scroll;
    height: 180px;

    @media (min-width: 436px) {
      width: 400px;
    }

    @media (min-width: 855px) {
      width: 100%;
    }
  }

  li {
    display: flex;
    position: relative;
    gap: 1rem;
    animation: liCartAnimation 0.5s;

    @keyframes liCartAnimation {
      0% {
        transform: translateX(-200px);
      }
      90% {
        transform: translateX(50px);
      }
    }

    figure {
      background-color: var(--gray-3);
      border-radius: 0.313rem;
    }

    img {
      width: 50px;
    }

    .description-item-cart {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        color: var(--green-1);
        font-weight: bold;
      }
    }

    h3 {
      font-weight: 700;
      font-size: 18px;
      color: var(--gray-1);
      white-space: nowrap;
      max-width: 9ch;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (min-width: 320px) {
        max-width: 12ch;
      }

      @media (min-width: 353px) {
        max-width: 15ch;
      }

      @media (min-width: 375px) {
        max-width: unset;
      }
    }

    span {
      color: var(--gray-2);
      font-size: 0.75rem;
    }

    .trash {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      border: 0;
      background-color: transparent;
      color: var(--gray-5);
    }

    .div-add-qtd-rem {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      gap: 0.3rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background-color: transparent;
        border-radius: 50%;
      }

      p {
        font-weight: bold;
        color: var(--gray-2);
      }
    }
  }

  .div-cart-zero {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--gray-4);
    border-radius: 0 0 0.313rem 0.313rem;
    height: 180px;

    @media (min-width: 436px) {
      width: 400px;
    }

    @media (min-width: 855px) {
      width: 100%;
    }

    p {
      font-weight: 700;
      font-size: 18px;
      color: var(--gray-1);
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: var(--gray-2);
    }
  }

  .preco-total {
    background-color: var(--gray-4);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-top: 2px solid var(--gray-3);
      padding-top: 10px;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: var(--gray-1);
    }

    span {
      font-weight: 600;
      font-size: 14px;
      color: var(--gray-2);
    }

    button {
      border: 0;
      border-radius: 5px;
      background-color: var(--gray-3);
      color: var(--gray-2);
      padding: 7px 0;
    }
  }
`;

export const SvgAdd = styled(MdOutlineAddCircle)`
  border-radius: 50%;
  color: var(--green-2);
  background-color: transparent;
`;

export const SvgRemove = styled(IoIosRemoveCircle)`
  border-radius: 50%;
  color: var(--red);
  background-color: transparent;
`;
