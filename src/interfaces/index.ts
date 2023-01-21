import { ReactNode } from "react";

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IFood {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantidade: number;
}

export interface IApiData {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IAplicationContext {
  foods: IFood[];
  addCart: (id: number) => void;
  cart: IFood[];
  removeCart: (id: number) => void;
  up: (id: number) => void;
  down: (id: number, qtd: number) => void;
  removeAll: () => void;
  inputPesquisa: (food: string) => void;
  foodsFiltrados: IFood[];
}

export interface IButtonProps {
  type: "button" | "submit";
  text: string;
  click?: () => void;
}

export interface ILiStyledProps {
  timeAnimation: string;
}
