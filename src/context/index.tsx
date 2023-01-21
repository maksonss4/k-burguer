import { createContext, useEffect, useState } from "react";
import {
  IAplicationContext,
  IContextProviderProps,
  IFood,
  IApiData,
} from "../interfaces";
import { api } from "../services/api";

export const aplicationContext = createContext({} as IAplicationContext);

export function ContextProvider({ children }: IContextProviderProps) {
  const [foods, setFoods] = useState([] as IFood[]);
  const [cart, setCart] = useState([] as IFood[]);
  const [foodsFiltrados, setFoodsFiltrados] = useState([] as IFood[]);

  useEffect(() => {
    api.get<IApiData[]>("").then((res) => {
      const newFoods = res.data.map((food) => {
        return { ...food, quantidade: 1 };
      });
      setFoods(newFoods);
    });
  }, []);

  function addCart(id: number) {
    const item = [...foods].filter((food) => food.id === id);
    const verificacao = [...cart].some((car) => car.id === item[0].id);

    if (verificacao) {
      const a = [...cart].map((elem) => {
        if (elem.id !== id) {
          return elem;
        } else {
          elem.quantidade++;
          return elem;
        }
      });
      setCart(a);
    } else {
      setCart([...cart, item[0]]);
    }
  }

  function removeCart(id: number) {
    const a = [...cart].map((elem) => {
      if (elem.id !== id) {
        return elem;
      } else {
        elem.quantidade = 1;
        return elem;
      }
    });
    const newCart = [...cart].filter((ele) => ele.id !== id);
    setCart(a);
    setCart(newCart);
  }

  function up(id: number) {
    const newCart = [...cart].map((ele) => {
      if (ele.id === id) {
        ele.quantidade++;
        return ele;
      } else {
        return ele;
      }
    });
    setCart(newCart);
  }

  function down(id: number, qtd: number) {
    if (qtd < 2) {
      removeCart(id);
    } else {
      const newCart = [...cart].map((ele) => {
        if (ele.id === id) {
          ele.quantidade--;
          return ele;
        } else {
          return ele;
        }
      });
      setCart(newCart);
    }
  }

  function removeAll() {
    const a = [...cart].map((elem) => {
      elem.quantidade = 1;
      return elem;
    });
    setCart(a);
    setCart([]);
  }

  function inputPesquisa(food: string) {
    const filtrados = foods.filter((ele) =>
      ele.name.toLocaleLowerCase().includes(food.toLocaleLowerCase())
    );
    setFoodsFiltrados(filtrados);
    console.log(filtrados);
  }

  return (
    <aplicationContext.Provider
      value={{
        foods,
        addCart,
        cart,
        removeCart,
        up,
        down,
        removeAll,
        inputPesquisa,
        foodsFiltrados,
      }}
    >
      {children}
    </aplicationContext.Provider>
  );
}
