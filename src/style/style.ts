import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: unset;
    font-weight: unset;
    font-family: 'Inter', sans-serif;

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--green-1) transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray-3);
    border-radius: 10px;
    
  }
}

button{
    cursor: pointer;
}

:root{
    --green-1: #27AE60;
    --green-2: #93D7AF;
    --gray-1: #333333;
    --gray-2:#828282;
    --gray-3:#E0E0E0;
    --gray-4:#F5F5F5;
    --gray-5: #BDBDBD;
    --white: #FFFFFF;
    --red: #EB5757;
}
`;
