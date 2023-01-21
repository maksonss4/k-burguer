import { IButtonProps } from "../../interfaces";
import { ButtonStyled } from "./style";

export function Button({ type, text, click }: IButtonProps) {
  return (
    <ButtonStyled onClick={click} type={type}>
      {text}
    </ButtonStyled>
  );
}
