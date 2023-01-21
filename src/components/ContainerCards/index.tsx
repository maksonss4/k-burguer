import { ButtonStyled, LiStyled, UlStyled } from "./style";
import { useContext } from "react";
import { aplicationContext } from "../../context";

export function ContainerCards() {
  const { foods, addCart, foodsFiltrados } = useContext(aplicationContext);

  return (
    <UlStyled>
      {foodsFiltrados.length > 0
        ? foodsFiltrados.map(({ category, id, img, name, price }) => {
            return (
              <LiStyled timeAnimation={`0.${2 * id}s`} key={id}>
                <figure>
                  <img src={img} alt={name} />
                </figure>
                <div className="description-card">
                  <h2>{name}</h2>
                  <span>{category}</span>
                  <p>
                    {price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <ButtonStyled onClick={() => addCart(id)}>
                    Adicionar
                  </ButtonStyled>
                </div>
              </LiStyled>
            );
          })
        : foods.map(({ category, id, img, name, price }) => {
            return (
              <LiStyled timeAnimation={`${id * 500}ms`} key={id}>
                <figure>
                  <img src={img} alt={name} />
                </figure>
                <div className="description-card">
                  <h2>{name}</h2>
                  <span>{category}</span>
                  <p>
                    {price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <ButtonStyled onClick={() => addCart(id)}>
                    Adicionar
                  </ButtonStyled>
                </div>
              </LiStyled>
            );
          })}
    </UlStyled>
  );
}
