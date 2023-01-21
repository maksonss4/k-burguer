import { CartContainer, SvgAdd, SvgRemove } from "./style";
import { useContext } from "react";
import { aplicationContext } from "../../context";
import { FaTrash } from "react-icons/fa";

export function Cart() {
  const { cart, removeCart, up, down, removeAll } =
    useContext(aplicationContext);

  return (
    <CartContainer>
      <h2>Carrinho de compras</h2>

      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map(({ name, id, category, img, quantidade, price }) => {
              return (
                quantidade > 0 && (
                  <li key={id}>
                    <figure>
                      <img src={img} alt={name} />
                    </figure>
                    <div className="description-item-cart">
                      <h3>{name}</h3>
                      <span>{category}</span>
                      <p>
                        {(price * quantidade).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <button className="trash" onClick={() => removeCart(id)}>
                      <FaTrash />
                    </button>
                    <div className="div-add-qtd-rem">
                      <button onClick={() => down(id, quantidade)}>
                        <SvgRemove size={17} />
                      </button>
                      <p>{quantidade}</p>
                      <button onClick={() => up(id)}>
                        <SvgAdd size={17} />
                      </button>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
          <div className="preco-total">
            <div>
              <p>Total</p>
              <span>
                {cart
                  .reduce((acc, next) => {
                    return acc + next.price * next.quantidade;
                  }, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </span>
            </div>
            <button onClick={removeAll}>Remover todos</button>
          </div>
        </>
      ) : (
        <div className="div-cart-zero">
          <p>Seu carrinho está vazio</p>
          <span>Adicione itens</span>
        </div>
      )}
    </CartContainer>
  );
}
